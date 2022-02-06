const pdfparse = require('pdf-parse');
const fs = require('fs');

exports.zirohPdfParser = function (req) {
    let dataBuffer = fs.readFileSync(req);
    let pdfdata;
    pdfparse(dataBuffer).then(function (data) {

        // PDF text
        console.log(data.text);
        pdfdata = data.text;
    });
}