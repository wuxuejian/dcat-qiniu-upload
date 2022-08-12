<?php

namespace Wuxuejian\Http\Controllers;

use Dcat\Admin\Layout\Content;
use Dcat\Admin\Admin;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DcatQiniuUploadController extends Controller
{
    public function index(Content $content)
    {
        return $content
            ->title('Title')
            ->description('Description')
            ->body(Admin::view('wuxuejian.dcat-qiniu-upload::index'));
    }

    public function del(Request $request,$disk) {
        $config = config("filesystems.disks.{$disk}");
        $data['key'] = str_replace($config['url'],'', $request->get('key'));
        $storage = Storage::disk($disk);
        $storage->delete($data['key']);
        $data['status'] = true;
        return response()->json($data, 200);
    }
}
