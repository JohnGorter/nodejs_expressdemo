const express = require('express');
const router = express.Router();
const { getCars, getCarById, addCar } = require('../controllers/cars')

router.route("/").get(getCars).post(addCar)
router.route("/:car").get(getCarById); 

module.exports = router;