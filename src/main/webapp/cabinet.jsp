<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta http-equiv="x-ua-compatible" content="ie=edge" />

<title>Cabinet</title>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

<link rel="stylesheet" href="css/mdb.min.css" />

<style type="text/css">
div.container-fluid {
	border-color: red;
	border-radius: 10px;
	margin: auto;
	height: 250px;
	width: 350px;
	margin: auto;
	text-align: center;
}

.page{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.content{
	hight: 100vh;
	overflow: scroll;
	height: 550px;
	
}



</style>

</head>
<body>


	<div class="page">
		<jsp:include page="header.jsp"></jsp:include>

		<main class="content">
			<div class="container-fluid">
				<div class="row">
					<div id="productCards"></div>
				</div>
			</div>
		</main>

		<jsp:include page="footer.jsp"></jsp:include>
	</div>


 	<script type="text/javascript" src="js/mdb.min.js"></script>


	<script src="js/header.js"></script>
	<script src="js/cabinet.js"></script>
</body>
</html>