<?php
	require('connect.php');

	$sql="select * from demo";

	$res=mysql_query($sql);


	$arr=["code"=>"0","desc"=>"无错误","data"=>[]];
	while($row=mysql_fetch_assoc($res)){
		array_push($arr["data"],$row);
	}
	
	echo json_encode($arr);

		

?>