<?php
$data = array();
$link = mysql_connect('localhost', 'user', 'pwd');
if (!$link) {
    die('Verbindung schlug fehl: ' . mysql_error());
}
mysql_select_db('db', $link);
//echo 'Erfolgreich verbunden';
$result = mysql_query('SELECT b.company,round(a.amount,2) as amount,a.duedate
  FROM contracts a
    inner join customers b
      on b.id = a.customers_id
        where a.duedate < NOW()  and a.active=1',$link);
if ($result) {
    while ($row = mysql_fetch_assoc($result)) {
      $data['items'][]=$row;
    }
    $data['count']=sizeof($data['items']);
    $data['link']="http://<your-gsales-url>/contract/index.php";
}
mysql_close($link);
echo json_encode($data);