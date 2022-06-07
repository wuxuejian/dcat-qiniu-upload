<?php
namespace Wuxuejian\Form\Field;

use \Dcat\Admin\Form\Field\File as BaseFile;
use Dcat\Admin\Admin;
use Illuminate\Support\Facades\Storage;

class File extends BaseFile
{

    protected $view = 'wuxuejian.dcat-qiniu-upload::file';

    public function __construct($column, $arguments = [])
    {
        parent::__construct($column, $arguments);

        Admin::requireAssets('@wuxuejian.dcat-qiniu-upload');

    }
    public function qiniu(string $disk)
    {
//        Admin::asset()->alias('@webuploader', [
//            'js' => [
//                '@admin/dcat/plugins/webuploader/webuploader.min.js',
//                '/js/upload.js',
//            ],
//            'css' => '@admin/dcat/extra/upload.css',
//        ]);

        //其实仅修改了upload.js 但是dcat-admin 优先加载其自己的js，你若只加载upload.js会被原版覆盖。
        //Admin::css("");
        //Admin::js('@webuploader');
        Admin::script(<<<JS
        function guid() {
            function S4() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            }
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        }
        JS);
        $storage = Storage::disk($disk);
        $config = config("filesystems.disks.{$disk}");
        $up_url = [
            'ECN' => 'https://up.qiniup.com',//华东
            'NCN' => 'https://up-z1.qiniup.com',//华北
            'SCN' => 'https://up-z2.qiniup.com',//华南
            'NA' => 'https://up-na0.qiniup.com',//北美
            'ASG' => 'https://up-as0.qiniup.com'//东南亚
        ];
        /**
         *
         * @var $adapter Overtrue\Flysystem\Qiniu\QiniuAdapter
         */

        $adapter = $storage->getAdapter();
        $token = $adapter->getUploadToken();
        if ($this->useUniqueName) {
            //远程目录处理
            $this->options['useUniqueName'] = true;
        }
        $this->options['upDir'] = trim($this->getDirectory(), '/');

        $this->options['server'] = $up_url[$config['region']];
        $this->options['deleteUrl'] = admin_route("dcat-qiniu-upload-delete",['disk'=>$disk]);
        $this->options['host'] = $up_url[$config['region']];
        $this->options['domain'] = $config['url'];
        $this->options['token'] = $token;
        $this->options['name'] = 'file';
        $this->options['fileVal'] = 'file';
        $this->options['formData']['token'] = $token;
        $this->options['chunkSize'] = @$this->options['chunkSize'] > 4194304 ? $this->options['chunkSize'] : 4194304;
        $this->on('uploadBeforeSend',<<<JS
            function (object, data, headers) {
                // console.log(object,data,headers)

                if (uploader.options.chunked == true && parseInt(object.file.size) > parseInt(uploader.options.chunkSize)){
                    console.log('文件采用分块上传.....')
                    headers['Authorization'] = 'UpToken ' + options.token;
                    headers['Content-Type'] = 'application/octet-stream';
                    object.transport.options.server = options.host + "/mkblk/" + (object.end - object.start);
                    object.transport.options.sendAsBinary = true;
                    object.transport.options.formData = false;
                }else{
                    object.transport.options.formData.key = object.file.key
                    console.log('文件采用表单上传....')
                }

            }
        JS)->on('uploadAccept',<<<JS
            function (block, res) {
               console.log("uploadAccept.............");
               console.log("block.file.name:" + block.file.name);
               console.log(res);
               if (uploader.options.chunked == true && parseInt(block.file.size) > parseInt(uploader.options.chunkSize)){
                   block.file.ctx[block.chunk] = res.ctx
                   console.log(block.file.ctx)
               }

            }
        JS)->on('fileQueued',<<<JS
            function(file) {
                file.domain = uploader.options.domain
                if (options.useUniqueName){
                    //如果后端设置了文件名随机
                    file.key = options.upDir + '/' + guid() +'.'+ file.ext;
                }else{
                    file.key = options.upDir + '/'+ file.name;
                }
                console.log('文件上传到 >',file)
                file.ctx = new Array();
            }
        JS);
        return $this;
    }

}
