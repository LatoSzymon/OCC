'use strict';

const { PrismaClient } = require('../../generated/prisma/index.js');
const prisma = new PrismaClient();

const getAllHeroes = async (req, res) => {
    try {
        const data = await prisma.hero.findMany();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({message: "Something went wrong with getting list of heroes", error: err});
    }
};

const getHeroesByRole = async (req, res) => {
    const role = req.params.role;
    const roles = ['support', 'dps', 'tank'];
    if (roles.includes(role)) {
        try {
            const data = await prisma.hero.findMany({
                where: {
                    role: {
                        equals: role,
                    },
                },
            });

            res.status(200).json(data)
        } catch (erer) {
            res.status(500).json({message: "Something went wrong...", error: erer});
        }
    } else {
        res.status(404).json({message: "Inappropriate role"})
    }
};

const addHero = async (req, res) => {
    try {
        const data = req.body;      
        const hero = await prisma.hero.create({data});  //pamiętaj, dajesz w { _ }
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error});
    }
};

const deleteHeroByName = async (req, res) => {
    try {
        const nameChamp = req.body.name;
        const deletion = await prisma.hero.delete({where: {
                name: nameChamp,            //dajesz bez name {nameChamp}, bo name to unikalna wartość, nie ma sensu dawać warunku w klamrach
            },
        });

        if (deletion) {
            res.status(200).json({message: `The hero ${nameChamp} was deleted`, deletion: deletion});
        }

    } catch (erer) {
        res.status(500).json({message: "Something went wrong...", error: erer});
    }
};

module.exports = {getAllHeroes, getHeroesByRole, addHero, deleteHeroByName};
