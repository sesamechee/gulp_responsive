requirejs.config({
	baseUrl: "../js",
	waitSeconds: 200,
	paths: {
		jquery: 		"lib/jquery",
		jqMigrate: 		"lib/jquery-migrate",
		easing:			"lib/jquery.easing",
		jscrollpane:	"lib/jquery.jscrollpane.min",
		mousewheel:		"lib/jquery.mousewheel",
		lazyload:		"lib/jquery.lazyload",
		magnificPopup:	"lib/jquery.magnific-popup",
		selectric:		"lib/jquery.selectric",
		slick:			"lib/slick",
		domReady:		"requirejs/plugin/domReady",
		tweenmax:		"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/TweenMax.min",
		timelinemax:	"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/TimelineMax.min"
	},
	shim: {
		jqMigrate: ["jquery"],
		easing: ["jquery"],
		jscrollpane: ["jquery", "mousewheel"],
		lazyload: ["jquery"],
		magnificPopup: ["jquery"],
		selectric: ["jquery"],
		slick: ["jquery"],
		tweenmax: {
			exports: "TweenMax"
		},
		timelinemax: {
			deps: ["tweenmax"],
			exports: "TimelineMax"
		}
	}
});