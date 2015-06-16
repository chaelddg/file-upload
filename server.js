var express = require('express');
var multer = require('multer');
var path = require('path');
var fs = require('fs');

var app = express();
var done = false;

app.use(multer({
    dest: './uploads',
    rename: function (fieldName, fileName) {
        return fileName + Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldName + ' uploaded to ' + file.path);
        message = file.path;
        done = true;
        req.
    }
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/photo', function (req, res) {
    if (done === true) {
        console.log(req.files);

        fs.readFile(message, function (err, image) {
            if (err) {
                throw err;
            }

            res.end(image);
        });
    }
});

app.listen(3000, function () {
    console.log('Working on port 3000');
});
