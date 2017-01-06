var printer = require('printer');
var fs = require('fs');

var printers = printer.getPrinters();

for (var index = 0; index < printers.length; index++) {
    console.log(printers[index].name);
}

var fileName = '/Users/jp/Downloads/GVA0511217G9F0000004704.xml';

console.log('platform:', process.platform);
console.log('try to print file: ' + fileName);

var active_printer = printer.getPrinter('HP_LaserJet_P2014');

console.log(active_printer);

var fileData =  fs.readFileSync(fileName);
console.log('File data : ' + fileData);

printer.printDirect({
    data: fileData,
    printer: 'HP_LaserJet_P2014',
    success: function (jobID) {
        console.log("sent to printer with ID: " + jobID);
    },
    error: function (err) {
        console.log(err);
    }
});