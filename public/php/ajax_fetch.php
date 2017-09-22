<?php
 namespace ver;
 header("Access-Control-Allow-Origin: *");
 session_start();

 if (!class_exists(__NAMESPACE__.'\\DB_BackEnd')) { require('classes/DB_BackEnd.php'); }
 try { $db = new DB_BackEnd(); } catch (\Exception $err) { echo json_encode(array('result'=>'db_connection_attempt_failed', 'data'=>array($err->getMessage()))); exit(); }

 if      ($_POST['action']=="get_news")  { if ($_POST['method']=='normal') {$visnum=8;$visbit=1; } else {$visnum=-1;$visbit=-1;} try { $php_obj = $db->news_BulkLoad ($visnum, $visbit); $res='get_news_ok';  } catch (\Exception $err) { $res='get_news_failed';  $php_obj=array($err->getMessage()); } foreach($php_obj->all as $kk=>$vv) { $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']);                                                                                                                                         $php_obj->all[$kk]['visibility']=intval($php_obj->all[$kk]['visibility']); if ($_POST['method']!='normal') { $php_obj->all[$kk]['updating']=0; } } $php_res=array('result'=>$res, 'data'=>$php_obj->all); }
 else if ($_POST['action']=="get_price") { if ($_POST['method']=='normal') {$visnum=-1;$visbit=1;} else {$visnum=-1;$visbit=-1;} try { $php_obj = $db->price_BulkLoad($visnum, $visbit); $res='get_price_ok'; } catch (\Exception $err) { $res='get_price_failed'; $php_obj=array($err->getMessage()); } foreach($php_obj->all as $kk=>$vv) { $php_obj->all[$kk]['id']=intval($php_obj->all[$kk]['id']); $php_obj->all[$kk]['cid']=intval($php_obj->all[$kk]['cid']); $php_obj->all[$kk]['price_rur']=floatval($php_obj->all[$kk]['price_rur']); $php_obj->all[$kk]['visibility']=intval($php_obj->all[$kk]['visibility']); if ($_POST['method']!='normal') { $php_obj->all[$kk]['updating']=0; } } $php_res=array('result'=>$res, 'data'=>$php_obj->all); }
 else { $php_res=array('result'=>'action_unknown_failed', 'data'=>array($_POST['action'])); }

 $resp_json=json_encode($php_res);
 echo $resp_json;
?>
