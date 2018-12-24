var express = require('express');
var router = express.Router();
fs = require('fs');
const config = require('config');
const jwt = require('jsonwebtoken');
/* GET home page. */
router.get('/', function(req, res, next) {
  let token = req.headers.authorization.split(' ')[1];
  let decoded = jwt.verify(token, config.get('jvt_secret'));
  let query = req.query;
  let parametrs = JSON.parse(req.query.parametrs);
  let fileContent = '' +
      `data work.tar(compress=no); \n` +
      `length  keyname $20  keyvalue $1000  ;\n` +
      `infile cards truncover;\n` +
      `input keyname keyvalue $char1000.;\n` +
      `call symput(\'s_batch_mode\',\'W\');\n` +
      `call symput(\'s_run_mode\',\'B\');\n` +
      `if keyname=\'user\'     then call symput(\'s_batch_user\', keyvalue);\n` +
      `if keyname=\'report\'   then call symput(\'s_project\'   , keyvalue);\n` +
      `if keyname=\'theme\'    then call symput(\'s_theme\'     , keyvalue);\n` +
      `if keyname=\'log\'      then call symput(\'s_batch_job\' , keyvalue);\n` +
      `if keyname=\'runenv\'   then call symput(\'s_runenv\'    , keyvalue);\n` +
      `cards4;\n` +
      `user ` + decoded.login + `\n` +
      `envname ` + config.get('c_envname') + `\n` +
      `theme ` + query['theme'] + `\n` +
      `report ` + query['form_id'] + `\n` +
      `pelet ` + config.get('c_pelet') + `\n` +
      `openpg\n` ;

  for (let key in parametrs) {
    if (typeof parametrs[key] != 'object') {
      fileContent += key + ` ` + parametrs[key] + `\n`;
    } else {
      fileContent += key + ` ` + parametrs[key].toString().replace(key + ',', '').replace(/,/g ,'    ') + `\n`;
    }
  }

  var dateFormat = require('dateformat');
  var now = new Date();
  now = dateFormat(now, "yyyymmddhhMMss");

  fileContent += `pgm ` + config.get('c_pgm_path') + `/`+ query['form_id'] +`_` + now + `.sas\n` +
      `log ` + config.get('c_log_path') + `/`+ query['form_id'] +`_`+ now + `.log\n` +
      `runenv ` + config.get('c_runenv') + `\n` +
      `;;;;\n` +
      `RUN;\n` +
      `PROC DISPLAY C=EIS.UTILF.PROJECT_BATCH.SCL BATCH;\n` +
      `RUN;\n`;
  fs.writeFile( config.get('sas_path') + '/' + query['form_id'] + '_' +  now + '.sas', fileContent, function (err) {
    if (err) return res.status(503).send('Write in to file error.');
    return res.status(200).send('ok');
  });
});

module.exports = router;
