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

		}
	</script>
</body>

</html>
