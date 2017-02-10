<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-hk">

<head>

	<!--META + CSS-->
	<?php include "../include/common/include_css.php" ?>

	<!--Individual-->
	<!--<link rel="stylesheet" href="../css/index.css" type="text/css" />-->

	<title>Site Title</title>
</head>

<body ontouchstart="" class="loading moving">

	<div class="wrapper">

		<div class="main">
			<?php include "include/header.php" ?>

			<div class="content">

				<div class="innerContent">
					
					<div class="box" style="width:100px; height:100px; background:#f00;"></div>
					
					<img width="300" src="http://www.planwallpaper.com/static/images/autumn-wallpaper-hd.jpg" alt="">

					<?php include "include/footer.php" ?>
					<?php include "include/popup.php" ?>

				</div>

			</div>

		</div>

	</div>

	<!--JS-->
	<?php include "../include/common/include_js.php" ?>

	<script type="text/javascript">
		require(['../js/home'], function(home){
			home.init();
		});
//		$(document).ready(init_fn);
//
//		function init_fn() {
//
//			common_init();
//
//		}
	</script>
</body>

</html>
