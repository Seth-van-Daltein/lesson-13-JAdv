
(function($) {
	"use strict";


	/*==================================================================
	[ Focus input ]*/
	$('.input100').each(function() {
		$(this).on('blur', function() {
			if ($(this).val().trim() != "") {
				$(this).addClass('has-val');
			}
			else {
				$(this).removeClass('has-val');
			}
		})
	})


	/*==================================================================
	[ Validate ]*/
	var input = $('.validate-input .input100');

	$('.validate-form').on('submit', function() {
		var check = true;

		for (var i = 0; i < input.length; i++) {
			if (validate(input[i]) == false) {
				showValidate(input[i]);
				check = false;
			}
		}

		return check;
	});


	$('.validate-form .input100').each(function() {
		$(this).focus(function() {
			hideValidate(this);
		});
	});

	function validate(input) {
		if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
			if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
				return false;
			}
		}
		else {
			if ($(input).val().trim() == '') {
				return false;
			}
		}
	}

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).removeClass('alert-validate');
	}

	/*==================================================================
	[ Show pass ]*/
	var showPass = 0;
	$('.btn-show-pass').on('click', function() {
		if (showPass == 0) {
			$(this).next('input').attr('type', 'text');
			$(this).find('i').removeClass('zmdi-eye');
			$(this).find('i').addClass('zmdi-eye-off');
			showPass = 1;
		}
		else {
			$(this).next('input').attr('type', 'password');
			$(this).find('i').addClass('zmdi-eye');
			$(this).find('i').removeClass('zmdi-eye-off');
			showPass = 0;
		}

	});


})(jQuery);



$("button.register").click(function() {
	var firstName = $("form.register_form input.firstName").val();
	var lastName = $("form.register_form input.lastName").val();
	var email = $("form.register_form input.email").val();
	var password = $("form.register_form input.password").val();

	if (firstName == '' || lastName == '' || email == ''
		|| password == '') {
		alert("Please fill all fields...!!!!!!");
	} else if ((password.length) < 6) {
		alert("Password should atleast 6 character in length...!!!!!!")
	} else {
		var userRegistration = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		};
		$.post("registration", userRegistration,
			function(data) {
				if (data == 'Success') {
					window.location.assign('index.jsp');
				}
			});
	}
});

$("button.login").click(function() {
	var email = $("form.login_form input.email").val();
	var password = $("form.login_form input.password").val();

	if (email == '' || password == '') {
		alert("Please fill login form!");
	} else {
		var userLogin = {
			email: email,
			password: password
		};

		$.post("login", userLogin, function(data) {
			if (data == 'Good') {
				window.location.assign('cabinet.jsp');
			};
		});
	}
});
