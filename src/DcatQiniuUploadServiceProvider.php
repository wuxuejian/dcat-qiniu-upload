<?php

namespace Wuxuejian;

use Dcat\Admin\Extend\ServiceProvider;
use Dcat\Admin\Admin;
use Dcat\Admin\Form;
use Wuxuejian\Form\Field\File;

class DcatQiniuUploadServiceProvider extends ServiceProvider
{
	protected $js = [
        'js/index.js',
        'js/upload.js'
    ];
	protected $css = [
		'css/index.css',
        'css/upload.css'
	];

	public function register()
	{
		//
	}

	public function init()
	{
		parent::init();

		//
        Form::extend('filePlus', File::class);

	}

	public function settingForm()
	{
		return new Setting($this);
	}
}
