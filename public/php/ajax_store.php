<?php
 namespace ver;
 header("Access-Control-Allow-Origin: *");
 session_start();
//If $_SESSION['admin']===1, then enable admin capabilities

 if (!class_exists(__NAMESPACE__.'\\DB_BackEnd')) { require('classes/DB_BackEnd.php'); }
 try { $db = new DB_BackEnd(); }
 catch (\Exception $err) { echo json_encode(array('result'=>'db_connection_attempt_failed', 'data'=>array($err->getMessage()))); exit(); }

 if ($_POST['action']=="add_news_item")
 {
 //News:
 //Store item in DB ('id' field will be ignored, new id shall be returned from method):
  try { $php_obj = $db->news_AddItem(json_decode($_POST['item'])); $res='add_news_item_ok'; }
  catch (\Exception $err) { $res='add_news_item_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
 }
 else if ($_POST['action']=="del_news_item")
 {
 //News:
 //Remove item from DB:
  try { $php_obj = $db->news_DelItem(json_decode($_POST['item'])); $res='del_news_item_ok'; }
  catch (\Exception $err) { $res='del_news_item_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
 }
 else if ($_POST['action']=="edit_news_item")
 {
 //News:
 //Update item in DB:
  try { $php_obj = $db->news_EditItem(json_decode($_POST['item'])); $res='edit_news_item_ok'; }
  catch (\Exception $err) { $res='edit_news_item_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
 }
 else if ($_POST['action']=="add_price_item")
 {
 //Price:
 //Store item in DB ('id' field will be ignored, new id shall be returned from method):
  try { $php_obj = $db->price_AddItem(json_decode($_POST['item'])); $res='add_price_item_ok'; }
  catch (\Exception $err) { $res='add_price_item_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
 }
 else if ($_POST['action']=="del_price_item")
 {
 //Price:
 //Remove item from DB:
  try { $php_obj = $db->price_DelItem(json_decode($_POST['item'])); $res='del_price_item_ok'; }
  catch (\Exception $err) { $res='del_price_item_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
 }
 else if ($_POST['action']=="edit_price_item")
 {
 //Price:
 //Update item in DB:
  try { $php_obj = $db->price_EditItem(json_decode($_POST['item'])); $res='edit_price_item_ok'; }
  catch (\Exception $err) { $res='edit_price_item_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
 }
 else
 {
  $php_res=array('result'=>'action_unknown_failed', 'data'=>array($_POST['action']));
 }




 $resp_json=json_encode($php_res);
 echo $resp_json;

?>




