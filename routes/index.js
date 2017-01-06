/**
 * Created by jp on 06/01/17.
 */
var express = require('express');
var router = express.Router();

var ipp = require('ipp');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Printing from JS'});
});

/* GET print page. */
router.get('/print', function (req, res, next) {
    var printer = ipp.Printer("ipp://localhost/printers/HP_LaserJet_P2014");

    console.log(printer);

    var fileName = '/Users/jp/Downloads/CFDi.pdf';
    var fileData = fs.readFileSync(fileName);

    var msg = {
        "operation-attributes-tag": {
            "requesting-user-name": "William",
            "job-name": "My Test Job",
            "document-format": "application/pdf"
        },
        data: fileData
    };

    printer.execute('Print-Job', msg, function (err, res) {
        console.log('RES: ' + res);
        console.log('ERR ' + err);
    });


    res.render('print', {title: fileName});
});


module.exports = router;
