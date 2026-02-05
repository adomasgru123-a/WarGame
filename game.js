// ==================== GAME CONFIGURATION ====================

const API_URL = ''; // Empty for same server, or 'http://localhost:3000' for different server

// Available codes
const availableCodes = {
    'Free': { reward: 'army', amount: 10000, description: '+10,000 Army' },
    'Gogo': { reward: 'gold', amount: 10000, description: '+10,000 Gold' },
    'Gogojam': { reward: 'gold', amount: 100000, description: '+100,000 Gold' },
    'Justas': { reward: 'ships', amount: 1000, description: '+1,000 Battleships' },
    'Algirdas': { reward: 'gold', amount: 30000, description: '+30,000 Gold' }
};

// All countries data with FIXED power levels
const allCountries = [
    // Easy countries (difficulty 1)
    { name: 'Spain', flag: '🇪🇸', difficulty: 1, soldiers: 30, tanks: 0, planes: 0, ships: 0, drones: 0 },
    { name: 'France', flag: '🇫🇷', difficulty: 1, soldiers: 40, tanks: 0, planes: 0, ships: 0, drones: 0 },
    { name: 'Italy', flag: '🇮🇹', difficulty: 1, soldiers: 35, tanks: 0, planes: 0, ships: 0, drones: 0 },
    { name: 'Lithuania', flag: '🇱🇹', difficulty: 1, soldiers: 25, tanks: 0, planes: 0, ships: 0, drones: 0 },
    { name: 'Belgium', flag: '🇧🇪', difficulty: 1, soldiers: 30, tanks: 0, planes: 0, ships: 0, drones: 0 },
    // Medium countries (difficulty 2)
    { name: 'Germany', flag: '🇩🇪', difficulty: 2, soldiers: 100, tanks: 2, planes: 0, ships: 0, drones: 0 },
    { name: 'United Kingdom', flag: '🇬🇧', difficulty: 2, soldiers: 120, tanks: 1, planes: 1, ships: 0, drones: 0 },
    { name: 'Poland', flag: '🇵🇱', difficulty: 2, soldiers: 90, tanks: 2, planes: 0, ships: 0, drones: 0 },
    { name: 'Netherlands', flag: '🇳🇱', difficulty: 2, soldiers: 80, tanks: 1, planes: 1, ships: 1, drones: 0 },
    // Hard countries (difficulty 3)
    { name: 'Russia', flag: '🇷🇺', difficulty: 3, soldiers: 300, tanks: 5, planes: 3, ships: 2, drones: 1 },
    { name: 'China', flag: '🇨🇳', difficulty: 3, soldiers: 350, tanks: 4, planes: 4, ships: 2, drones: 2 },
    { name: 'Japan', flag: '🇯🇵', difficulty: 3, soldiers: 250, tanks: 3, planes: 6, ships: 4, drones: 3 },
    { name: 'Brazil', flag: '🇧🇷', difficulty: 3, soldiers: 280, tanks: 4, planes: 2, ships: 3, drones: 1 },
    // Very Hard countries (difficulty 4)
    { name: 'USA', flag: '🇺🇸', difficulty: 4, soldiers: 600, tanks: 10, planes: 15, ships: 8, drones: 10 },
    { name: 'India', flag: '🇮🇳', difficulty: 4, soldiers: 700, tanks: 8, planes: 6, ships: 5, drones: 5 },
    { name: 'South Korea', flag: '🇰🇷', difficulty: 4, soldiers: 500, tanks: 12, planes: 10, ships: 6, drones: 8 },
    // Boss countries (difficulty 5+)
    { name: 'Roman Empire', flag: '🏛️', difficulty: 5, isBoss: true, soldiers: 2000, tanks: 20, planes: 10, ships: 10, drones: 5 },
    { name: 'Mongol Empire', flag: '🐎', difficulty: 6, isBoss: true, soldiers: 4000, tanks: 30, planes: 20, ships: 15, drones: 10 },
    { name: 'Ottoman Empire', flag: '🌙', difficulty: 6, isBoss: true, soldiers: 3500, tanks: 35, planes: 25, ships: 20, drones: 15 },
    { name: 'British Empire', flag: '👑', difficulty: 7, isBoss: true, soldiers: 8000, tanks: 50, planes: 40, ships: 50, drones: 30 },
    { name: 'Galactic Federation', flag: '🌌', difficulty: 8, isBoss: true, isSuperboss: true, soldiers: 20000, tanks: 100, planes: 100, ships: 2000, drones: 500 }
];

// Quest definitions
const starterQuests = [
    { id: 'attack_country', name: 'Attack a country', reward: 100, check: () => gameState.battlesWon + gameState.battlesLost >= 1 },
    { id: 'buy_10_army', name: 'Buy +10 army from shop', reward: 300, check: () => gameState.totalPurchased >= 10 },
    { id: 'get_100_army', name: 'Get 100 army', reward: 500, check: () => gameState.army >= 100 }
];

const normalQuests = [
    { id: 'win_5_battles', name: 'Win 5 battles', reward: 800, check: () => gameState.battlesWon >= 5 },
    { id: 'get_500_army', name: 'Get 500 army', reward: 1500, check: () => gameState.army >= 500 },
    { id: 'spend_2000_gold', name: 'Spend 2000 gold in shop', reward: 1000, check: () => gameState.goldSpent >= 2000 }
];

const hardQuests = [
    { id: 'win_15_battles', name: 'Win 15 battles', reward: 2000, check: () => gameState.battlesWon >= 15 },
    { id: 'get_2000_army', name: 'Get 2000 army', reward: 5000, check: () => gameState.army >= 2000 },
    { id: 'spend_10000_gold', name: 'Spend 10000 gold in shop', reward: 3000, check: () => gameState.goldSpent >= 10000 }
];

