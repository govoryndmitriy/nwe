$(function(){

	var field = new Array("login", "password", "r_password", "email","captcha");//поля обязательные 			
		$("#form4").submit(function() {// обрабатываем отправку формы	
			var error=0; // индекс ошибки
			$("#form4").find(":input").each(function() {// проверяем каждое поле в форме
				for(var i=0;i<field.length;i++){ // если поле присутствует в списке обязательных
					if($(this).attr("name")==field[i]){ //проверяем поле формы на пустоту
						if(!$(this).val()){// если в поле пустое	
							$(this).css('border', 'red 1px solid');// устанавливаем рамку красного цвета
							error=1;// определяем индекс ошибки	
							$("#wrong2").css('display','block');	
						}
						else{
							$(this).css('border', 'gray 1px solid');// устанавливаем рамку обычного цвета
						}						
					}						
				}					
		   });

		   //провека email адреса 
			var email = $("#email").val();
		   	if(!isValidEmailAddress(email)){
				error=2;
				$("#email").css('border', 'red 1px solid');// устанавливаем рамку красного цвета
				$("#wrong3").css('display','block');
			}
			
			//провека совпадения паролей 
			var pas1 = $("#pass").val();
			var pas2 = $("#r_password").val();
		   	if(pas1!= pas2){
				error=3;
				//$("#pass").css('border', 'red 1px solid');// устанавливаем рамку красного цвета
				$("#r_password").css('border', 'red 1px solid');// устанавливаем рамку красного цвета
				$("#wrong4").css('display','block');
			};
					
			//ПРОВЕРЯЕМ КАПЧУ
				var captcha = $("#last").val();
						
				if (captcha == ''){
						$('#wrong5').text('Введите капчу!');
						$('#wrong5').css('display','block');
						error=4;
					};
				
			if(error!=0){			
				return false; //если в форме встретились ошибки , не  позволяем отослать данные на сервер.
			}	
			else{
						$ .ajax({
							type:"POST",
							url:"save_usercopy.php",
							data:{funct: 'captcha', captcha: captcha},
							success: function(data){if (data == 1){	
								$('#wrong5').text('Неправильно!');
								$('#wrong5').css('display','block');
								
							} else {
								document.location.href = "https://www.youtube.com/watch?v=5qvnnBkTLsU&index=4&list=PLMI1DiCg-fGNOmtPydklee53KthVWOd8R";								
							}}						
						});	
					return false;
				};			
		})
	});
	
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
		
		
}



