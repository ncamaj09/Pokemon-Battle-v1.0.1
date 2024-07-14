document.addEventListener('DOMContentLoaded', () => {
    const playerHPElement = document.getElementById('player-hp');
    const playerLevelElement = document.getElementById('player-level');
    const playerDefenseElement = document.getElementById('player-defense');
    const playerSpAtkElement = document.getElementById('player-sp-atk');
    const playerSpDefElement = document.getElementById('player-sp-def');
    const playerSpeedElement = document.getElementById('player-speed');
    const opponentHPElement = document.getElementById('opponent-hp');
    const opponentLevelElement = document.getElementById('opponent-level');
    const opponentDefenseElement = document.getElementById('opponent-defense');
    const opponentSpAtkElement = document.getElementById('opponent-sp-atk');
    const opponentSpDefElement = document.getElementById('opponent-sp-def');
    const opponentSpeedElement = document.getElementById('opponent-speed');
    const playerImage = document.querySelector('.player .pokemon-image');
    const playerName = document.querySelector('.player .pokemon-name');
    const opponentImage = document.querySelector('.opponent .pokemon-image');
    const opponentName = document.querySelector('.opponent .pokemon-name');
    const winsElement = document.getElementById('wins');
    const lossesElement = document.getElementById('losses');

    let wins = 0;
    let losses = 0;

    const pokemonList = [
        {
            name: 'Charizard',
            image: 'images/charizard.png',
            baseHP: 78,
            type: 'Fire',
            moves: [
                { name: 'Flamethrower', damage: 40, type: 'Fire', accuracy: 100 },
                { name: 'Slash', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Fire Spin', damage: 20, type: 'Fire', accuracy: 85 },
                { name: 'Dragon Claw', damage: 50, type: 'Dragon', accuracy: 90 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 78, spAtk: 109, spDef: 85, speed: 100 }
        },
        {
            name: 'Blastoise',
            image: 'images/blastoise.png',
            baseHP: 79,
            type: 'Water',
            moves: [
                { name: 'Hydro Pump', damage: 40, type: 'Water', accuracy: 80 },
                { name: 'Bite', damage: 30, type: 'Dark', accuracy: 100 },
                { name: 'Water Gun', damage: 20, type: 'Water', accuracy: 100 },
                { name: 'Skull Bash', damage: 50, type: 'Normal', accuracy: 75 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 100, spAtk: 85, spDef: 105, speed: 78 }
        },
        {
            name: 'Mega Venusaur',
            image: 'images/mega venusaur.png',
            baseHP: 80,
            type: 'Grass',
            moves: [
                { name: 'Solar Beam', damage: 40, type: 'Grass', accuracy: 100 },
                { name: 'Tackle', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Vine Whip', damage: 20, type: 'Grass', accuracy: 100 },
                { name: 'Earthquake', damage: 50, type: 'Ground', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 123, spAtk: 122, spDef: 120, speed: 80 }
        },
        {
            name: 'Pikachu',
            image: 'images/pikachu.png',
            baseHP: 35,
            type: 'Electric',
            moves: [
                { name: 'Thunderbolt', damage: 40, type: 'Electric', accuracy: 100 },
                { name: 'Quick Attack', damage: 30, type: 'Normal', accuracy: 100 },
                { name: 'Electro Ball', damage: 20, type: 'Electric', accuracy: 90 },
                { name: 'Iron Tail', damage: 50, type: 'Steel', accuracy: 75 }
            ],
            weakness: 'Ground',
            resistance: 'Flying',
            baseStats: { defense: 40, spAtk: 50, spDef: 50, speed: 90 }
        },
        {

    name: 'Bulbasaur',
            image: 'images/Bulbasaur.png',
            baseHP: 45,
            type: 'Grass',
            moves: [
                { name: 'Sleep Powder', damage: 75, type: 'Grass', accuracy: 75 },
                { name: 'Tackle', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Razor Leaf', damage: 55, type: 'Grass', accuracy: 95 },
                { name: 'Seed Bomb', damage: 80, type: 'Grass', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 49, spAtk: 65, spDef: 65, speed: 45 }
        },
        {

name: 'Ivysaur',
            image: 'images/Ivysaur.png',
            baseHP: 60,
            type: 'Grass',
            moves: [
                { name: 'Poison Powder', damage: 75, type: 'Poison', accuracy: 75 },
                { name: 'Take Down', damage: 90, type: 'Normal', accuracy: 85 },
                { name: 'Worry Seed', damage: 100, type: 'Grass', accuracy: 100 },
                { name: 'Growth', damage: 0, type: 'Grass', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 63, spAtk: 80, spDef: 80, speed: 60 }
        },
        {

name: 'Charmander',
            image: 'images/Charmander.png',
            baseHP: 39,
            type: 'Fire',
            moves: [
                { name: 'Scratch', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Ember', damage: 40, type: 'Fire', accuracy: 100 },
                { name: 'Fire Fang', damage: 65, type: 'Fire', accuracy: 95 },
                { name: 'Smokedcreen', damage: 0, type: 'Normal', accuracy: 100 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 43, spAtk: 60, spDef: 50, speed: 65 }
        },
        {
            name: 'Venusaur',
            image: 'images/venusaur.png',
            baseHP: 80,
            type: 'Grass',
            moves: [
                { name: 'Solar Beam', damage: 40, type: 'Grass', accuracy: 100 },
                { name: 'Tackle', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Vine Whip', damage: 20, type: 'Grass', accuracy: 100 },
                { name: 'Earthquake', damage: 50, type: 'Ground', accuracy: 100 }
            ],
            weakness: 'Fire',
            resistance: 'Water',
            baseStats: { defense: 83, spAtk: 100, spDef: 100, speed: 80 }
        },
        {
            name: 'Charmeleon',
            image: 'images/charmeleon.png',
            baseHP: 58,
            type: 'Fire',
            moves: [
                { name: 'Swift', damage: 60, type: 'Normal', accuracy: 70 },
                { name: 'Flame Charge', damage: 50, type: 'Fire', accuracy: 100 },
                { name: 'Brick Break', damage: 75, type: 'Fighting', accuracy: 100 },
                { name: 'Rock Slide', damage: 75, type: 'Rock', accuracy: 90 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 58, spAtk: 80, spDef: 65, speed: 80 }
        },
        {
            name: 'Mega Charizard X',
            image: 'images/mega charizard x.png',
            baseHP: 78,
            type: 'Dragon',
            moves: [
                { name: 'Dragon Breath', damage: 60, type: 'Dragon', accuracy: 100 },
                { name: 'Inferno', damage: 100, type: 'Fire', accuracy: 50 },
                { name: 'Fire Spin', damage: 20, type: 'Fire', accuracy: 85 },
                { name: 'Dragon Claw', damage: 50, type: 'Dragon', accuracy: 90 }
            ],
            weakness: 'Fairy',
            resistance: 'Dark',
            baseStats: { defense: 111, spAtk: 130, spDef: 85, speed: 100 }
        },
        {
            name: 'Mega Charizard Y',
            image: 'images/mega charizard y.png',
            baseHP: 78,
            type: 'Fire',
            moves: [
                { name: 'Flamethrower', damage: 40, type: 'Fire', accuracy: 100 },
                { name: 'Slash', damage: 30, type: 'Normal', accuracy: 95 },
                { name: 'Fire Spin', damage: 20, type: 'Fire', accuracy: 85 },
                { name: 'Dragon Claw', damage: 50, type: 'Dragon', accuracy: 90 }
            ],
            weakness: 'Water',
            resistance: 'Grass',
            baseStats: { defense: 78, spAtk: 159, spDef: 115, speed: 100 }
        },
        {
            name: 'Mega Blastoise',
            image: 'images/mega blastoise.png',
            baseHP: 79,
            type: 'Water',
            moves: [
                { name: 'Hydro Pump', damage: 40, type: 'Water', accuracy: 80 },
                { name: 'Bite', damage: 30, type: 'Dark', accuracy: 100 },
                { name: 'Water Gun', damage: 20, type: 'Water', accuracy: 100 },
                { name: 'Skull Bash', damage: 50, type: 'Normal', accuracy: 75 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 120, spAtk: 135, spDef: 115, speed: 78 }
       },
       {
            name: 'Squirtle',
            image: 'images/squirtle.png',
            baseHP: 44,
            type: 'Water',
            moves: [
                { name: 'Takle', damage: 40, type: 'Normal', accuracy: 100 },
                { name: 'Flip Turn', damage: 60, type: 'Water', accuracy: 100 },
                { name: 'Water Pulse', damage: 60, type: 'Water', accuracy: 100 },
                { name: 'Whirlpool', damage: 35, type: 'Water', accuracy: 85 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 65, spAtk: 50, spDef: 64, speed: 43 }
        },
        {
            name: 'Wartortle',
            image: 'images/wartortle.png',
            baseHP: 59,
            type: 'Water',
            moves: [
                { name: 'Rapid Spin', damage: 50, type: 'Normal', accuracy: 100 },
                { name: 'Aqua Tail', damage: 90, type: 'Water', accuracy: 90 },
                { name: 'Zen Headbutt', damage: 80, type: 'Psychic', accuracy: 90 },
                { name: 'Ice Punch', damage: 75, type: 'Water', accuracy: 100 }
            ],
            weakness: 'Electric',
            resistance: 'Fire',
            baseStats: { defense: 80, spAtk: 65, spDef: 80, speed: 58 }
        }

    ];


    let playerPokemon;
    let opponentPokemon;

    function getRandomLevel() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function calculateStat(baseStat, level) {
        return Math.floor((baseStat * level) / 50) + 5;
    }

    function selectRandomPokemon() {
        const pokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
        const level = getRandomLevel();
        pokemon.level = level;
        pokemon.hp = calculateStat(pokemon.baseHP, level);
        pokemon.stats = {
            defense: calculateStat(pokemon.baseStats.defense, level),
            spAtk: calculateStat(pokemon.baseStats.spAtk, level),
            spDef: calculateStat(pokemon.baseStats.spDef, level),
            speed: calculateStat(pokemon.baseStats.speed, level)
        };
        return pokemon;
    }

    function initializeBattle() {
        playerPokemon = selectRandomPokemon();
        opponentPokemon = selectRandomPokemon();

        playerImage.src = playerPokemon.image;
        playerName.textContent = playerPokemon.name;
        playerHPElement.textContent = playerPokemon.hp;
        playerLevelElement.textContent = playerPokemon.level;
        playerDefenseElement.textContent = playerPokemon.stats.defense;
        playerSpAtkElement.textContent = playerPokemon.stats.spAtk;
        playerSpDefElement.textContent = playerPokemon.stats.spDef;
        playerSpeedElement.textContent = playerPokemon.stats.speed;

        opponentImage.src = opponentPokemon.image;
        opponentName.textContent = opponentPokemon.name;
        opponentHPElement.textContent = opponentPokemon.hp;
        opponentLevelElement.textContent = opponentPokemon.level;
        opponentDefenseElement.textContent = opponentPokemon.stats.defense;
        opponentSpAtkElement.textContent = opponentPokemon.stats.spAtk;
        opponentSpDefElement.textContent = opponentPokemon.stats.spDef;
        opponentSpeedElement.textContent = opponentPokemon.stats.speed;

        document.querySelectorAll('.move-button').forEach((button, index) => {
            button.textContent = playerPokemon.moves[index].name;
            button.setAttribute('data-move', playerPokemon.moves[index].name);
            button.setAttribute('data-type', playerPokemon.moves[index].type);
        });
    }

    function calculateDamage(move, opponent) {
        let damage = move.damage;
        if (move.type === opponent.weakness) {
            damage *= 2;
        } else if (move.type === opponent.resistance) {
            damage -= 20;
            if (damage < 0) damage = 0;
        }
        return damage;
    }

    function attackOpponent(move) {
        const damage = calculateDamage(move, opponentPokemon);
        opponentPokemon.hp -= damage;
        if (opponentPokemon.hp < 0) opponentPokemon.hp = 0;
        opponentHPElement.textContent = opponentPokemon.hp;
        if (opponentPokemon.hp === 0) {
            alert('You defeated the opponent!');
            wins++;
            winsElement.textContent = wins;
            initializeBattle();
        } else {
            setTimeout(() => {
                aiAttack();
            }, 1000);
        }
    }

    function aiAttack() {
        const move = opponentPokemon.moves[Math.floor(Math.random() * opponentPokemon.moves.length)];
        const damage = calculateDamage(move, playerPokemon);
        playerPokemon.hp -= damage;
        if (playerPokemon.hp < 0) playerPokemon.hp = 0;
        playerHPElement.textContent = playerPokemon.hp;
        if (playerPokemon.hp === 0) {
            alert('You lost the battle!');
            losses++;
            lossesElement.textContent = losses;
            initializeBattle();
        }
    }

    document.querySelectorAll('.move-button').forEach(button => {
        button.addEventListener('click', () => {
            const moveName = button.getAttribute('data-move');
            const move = playerPokemon.moves.find(m => m.name === moveName);
            attackOpponent(move);
        });
    });

    initializeBattle();
});
