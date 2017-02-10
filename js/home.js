// global var
var data = 'aaa';

define(["main.min", "test"], function(main, test){
	return {
		init: function(){
			require(["magnificPopup"], function(magnificPopup){
				data = 'bbb';
				console.log(test.getValue());

				$(document).ready(function () {
					console.log('home function here!!!');
				});

				require(["domReady!"], function() {
					TweenMax.to('.box', 1, {x:100});

		//			var tl = new TimelineMax();
		//			tl.to(".box", 1, {x:100, ease: Power3.easeOut});
		//			tl.to(".box", 1, {y:100, ease: Power3.easeOut}, "-=0.3");
		//			tl.to(".box", 1, {x:200, ease: Power3.easeOut}, "-=0.3");
					
//					popupBox('.tncPopup');
				});
			});
		}
	}
});