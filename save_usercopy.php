<?php
	session_start();
	if (isset($_POST['login'])) { $login = $_POST['login']; if ($login == '') { unset($login);} } //заносим введенный пользователем логин в переменную $login, если он пустой, то уничтожаем переменную
	if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
	if (isset($_POST['r_password'])) { $r_password=$_POST['r_password']; if ($r_password =='') { unset($r_password);} }
	if (isset($_POST['telephon'])) { $telephon=$_POST['telephon']; if ($telephon =='') { unset($telephon);} }
	if (isset($_POST['email'])) { $email=$_POST['email']; if ($email =='') { unset($email);} }
	if (isset($_POST['captcha'])) { $captcha=$_POST['captcha']; if ($captcha =='') { unset($captcha);} }
	//заносим введенный пользователем пароль в переменную $password, если он пустой, то уничтожаем переменную

	if (empty($login) or empty($password)) //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
	{
	//exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
	}
	if ($password == $r_password) {
		echo"";
		
	}
	else{
		
		exit( "Пароли не совпадают! Повторите попытку.");
	}
	
	//если логин и пароль введены,то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
	/*$login = stripslashes($login);
	$login = htmlspecialchars($login);

	$password = stripslashes($password);
	$password = htmlspecialchars($password);

	//удаляем лишние пробелы
	$login = trim($login);
	$password = trim($password);*/


	// подключаемся к базе
	include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь 

	// проверка на существование пользователя с таким же логином
	$result = mysql_query("SELECT id FROM file WHERE login='$login'",$db);
	$myrow = mysql_fetch_array($result);
	if (!empty($myrow['id'])) {
	exit ("Извините, введённый вами логин уже зарегистрирован. Введите другой логин.");
	}
	
	if (($_POST['captcha']) != $_SESSION['captcha']) {
		echo 1;
		//echo "а капчу?";
		exit;
	} else {
		echo 0;
		
		//echo "Код  введен правильно!";
		//header('Location:https://www.youtube.com/watch?v=PNCDAXxm3mA/');
		
	}

	// если такого нет, то сохраняем данные
	$result2 = mysql_query ("INSERT INTO file (login,password,email) VALUES('$login','$password','$email')");
	// Проверяем, есть ли ошибки
	if ($result2=='TRUE')
	{
	echo "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='index.html'>Главная страница</a>";
		//header('Location:https://www.youtube.com/watch?v=PNCDAXxm3mA/');
	}

	else {
	echo "Ошибка! Вы не зарегистрированы.";
		 }		 
?>