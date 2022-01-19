const express = require('express');
const router = express.Router();
const { getCars, getCarById } = require('../controllers/cars')

router.route("/").get(getCars);
router.route("/:car").get(getCarById); 

module.exports = router;