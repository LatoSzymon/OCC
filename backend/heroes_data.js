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
        advice_with: "Genji in right hands play 1v5 matches, but not all your teammates are gods in playing this champ. Providing your Genji some sort of support would help you win a teamfight",
        advice_vs: "Genji tends to dive deep into your backline, so try to use heroes that are good against high-mobile characters and cut him off so he cannot escape",
    },

    {
        name: "Cassidy",
        role: "dps",
        advice_with: "Cassidy is very good at securing picks and covering your low-mobile healers, but has low mobility. Keep an eye on him, so you can provide help if he gets in trouble",
        advice_vs: "If you are playing a high-mobile hero try to bait his flashbang, if you succeed he will be much less dangerous to you"
    },

    {
        name: "D.va",
        role: "tank",
        advice_with: "D.va likes to dive deep into enemy team. If you have a feeling she goes too deep, stay behind. She has very effective way to escape. Do you?",
        advice_vs: "D.va's key ability is her matrix. Good strategy is forcing her to use it as soon as the fight starts, so she remain defenceless. If you focus her then, your team can quickly put her mech down."
    },

    {
        name: "Echo",
        role: "dps",
        advice_with: "Echo is very effective in melting singular targets, so try to supply your comp with aoe damage or long distance heal",
        advice_vs: "Echo can eliminate single target very quick, but she lacks aoe damage so stick together. Also focus her when she uses her ult, because it is extremely dangerous with how quick she can gain ult in this form"
    },

    


    
    //write all heroes data  (work in progress)
];


module.exports = heroes