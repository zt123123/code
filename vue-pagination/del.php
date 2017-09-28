<?php
	require('connect.php');

	$sql="delete from demo where id=".$_POST['id'];

	$res=mysql_query($sql);

	if($res!=false){
		echo "delete success";
	}	

?>