// Countries for team selection
const teamCountries = [
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Lithuania', flag: '🇱🇹' },
    { name: 'Belgium', flag: '🇧🇪' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' }
];

// ==================== GAME STATE ====================

let gameState = {
    country: null,
    flag: null,
    gold: 1000,
    army: 10,
    tanks: 0,
    planes: 0,
    ships: 0,
    drones: 0,
    totalPurchased: 0,
    goldSpent: 0,
    battlesWon: 0,
    battlesLost: 0,
    questsCompleted: [],
    questLevel: 'starter',
    redeemedCodes: [],
    // Team data
    playerId: null,
    activeTeamCode: null,
    personalResources: null
};

// Attack state
let attackTarget = { name: '', flag: '', difficulty: 1, isBoss: false, isSuperboss: false };

// Team form state
let selectedPrivacy = 'public';
let generatedTeamCode = '';
let selectedTeamCountry = null;
let selectedTeamFlag = null;

// Sync interval
let syncInterval = null;

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});

async function initializeGame() {
    // Get or create player ID
    gameState.playerId = localStorage.getItem('warGame_playerId');
    if (!gameState.playerId) {
        try {
            const response = await fetch(API_URL + '/api/player/new');
            const data = await response.json();
            gameState.playerId = data.playerId;
            localStorage.setItem('warGame_playerId', gameState.playerId);
        } catch (e) {
            // Offline mode - generate local ID
            gameState.playerId = 'local_' + Date.now();
            localStorage.setItem('warGame_playerId', gameState.playerId);
        }
    }

    // Setup country selection
    const countryCards = document.querySelectorAll('.country-card');
    const startBtn = document.getElementById('start-btn');

    countryCards.forEach(card => {
        card.addEventListener('click', () => {
            countryCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            gameState.country = card.dataset.country;
            gameState.flag = card.dataset.flag;
            startBtn.classList.add('active');
        });
    });

    // Setup start button
    startBtn.addEventListener('click', startGame);

    // Setup modal close on outside click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}

// ==================== GAME START ====================

function startGame() {
    if (gameState.country) {
        // Load saved game
        loadGame(gameState.country, gameState.flag);

        // Show game screen
        document.getElementById('country-selection').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
        document.getElementById('player-flag').textContent = gameState.flag;
        document.getElementById('player-country').textContent = gameState.country;

        updateDisplays();
        saveGame();

        // Start passive income
        setInterval(() => {
            if (gameState.country) {
                gameState.gold += 10;
                updateDisplays();
                saveGame();
            }
        }, 5000);

        // If in a team, start syncing
        if (gameState.activeTeamCode) {
            startTeamSync();
        }
    }
}

// ==================== SAVE/LOAD ====================

function saveGame() {
    if (gameState.country) {
        const saveKey = 'warGame_' + gameState.country;
        localStorage.setItem(saveKey, JSON.stringify(gameState));

        // If in a team, sync to server
        if (gameState.activeTeamCode) {
            syncTeamResources();
        }
    }
}

function loadGame(country, flag) {
    const saveKey = 'warGame_' + country;
    const savedData = localStorage.getItem(saveKey);

    if (savedData) {
        const parsed = JSON.parse(savedData);
        gameState = {
            country: country,
            flag: flag,
            gold: parsed.gold !== undefined ? parsed.gold : 1000,
            army: parsed.army !== undefined ? parsed.army : 10,
            tanks: parsed.tanks !== undefined ? parsed.tanks : 0,
            planes: parsed.planes !== undefined ? parsed.planes : 0,
            ships: parsed.ships !== undefined ? parsed.ships : 0,
            drones: parsed.drones !== undefined ? parsed.drones : 0,
            totalPurchased: parsed.totalPurchased || 0,
            goldSpent: parsed.goldSpent || 0,
            battlesWon: parsed.battlesWon || 0,
            battlesLost: parsed.battlesLost || 0,
            questsCompleted: parsed.questsCompleted || [],
            questLevel: parsed.questLevel || 'starter',
            redeemedCodes: parsed.redeemedCodes || [],
            playerId: parsed.playerId || gameState.playerId,
            activeTeamCode: parsed.activeTeamCode || null,
            personalResources: parsed.personalResources || null
        };
    } else {
        gameState = {
            country: country,
            flag: flag,
            gold: 1000,
            army: 10,
            tanks: 0,
            planes: 0,
            ships: 0,
            drones: 0,
            totalPurchased: 0,
            goldSpent: 0,
            battlesWon: 0,
            battlesLost: 0,
            questsCompleted: [],
            questLevel: 'starter',
            redeemedCodes: [],
            playerId: gameState.playerId,
            activeTeamCode: null,
            personalResources: null
        };
    }
}

// ==================== DISPLAY UPDATES ====================

function updateDisplays() {
    document.getElementById('gold-display').textContent = gameState.gold;
    document.getElementById('army-display').textContent = gameState.army;
    document.getElementById('army-header-display').textContent = gameState.army;
    document.getElementById('tanks-display').textContent = gameState.tanks;
    document.getElementById('tanks-header-display').textContent = gameState.tanks;
    document.getElementById('planes-display').textContent = gameState.planes;
    document.getElementById('planes-header-display').textContent = gameState.planes;
    document.getElementById('ships-display').textContent = gameState.ships;
    document.getElementById('ships-header-display').textContent = gameState.ships;
    document.getElementById('drones-display').textContent = gameState.drones;
    document.getElementById('drones-header-display').textContent = gameState.drones;
    document.getElementById('stat-country').textContent = gameState.country;
    document.getElementById('stat-gold').textContent = gameState.gold;
    document.getElementById('stat-army').textContent = gameState.army;
    document.getElementById('stat-tanks').textContent = gameState.tanks;
    document.getElementById('stat-planes').textContent = gameState.planes;
    document.getElementById('stat-ships').textContent = gameState.ships;
    document.getElementById('stat-drones').textContent = gameState.drones;
    document.getElementById('stat-purchased').textContent = gameState.totalPurchased;
    document.getElementById('stat-spent').textContent = gameState.goldSpent;
    document.getElementById('stat-won').textContent = gameState.battlesWon || 0;
    document.getElementById('stat-lost').textContent = gameState.battlesLost || 0;

    // Update team indicator
    const teamIndicator = document.getElementById('team-indicator');
    if (gameState.activeTeamCode) {
        teamIndicator.textContent = '👥 Team Mode';
        teamIndicator.classList.add('active');
    } else {
        teamIndicator.classList.remove('active');
    }
}

// ==================== MODAL FUNCTIONS ====================

function openModal(type) {
    if (type === 'attack') {
        generateEnemyList();
    }
    if (type === 'quests') {
        renderQuests();
    }
    if (type === 'code') {
        renderRedeemedCodes();
        document.getElementById('code-input').value = '';
        document.getElementById('code-message').className = 'code-message';
    }
    if (type === 'team') {
        renderTeamContent();
    }
    document.getElementById(type + '-modal').classList.add('active');
    updateDisplays();
}

function closeModal(type) {
    document.getElementById(type + '-modal').classList.remove('active');
}

// ==================== SHOP FUNCTIONS ====================

function buyArmy(amount, cost) {
    if (gameState.gold >= cost) {
        gameState.gold -= cost;
        gameState.army += amount;
        gameState.totalPurchased += amount;
        gameState.goldSpent += cost;
        updateDisplays();
        saveGame();
    } else {
        alert('Not enough gold!');
    }
}

function buyUnit(unitType, amount, cost) {
    if (gameState.gold >= cost) {
        gameState.gold -= cost;
        gameState[unitType] += amount;
        gameState.goldSpent += cost;
        updateDisplays();
        saveGame();
    } else {
        alert('Not enough gold!');
    }
}

// ==================== SETTINGS ====================

function toggleSetting(btn) {
    btn.classList.toggle('active');
}

function resetGame() {
    if (confirm('Are you sure you want to reset the game?')) {
        if (gameState.country) {
            localStorage.removeItem('warGame_' + gameState.country);
        }

        gameState = {
            country: null,
            flag: null,
            gold: 1000,
            army: 10,
            tanks: 0,
            planes: 0,
            ships: 0,
            drones: 0,
            totalPurchased: 0,
            goldSpent: 0,
            battlesWon: 0,
            battlesLost: 0,
            questsCompleted: [],
            questLevel: 'starter',
            redeemedCodes: [],
            playerId: gameState.playerId,
            activeTeamCode: null,
            personalResources: null
        };

        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('country-selection').style.display = 'flex';
        document.querySelectorAll('.country-card').forEach(c => c.classList.remove('selected'));
        document.getElementById('start-btn').classList.remove('active');
        closeModal('settings');
    }
}

// ==================== ATTACK SYSTEM ====================

function generateEnemyList() {
    const container = document.getElementById('attack-countries-list');
    container.innerHTML = '';

    const sortedCountries = [...allCountries].sort((a, b) => a.difficulty - b.difficulty);

    sortedCountries.forEach(country => {
        if (country.name !== gameState.country) {
            const enemyDiv = document.createElement('div');
            let extraClass = '';
            if (country.isSuperboss) extraClass = ' superboss-country';
            else if (country.isBoss) extraClass = ' boss-country';
            enemyDiv.className = 'enemy-country' + extraClass;

            let diffLabel = '';
            let diffClass = '';
            switch(country.difficulty) {
                case 1: diffLabel = '⭐ Easy'; diffClass = 'diff-easy'; break;
                case 2: diffLabel = '⭐⭐ Medium'; diffClass = 'diff-medium'; break;
                case 3: diffLabel = '⭐⭐⭐ Hard'; diffClass = 'diff-hard'; break;
                case 4: diffLabel = '⭐⭐⭐⭐ Very Hard'; diffClass = 'diff-veryhard'; break;
                case 5: diffLabel = '💀 BOSS'; diffClass = 'diff-boss'; break;
                case 6: diffLabel = '🔥 LEGENDARY'; diffClass = 'diff-legendary'; break;
                case 7: diffLabel = '⚡ MYTHIC'; diffClass = 'diff-mythic'; break;
                case 8: diffLabel = '☠️ IMPOSSIBLE'; diffClass = 'diff-impossible'; break;
            }

            // Calculate total power (drones = 150 power each)
            const totalPower = country.soldiers + (country.tanks * 50) + (country.planes * 75) + (country.ships * 100) + (country.drones * 150);

            enemyDiv.innerHTML = `
                <div class="enemy-info">
                    <span class="enemy-flag">${country.flag}</span>
                    <div>
                        <div class="enemy-name">${country.name}</div>
                        <div class="enemy-difficulty ${diffClass}">${diffLabel}</div>
                        <div class="enemy-army">⚔️${country.soldiers} 🛡️${country.tanks} ✈️${country.planes} 🚢${country.ships} 🤖${country.drones} = 💪${totalPower}</div>
                    </div>
                </div>
                <button class="attack-country-btn ${country.isSuperboss ? 'superboss-attack-btn' : (country.isBoss ? 'boss-attack-btn' : '')}" onclick="selectTarget('${country.name}', '${country.flag}', ${country.difficulty}, ${country.isBoss || false}, ${country.isSuperboss || false})">⚔️ Attack</button>
            `;
            container.appendChild(enemyDiv);
        }
    });
}

function selectTarget(name, flag, difficulty = 1, isBoss = false, isSuperboss = false) {
    attackTarget = { name, flag, difficulty, isBoss, isSuperboss };
    closeModal('attack');

    document.getElementById('target-country-name').textContent = name;
    document.getElementById('target-country-flag').textContent = flag;
    document.getElementById('available-soldiers').textContent = gameState.army;
    document.getElementById('available-tanks').textContent = gameState.tanks;
    document.getElementById('available-planes').textContent = gameState.planes;
    document.getElementById('available-ships').textContent = gameState.ships;
    document.getElementById('available-drones').textContent = gameState.drones;
    document.getElementById('soldiers-input').value = Math.min(10, gameState.army);
    document.getElementById('soldiers-input').max = gameState.army;
    document.getElementById('tanks-input').value = 0;
    document.getElementById('planes-input').value = 0;
    document.getElementById('ships-input').value = 0;
    document.getElementById('drones-input').value = 0;

    updateTotalPower();
    openModal('attack-setup');
}

function adjustSoldiers(amount) {
    const input = document.getElementById('soldiers-input');
    let newValue = parseInt(input.value) + amount;
    newValue = Math.max(1, Math.min(newValue, gameState.army));
    input.value = newValue;
    updateTotalPower();
}

function adjustUnit(unitType, amount) {
    const input = document.getElementById(unitType + '-input');
    let newValue = parseInt(input.value) + amount;
    newValue = Math.max(0, Math.min(newValue, gameState[unitType]));
    input.value = newValue;
    updateTotalPower();
}

function setMaxSoldiers() {
    document.getElementById('soldiers-input').value = gameState.army;
    updateTotalPower();
}

function setMaxUnit(unitType) {
    document.getElementById(unitType + '-input').value = gameState[unitType];
    updateTotalPower();
}

function updateTotalPower() {
    const soldiers = parseInt(document.getElementById('soldiers-input').value) || 0;
    const tanks = parseInt(document.getElementById('tanks-input').value) || 0;
    const planes = parseInt(document.getElementById('planes-input').value) || 0;
    const ships = parseInt(document.getElementById('ships-input').value) || 0;
    const drones = parseInt(document.getElementById('drones-input').value) || 0;
    const totalPower = soldiers + (tanks * 50) + (planes * 75) + (ships * 100) + (drones * 150);
    document.getElementById('total-power').textContent = totalPower;
}

function launchAttack() {
    const soldiersSent = parseInt(document.getElementById('soldiers-input').value) || 0;
    const tanksSent = parseInt(document.getElementById('tanks-input').value) || 0;
    const planesSent = parseInt(document.getElementById('planes-input').value) || 0;
    const shipsSent = parseInt(document.getElementById('ships-input').value) || 0;
    const dronesSent = parseInt(document.getElementById('drones-input').value) || 0;

    if (soldiersSent < 1) {
        alert('You must send at least 1 soldier!');
        return;
    }
    if (soldiersSent > gameState.army || tanksSent > gameState.tanks ||
        planesSent > gameState.planes || shipsSent > gameState.ships || dronesSent > gameState.drones) {
        alert('Not enough units!');
        return;
    }

    closeModal('attack-setup');

    // Show attacking progress screen
    document.getElementById('attacking-target-display').textContent = `${attackTarget.flag} ${attackTarget.name}`;
    openModal('attacking');

    // Animate progress bar
    let progress = 0;
    const progressBar = document.getElementById('attack-progress-bar');
    const progressText = document.getElementById('attack-progress-text');
    const statusText = document.getElementById('attacking-status');

    const statusMessages = ['Preparing forces...', 'Deploying troops...', 'Engaging enemy...', 'Battle in progress...', 'Finalizing assault...'];

    const interval = setInterval(() => {
        progress += 2;
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';

        if (progress <= 20) statusText.textContent = statusMessages[0];
        else if (progress <= 40) statusText.textContent = statusMessages[1];
        else if (progress <= 60) statusText.textContent = statusMessages[2];
        else if (progress <= 80) statusText.textContent = statusMessages[3];
        else statusText.textContent = statusMessages[4];

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                closeModal('attacking');
                processBattleResult(soldiersSent, tanksSent, planesSent, shipsSent, dronesSent);
            }, 300);
        }
    }, 100);
}

