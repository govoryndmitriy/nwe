<?php
	require_once "bd.php";
	
	switch ($_POST['funct']){
		case 'login' : 
						$sql_query = mysql_query("SELECT login FROM file WHERE login = '".$_POST['login']."'");
						if (mysql_num_rows($sql_query) != 0){
						echo 0;
						} else {
						echo 1;
						}
	break;
	case 'password':
					$sql_query = mysql_query("SELECT login, password FROM file WHERE login = '".$_POST['login']."'");
					$data = mysql_fetch_assoc($sql_query);
					
					if ($_POST['login'] == $data['login'] && $_POST['password'] == $data['password']){
						echo 0;
					} else{
						echo 1;
					}
		break;
	}






?>