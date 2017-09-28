<?php
	$conn=mysql_connect("localhost","root","");
	// var_dump($conn);
	mysql_selectdb("test");

	// $sql="create table demo(
	// 	id int auto_increment primary key,
	// 	name varchar(10) not null,
	// 	age int not null
	// )";	
	// 
	// $sql="insert into demo values(null,'bbb',23)";
	// $sql="delete from demo where id=2";
	// $sql="update demo set age=20 where id=3";
?>