function processBattleResult(soldiersSent, tanksSent, planesSent, shipsSent, dronesSent) {
    // Calculate player power (drones = 150)
    const playerPower = soldiersSent + (tanksSent * 50) + (planesSent * 75) + (shipsSent * 100) + (dronesSent * 150);

    // Get fixed enemy forces
    const countryData = allCountries.find(c => c.name === attackTarget.name);
    const difficulty = attackTarget.difficulty || 1;
    const isBoss = attackTarget.isBoss || false;
    const isSuperboss = attackTarget.isSuperboss || false;

    const enemySoldiers = countryData ? countryData.soldiers : 30;
    const enemyTanks = countryData ? countryData.tanks : 0;
    const enemyPlanes = countryData ? countryData.planes : 0;
    const enemyShips = countryData ? countryData.ships : 0;
    const enemyDrones = countryData ? countryData.drones : 0;

    const enemyPower = enemySoldiers + (enemyTanks * 50) + (enemyPlanes * 75) + (enemyShips * 100) + (enemyDrones * 150);

    // Battle calculation
    const powerRatio = playerPower / Math.max(enemyPower, 1);
    const playerBonus = Math.floor(playerPower * 0.1 * Math.min(powerRatio, 3));
    const playerRoll = playerPower + playerBonus + Math.floor(Math.random() * 100);
    const enemyRoll = enemyPower + Math.floor(Math.random() * (50 + difficulty * 20));

    const victory = playerRoll > enemyRoll;

    let losses = {}, gained = {}, goldReward;

    if (victory) {
        losses.soldiers = Math.floor(soldiersSent * (0.1 + Math.random() * 0.2));
        losses.tanks = Math.floor(tanksSent * Math.random() * 0.2);
        losses.planes = Math.floor(planesSent * Math.random() * 0.2);
        losses.ships = Math.floor(shipsSent * Math.random() * 0.15);
        losses.drones = Math.floor(dronesSent * Math.random() * 0.15);

        gained.soldiers = Math.floor(enemySoldiers * 0.5);
        gained.tanks = Math.floor(enemyTanks * 0.3);
        gained.planes = Math.floor(enemyPlanes * 0.25);
        gained.ships = Math.floor(enemyShips * 0.2);
        gained.drones = Math.floor(enemyDrones * 0.2);

        const baseGold = 200 * difficulty * difficulty;
        const bonusGold = Math.floor(Math.random() * 500 * difficulty);
        let bossGoldBonus = 0;
        if (isSuperboss) bossGoldBonus = 50000;
        else if (difficulty >= 7) bossGoldBonus = 20000;
        else if (difficulty >= 6) bossGoldBonus = 10000;
        else if (isBoss) bossGoldBonus = 5000;
        goldReward = baseGold + bonusGold + bossGoldBonus;

        gameState.army = gameState.army - losses.soldiers + gained.soldiers;
        gameState.tanks = gameState.tanks - losses.tanks + gained.tanks;
        gameState.planes = gameState.planes - losses.planes + gained.planes;
        gameState.ships = gameState.ships - losses.ships + gained.ships;
        gameState.drones = gameState.drones - losses.drones + gained.drones;
        gameState.gold += goldReward;
        gameState.battlesWon = (gameState.battlesWon || 0) + 1;
    } else {
        losses.soldiers = Math.floor(soldiersSent * (0.4 + Math.random() * 0.3));
        losses.tanks = Math.floor(tanksSent * (0.3 + Math.random() * 0.3));
        losses.planes = Math.floor(planesSent * (0.3 + Math.random() * 0.3));
        losses.ships = Math.floor(shipsSent * (0.25 + Math.random() * 0.25));
        losses.drones = Math.floor(dronesSent * (0.25 + Math.random() * 0.25));
        gained = { soldiers: 0, tanks: 0, planes: 0, ships: 0, drones: 0 };
        goldReward = 0;

        gameState.army = Math.max(1, gameState.army - losses.soldiers);
        gameState.tanks = Math.max(0, gameState.tanks - losses.tanks);
        gameState.planes = Math.max(0, gameState.planes - losses.planes);
        gameState.ships = Math.max(0, gameState.ships - losses.ships);
        gameState.drones = Math.max(0, gameState.drones - losses.drones);
        gameState.battlesLost = (gameState.battlesLost || 0) + 1;
    }

    showBattleResult(victory, attackTarget.name, attackTarget.flag,
        { soldiers: enemySoldiers, tanks: enemyTanks, planes: enemyPlanes, ships: enemyShips, drones: enemyDrones, power: enemyPower },
        losses, gained, goldReward);
    updateDisplays();
    saveGame();
}

