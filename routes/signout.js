var express = require('express');
var router = express.Router();
var dataModel = require('../models/data-model.js');

// sign out route 
router.get('/', async function(req, res){
    dataModel.readData("SignOut", function(data) {
        res.render('signout', {
            data: data
        })
    });
})

router.post('/create', function(req, res) {
    studentName = "Larris Xie";
    id = 340920198;
    instrument = "Flute";
    barcode = 123;
    signOutDate = "2022-11-22"
    returnDate = ""
    dataModel.addSignOut(studentName, id, instrument, barcode, signOutDate, returnDate, function() {
      res.redirect('/signout');
    });
});

router.post('/delete', function(req, res) {
    studentName = "Larris Xie";
    instrument = "Flute"
    signOutDate = "2022-11-22"
    dataModel.removeSignOut(studentName, instrument, signOutDate, function() {
      res.redirect('/signout');
    });
});

module.exports = router;