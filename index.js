

const superHeroes = [
    {
      name: "Shadow Blade",
      powerLevel: 87,
      strengths: ["Stealth", "Agility", "Shadow Manipulation"],
      weaknesses: ["Bright light exposure", "Low stamina in prolonged fights"],
      isImmortal: false,
      teamAffiliation: "Dark Guardians",
      intelligence: 8,
      speed: 9,
      durability: 6,
      wearsCape: true
    },
    {
      name: "Solar Sentinel",
      powerLevel: 92,
      strengths: ["Flight", "Solar energy blasts", "Super strength"],
      weaknesses: ["Eclipses", "Water exposure weakens powers"],
      isImmortal: true,
      teamAffiliation: "Solar Order",
      intelligence: 7,
      speed: 8,
      durability: 9,
      wearsCape: true
    },
    {
      name: "Tech Titan",
      powerLevel: 78,
      strengths: ["Technological integration", "Hacking", "Cyber-enhanced reflexes"],
      weaknesses: ["EMP attacks", "Over-reliance on tech"],
      isImmortal: false,
      teamAffiliation: null,
      intelligence: 10,
      speed: 7,
      durability: 11,
      wearsCape: true
    },
    {
      name: "Aqua Vortex",
      powerLevel: 84,
      strengths: ["Water manipulation", "Hydro-blasts", "Underwater breathing"],
      weaknesses: ["Heat-based attacks", "Desert environments"],
      isImmortal: false,
      teamAffiliation: "Oceanic Alliance",
      intelligence: 6,
      speed: 8,
      durability: 7,
      wearsCape: false
    },
    {
      name: "Iron Fist",
      powerLevel: 76,
      strengths: ["Martial arts mastery", "Superhuman endurance", "Energy punches"],
      weaknesses: ["Mental distractions", "Limited ranged attacks"],
      isImmortal: false,
      teamAffiliation: "Dark Guardians",
      intelligence: 7,
      speed: 8,
      durability: 8,
      wearsCape: true
    },
    {
      name: "Lightning Strike",
      powerLevel: 89,
      strengths: ["Lightning speed", "Electric shocks", "Weather control"],
      weaknesses: ["Overexertion causes burnout", "Insulated materials"],
      isImmortal: false,
      teamAffiliation: "Stormbreakers",
      intelligence: 8,
      speed: 10,
      durability: 6,
      wearsCape: false
    },
    {
      name: "Pyro Flare",
      powerLevel: 81,
      strengths: ["Fire manipulation", "Heat resistance", "Flame flight"],
      weaknesses: ["Water-based attacks", "Low oxygen environments"],
      isImmortal: false,
      teamAffiliation: "Dark Guardians",
      intelligence: 6,
      speed: 7,
      durability: 7,
      wearsCape: false
    },
    {
      name: "Crystal Shard",
      powerLevel: 77,
      strengths: ["Crystal armor", "Weaponized shards", "Earth connection"],
      weaknesses: ["Vibrational disruption", "Extreme heat melts crystals"],
      isImmortal: false,
      teamAffiliation: "Dark Guardians",
      intelligence: 7,
      speed: 6,
      durability: 9,
      wearsCape: true
    },
    {
      name: "Nova Pulse",
      powerLevel: 95,
      strengths: ["Cosmic energy beams", "Teleportation", "Super strength"],
      weaknesses: ["Power overload causes fatigue", "Gravitational pull effects"],
      isImmortal: true,
      teamAffiliation: "Cosmic Vanguard",
      intelligence: 9,
      speed: 8,
      durability: 10,
      wearsCape: true
    },
    {
      name: "Phantom Echo",
      powerLevel: 73,
      strengths: ["Intangibility", "Sonic blasts", "Illusions"],
      weaknesses: ["Sound-based attacks", "Mental strain limits illusion time"],
      isImmortal: false,
      teamAffiliation: null,
      intelligence: 8,
      speed: 7,
      durability: 6,
      wearsCape: false
    }
  ];

//   {
//     name: "Shadow Blade",
//     powerLevel: 87,
//     strengths: ["Stealth", "Agility", "Shadow Manipulation"],
//     weaknesses: ["Bright light exposure", "Low stamina in prolonged fights"],
//     isImmortal: false,
//     teamAffiliation: "Dark Guardians",
//     intelligence: 8,
//     speed: 9,
//     durability: 6,
//     wearsCape: true
//   },
  

// count the number of immortal ones

// if they have high intelligence - 
  // add intelligence to their strengths array

// find the four that are Dark Guardians, and put them in a new seperate dark guaradians array`

// if their speed is slow, add to their intelligence
  // ex: speed is 2, and 2 to intelligence

// Find out who has the highest durability, and then say that at the end