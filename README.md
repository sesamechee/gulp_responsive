# Gulp Responsive Template
DEMO HERE: [https://sesamechee.github.io/gulp_responsive](https://sesamechee.github.io/gulp_responsive)

## Features
- 3 Layout responsive ( desktop , tablet , mobile )
- Best view IE9+
- SCSS
- Icon Fonts
- minify images

## Step to use
Step 1: Clone this template set to your project folder

Step 2: Download Node.js in [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Step 3: Download Git in [https://git-scm.com/downloads](https://git-scm.com/downloads)

Step 4: Open CMD Window

Step 5: Install gulp globally -- [http://gulpjs.com/](http://gulpjs.com/)
```
npm install -g gulp-cli
```
Step 6. Install bower globally -- [https://bower.io/](https://bower.io/)
```
npm install -g bower
```
Step 7. Go to your project folder path
```
cd C:\project\client\project-name
```
Step 8. Run below command in every new project. It will generate assigned plugin component to "node_modules" and "bower_components" folder.
**_BUT DO NOT COMMIT ON SVN DUE TO THE LARGE AMOUNT OF FOLDERS_**
```
npm install
bower install
```
Step 9. Run gulp to watch folder.
```
gulp
```
Step 10. DONE!!! When you want to exit the gulp just press Ctrl + C

## Edit JS plugin
Add Plugin
```
bower install --save [yourPluginName]
```
Remove Plugin
```
bower uninstall --save [yourPluginName]
```

## Minify All css and script
```
gulp minify
```

## Bower plugin List
- jquery": "^1.10.2
- jquery.easing": "^1.3.1
- jquery-mousewheel": "^3.1.13
- modernizr": "^2.6.2
- magnific-popup": "^1.1.0
- jScrollPane": "^2.0.23
- jquery-selectric": "^1.9.6
- jquery.inview": "1.1.2
- slick-carousel": "^1.6.0
- jquery_lazyload": "jquery.lazyload#^1.9.7

## NPM plugin List
- autoprefixer": "^6.4.0
- bower": "^1.7.9
- del": "^2.2.1
- gulp": "^3.9.1
- gulp-autoprefixer": "^3.1.0
- gulp-clean-css": "^2.0.12
- gulp-concat": "^2.6.0
- gulp-iconfont": "^8.0.1
- gulp-iconfont-css": "^2.1.0
- gulp-imagemin": "^3.0.2
- gulp-jshint": "^2.0.1
- gulp-postcss": "^6.1.1
- gulp-sass": "^2.3.2
- gulp-uglify": "^2.0.0
- jshint": "^2.9.2
- jshint-stylish": "^2.2.0
- main-bower-files": "^2.13.1

## Common Commard
### Popup Magnific popup box
```
popupBox( $(TARGET), {
	showCloseBtn : true,
	fixedContentPos : true,
	fixedBgPos : true,
	closeOnBgClick: true,
	callbacks:{
		open: function(){

		},
		close: function(){
		
		}
	}
});
```
### Popup Alert Msg
```
alertMsg( 'MSG HERE', config);
```
### Popup Youtube Video
```
videoPop( youtubeID , config );
```
### Inview effect
```
> It will add a class "play" when inview
<div class="invew"></div>
```
### Scroll to target function
```
scrollto('.TARGET');
```

### Slick Slider
```
$('.single-item').slick();
```

[http://kenwheeler.github.io/slick/](http://kenwheeler.github.io/slick/)