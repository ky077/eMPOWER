//密碼顯示/隱藏
	$(".show_hide_password a").on('click', function(event) {
		event.preventDefault();
		if( $(this).parents('.show_hide_password').find('input').val() != "" ){
			if( $(this).parent().prev('input').attr("type") == "text"){//原本是顯示密碼
				$(this).parent().prev('input').attr('type', 'password').addClass('hidePD').removeClass('showPD');//變成隱藏密碼
				$(this).find('i').addClass( "fa-eye-slash" );
				$(this).find('i').removeClass( "ffa-eye" );
			}else if($('.show_hide_password input').attr("type") == "password"){//原本是隱藏密碼
				$(this).parent().prev('input').attr('type', 'text').addClass('showPD').removeClass('hidePD');//變成顯示密碼
				$(this).find('i').removeClass( "fa-eye-slash" );
				$(this).find('i').addClass( "fa-eye" );
			}
		}else if( $(this).parents('.show_hide_password').find('input').val() == "" ){
			$(this).parent().prev('input').attr('type', 'password').addClass('hidePD').removeClass('showPD');
		}
	});