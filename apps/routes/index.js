var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'Biodata',
		nama: 'Dany Suktiawan IF.',
		instansi: 'Universita Mercubuana Yogyakarta',
		jurusan: 'Teknik Informatika',
		tahun_angkatan: '2012',
		email: 'dany.onemail@gmail.com',
		deskripsi: 'Saya ingin mengembangkan diri saya sebagai seorang javascript programmer, mimpi saya, bisa keliling dunia dengan javascript. sangat menarik belajar expressJS',
	});
});

module.exports = router;
