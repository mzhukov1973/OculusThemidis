<?php
 namespace ver;
 header("Access-Control-Allow-Origin: *");
 session_start();
//If $_SESSION['admin']===1, then enable admin capabilities

 if (!class_exists(__NAMESPACE__.'\\DB_BackEnd')) 
 {
  require('classes/DB_BackEnd.php');
 }

 try { $db = new DB_BackEnd(); }
 catch (\Exception $err) { echo json_encode(array('result'=>'db_connection_attempt_failed', 'data'=>array($err->getMessage()))); exit(); }

 if ($_POST['action']=="get_news")
 {
 //News:
 if ($_POST['method']=='normal') {$visnum=8;$visbit=1;} else {$visnum=-1;$visbit=-1;}
 //Load up to 8 latest visible news items
  try { $php_obj = $db->news_BulkLoad($visnum, $visbit); $res='get_news_ok'; }
  catch (\Exception $err) { $res='get_news_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
   $php_obj->all[$kk]['visibility']=intval($php_obj->all[$kk]['visibility']);
//And we add updating prop here for every row, since it isa not in DB:
   if ($_POST['method']!='normal') //i.e. it is 'adm'
   {
    $php_obj->all[$kk]['updating']=0;//It set here to 0. because by the time it gets to Apps' state updating is finished
   }
  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
 }
 else if ($_POST['action']=="get_price")
 {
  //Services (prices&description):
 if ($_POST['method']=='normal') {$visnum=-1;$visbit=1;} else {$visnum=-1;$visbit=-1;}
 //Load up all visible services sorted by category
  try { $php_obj = $db->price_BulkLoad($visnum, $visbit); $res='get_price_ok'; }
  catch (\Exception $err) { $res='get_price_failed'; $php_obj=array($err->getMessage()); }
  foreach($php_obj->all as $kk=>$vv)//VERY crude, but can not fathom when id (integer in DB) becomes string in result (e.g. 1 => "1")
  {
   $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);
   $php_obj->all[$kk]['cid']=intval($php_obj->all[$kk]['cid']);
   $php_obj->all[$kk]['price_rur']=floatval($php_obj->all[$kk]['price_rur']);
   $php_obj->all[$kk]['visibility']=intval($php_obj->all[$kk]['visibility']);
//And we add updating prop here for every row, since it isa not in DB:
   if ($_POST['method']!='normal') //i.e. it is 'adm'
   {
    $php_obj->all[$kk]['updating']=0;//It set here to 0. because by the time it gets to Apps' state updating is finished
   }

  }
  $php_res=array('result'=>$res, 'data'=>$php_obj->all);
/*
  $php_obj = array(); 
  for($i=1;$i<=32;$i++)
  {
   $php_obj_item = array('id'=>$i,
                         'cid'=>1, 
                         'cat_shrt_name'=>'Услуги физическим лицам', 
                         'cat_descr'=>'', 
                         'shrt_name'=>'Услуга '.$i,
                         'descr'=>'Описание услуги '.$i,
                         'price_rur'=>(120+$i),
                         'comment'=>'',
                         'visibility'=>1);
   $php_obj[]=$php_obj_item;
  }
  for($i=33;$i<=52;$i++)
  {
   $php_obj_item = array('id'=>$i,
                         'cid'=>2, 
                         'cat_shrt_name'=>'Услуги юридическим лицам', 
                         'cat_descr'=>'', 
                         'shrt_name'=>'Услуга '.$i,
                         'descr'=>'Описание услуги '.$i,
                         'price_rur'=>(120+$i),
                         'comment'=>'',
                         'visibility'=>1);
   $php_obj[]=$php_obj_item;
  }
  $php_res=array('result'=>'get_services_ok', 'data'=>$php_obj);
*/
 }
 else
 {
  $php_res=array('result'=>'action_unknown_failed', 'data'=>array($_POST['action']));
 }




 $resp_json=json_encode($php_res);
 echo $resp_json;

?>




