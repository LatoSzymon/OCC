'use strict';

const express = require('express');
const {getAllHeroes, getHeroesByRole, addHero, deleteHeroByName} = require('../controllers/basicCon');

const router = express.Router();

router.get('/', getAllHeroes);
router.get('/:role', getHeroesByRole);
router.post('/', addHero);
router.delete('/', deleteHeroByName);


module.exports = router;
