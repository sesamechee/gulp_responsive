var IE9down = false;
var IpadFlag = false;
var MobileFlag = false;
var gEasing = "easeInOutQuint";

function common_init(){

	new responsive();
	detectBroswer();
	menuControl();

	$(window).load(function(){
		hideLoading();
	});

	$(window).on('resize', function(){
		resize();
	});

	$(window).on('responsive',function(){
		resetLayout();
	});

	$(window).on('scroll',function(){
		scroll();
	});

	//form
	$('select').selectric();
	$('.inputBox').each(function(){
		inputBox = new InputHints();
		inputBox.init( $(this) );
	});

	//Inview
	$('body').on('inview', '.inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('play');
		} else {
			//$(this).removeClass('play');
		}
	});

	//Lazyload
	$("img.lazy").lazyload({
		effect: "fadeIn",
		effectTime: 2000,
		threshold: 0
	});

	//Page transition
	$('body').on('click', '[data-type="page-transition"]', function(e) {
		var _this = this;
		e.preventDefault();
		showLoading();
		window.setTimeout(function() {
			window.location = _this.href;
		}, 1200);
	});

}

function detectBroswer(){
	var ua = window.navigator.userAgent.toLowerCase();
	var ver = window.navigator.appVersion.toLowerCase();
	var gHasTouch = 'ontouchstart' in window;

	if( !gHasTouch ) {
		$('body').addClass('noTouch');
	}

	if (ua.indexOf("msie") != -1){
		if (ver.indexOf("msie 6.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 7.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 8.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 9.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 10.") != -1){
			IE9down =false;
		}else{
			IE9down =false;
		}
	}

	if (ua.match(/(iphone)/) || ua.match(/(ipad)/) || ua.match(/(ipod)/) || ua.match(/(android)/) )	{
		MobileFlag = true;
	}

	if (ua.match(/(ipad)/) )	{
		IpadFlag = true;
	}

	if ( IE9down ) {
		jQuery.fx.interval = 1000 / 30;
	} else {
		jQuery.fx.interval = 1000 / 60;
	}

}

function showLoading(){
	$('body').addClass('moving');
	setTimeout(function(){
		$('body').addClass('loading');
	}, 500);
}

function hideLoading(){
	$('body').removeClass('moving');
	$('body').removeClass('loading');
	$('body').addClass('moveend');
	setTimeout(function(){
		$('body').removeClass('moveend');
	}, 500);
}

function dimBgShow(){
	$('.dimBg').stop().fadeIn(300);
}

function dimBgHide(){
	$('.dimBg').stop().fadeOut(300);
}

function menuControl(){
	$('.menuBtn').on('click', function(){
		if( $('body').hasClass('menuOpen') ){
			$('body').removeClass('menuOpen');
			dimBgHide();
		}else{
			$('body').addClass('menuOpen');
			dimBgShow();
			$('.mobile .content').css('min-height',$(window).height());
		}
	});
	$('.dimBg').on('click', function(){
		$('body').removeClass('menuOpen');
		$('.content').attr('style','');
		dimBgHide();
	});

}

function resetLayout(){
	$('body').removeClass('menuOpen');
	$('.dimBg').attr('style','');
	$('.content').attr('style','');
}

function resize(){
	$('.content').css('min-height',$(window).height());
}

function scroll(){
	//BacKTop
	if( $(window).scrollTop() === 0 ){
		$('.btnBackTop').removeClass('active');
	}else{
		$('.btnBackTop').addClass('active');
	}
	if( $(window).scrollTop()+ $(window).height() >= $('.footerWrapper').offset().top ){
		$('.btnBackTop').removeClass('fixed');
	}else{
		$('.btnBackTop').addClass('fixed');
	}
}

function scrollto( target ){
	var _target = ( target === undefined )? 'body' : target ;
	$('html, body').animate({
		scrollTop: $(_target).offset().top
	},800 , gEasing);
}

