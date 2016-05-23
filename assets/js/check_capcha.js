$(function(){
	$("#form4").submit(function() {
		
	
						//var a=true;
						$ .ajax({
							type:"POST",
							url:"checkcaptcha.php",
							data:{funct: 'captcha', captcha: captcha},
							success: function(data){if (data == 1){								
								$('#wrong5').text('Неправильно!');
								$('#wrong5').css('display','block');
								//a=false;
							} else {//$('#wrong5').css('display','block');
								$('#wrong5').css('display','block');
								$('#wrong5').text('Всё хорошо!');
								
							}}						
						});	
					return false;
				});
				
	});
