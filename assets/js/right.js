$(document).ready(function(){	
	$("#form").submit(function(){ // пeрeхвaтывaeм всe при сoбытии oтпрaвки
		var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
		var error = false; // прeдвaритeльнo oшибoк нeт
		form.find('input, textarea').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
			if ($(this).val() == '') { // eсли нaхoдим пустoe
				$('#login').css('border', 'red 1px solid');
				$('#password').css('border','red 1px solid');
				$('#wrong').html('Заполните обязательные поля');
			};
		});
		return false;
	});
				
				$("#login").blur(function(){
					var login = $(this).val();
										
					if (login == ''){
						$('#wrong').text('Заполните имя');
						$('#wrong').css('display','block');
					} else {
						
						$ .ajax({
							type:"POST",
							url:"testreg.php",
							data:{funct: 'login', login: login},
							success: function(data){if (data == 1){
								$('#wrong').text('Такого пользователя нет');
								$('#wrong').css('display','block');
							} else {$('#wrong').css('display','none');}}								
						});						
					}
				});
				$("#password").blur(function(){
					var password = $(this).val();
					var login = $("#login").val();
					
					if (password == '' || login == ''){
						$('#wrong').text('Заполните имя');
						$('#wrong').css('display','block');
					} else {
						
						$ .ajax({
							type:"POST",
							url:"testreg.php",
							data:{funct: 'password', password: password, login: login },
							success: function(data){if (data == 1){
								$('#login').css('border', 'red 1px solid');
								$('#password').css('border','red 1px solid');
								$('#wrong').text('Не верный логин или пароль!');
								$('#wrong').css('display','block');
								
							} else {$('#wrong').css('display','none');
									document.location.href = "https://www.youtube.com/watch?v=5qvnnBkTLsU&index=4&list=PLMI1DiCg-fGNOmtPydklee53KthVWOd8R";

								}
							}							
						});	
					}
				});
			});