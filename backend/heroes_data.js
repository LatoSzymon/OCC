'use strict';

// const { PrismaClient } = require('../generated/prisma/index');
// const prisma = new PrismaClient();

const heroes = [
    {
        name: "Ana",
        role: "support",
        advice_with: "Ana is a very useful healer, but positioning is key her survival. Try to cover your healer.",
        advice_vs: "Ana's only defensive tool is her sleepdart. Try to bait it out and flank her when she is separated from her team"
    },

    {
        name: "Ashe",
        role: "dps",
        advice_with: "Ashe is very strong in eliminating key targets, but she needs to position well. Try to stay near and peel her",
        advice_vs: "Ashe can easily control zones and eliminate key targets. Use any kind of barrier or cover and try to drive her off"
    },

    {
        name: "Baptiste",
        role: "support",
        advice_with: "Baptiste works best when he can heal multiple targets at once. Try to stay with the others",
        advice_vs: "Baptiste is hard to catch, but he is weak against more mobile heroes. Catch him off-guard"
    },

    {
        name: "Bastion",
        role: "dps",
        advice_with: "Bastion can do highest dps possible amongst dps heroes, but he needs to be center of your comp. Provide him some help",
        advice_vs: "Bastion is dangerous in his turret form, but without it he is huge, low mobile target. Focus him when his turret is on cooldown"
    },

    {
        name: "Brigitte",
        role: "support",
        advice_with: "Brigitte is very useful if you have solid frontline in your comp. She has very limited range, so try to always stay near her",
        advice_vs: "Brigitte likes to stay near her teammates and she is effective against flanking champions. Use advantage of range to eliminate her"
    },

    {
        name: "Genji",
        role: "dps",
        advice_with: "Genji in right hands play 1v5 matches, but it is nice to "
    }, 
    
    //write all heroes data  (work in progress)
];


module.exports = heroes