function showBattleResult(victory, enemyName, enemyFlag, enemyForces, losses, gained, goldReward) {
    const resultDiv = document.getElementById('battle-result');
    const title = document.getElementById('battle-title');

    title.textContent = victory ? '🎉 Victory!' : '💀 Defeat!';

    resultDiv.innerHTML = `
        <div class="battle-result-content">
            <div class="battle-icon">${victory ? '🏆' : '💔'}</div>
            <div class="battle-status ${victory ? 'victory' : 'defeat'}">
                ${victory ? 'You Won!' : 'You Lost!'}
            </div>
            <p>Battle against ${enemyFlag} ${enemyName}</p>

            <div class="enemy-forces">
                <div class="enemy-forces-title">Enemy Forces:</div>
                <div class="battle-detail-row"><span>⚔️ Soldiers</span><span>${enemyForces.soldiers}</span></div>
                <div class="battle-detail-row"><span>🛡️ Tanks</span><span>${enemyForces.tanks}</span></div>
                <div class="battle-detail-row"><span>✈️ Planes</span><span>${enemyForces.planes}</span></div>
                <div class="battle-detail-row"><span>🚢 Ships</span><span>${enemyForces.ships}</span></div>
                <div class="battle-detail-row"><span>🤖 Drones</span><span>${enemyForces.drones}</span></div>
                <div class="battle-detail-row"><span>💪 Total Power</span><span>${enemyForces.power}</span></div>
            </div>

            <div class="battle-details">
                <div class="battle-detail-row"><span>Soldier Losses</span><span class="battle-loss">-${losses.soldiers}</span></div>
                ${losses.tanks > 0 ? `<div class="battle-detail-row"><span>Tank Losses</span><span class="battle-loss">-${losses.tanks}</span></div>` : ''}
                ${losses.planes > 0 ? `<div class="battle-detail-row"><span>Plane Losses</span><span class="battle-loss">-${losses.planes}</span></div>` : ''}
                ${losses.ships > 0 ? `<div class="battle-detail-row"><span>Ship Losses</span><span class="battle-loss">-${losses.ships}</span></div>` : ''}
                ${losses.drones > 0 ? `<div class="battle-detail-row"><span>Drone Losses</span><span class="battle-loss">-${losses.drones}</span></div>` : ''}
                ${victory ? `
                <div class="battle-detail-row"><span>Soldiers Captured</span><span class="battle-reward">+${gained.soldiers}</span></div>
                ${gained.tanks > 0 ? `<div class="battle-detail-row"><span>Tanks Captured</span><span class="battle-reward">+${gained.tanks}</span></div>` : ''}
                ${gained.planes > 0 ? `<div class="battle-detail-row"><span>Planes Captured</span><span class="battle-reward">+${gained.planes}</span></div>` : ''}
                ${gained.ships > 0 ? `<div class="battle-detail-row"><span>Ships Captured</span><span class="battle-reward">+${gained.ships}</span></div>` : ''}
                ${gained.drones > 0 ? `<div class="battle-detail-row"><span>Drones Captured</span><span class="battle-reward">+${gained.drones}</span></div>` : ''}
                <div class="battle-detail-row"><span>Gold Looted</span><span class="battle-reward">+${goldReward}</span></div>
                ` : ''}
                <div class="battle-detail-row" style="border-top: 1px solid rgba(255,255,255,0.2); margin-top: 10px; padding-top: 15px;">
                    <span>Your Forces Now</span>
                    <span>⚔️${gameState.army} 🛡️${gameState.tanks} ✈️${gameState.planes} 🚢${gameState.ships} 🤖${gameState.drones}</span>
                </div>
            </div>
        </div>
    `;

    openModal('battle');
}