function popupBox( target , config ) {
	var _settings = {
		items: {
			src: target,
			type: 'inline'
		},
		showCloseBtn : true,
		fixedContentPos : true,
		mainClass: 'mfp-fade',
		removalDelay: 300,
		fixedBgPos : true,
		closeOnBgClick: true,
		closeMarkup : '<button title="%title%" class="mfp-close"></button>',
		callbacks:{
			open: function(){

			},
			close: function(){

			}
		}
	};

	$.extend(_settings, config);
	$.magnificPopup.open(_settings);
}

function alertMsg( msg , config ) {
	$('.alertPopup .popupContent').html(msg);

	popupBox($('.alertPopup'), config);
}

function videoPop( youtubeID , config ) {
	var _settings = {
		callbacks:{
			open: function(){
				$('.videoPopup .videoWrapper').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+ youtubeID +'?rel=0&autoplay=1&wmode=transparent" frameborder="0" allowfullscreen></iframe>');
			},
			close: function(){
				$('.videoPopup .videoWrapper').html('');
			}
		}
	};

	$.extend(_settings, config);
	popupBox($('.videoPopup'), _settings);
}






/******************************** RESPONSIVE *******************************/

var layout;

function responsive() {
	var _self = this;

	_self.layoutSize = [0, 780 , 1200];
	_self.layout = ['mobile', 'tablet' , 'desktop'];

	_self.window = $(window);
	_self.body = $('body');
	_self.current = _self.layout[_self.layout.length - 1];
	if (IE9down) {
		_self.changeClass(_self.layout[1]);
	} else {
		_self.init();
	}
}
responsive.prototype.init = function () {
	var _self = this;

	_self.changeClass(_self.layout[_self.checkSize()]);
	_self.addEvent();
};
responsive.prototype.addEvent = function () {
	var _self = this;

	_self.window.on('resize', function () {
		_self.changeClass(_self.layout[_self.checkSize()]);
	});
};
responsive.prototype.checkSize = function () {
	var _self = this;
	var _layout = 0;
	var _windowWidth = window.innerWidth || $(window).width();

	for (var i = 0; i < _self.layoutSize.length; i++) {
		if (_self.layoutSize[i] > _windowWidth ) {
			break;
		} else {
			_layout = i;
		}
	}
	return _layout;
};
responsive.prototype.changeClass = function (className) {
	var _self = this;

	if (!_self.body.hasClass(className)) {
		for (var i = 0; i < _self.layoutSize.length; i++) {
			_self.body.removeClass(_self.layout[i]);
		}
		_self.body.addClass(className);
		layout = className;
		$(document).trigger('responsive', className);
	}
};





/******************************** INPUT HINTS *******************************/

/**
*
* Copyright 2012, Pixopunch
* http://www.pixopunch.com/
*
* {Class}
* InputHints
* -destroy():void
* -init(pTarget, pParam_obj):void
*
* {Events}
*
*/

InputHints.prototype.mInputHints = null;

function InputHints()
{
}

InputHints.prototype.destroy = function()
{
	this.mInputHints.children(".hints").unbind("click");
	this.mInputHints.children("input, textarea").unbind("focus");
	this.mInputHints.children("input, textarea").unbind("blur");

	this.mInputHints = null;
};

InputHints.prototype.init = function(pTarget, pParam_obj)
{
	var _self = this;

	this.mInputHints = pTarget;

	this.mInputHints.children(".hints").bind("click", function(){_self.doFocusBegin();});
	this.mInputHints.children("input, textarea").bind("focus", function(){_self.focusBegin();});
	this.mInputHints.children("input, textarea").bind("blur", function(){_self.focusEnd();});

	this.mInputHints.children(".hints").css("display", "none");
	this.focusEnd();
};

InputHints.prototype.doFocusBegin = function()
{
	this.mInputHints.children("input, textarea").focus();
	this.focusBegin(this.mInputHints.children("input, textarea"));
};

InputHints.prototype.focusBegin = function()
{
	this.mInputHints.children(".hints").css("display", "none");
};

InputHints.prototype.focusEnd = function()
{
	if (this.mInputHints.children("input, textarea").val() === "")
	{
		this.mInputHints.children(".hints").css("display", "block");
	}
};
