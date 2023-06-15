var express = require('express');
var router = express.Router();
const data = {
  "aplikasi":"Webcom",
  "nama":"Ale Nur Hijaz",
  "telp":"6289635566044",
  "email":"hijazpaujiah@gmail.com",
  "alamat":"Jl. Raya Rawa Bugel No. 22 RT 001 RW 03",
  "kecamatan":"Marga Mulya",
  "kelurahan":"Bekasi Utara",
  "kota":"Bekasi",
  "provinsi":"Jawa Barat",
  "kode_pos":"17142"
};

router.get('/', function(req, res, next) {
  view("index", res)
});

router.get('/:file', function(req, res, next) {
  if(!req.params)
      return res.send("NO PARAMS PASSED")
  if(!req.params.file)
    return res.send("NO params file PASSED")
  if(req.params.file === ""){
    res.send("params file EMPTY.")
  } else {
    view(req.params.file, res)
  }
  
});

function view(file, res){
  res.render(`${file}`, {"data":data})
}

module.exports = router;