// ==================== QUESTS ====================

function getCurrentQuests() {
    if (gameState.questLevel === 'starter') return starterQuests;
    if (gameState.questLevel === 'normal') return normalQuests;
    if (gameState.questLevel === 'hard') return hardQuests;
    return [];
}

function getQuestLevelTitle() {
    if (gameState.questLevel === 'starter') return '🌟 Starter Quests';
    if (gameState.questLevel === 'normal') return '⚔️ Normal Quests';
    if (gameState.questLevel === 'hard') return '🔥 Hard Quests';
    return '🏆 All Quests Completed!';
}

function checkQuestLevelComplete() {
    const quests = getCurrentQuests();
    const allCompleted = quests.every(q => gameState.questsCompleted.includes(q.id));

    if (allCompleted) {
        if (gameState.questLevel === 'starter') gameState.questLevel = 'normal';
        else if (gameState.questLevel === 'normal') gameState.questLevel = 'hard';
        else if (gameState.questLevel === 'hard') gameState.questLevel = 'completed';
    }
}

function renderQuests() {
    const container = document.getElementById('quests-content');
    const quests = getCurrentQuests();
    const title = getQuestLevelTitle();

    if (gameState.questLevel === 'completed') {
        container.innerHTML = `
            <div class="quest-category">
                <div class="quest-category-title">🏆 All Quests Completed!</div>
                <p style="text-align: center; opacity: 0.8; padding: 20px;">
                    Congratulations! You have completed all quests!
                </p>
            </div>
        `;
        return;
    }

    let html = `<div class="quest-category"><div class="quest-category-title">${title}</div>`;

    quests.forEach(quest => {
        const isComplete = quest.check();
        const isClaimed = gameState.questsCompleted.includes(quest.id);

        html += `
            <div class="quest-item ${isClaimed ? 'completed' : ''}">
                <div class="quest-info">
                    <div class="quest-name">${quest.name}</div>
                    <div class="quest-progress">${isComplete ? '✅ Completed' : '⏳ In Progress'}</div>
                </div>
                ${isClaimed
                    ? '<span class="quest-check">✓</span>'
                    : isComplete
                        ? `<button class="claim-btn" onclick="claimQuest('${quest.id}', ${quest.reward})">Claim 💰${quest.reward}</button>`
                        : `<span class="quest-reward">💰 ${quest.reward}</span>`
                }
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function claimQuest(questId, reward) {
    if (!gameState.questsCompleted.includes(questId)) {
        gameState.questsCompleted.push(questId);
        gameState.gold += reward;
        checkQuestLevelComplete();
        renderQuests();
        updateDisplays();
        saveGame();
    }
}

// ==================== CODE REDEMPTION ====================

function redeemCode() {
    const input = document.getElementById('code-input');
    const message = document.getElementById('code-message');
    const code = input.value.trim();

    message.className = 'code-message';
    message.textContent = '';

    if (!code) {
        message.className = 'code-message error';
        message.textContent = 'Please enter a code!';
        return;
    }

    if (gameState.redeemedCodes && gameState.redeemedCodes.includes(code)) {
        message.className = 'code-message error';
        message.textContent = 'Code already redeemed!';
        return;
    }

    if (availableCodes[code]) {
        const codeData = availableCodes[code];

        if (codeData.reward === 'army') gameState.army += codeData.amount;
        else if (codeData.reward === 'gold') gameState.gold += codeData.amount;
        else if (codeData.reward === 'tanks') gameState.tanks += codeData.amount;
        else if (codeData.reward === 'planes') gameState.planes += codeData.amount;
        else if (codeData.reward === 'ships') gameState.ships += codeData.amount;
        else if (codeData.reward === 'drones') gameState.drones += codeData.amount;

        if (!gameState.redeemedCodes) gameState.redeemedCodes = [];
        gameState.redeemedCodes.push(code);

        message.className = 'code-message success';
        message.textContent = `Code redeemed! ${codeData.description}`;
        input.value = '';

        updateDisplays();
        saveGame();
        renderRedeemedCodes();
    } else {
        message.className = 'code-message error';
        message.textContent = 'Invalid code!';
    }
}

function renderRedeemedCodes() {
    const list = document.getElementById('redeemed-list');
    if (!gameState.redeemedCodes || gameState.redeemedCodes.length === 0) {
        list.innerHTML = '<p style="opacity: 0.5;">No codes redeemed yet</p>';
    } else {
        list.innerHTML = gameState.redeemedCodes.map(code => {
            const codeData = availableCodes[code];
            const desc = codeData ? codeData.description : 'Unknown reward';
            return `<div class="redeemed-code-item">✓ ${code} - ${desc}</div>`;
        }).join('');
    }
}

// ==================== TEAM SYSTEM ====================

async function renderTeamContent() {
    const container = document.getElementById('team-content');

    let html = '';

    // Show current mode
    if (gameState.activeTeamCode) {
        try {
            const response = await fetch(API_URL + '/api/teams/' + gameState.activeTeamCode);
            const data = await response.json();
            if (data.success) {
                const team = data.team;
                html += `
                    <div class="current-mode team-mode">
                        <div class="mode-title">🎮 Playing as Team</div>
                        <div class="mode-team-name">${team.flag} ${team.name}</div>
                        <div class="mode-resources">
                            <span>💰 ${gameState.gold}</span>
                            <span>⚔️ ${gameState.army}</span>
                            <span>🛡️ ${gameState.tanks}</span>
                            <span>✈️ ${gameState.planes}</span>
                            <span>🚢 ${gameState.ships}</span>
                            <span>🤖 ${gameState.drones}</span>
                        </div>
                        <div class="mode-info">👥 ${team.members.length} member(s) • Code: ${team.code}</div>
                        <div class="mode-info">Resources are shared in real-time!</div>
                        <button class="leave-team-btn" onclick="leaveTeam()">🚪 Leave Team</button>
                    </div>
                `;
            }
        } catch (e) {
            html += `<div class="current-mode team-mode"><div class="mode-title">⚠️ Server Offline</div></div>`;
        }
    } else {
        html += `
            <div class="current-mode solo-mode">
                <div class="mode-title">👤 Playing Solo</div>
                <div class="mode-resources">
                    <span>💰 ${gameState.gold}</span>
                    <span>⚔️ ${gameState.army}</span>
                    <span>🛡️ ${gameState.tanks}</span>
                    <span>✈️ ${gameState.planes}</span>
                    <span>🚢 ${gameState.ships}</span>
                    <span>🤖 ${gameState.drones}</span>
                </div>
                <div class="mode-info">Create or join a team to share resources!</div>
            </div>
        `;
    }

    // Show public teams
    try {
        const response = await fetch(API_URL + '/api/teams');
        const data = await response.json();
        if (data.success && data.teams.length > 0) {
            html += '<div class="teams-section-title">Public Teams:</div>';
            html += '<div class="teams-list">';
            data.teams.forEach(team => {
                const isActive = gameState.activeTeamCode === team.code;
                html += `
                    <div class="team-list-item ${isActive ? 'active' : ''}">
                        <div class="team-list-info">
                            <span class="team-list-flag">${team.flag}</span>
                            <div class="team-list-details">
                                <div class="team-list-name">${team.name}</div>
                                <div class="team-list-desc">${team.description || 'No description'}</div>
                                <div class="team-resources-preview">💰${team.gold} ⚔️${team.army} 🛡️${team.tanks} ✈️${team.planes} 🚢${team.ships} 🤖${team.drones || 0}</div>
                                <div class="team-members-count">👥 ${team.memberCount} member(s)</div>
                            </div>
                        </div>
                        <button class="team-join-btn ${isActive ? 'active' : ''}" onclick="${isActive ? '' : `joinTeamByCode('${team.code}')`}">
                            ${isActive ? '✓ Active' : '→ Join'}
                        </button>
                    </div>
                `;
            });
            html += '</div>';
        }
    } catch (e) {
        // Server offline - don't show public teams
    }

    // Show create/join buttons
    html += `
        <div class="team-options" style="margin-top: 15px;">
            <button class="team-option-btn create-btn" onclick="openCreateTeam()">✨ Create Team</button>
            <button class="team-option-btn join-btn" onclick="openJoinTeam()">🔗 Join by Code</button>
        </div>
    `;

    container.innerHTML = html;
}

function openCreateTeam() {
    closeModal('team');
    document.getElementById('team-name-input').value = '';
    document.getElementById('team-desc-input').value = '';
    selectedTeamCountry = null;
    selectedTeamFlag = null;
    selectPrivacy('public');
    populateTeamCountrySelect();
    openModal('create-team');
}

function openJoinTeam() {
    closeModal('team');
    document.getElementById('join-team-code').value = '';
    document.getElementById('join-team-message').className = 'code-message';
    openModal('join-team');
}

function populateTeamCountrySelect() {
    const container = document.getElementById('team-country-select');
    container.innerHTML = teamCountries.map(country => `
        <div class="country-select-option" onclick="selectTeamCountry('${country.name}', '${country.flag}', this)">
            <span class="country-select-flag">${country.flag}</span>
            <span class="country-select-name">${country.name}</span>
        </div>
    `).join('');
}

function selectTeamCountry(name, flag, element) {
    selectedTeamCountry = name;
    selectedTeamFlag = flag;
    document.querySelectorAll('.country-select-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
}

function selectPrivacy(privacy) {
    selectedPrivacy = privacy;
    document.getElementById('privacy-public').classList.toggle('selected', privacy === 'public');
    document.getElementById('privacy-private').classList.toggle('selected', privacy === 'private');

    const codeContainer = document.getElementById('team-code-container');
    if (privacy === 'private') {
        codeContainer.style.display = 'block';
    } else {
        codeContainer.style.display = 'none';
    }
}

async function createTeam() {
    const name = document.getElementById('team-name-input').value.trim();
    const description = document.getElementById('team-desc-input').value.trim();

    if (!name) {
        alert('Please enter a team name!');
        return;
    }

    if (!selectedTeamCountry) {
        alert('Please select a country for your team!');
        return;
    }

    // Save personal resources
    if (!gameState.activeTeamCode) {
        gameState.personalResources = {
            gold: gameState.gold,
            army: gameState.army,
            tanks: gameState.tanks,
            planes: gameState.planes,
            ships: gameState.ships,
            drones: gameState.drones
        };
    }

    try {
        const response = await fetch(API_URL + '/api/teams/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                description: description,
                country: selectedTeamCountry,
                flag: selectedTeamFlag,
                isPrivate: selectedPrivacy === 'private',
                creatorId: gameState.playerId,
                initialResources: {
                    gold: gameState.gold,
                    army: gameState.army,
                    tanks: gameState.tanks,
                    planes: gameState.planes,
                    ships: gameState.ships,
                    drones: gameState.drones
                }
            })
        });

        const data = await response.json();
        if (data.success) {
            gameState.activeTeamCode = data.team.code;
            document.getElementById('generated-team-code').textContent = data.team.code;

            if (selectedPrivacy === 'private') {
                alert(`Team created! Your code is: ${data.team.code}`);
            }

            saveGame();
            startTeamSync();
            closeModal('create-team');
            openModal('team');
        } else {
            alert('Failed to create team: ' + data.error);
        }
    } catch (e) {
        alert('Server offline. Cannot create team.');
    }
}

async function joinTeamByCode(code) {
    if (!code) {
        code = document.getElementById('join-team-code').value.trim();
    }

    const message = document.getElementById('join-team-message');

    if (!code || code.length !== 5) {
        if (message) {
            message.className = 'code-message error';
            message.textContent = 'Please enter a valid 5-digit code!';
        }
        return;
    }

    // Save personal resources
    if (!gameState.activeTeamCode) {
        gameState.personalResources = {
            gold: gameState.gold,
            army: gameState.army,
            tanks: gameState.tanks,
            planes: gameState.planes,
            ships: gameState.ships,
            drones: gameState.drones
        };
    }

    try {
        const response = await fetch(API_URL + '/api/teams/join', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: code,
                playerId: gameState.playerId
            })
        });

        const data = await response.json();
        if (data.success) {
            gameState.activeTeamCode = code;

            // Load team resources
            gameState.gold = data.team.gold;
            gameState.army = data.team.army;
            gameState.tanks = data.team.tanks;
            gameState.planes = data.team.planes;
            gameState.ships = data.team.ships;
            gameState.drones = data.team.drones || 0;

            if (message) {
                message.className = 'code-message success';
                message.textContent = 'Successfully joined team!';
            }

            saveGame();
            updateDisplays();
            startTeamSync();

            setTimeout(() => {
                closeModal('join-team');
                openModal('team');
            }, 1000);
        } else {
            if (message) {
                message.className = 'code-message error';
                message.textContent = data.error || 'Team not found!';
            }
        }
    } catch (e) {
        if (message) {
            message.className = 'code-message error';
            message.textContent = 'Server offline. Cannot join team.';
        }
    }
}

async function leaveTeam() {
    if (!gameState.activeTeamCode) return;

    try {
        await fetch(API_URL + '/api/teams/leave', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: gameState.activeTeamCode,
                playerId: gameState.playerId
            })
        });
    } catch (e) {
        // Continue even if server offline
    }

    // Stop syncing
    if (syncInterval) {
        clearInterval(syncInterval);
        syncInterval = null;
    }

    gameState.activeTeamCode = null;

    // Restore personal resources
    if (gameState.personalResources) {
        gameState.gold = gameState.personalResources.gold;
        gameState.army = gameState.personalResources.army;
        gameState.tanks = gameState.personalResources.tanks;
        gameState.planes = gameState.personalResources.planes;
        gameState.ships = gameState.personalResources.ships;
        gameState.drones = gameState.personalResources.drones || 0;
    }

    saveGame();
    updateDisplays();
    renderTeamContent();
}

// ==================== TEAM SYNC ====================

function startTeamSync() {
    if (syncInterval) clearInterval(syncInterval);

    // Sync every 3 seconds
    syncInterval = setInterval(async () => {
        if (gameState.activeTeamCode) {
            await fetchTeamResources();
        }
    }, 3000);
}

async function syncTeamResources() {
    if (!gameState.activeTeamCode) return;

    try {
        await fetch(API_URL + '/api/teams/' + gameState.activeTeamCode + '/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gold: gameState.gold,
                army: gameState.army,
                tanks: gameState.tanks,
                planes: gameState.planes,
                ships: gameState.ships,
                drones: gameState.drones,
                battlesWon: gameState.battlesWon,
                battlesLost: gameState.battlesLost
            })
        });
    } catch (e) {
        // Offline - will sync later
    }
}

async function fetchTeamResources() {
    if (!gameState.activeTeamCode) return;

    try {
        const response = await fetch(API_URL + '/api/teams/' + gameState.activeTeamCode);
        const data = await response.json();

        if (data.success) {
            const team = data.team;

            // Update local state with server data
            gameState.gold = team.gold;
            gameState.army = team.army;
            gameState.tanks = team.tanks;
            gameState.planes = team.planes;
            gameState.ships = team.ships;
            gameState.drones = team.drones || 0;

            updateDisplays();

            // Show sync indicator
            const syncIndicator = document.getElementById('sync-indicator');
            if (syncIndicator) {
                syncIndicator.classList.add('active');
                setTimeout(() => syncIndicator.classList.remove('active'), 1000);
            }
        }
    } catch (e) {
        // Offline - use local data
    }
}
