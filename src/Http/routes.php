<?php

use Wuxuejian\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::get('dcat-qiniu-upload', Controllers\DcatQiniuUploadController::class.'@index');
Route::post('dcat-qiniu-upload/delete/{disk}',Controllers\DcatQiniuUploadController::class.'@del')->name('dcat-qiniu-upload-delete');
