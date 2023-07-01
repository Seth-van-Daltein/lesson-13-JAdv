$("a.createProduct").click(function() {
	var name = $("form.createProduct input.productName").val();
	var description = $("form.createProduct input.productDescription").val();
	var price = $("form.createProduct input.productPrice").val();

	if (name == '' || description == '' || price == '') {
		alert("Please fill creatingProduct form!");
	} else {

		var product = {
			name: name,
			description: description,
			price: price
		};
		$.post("product", product,
			function(data) {
				if (data == 'Success') {
					alert('You have created a new product in a hurry');
				}
			});
	}
});


$("button.buy-product").click(function() {
	var productId = jQuery(this).attr("product-id");


	$.post("bucket", { 'productId': productId },
		function(data) {
			if (data == 'Success') {
				$("[data-dismiss=modal]").trigger({ type: "click"});
				alert('You have successfully added the product to the bucket');
			}
		});
});