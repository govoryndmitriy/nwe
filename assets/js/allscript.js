$(window).load(function() {
				$('#featured').orbit({bullets: true});
				$('#featured2').orbit({bullets: true});
				$('#responsive').orbit({bullets: true, fluid: true});
			});
		
		$(document).ready(function(){
				//При нажатии на ссылку с классом poplight и href атрибутом тега <a> с #
			$('a.poplight[href^=#]').click(function() {
			var popID = $(this).attr('rel'); //получаем имя окна, важно не забывать, при добавлении новых, менять имя в атрибуте rel ссылки
			var popURL = $(this).attr('href'); //получаем размер из href атрибута ссылки
			
	 
			//запрос и переменные из href url
			var query= popURL.split('?');
			var dim= query[1].split('&');
			var popWidth = dim[0].split('=')[1]; //первое значение строки запроса
	 
			//Добавляем к окну кнопку закрытия
			$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" title="Закрыть" class="close"></a>');
	 
			//Добавляем полупрозрачный фон затемнения
			$('body').append('<div id="fade"></div>'); //div контейнер будет прописан перед тегом </body>.
			//$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //полупрозрачность слоя, фильтр для тупого IE
	 
			return false;
			});
	 
			//Закрываем окно и фон затемнения
			$(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна, т.е. по фону...
			$('#fade , .popup_block, .bodydark').fadeOut(function() {
				$('#fade, a.close').remove();  //плавно исчезают 
			});
			return false;
			});
			$(document). ready (function(){
				$(".input").click(function(){
					$(".first_block").css("display","block"); 
					$(".second_block").css("display","none");
					$(".input").css("background","white");
					$(".input").css("color","#3a6485");
					$(".registr").css("background","#eeeeee");
					$(".registr").css("color","#d48ba5");
				});
				$(".registr").click(function(){
					$(".second_block").css("display","block"); 
					$(".first_block").css("display","none");
					$(".registr").css("background","white");
					$(".registr").css("color","#3a6485");
					$(".input").css("background","#eeeeee");
					$(".input").css("color","#d48ba5");
				});
				$(".poplight").click(function(){
					$(".bodydark").css("display","block"); 
				});
			});
			})