# Dcat Admin Extension

### Dcat表单组件file的升级版 ，支持直传文件到七牛

在filesystem里面增加配置storage
```php
'qiniu_d' => [
            'driver'     => 'qiniu',
            'access_key' => env('QINIU_ACCESS_KEY', ''),
            'secret_key' => env('QINIU_SECRET_KEY', ''),
            'bucket'     => env('QINIU_BUCKET', ''),
            'domain'     => env('QINIU_DOMAIN', ''), // or host: https://xxxx.clouddn.com
            //ECN华东 NCN华北 SCN华南 NA北美 ASG东南亚
            'region'    => env('QINIU_REGION', 'ECN'),  //地区
            'notify_url'=> '',  //持久化处理回调地址
            'url'       => env('QINIU_DOMAIN', ''),  // 填写文件访问根url
        ],
```
useage
```php

$form->filePlus('column', '视频')->qiniu('qiniu_d');
```
