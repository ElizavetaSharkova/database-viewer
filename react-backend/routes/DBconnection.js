var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

    
/* GET tables listing. */
router.get('/', function(req, res, next) {
  let select = 'SHOW TABLES FROM northwind';        
  getDataBySelect(res, select);
 
});

router.get('/:tableName', function(req, res, next) {
  let select = 'SELECT * FROM northwind.' + req.params.tableName;   
  getDataBySelect(res, select);
 
});

module.exports = router;



function getDataBySelect(response, select){
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'northwind',
    port: 3306
});

  connection.connect();
  connection.query(select, function (error, results, fields) {
      if (error) throw error;
      response.send(results);
  });
  connection.end();
}
