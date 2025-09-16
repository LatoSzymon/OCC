'use strict';

const express = require('express');
const {getAllHeroes, getHeroesByRole, addHero, deleteHeroByName, updateHero} = require('../controllers/basicCon');

const router = express.Router();

router.get('/', getAllHeroes);
router.get('/:role', getHeroesByRole);
router.post('/', addHero);
router.delete('/', deleteHeroByName);
router.put('/:id', updateHero);


module.exports = router;
