<?php
 namespace ver;

 class DB_BackEnd
 {
  private const DB_TYPE = 'Postgresql';
  private const DB_NAME = 'ver';
  private const DB_ADDR = 'localhost';
  private const DB_PORT = '5432';
  private const DB_USER = 'postgres';
  private const DB_PASS = '330117';

  protected $dbconn;

  public function __construct()
  {
   $conn_str = "host=".self::DB_ADDR." port=".self::DB_PORT." dbname=".self::DB_NAME." user=".self::DB_USER." password=".self::DB_PASS;
   $ex_msg = "Unable to connect to ".self::DB_TYPE." database '".self::DB_NAME."', at ".self::DB_ADDR.":".self::DB_PORT." as user ".self::DB_USER.".";
   $this->dbconn = pg_connect($conn_str);
   if ($this->dbconn === false) { throw new \Exception($ex_msg,-1,__FILE__,__LINE__); }
  }

  public function __destruct() { pg_close($this->dbconn); }

/*=============================================Public methods below here==============================================================================================*/
/*News:---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  public function news_BulkLoad($howmany = 20, $visibility = -1) { $tbl = 'news'; $res->success = false; if ($visibility!=-1) {$where_clause=' where visibility = '.$visibility;} else {$where_clause='';} if ($howmany!=-1) {$lim_clause=' limit '.$howmany;} else {$lim_clause='';} $q_str='select * from '.$tbl.$where_clause.' order by id desc '.$lim_clause.';'; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting a \'select\' on \'news\' table.',-2,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Select\' query of the \'news\' table was successful, but has returned no rows.',-3,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
  public function news_AddItem ($row)                            { $tbl = 'news'; $res->success = false; $q_str="insert into ".$tbl." (hdng,bdy,visibility) values ('".$row->hdng."','".$row->bdy."',".intval($row->visibility).") returning id;"; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting an \'insert\' into \'news\' table.',-4,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Insert...returning\' query for the \'news\' table was successful, but has returned nothing instead of new id.',-5,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
  public function news_DelItem ($row)                            { $tbl = 'news'; $res->success = false; $r = $row[0]; foreach ($row as $kk=>$vv) { if ($kk==0) {continue;} $r = $r.", ".$vv; } $q_str="delete from ".$tbl." where id in (".$r.") returning id;"; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting to \'delete\' an item (id='.$row->id.') from \'news\' table.',-4,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Delete...returning\' query for item with id='.$row->id.' of the \'news\' table was successful, but has returned nothing instead of the of the deleted row.',-5,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
  public function news_EditItem($row)                            { $tbl = 'news'; $res->success = false; $q_str="update ".$tbl." set (hdng,bdy,visibility) = ('".$row->hdng."','".$row->bdy."',".intval($row->visibility).") where id = ".$row->id." returning id;"; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting to \'update\' an item (id='.$row->id.') in \'news\' table.',-4,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Update...returning\' query for item with id='.$row->id.' of the \'news\' table was successful, but has returned nothing instead of the of the deleted row.',-5,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Prices:-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  public function price_BulkLoad($howmany = -1, $visibility = -1) { $tbl = 'services as a, services_categories as b'; $res->success = false; if ($visibility!=-1) {$where_clause=' and visibility = '.$visibility;} else {$where_clause='';} if ($howmany!=-1) {$lim_clause=' limit '.$howmany;} else {$lim_clause='';} $q_str='select a.*,b.shrt_name as cat_shrt_name, b.descr as cat_descr from '.$tbl.' where a.cid = b.id '.$where_clause.' order by a.cid desc,a.id desc '.$lim_clause.';'; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting a \'select\' on \'services\' table.',-2,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Select\' query of the \'services\' table was successful, but has returned no rows.',-3,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
  public function price_AddItem ($row)                            { $tbl = 'services'; $res->success = false; $q_str="insert into ".$tbl." (cid,shrt_name,descr,price_rur,comment,visibility) values (".intval($row->cid).", '".$row->shrt_name."', '".$row->descr."', ".floatval($row->price_rur).", '".$row-comment."', ".intval($row->visibility).") returning id;"; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting an \'insert\' into \'services\' table.',-4,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Insert...returning\' query for the \'services\' table was successful, but has returned nothing instead of new id.',-5,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
  public function price_DelItem ($row)                            { $tbl = 'serfices'; $res->success = false; $r = $row[0]; foreach ($row as $kk=>$vv) {if ($kk==0) {continue;} $r = $r.", ".$vv;} $q_str="delete from ".$tbl." where id in (".$r.") returning id;"; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting to \'delete\' an item (id='.$row->id.') from \'services\' table.',-4,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Delete...returning\' query for item with id='.$row->id.' of the \'services\' table was successful, but has returned nothing instead of the of the deleted row.',-5,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
  public function price_EditItem($row)                            { $tbl = 'services'; $res->success = false; $q_str="update ".$tbl." set (cid,shrt_name,descr,price_rur,comment,visibility) = (".intval($row->cid).", '".$row->shrt_name."', '".$row->descr."', ".floatval($row->price_rur).", '".$row->comment."', ".intval($row->visibility).") where id = ".$row->id." returning id;"; $qresult = pg_query($this->dbconn,$q_str); if ($qresult === false) { throw new \Exception('Failed when attempting to \'update\' an item (id='.$row->id.') in \'services\' table.',-4,__FILE__,__LINE__); } $all = pg_fetch_all($qresult); if ($all === false) { throw new \Exception('\'Update...returning\' query for item with id='.$row->id.' of the \'services\' table was successful, but has returned nothing instead of the of the deleted row.',-5,__FILE__,__LINE__); } $res->success = true; $res->all = $all; return $res; }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
 }//End of class definiton


?>

