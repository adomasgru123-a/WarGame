const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

// Database file path
const DB_FILE = path.join(__dirname, 'database.json');

// Initialize database if it doesn't exist
function initDatabase() {
    if (!fs.existsSync(DB_FILE)) {
        const initialData = {
            teams: {},  // team code -> team data
            players: {} // player id -> player data
        };
        fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
    }
}

// Read database
function readDB() {
    initDatabase();
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
}

// Write database
function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// Generate unique team code
function generateTeamCode() {
    return String(Math.floor(10000 + Math.random() * 90000));
}

// Generate unique player ID
function generatePlayerId() {
    return 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// ==================== API ROUTES ====================

// Create a new team
app.post('/api/teams/create', (req, res) => {
    const { name, description, country, flag, isPrivate, creatorId, initialResources } = req.body;

    if (!name || !country || !flag) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const db = readDB();

    // Generate unique code
    let code = generateTeamCode();
    while (db.teams[code]) {
        code = generateTeamCode();
    }

    // Create team
    const team = {
        code: code,
        name: name,
        description: description || '',
        country: country,
        flag: flag,
        isPrivate: isPrivate || false,
        createdAt: Date.now(),
        members: [creatorId],
        // Shared resources
        gold: initialResources?.gold || 1000,
        army: initialResources?.army || 10,
        tanks: initialResources?.tanks || 0,
        planes: initialResources?.planes || 0,
        ships: initialResources?.ships || 0,
        battlesWon: 0,
        battlesLost: 0
    };

    db.teams[code] = team;
    writeDB(db);

    console.log(`Team created: ${name} (Code: ${code})`);
    res.json({ success: true, team: team });
});

// Join a team by code
app.post('/api/teams/join', (req, res) => {
    const { code, playerId } = req.body;

    if (!code || !playerId) {
        return res.status(400).json({ error: 'Missing code or playerId' });
    }

    const db = readDB();
    const team = db.teams[code];

    if (!team) {
        return res.status(404).json({ error: 'Team not found' });
    }

    // Add player to team if not already a member
    if (!team.members.includes(playerId)) {
        team.members.push(playerId);
        writeDB(db);
    }

    console.log(`Player ${playerId} joined team ${team.name}`);
    res.json({ success: true, team: team });
});

// Leave a team
app.post('/api/teams/leave', (req, res) => {
    const { code, playerId } = req.body;

    if (!code || !playerId) {
        return res.status(400).json({ error: 'Missing code or playerId' });
    }

    const db = readDB();
    const team = db.teams[code];

    if (!team) {
        return res.status(404).json({ error: 'Team not found' });
    }

    // Remove player from team
    team.members = team.members.filter(id => id !== playerId);

    // Delete team if no members left
    if (team.members.length === 0) {
        delete db.teams[code];
        console.log(`Team ${team.name} deleted (no members)`);
    }

    writeDB(db);
    res.json({ success: true });
});

// Get team data
app.get('/api/teams/:code', (req, res) => {
    const { code } = req.params;
    const db = readDB();
    const team = db.teams[code];

    if (!team) {
        return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ success: true, team: team });
});

// Update team resources (when someone buys/attacks/etc)
app.post('/api/teams/:code/update', (req, res) => {
    const { code } = req.params;
    const { gold, army, tanks, planes, ships, battlesWon, battlesLost } = req.body;

    const db = readDB();
    const team = db.teams[code];

    if (!team) {
        return res.status(404).json({ error: 'Team not found' });
    }

    // Update resources
    if (gold !== undefined) team.gold = gold;
    if (army !== undefined) team.army = army;
    if (tanks !== undefined) team.tanks = tanks;
    if (planes !== undefined) team.planes = planes;
    if (ships !== undefined) team.ships = ships;
    if (battlesWon !== undefined) team.battlesWon = battlesWon;
    if (battlesLost !== undefined) team.battlesLost = battlesLost;

    writeDB(db);
    res.json({ success: true, team: team });
});

// Get all public teams (for browsing)
app.get('/api/teams', (req, res) => {
    const db = readDB();
    const publicTeams = Object.values(db.teams)
        .filter(team => !team.isPrivate)
        .map(team => ({
            code: team.code,
            name: team.name,
            description: team.description,
            country: team.country,
            flag: team.flag,
            memberCount: team.members.length,
            gold: team.gold,
            army: team.army,
            tanks: team.tanks,
            planes: team.planes,
            ships: team.ships
        }));

    res.json({ success: true, teams: publicTeams });
});

// Check if team code exists
app.get('/api/teams/check/:code', (req, res) => {
    const { code } = req.params;
    const db = readDB();
    const exists = !!db.teams[code];
    res.json({ exists: exists });
});

// Generate player ID
app.get('/api/player/new', (req, res) => {
    const playerId = generatePlayerId();
    res.json({ playerId: playerId });
});

// Serve the game
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    initDatabase();
    console.log('');
    console.log('========================================');
    console.log('   WAR GAME SERVER STARTED!');
    console.log('========================================');
    console.log(`   Open in browser: http://localhost:${PORT}`);
    console.log('');
    console.log('   Share this with friends on same WiFi:');
    console.log(`   http://YOUR_IP_ADDRESS:${PORT}`);
    console.log('');
    console.log('   To find your IP address:');
    console.log('   - Mac: System Preferences > Network');
    console.log('   - Windows: ipconfig in terminal');
    console.log('========================================');
    console.log('');
});
 