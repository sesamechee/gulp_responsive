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

					<div class="section">
						<div class="inner">
							<h2>Default Slider</h2>
							<div class="slickSlider">
								<div class="sliderItem">
									<a href="https://www.google.com/">
										<img class="img100" src="http://dummyimage.com/800x400/5AB176/fff">
									</a>
								</div>
								<div class="sliderItem">
									<a href="https://www.google.com/">
										<img class="img100" src="http://dummyimage.com/800x400/BD8FAC/fff">
									</a>
								</div>
								<div class="sliderItem">
									<a href="https://www.google.com/">
										<img class="img100" src="http://dummyimage.com/800x400/F8A584/fff">
									</a>
								</div>
								<div class="sliderItem">
									<a href="https://www.google.com/">
										<img class="img100" src="http://dummyimage.com/800x400/5AB176/fff">
									</a>
								</div>
							</div>
						</div>
					</div>

					<?php include "include/footer.php" ?>
					<?php include "include/popup.php" ?>

				</div>

			</div>

		</div>

	</div>

	<!--JS-->
	<?php include "../include/common/include_js.php" ?>

	<script type="text/javascript">
		$(document).ready(init_fn);

		function init_fn() {

			common_init();

			$('.slickSlider').slick({
				responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 780,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 0,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			});

		}
	</script>
</body>

</html>
