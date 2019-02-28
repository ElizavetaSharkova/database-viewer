var express = require('express');
var router = express.Router();
var mysql      = require('mysql');


let tableName = 'categories';
  const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'northwind',
        port: 3306
    });

/* GET tables listing. */
router.get('/', function(req, res, next) {
  
  let select = 'SHOW TABLES FROM ' + connection.config.database;        
  getDataBySelect(select);  
 
});

router.get('/table', function(req, res, next) {
  
  let select = 'SELECT * FROM northwind.' + tableName; 
    
  getDataBySelect(select);  
 
});

module.exports = router;



function getDataBySelect(select){
  

  connection.connect();
  connection.query(select, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
  });
  connection.end();
}
