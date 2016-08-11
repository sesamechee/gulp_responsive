$(function(){
	'use strict';
	var $page = $('#wrapper'),
	options = {
		debug: true,
		loadingClass: 'loading',
		onStart: {
			duration: 1000,
			render: function ($container) {
				$container.addClass('moving');
				smoothState.restartCSSAnimations();
			}
		},
		onProgress: {
			duration: 500,
			render: function ($container) {
				$('body').addClass('loading');
			}
		},
		onReady: {
			duration: 1000,
			render: function ($container, $newContent) {
				$container.html($newContent);
				$('body').removeClass('loading');
				setTimeout(function(){
					$container.removeClass('moving');
					$container.addClass('moveend');
				},10);
			}
		},
		onAfter: function($container, $newContent) {
			$container.removeClass('moveend');
			init_fn();
		}
	},
	smoothState = $page.smoothState(options).data('smoothState');
});
