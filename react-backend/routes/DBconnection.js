var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET tables listing. */
router.get('/', function (req, res, next) {
  let select = 'SELECT TABLE_NAME FROM information_schema.TABLES WHERE Engine= \'InnoDB\' AND TABLE_SCHEMA = \'northwind\' AND TABLE_ROWS != 0';
  getDataBySelect(res, select);

});

router.get('/:tableName', function (req, res, next) {
  let tableName;
  tableName = "\`" + req.params.tableName + "\`";
  let select = 'SELECT * FROM northwind.' + tableName;
  getDataBySelect(res, select);

});

module.exports = router;



function getDataBySelect(response, select) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'northwind',
    port: 3306
  });

  connection.connect();
  connection.query(select, function (error, results, fields) {
    if (error) throw error;
    response.send(results);
  });
  connection.end();
}
