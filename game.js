// ==================== GAME CONFIGURATION ====================

const API_URL = ''; // Empty for same server, or 'http://localhost:3000' for different server

// Current language
let currentLanguage = localStorage.getItem('warGame_language') || 'en';

// ==================== TRANSLATIONS ====================

const translations = {
    en: {
        // Country Selection
        chooseCountry: 'Choose Your Country',
        startGame: 'Start Game',
        selectOnMap: 'Or select on the map below',

        // Header
        gold: 'Gold',
        army: 'Army',
        tanks: 'Tanks',
        planes: 'Planes',
        ships: 'Ships',
        drones: 'Drones',
        bombs: 'Bombs',
        teamMode: 'Team Mode',

        // Menu buttons
        attack: 'Attack',
        shop: 'Shop',
        stats: 'Stats',
        settings: 'Settings',
        quests: 'Quests',
        codes: 'Codes',
        teams: 'Teams',

        // Shop
        shopTitle: 'Shop',
        soldiers: 'Soldiers',
        tank: 'Tank',
        plane: 'Plane',
        battleship: 'Battleship',
        combatDrone: 'Combat Drone',
        bomb: 'Bomb',
        powerEach: 'power each',
        buy: 'Buy',

        // Stats
        statsTitle: 'Statistics',
        country: 'Country',
        totalPurchased: 'Total Purchased',
        goldSpent: 'Gold Spent',
        battlesWon: 'Battles Won',
        battlesLost: 'Battles Lost',

        // Settings
        settingsTitle: 'Settings',
        language: 'Language',
        sound: 'Sound',
        notifications: 'Notifications',
        resetGame: 'Reset Game',

        // Attack
        attackTitle: 'Select Target',
        selectCity: 'Select City to Attack',
        launchAttack: 'Launch Attack!',
        soldiersToSend: 'Soldiers to send',
        tanksToSend: 'Tanks to send',
        planesToSend: 'Planes to send',
        shipsToSend: 'Battleships to send',
        dronesToSend: 'Combat Drones to send',
        totalPower: 'Total Attack Power',
        available: 'Available',

        // Battle
        attacking: 'Attacking',
        preparingForces: 'Preparing forces...',
        deployingTroops: 'Deploying troops...',
        engagingEnemy: 'Engaging enemy...',
        battleInProgress: 'Battle in progress...',
        finalizingAssault: 'Finalizing assault...',
        victory: 'Victory!',
        defeat: 'Defeat!',
        youWon: 'You Won!',
        youLost: 'You Lost!',
        battleAgainst: 'Battle against',
        enemyForces: 'Enemy Forces',
        soldierLosses: 'Soldier Losses',
        tankLosses: 'Tank Losses',
        planeLosses: 'Plane Losses',
        shipLosses: 'Ship Losses',
        droneLosses: 'Drone Losses',
        soldiersCaptured: 'Soldiers Captured',
        tanksCaptured: 'Tanks Captured',
        planesCaptured: 'Planes Captured',
        shipsCaptured: 'Ships Captured',
        dronesCaptured: 'Drones Captured',
        bombsCaptured: 'Bombs Captured',
        droneLosses: 'Drone Losses',
        bombLosses: 'Bomb Losses',
        goldLooted: 'Gold Looted',
        yourForcesNow: 'Your Forces Now',

        // Quests
        questsTitle: 'Quests',
        starterQuests: 'Starter Quests',
        normalQuests: 'Normal Quests',
        hardQuests: 'Hard Quests',
        allQuestsCompleted: 'All Quests Completed!',
        completed: 'Completed',
        inProgress: 'In Progress',
        claim: 'Claim',
        attackCountry: 'Attack a country',
        buy10Army: 'Buy +10 army from shop',
        get100Army: 'Get 100 army',
        win5Battles: 'Win 5 battles',
        get500Army: 'Get 500 army',
        spend2000Gold: 'Spend 2000 gold in shop',
        win15Battles: 'Win 15 battles',
        get2000Army: 'Get 2000 army',
        spend10000Gold: 'Spend 10000 gold in shop',

        // Codes
        codesTitle: 'Redeem Code',
        enterCode: 'Enter a code to receive rewards!',
        redeem: 'Redeem',
        redeemedCodes: 'Redeemed Codes',
        noCodesYet: 'No codes redeemed yet',
        codeRedeemed: 'Code redeemed!',
        invalidCode: 'Invalid code!',
        alreadyRedeemed: 'Code already redeemed!',
        enterCodePlease: 'Please enter a code!',

        // Teams
        teamsTitle: 'Teams',
        createTeam: 'Create Team',
        joinTeam: 'Join Team',
        joinByCode: 'Join by Code',
        leaveTeam: 'Leave Team',
        playingSolo: 'Playing Solo',
        playingAsTeam: 'Playing as Team',
        teamName: 'Team Name',
        teamCountry: 'Team Country',
        description: 'Description',
        privacy: 'Privacy',
        public: 'Public',
        private: 'Private',
        members: 'members',
        teamCode: 'Team Code',
        resourcesShared: 'Resources are shared in real-time!',
        createOrJoin: 'Create or join a team to share resources!',
        publicTeams: 'Public Teams',
        serverOffline: 'Server Offline',

        // Difficulty
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
        veryHard: 'Very Hard',
        boss: 'BOSS',
        legendary: 'LEGENDARY',
        mythic: 'MYTHIC',
        impossible: 'IMPOSSIBLE',

        // City Selection & Atomic War
        atomicWar: 'Atomic War',
        atomicWarDesc: 'Destroy entire country with nuclear weapons',
        cost: 'Cost',
        launch: 'Launch',
        orAttackCity: 'Or attack city by city',
        defense: 'Defense',
        enemyPower: 'Enemy Power',
        recommended: 'Recommended',
        power: 'power',
        launchingNuke: 'Launching nuclear missiles...',
        nukeInFlight: 'Warheads in flight...',
        targetAcquired: 'Target acquired...',
        impactImminent: 'Impact imminent...',
        totalDestruction: 'Total destruction!',
        atomicVictory: 'Total Victory',
        destroyed: 'has been destroyed!',
        allCitiesDestroyed: 'All cities annihilated',
        noLosses: 'No losses (nuclear strike)',

        // Misc
        notEnoughGold: 'Not enough gold!',
        notEnoughUnits: 'Not enough units!',
        sendAtLeast1: 'You must send at least 1 soldier!',
        confirmReset: 'Are you sure you want to reset the game?',
        synced: 'Synced!'
    },
    lt: {
        // Country Selection
        chooseCountry: 'Pasirinkite Savo Sali',
        startGame: 'Pradeti Zaidima',
        selectOnMap: 'Arba pasirinkite zemelappy',

        // Header
        gold: 'Auksas',
        army: 'Kariuomene',
        tanks: 'Tankai',
        planes: 'Lektuvai',
        ships: 'Laivai',
        drones: 'Dronai',
        bombs: 'Bombos',
        teamMode: 'Komandos Rezimas',

        // Menu buttons
        attack: 'Pulti',
        shop: 'Parduotuve',
        stats: 'Statistika',
        settings: 'Nustatymai',
        quests: 'Uzduotys',
        codes: 'Kodai',
        teams: 'Komandos',

        // Shop
        shopTitle: 'Parduotuve',
        soldiers: 'Kariai',
        tank: 'Tankas',
        plane: 'Lektuvas',
        battleship: 'Karo Laivas',
        combatDrone: 'Kovos Dronas',
        powerEach: 'galia kiekvienam',
        buy: 'Pirkti',

        // Stats
        statsTitle: 'Statistika',
        country: 'Salis',
        totalPurchased: 'Viso Nupirkta',
        goldSpent: 'Isleista Aukso',
        battlesWon: 'Laimeti Musiai',
        battlesLost: 'Pralaimeti Musiai',

        // Settings
        settingsTitle: 'Nustatymai',
        language: 'Kalba',
        sound: 'Garsas',
        notifications: 'Pranesimai',
        resetGame: 'Atstatyti Zaidima',

        // Attack
        attackTitle: 'Pasirinkite Taikini',
        selectCity: 'Pasirinkite Miesta Pulti',
        launchAttack: 'Pradeti Puolima!',
        soldiersToSend: 'Siusti kariu',
        tanksToSend: 'Siusti tanku',
        planesToSend: 'Siusti lektuvu',
        shipsToSend: 'Siusti laivu',
        dronesToSend: 'Siusti dronu',
        totalPower: 'Bendra Puolimo Galia',
        available: 'Turima',

        // Battle
        attacking: 'Puolama',
        preparingForces: 'Ruosiamos pajegos...',
        deployingTroops: 'Dislokuojami kariai...',
        engagingEnemy: 'Susiduriama su priesu...',
        battleInProgress: 'Musis vyksta...',
        finalizingAssault: 'Baigiamas puolimas...',
        victory: 'Pergale!',
        defeat: 'Pralaimejimas!',
        youWon: 'Jus Laimejote!',
        youLost: 'Jus Pralaimejote!',
        battleAgainst: 'Musis pries',
        enemyForces: 'Prieso Pajegos',
        soldierLosses: 'Prarasti Kariai',
        tankLosses: 'Prarasti Tankai',
        planeLosses: 'Prarasti Lektuvai',
        shipLosses: 'Prarasti Laivai',
        droneLosses: 'Prarasti Dronai',
        soldiersCaptured: 'Paimti Kariai',
        tanksCaptured: 'Paimti Tankai',
        planesCaptured: 'Paimti Lektuvai',
        shipsCaptured: 'Paimti Laivai',
        dronesCaptured: 'Paimti Dronai',
        goldLooted: 'Paimtas Auksas',
        yourForcesNow: 'Jusu Dabartines Pajegos',

        // Quests
        questsTitle: 'Uzduotys',
        starterQuests: 'Pradines Uzduotys',
        normalQuests: 'Iprastos Uzduotys',
        hardQuests: 'Sunkios Uzduotys',
        allQuestsCompleted: 'Visos Uzduotys Atliktos!',
        completed: 'Atlikta',
        inProgress: 'Vykdoma',
        claim: 'Gauti',
        attackCountry: 'Pulti sali',
        buy10Army: 'Nupirkti +10 kariu',
        get100Army: 'Tureti 100 kariu',
        win5Battles: 'Laimeti 5 musius',
        get500Army: 'Tureti 500 kariu',
        spend2000Gold: 'Isleisti 2000 aukso',
        win15Battles: 'Laimeti 15 musiu',
        get2000Army: 'Tureti 2000 kariu',
        spend10000Gold: 'Isleisti 10000 aukso',

        // Codes
        codesTitle: 'Ivesti Koda',
        enterCode: 'Iveskite koda ir gaukite apdovanojimus!',
        redeem: 'Patvirtinti',
        redeemedCodes: 'Panaudoti Kodai',
        noCodesYet: 'Dar nepanaudota jokiu kodu',
        codeRedeemed: 'Kodas panaudotas!',
        invalidCode: 'Neteisingas kodas!',
        alreadyRedeemed: 'Kodas jau panaudotas!',
        enterCodePlease: 'Iveskite koda!',

        // Teams
        teamsTitle: 'Komandos',
        createTeam: 'Sukurti Komanda',
        joinTeam: 'Prisijungti prie Komandos',
        joinByCode: 'Prisijungti su Kodu',
        leaveTeam: 'Iseit is Komandos',
        playingSolo: 'Zaidi Vienas',
        playingAsTeam: 'Zaidi Komandoje',
        teamName: 'Komandos Pavadinimas',
        teamCountry: 'Komandos Salis',
        description: 'Aprasymas',
        privacy: 'Privatumas',
        public: 'Viesas',
        private: 'Privatus',
        members: 'nariai',
        teamCode: 'Komandos Kodas',
        resourcesShared: 'Istekliai dalijami realiu laiku!',
        createOrJoin: 'Sukurkite arba prisijunkite prie komandos!',
        publicTeams: 'Viesos Komandos',
        serverOffline: 'Serveris Nepasiekiamas',

        // Difficulty
        easy: 'Lengva',
        medium: 'Vidutine',
        hard: 'Sunki',
        veryHard: 'Labai Sunki',
        boss: 'BOSAS',
        legendary: 'LEGENDINIS',
        mythic: 'MITINIS',
        impossible: 'NEIMANOMA',

        // City Selection & Atomic War
        atomicWar: 'Atominis Karas',
        atomicWarDesc: 'Sunaikink visa sali branduoliniais ginklais',
        cost: 'Kaina',
        launch: 'Paleisti',
        orAttackCity: 'Arba pulk miesta po miesto',
        defense: 'Gynyba',
        enemyPower: 'Prieso Galia',
        recommended: 'Rekomenduojama',
        power: 'galia',
        launchingNuke: 'Paleidziamos branduolines raketos...',
        nukeInFlight: 'Koviniai uzgaisiai skrenda...',
        targetAcquired: 'Taikinys aptiktas...',
        impactImminent: 'Smugis neisvengiamas...',
        totalDestruction: 'Visiskas sunaikinimas!',
        atomicVictory: 'Visiskas Laimejimas',
        destroyed: 'buvo sunaikinta!',
        allCitiesDestroyed: 'Visi miestai sunaikinti',
        noLosses: 'Jokiu nuostoliu (branduolinis smugis)',

        // Misc
        notEnoughGold: 'Nepakanka aukso!',
        notEnoughUnits: 'Nepakanka vienetu!',
        sendAtLeast1: 'Turite siusti bent 1 kari!',
        confirmReset: 'Ar tikrai norite atstatyti zaidima?',
        synced: 'Sinchronizuota!'
    },
    es: {
        // Country Selection
        chooseCountry: 'Elige Tu Pais',
        startGame: 'Iniciar Juego',
        selectOnMap: 'O selecciona en el mapa',

        // Header
        gold: 'Oro',
        army: 'Ejercito',
        tanks: 'Tanques',
        planes: 'Aviones',
        ships: 'Barcos',
        drones: 'Drones',
        teamMode: 'Modo Equipo',

        // Menu buttons
        attack: 'Atacar',
        shop: 'Tienda',
        stats: 'Estadisticas',
        settings: 'Ajustes',
        quests: 'Misiones',
        codes: 'Codigos',
        teams: 'Equipos',

        // Shop
        shopTitle: 'Tienda',
        soldiers: 'Soldados',
        tank: 'Tanque',
        plane: 'Avion',
        battleship: 'Acorazado',
        combatDrone: 'Dron de Combate',
        powerEach: 'poder cada uno',
        buy: 'Comprar',

        // Stats
        statsTitle: 'Estadisticas',
        country: 'Pais',
        totalPurchased: 'Total Comprado',
        goldSpent: 'Oro Gastado',
        battlesWon: 'Batallas Ganadas',
        battlesLost: 'Batallas Perdidas',

        // Settings
        settingsTitle: 'Ajustes',
        language: 'Idioma',
        sound: 'Sonido',
        notifications: 'Notificaciones',
        resetGame: 'Reiniciar Juego',

        // Attack
        attackTitle: 'Seleccionar Objetivo',
        selectCity: 'Seleccionar Ciudad para Atacar',
        launchAttack: 'Lanzar Ataque!',
        soldiersToSend: 'Soldados a enviar',
        tanksToSend: 'Tanques a enviar',
        planesToSend: 'Aviones a enviar',
        shipsToSend: 'Barcos a enviar',
        dronesToSend: 'Drones a enviar',
        totalPower: 'Poder Total de Ataque',
        available: 'Disponible',

        // Battle
        attacking: 'Atacando',
        preparingForces: 'Preparando fuerzas...',
        deployingTroops: 'Desplegando tropas...',
        engagingEnemy: 'Enfrentando al enemigo...',
        battleInProgress: 'Batalla en progreso...',
        finalizingAssault: 'Finalizando asalto...',
        victory: 'Victoria!',
        defeat: 'Derrota!',
        youWon: 'Ganaste!',
        youLost: 'Perdiste!',
        battleAgainst: 'Batalla contra',
        enemyForces: 'Fuerzas Enemigas',
        soldierLosses: 'Soldados Perdidos',
        tankLosses: 'Tanques Perdidos',
        planeLosses: 'Aviones Perdidos',
        shipLosses: 'Barcos Perdidos',
        droneLosses: 'Drones Perdidos',
        soldiersCaptured: 'Soldados Capturados',
        tanksCaptured: 'Tanques Capturados',
        planesCaptured: 'Aviones Capturados',
        shipsCaptured: 'Barcos Capturados',
        dronesCaptured: 'Drones Capturados',
        goldLooted: 'Oro Saqueado',
        yourForcesNow: 'Tus Fuerzas Ahora',

        // Quests
        questsTitle: 'Misiones',
        starterQuests: 'Misiones Iniciales',
        normalQuests: 'Misiones Normales',
        hardQuests: 'Misiones Dificiles',
        allQuestsCompleted: 'Todas las Misiones Completadas!',
        completed: 'Completado',
        inProgress: 'En Progreso',
        claim: 'Reclamar',
        attackCountry: 'Atacar un pais',
        buy10Army: 'Comprar +10 ejercito',
        get100Army: 'Tener 100 ejercito',
        win5Battles: 'Ganar 5 batallas',
        get500Army: 'Tener 500 ejercito',
        spend2000Gold: 'Gastar 2000 oro',
        win15Battles: 'Ganar 15 batallas',
        get2000Army: 'Tener 2000 ejercito',
        spend10000Gold: 'Gastar 10000 oro',

        // Codes
        codesTitle: 'Canjear Codigo',
        enterCode: 'Introduce un codigo para recibir recompensas!',
        redeem: 'Canjear',
        redeemedCodes: 'Codigos Canjeados',
        noCodesYet: 'Ningun codigo canjeado',
        codeRedeemed: 'Codigo canjeado!',
        invalidCode: 'Codigo invalido!',
        alreadyRedeemed: 'Codigo ya canjeado!',
        enterCodePlease: 'Introduce un codigo!',

        // Teams
        teamsTitle: 'Equipos',
        createTeam: 'Crear Equipo',
        joinTeam: 'Unirse al Equipo',
        joinByCode: 'Unirse con Codigo',
        leaveTeam: 'Abandonar Equipo',
        playingSolo: 'Jugando Solo',
        playingAsTeam: 'Jugando en Equipo',
        teamName: 'Nombre del Equipo',
        teamCountry: 'Pais del Equipo',
        description: 'Descripcion',
        privacy: 'Privacidad',
        public: 'Publico',
        private: 'Privado',
        members: 'miembros',
        teamCode: 'Codigo del Equipo',
        resourcesShared: 'Los recursos se comparten en tiempo real!',
        createOrJoin: 'Crea o unete a un equipo!',
        publicTeams: 'Equipos Publicos',
        serverOffline: 'Servidor Desconectado',

        // Difficulty
        easy: 'Facil',
        medium: 'Medio',
        hard: 'Dificil',
        veryHard: 'Muy Dificil',
        boss: 'JEFE',
        legendary: 'LEGENDARIO',
        mythic: 'MITICO',
        impossible: 'IMPOSIBLE',

        // City Selection & Atomic War
        atomicWar: 'Guerra Atomica',
        atomicWarDesc: 'Destruye todo el pais con armas nucleares',
        cost: 'Costo',
        launch: 'Lanzar',
        orAttackCity: 'O ataca ciudad por ciudad',
        defense: 'Defensa',
        enemyPower: 'Poder Enemigo',
        recommended: 'Recomendado',
        power: 'poder',
        launchingNuke: 'Lanzando misiles nucleares...',
        nukeInFlight: 'Ojivas en vuelo...',
        targetAcquired: 'Objetivo adquirido...',
        impactImminent: 'Impacto inminente...',
        totalDestruction: 'Destruccion total!',
        atomicVictory: 'Victoria Total',
        destroyed: 'ha sido destruido!',
        allCitiesDestroyed: 'Todas las ciudades aniquiladas',
        noLosses: 'Sin perdidas (ataque nuclear)',

        // Misc
        notEnoughGold: 'No hay suficiente oro!',
        notEnoughUnits: 'No hay suficientes unidades!',
        sendAtLeast1: 'Debes enviar al menos 1 soldado!',
        confirmReset: 'Estas seguro de reiniciar el juego?',
        synced: 'Sincronizado!'
    },
    ru: {
        // Country Selection
        chooseCountry: 'Выберите Страну',
        startGame: 'Начать Игру',
        selectOnMap: 'Или выберите на карте',

        // Header
        gold: 'Золото',
        army: 'Армия',
        tanks: 'Танки',
        planes: 'Самолеты',
        ships: 'Корабли',
        drones: 'Дроны',
        teamMode: 'Командный Режим',

        // Menu buttons
        attack: 'Атака',
        shop: 'Магазин',
        stats: 'Статистика',
        settings: 'Настройки',
        quests: 'Задания',
        codes: 'Коды',
        teams: 'Команды',

        // Shop
        shopTitle: 'Магазин',
        soldiers: 'Солдаты',
        tank: 'Танк',
        plane: 'Самолет',
        battleship: 'Линкор',
        combatDrone: 'Боевой Дрон',
        powerEach: 'сила каждого',
        buy: 'Купить',

        // Stats
        statsTitle: 'Статистика',
        country: 'Страна',
        totalPurchased: 'Всего Куплено',
        goldSpent: 'Потрачено Золота',
        battlesWon: 'Побед',
        battlesLost: 'Поражений',

        // Settings
        settingsTitle: 'Настройки',
        language: 'Язык',
        sound: 'Звук',
        notifications: 'Уведомления',
        resetGame: 'Сбросить Игру',

        // Attack
        attackTitle: 'Выбрать Цель',
        selectCity: 'Выберите Город для Атаки',
        launchAttack: 'Начать Атаку!',
        soldiersToSend: 'Солдат отправить',
        tanksToSend: 'Танков отправить',
        planesToSend: 'Самолетов отправить',
        shipsToSend: 'Кораблей отправить',
        dronesToSend: 'Дронов отправить',
        totalPower: 'Общая Сила Атаки',
        available: 'Доступно',

        // Battle
        attacking: 'Атакуем',
        preparingForces: 'Подготовка сил...',
        deployingTroops: 'Развертывание войск...',
        engagingEnemy: 'Вступаем в бой...',
        battleInProgress: 'Битва идет...',
        finalizingAssault: 'Завершение атаки...',
        victory: 'Победа!',
        defeat: 'Поражение!',
        youWon: 'Вы Победили!',
        youLost: 'Вы Проиграли!',
        battleAgainst: 'Битва против',
        enemyForces: 'Силы Противника',
        soldierLosses: 'Потери Солдат',
        tankLosses: 'Потери Танков',
        planeLosses: 'Потери Самолетов',
        shipLosses: 'Потери Кораблей',
        droneLosses: 'Потери Дронов',
        soldiersCaptured: 'Захвачено Солдат',
        tanksCaptured: 'Захвачено Танков',
        planesCaptured: 'Захвачено Самолетов',
        shipsCaptured: 'Захвачено Кораблей',
        dronesCaptured: 'Захвачено Дронов',
        goldLooted: 'Захвачено Золота',
        yourForcesNow: 'Ваши Силы Сейчас',

        // Quests
        questsTitle: 'Задания',
        starterQuests: 'Начальные Задания',
        normalQuests: 'Обычные Задания',
        hardQuests: 'Сложные Задания',
        allQuestsCompleted: 'Все Задания Выполнены!',
        completed: 'Выполнено',
        inProgress: 'В Процессе',
        claim: 'Получить',
        attackCountry: 'Атаковать страну',
        buy10Army: 'Купить +10 армии',
        get100Army: 'Получить 100 армии',
        win5Battles: 'Выиграть 5 битв',
        get500Army: 'Получить 500 армии',
        spend2000Gold: 'Потратить 2000 золота',
        win15Battles: 'Выиграть 15 битв',
        get2000Army: 'Получить 2000 армии',
        spend10000Gold: 'Потратить 10000 золота',

        // Codes
        codesTitle: 'Ввести Код',
        enterCode: 'Введите код для получения награды!',
        redeem: 'Применить',
        redeemedCodes: 'Использованные Коды',
        noCodesYet: 'Коды еще не использованы',
        codeRedeemed: 'Код применен!',
        invalidCode: 'Неверный код!',
        alreadyRedeemed: 'Код уже использован!',
        enterCodePlease: 'Введите код!',

        // Teams
        teamsTitle: 'Команды',
        createTeam: 'Создать Команду',
        joinTeam: 'Присоединиться',
        joinByCode: 'Присоединиться по Коду',
        leaveTeam: 'Покинуть Команду',
        playingSolo: 'Одиночная Игра',
        playingAsTeam: 'Командная Игра',
        teamName: 'Название Команды',
        teamCountry: 'Страна Команды',
        description: 'Описание',
        privacy: 'Приватность',
        public: 'Публичная',
        private: 'Приватная',
        members: 'участников',
        teamCode: 'Код Команды',
        resourcesShared: 'Ресурсы общие в реальном времени!',
        createOrJoin: 'Создайте или присоединитесь к команде!',
        publicTeams: 'Публичные Команды',
        serverOffline: 'Сервер Недоступен',

        // Difficulty
        easy: 'Легко',
        medium: 'Средне',
        hard: 'Сложно',
        veryHard: 'Очень Сложно',
        boss: 'БОСС',
        legendary: 'ЛЕГЕНДАРНЫЙ',
        mythic: 'МИФИЧЕСКИЙ',
        impossible: 'НЕВОЗМОЖНО',

        // City Selection & Atomic War
        atomicWar: 'Атомная Война',
        atomicWarDesc: 'Уничтожить всю страну ядерным оружием',
        cost: 'Стоимость',
        launch: 'Запуск',
        orAttackCity: 'Или атакуй город за городом',
        defense: 'Защита',
        enemyPower: 'Сила Врага',
        recommended: 'Рекомендуется',
        power: 'сила',
        launchingNuke: 'Запуск ядерных ракет...',
        nukeInFlight: 'Боеголовки в полете...',
        targetAcquired: 'Цель захвачена...',
        impactImminent: 'Удар неизбежен...',
        totalDestruction: 'Полное уничтожение!',
        atomicVictory: 'Полная Победа',
        destroyed: 'уничтожена!',
        allCitiesDestroyed: 'Все города уничтожены',
        noLosses: 'Без потерь (ядерный удар)',

        // Misc
        notEnoughGold: 'Недостаточно золота!',
        notEnoughUnits: 'Недостаточно юнитов!',
        sendAtLeast1: 'Нужно отправить минимум 1 солдата!',
        confirmReset: 'Вы уверены что хотите сбросить игру?',
        synced: 'Синхронизировано!'
    },
    de: {
        chooseCountry: 'Wahle Dein Land',
        startGame: 'Spiel Starten',
        selectOnMap: 'Oder wahle auf der Karte',
        gold: 'Gold',
        army: 'Armee',
        tanks: 'Panzer',
        planes: 'Flugzeuge',
        ships: 'Schiffe',
        drones: 'Drohnen',
        teamMode: 'Team Modus',
        attack: 'Angriff',
        shop: 'Laden',
        stats: 'Statistik',
        settings: 'Einstellungen',
        quests: 'Aufgaben',
        codes: 'Codes',
        teams: 'Teams',
        shopTitle: 'Laden',
        soldiers: 'Soldaten',
        tank: 'Panzer',
        plane: 'Flugzeug',
        battleship: 'Kriegsschiff',
        combatDrone: 'Kampfdrohne',
        powerEach: 'Kraft pro Stuck',
        buy: 'Kaufen',
        settingsTitle: 'Einstellungen',
        language: 'Sprache',
        resetGame: 'Spiel Zurucksetzen',
        victory: 'Sieg!',
        defeat: 'Niederlage!',
        notEnoughGold: 'Nicht genug Gold!',
        confirmReset: 'Bist du sicher?',
        atomicWar: 'Atomkrieg',
        atomicWarDesc: 'Vernichte das ganze Land mit Atomwaffen',
        cost: 'Kosten',
        launch: 'Starten',
        orAttackCity: 'Oder greife Stadt fur Stadt an',
        defense: 'Verteidigung',
        enemyPower: 'Feindliche Macht',
        recommended: 'Empfohlen',
        power: 'macht',
        atomicVictory: 'Totaler Sieg',
        destroyed: 'wurde zerstort!',
        allCitiesDestroyed: 'Alle Stadte vernichtet',
        noLosses: 'Keine Verluste (Atomschlag)'
    },
    fr: {
        chooseCountry: 'Choisissez Votre Pays',
        startGame: 'Commencer',
        selectOnMap: 'Ou selectionnez sur la carte',
        gold: 'Or',
        army: 'Armee',
        tanks: 'Chars',
        planes: 'Avions',
        ships: 'Navires',
        drones: 'Drones',
        teamMode: 'Mode Equipe',
        attack: 'Attaquer',
        shop: 'Boutique',
        stats: 'Statistiques',
        settings: 'Parametres',
        quests: 'Quetes',
        codes: 'Codes',
        teams: 'Equipes',
        shopTitle: 'Boutique',
        soldiers: 'Soldats',
        tank: 'Char',
        plane: 'Avion',
        battleship: 'Cuirasse',
        combatDrone: 'Drone de Combat',
        powerEach: 'puissance chacun',
        buy: 'Acheter',
        settingsTitle: 'Parametres',
        language: 'Langue',
        resetGame: 'Reinitialiser',
        victory: 'Victoire!',
        defeat: 'Defaite!',
        notEnoughGold: 'Pas assez dor!',
        confirmReset: 'Etes-vous sur?',
        atomicWar: 'Guerre Atomique',
        atomicWarDesc: 'Detruire tout le pays avec des armes nucleaires',
        cost: 'Cout',
        launch: 'Lancer',
        orAttackCity: 'Ou attaque ville par ville',
        defense: 'Defense',
        enemyPower: 'Puissance Ennemie',
        recommended: 'Recommande',
        power: 'puissance',
        atomicVictory: 'Victoire Totale',
        destroyed: 'a ete detruit!',
        allCitiesDestroyed: 'Toutes les villes detruites',
        noLosses: 'Aucune perte (frappe nucleaire)'
    }
};

// Get translation
function t(key) {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
}

// Available codes
const availableCodes = {
    'Free': { reward: 'army', amount: 10000, description: '+10,000 Army' },
    'Gogo': { reward: 'gold', amount: 10000, description: '+10,000 Gold' },
    'Gogojam': { reward: 'gold', amount: 100000, description: '+100,000 Gold' },
    'Justas': { reward: 'ships', amount: 1000, description: '+1,000 Battleships' },
    'Algirdas': { reward: 'gold', amount: 30000, description: '+30,000 Gold' }
};

// All countries data with FIXED power levels and cities
const allCountries = [
    // Easy countries (difficulty 1)
    { name: 'Spain', flag: '🇪🇸', difficulty: 1, soldiers: 50, tanks: 1, planes: 0, ships: 0, drones: 0, bombs: 0,
      cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao'] },
    { name: 'France', flag: '🇫🇷', difficulty: 1, soldiers: 60, tanks: 1, planes: 0, ships: 0, drones: 0, bombs: 0,
      cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'] },
    { name: 'Italy', flag: '🇮🇹', difficulty: 1, soldiers: 55, tanks: 1, planes: 0, ships: 0, drones: 0, bombs: 0,
      cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Florence'] },
    { name: 'Lithuania', flag: '🇱🇹', difficulty: 1, soldiers: 40, tanks: 0, planes: 0, ships: 0, drones: 0, bombs: 0,
      cities: ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'] },
    { name: 'Belgium', flag: '🇧🇪', difficulty: 1, soldiers: 45, tanks: 1, planes: 0, ships: 0, drones: 0, bombs: 0,
      cities: ['Brussels', 'Antwerp', 'Ghent', 'Bruges', 'Liege'] },
    // Medium countries (difficulty 2)
    { name: 'Germany', flag: '🇩🇪', difficulty: 2, soldiers: 200, tanks: 5, planes: 2, ships: 1, drones: 0, bombs: 0,
      cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'] },
    { name: 'United Kingdom', flag: '🇬🇧', difficulty: 2, soldiers: 220, tanks: 4, planes: 3, ships: 2, drones: 1, bombs: 0,
      cities: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool'] },
    { name: 'Poland', flag: '🇵🇱', difficulty: 2, soldiers: 180, tanks: 4, planes: 1, ships: 0, drones: 0, bombs: 0,
      cities: ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw', 'Poznan'] },
    { name: 'Netherlands', flag: '🇳🇱', difficulty: 2, soldiers: 150, tanks: 3, planes: 2, ships: 2, drones: 1, bombs: 0,
      cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'] },
    { name: 'Sweden', flag: '🇸🇪', difficulty: 2, soldiers: 160, tanks: 3, planes: 2, ships: 1, drones: 1, bombs: 0,
      cities: ['Stockholm', 'Gothenburg', 'Malmo', 'Uppsala', 'Vasteras'] },
    { name: 'Turkey', flag: '🇹🇷', difficulty: 2, soldiers: 250, tanks: 5, planes: 2, ships: 2, drones: 1, bombs: 0,
      cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya'] },
    // Hard countries (difficulty 3)
    { name: 'Russia', flag: '🇷🇺', difficulty: 3, soldiers: 600, tanks: 15, planes: 10, ships: 5, drones: 5, bombs: 1,
      cities: ['Moscow', 'St. Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan'] },
    { name: 'China', flag: '🇨🇳', difficulty: 3, soldiers: 700, tanks: 12, planes: 12, ships: 6, drones: 8, bombs: 1,
      cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu'] },
    { name: 'Japan', flag: '🇯🇵', difficulty: 3, soldiers: 500, tanks: 10, planes: 15, ships: 10, drones: 10, bombs: 0,
      cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya'] },
    { name: 'Brazil', flag: '🇧🇷', difficulty: 3, soldiers: 550, tanks: 10, planes: 6, ships: 6, drones: 4, bombs: 0,
      cities: ['Sao Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza'] },
    { name: 'Israel', flag: '🇮🇱', difficulty: 3, soldiers: 400, tanks: 12, planes: 15, ships: 4, drones: 15, bombs: 2,
      cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba', 'Eilat'] },
    // Very Hard countries (difficulty 4)
    { name: 'USA', flag: '🇺🇸', difficulty: 4, soldiers: 1500, tanks: 30, planes: 40, ships: 25, drones: 30, bombs: 10,
      cities: ['Washington D.C.', 'New York', 'Los Angeles', 'Chicago', 'Houston'] },
    { name: 'India', flag: '🇮🇳', difficulty: 4, soldiers: 1400, tanks: 25, planes: 20, ships: 15, drones: 15, bombs: 5,
      cities: ['New Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai'] },
    { name: 'South Korea', flag: '🇰🇷', difficulty: 4, soldiers: 1000, tanks: 30, planes: 25, ships: 15, drones: 20, bombs: 3,
      cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'] },
    { name: 'Australia', flag: '🇦🇺', difficulty: 4, soldiers: 800, tanks: 20, planes: 25, ships: 20, drones: 15, bombs: 2,
      cities: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane', 'Perth'] },
    // Boss countries (difficulty 5+)
    { name: 'Roman Empire', flag: '🏛️', difficulty: 5, isBoss: true, soldiers: 5000, tanks: 50, planes: 30, ships: 30, drones: 20, bombs: 5,
      cities: ['Rome', 'Constantinople', 'Alexandria', 'Carthage', 'Athens'] },
    { name: 'Persian Empire', flag: '🦁', difficulty: 5, isBoss: true, soldiers: 6000, tanks: 45, planes: 35, ships: 25, drones: 25, bombs: 5,
      cities: ['Persepolis', 'Susa', 'Babylon', 'Ecbatana', 'Pasargadae'] },
    { name: 'Mongol Empire', flag: '🐎', difficulty: 6, isBoss: true, soldiers: 10000, tanks: 80, planes: 50, ships: 40, drones: 40, bombs: 10,
      cities: ['Karakorum', 'Samarkand', 'Bukhara', 'Tabriz', 'Baghdad'] },
    { name: 'Ottoman Empire', flag: '🌙', difficulty: 6, isBoss: true, soldiers: 9000, tanks: 90, planes: 60, ships: 50, drones: 45, bombs: 10,
      cities: ['Constantinople', 'Ankara', 'Baghdad', 'Damascus', 'Cairo'] },
    { name: 'Soviet Union', flag: '⭐', difficulty: 7, isBoss: true, soldiers: 15000, tanks: 150, planes: 100, ships: 80, drones: 60, bombs: 50,
      cities: ['Moscow', 'Leningrad', 'Stalingrad', 'Kiev', 'Minsk'] },
    { name: 'British Empire', flag: '👑', difficulty: 7, isBoss: true, soldiers: 18000, tanks: 120, planes: 100, ships: 150, drones: 80, bombs: 30,
      cities: ['London', 'Delhi', 'Sydney', 'Cape Town', 'Hong Kong'] },
    { name: 'Ancient Egypt', flag: '🔺', difficulty: 8, isBoss: true, soldiers: 25000, tanks: 200, planes: 150, ships: 100, drones: 100, bombs: 50,
      cities: ['Thebes', 'Memphis', 'Alexandria', 'Heliopolis', 'Luxor'] },
    { name: 'Galactic Federation', flag: '🌌', difficulty: 9, isBoss: true, isSuperboss: true, soldiers: 50000, tanks: 500, planes: 400, ships: 3000, drones: 1000, bombs: 200,
      cities: ['Alpha Centauri', 'Andromeda Prime', 'Nebula City', 'Starbase Omega', 'Cosmic Capital'] },
    { name: 'Interdimensional Empire', flag: '🌀', difficulty: 10, isBoss: true, isSuperboss: true, soldiers: 100000, tanks: 1000, planes: 800, ships: 5000, drones: 2000, bombs: 500,
      cities: ['Void Citadel', 'Quantum Nexus', 'Infinity Gate', 'Temporal Core', 'The Beyond'] },
    // ULTIMATE BOSS COUNTRIES - Need ~20,000 Combat Drones worth of power (3,000,000+)
    { name: 'The Multiverse Council', flag: '🔮', difficulty: 11, isBoss: true, isSuperboss: true, soldiers: 500000, tanks: 5000, planes: 4000, ships: 10000, drones: 8000, bombs: 2000,
      cities: ['Reality Prime', 'Dimension Zero', 'The Nexus', 'Eternity Gate', 'Infinite Core'] },
    { name: 'The Creator', flag: '✨', difficulty: 12, isBoss: true, isSuperboss: true, soldiers: 1000000, tanks: 10000, planes: 8000, ships: 20000, drones: 15000, bombs: 5000,
      cities: ['Genesis Point', 'The Origin', 'Cosmic Throne', 'Eternal Light', 'The Singularity'] }
];

// Quest definitions
const starterQuests = [
    { id: 'attack_country', name: () => t('attackCountry'), reward: 100, check: () => gameState.battlesWon + gameState.battlesLost >= 1 },
    { id: 'buy_10_army', name: () => t('buy10Army'), reward: 300, check: () => gameState.totalPurchased >= 10 },
    { id: 'get_100_army', name: () => t('get100Army'), reward: 500, check: () => gameState.army >= 100 }
];

const normalQuests = [
    { id: 'win_5_battles', name: () => t('win5Battles'), reward: 800, check: () => gameState.battlesWon >= 5 },
    { id: 'get_500_army', name: () => t('get500Army'), reward: 1500, check: () => gameState.army >= 500 },
    { id: 'spend_2000_gold', name: () => t('spend2000Gold'), reward: 1000, check: () => gameState.goldSpent >= 2000 }
];

const hardQuests = [
    { id: 'win_15_battles', name: () => t('win15Battles'), reward: 2000, check: () => gameState.battlesWon >= 15 },
    { id: 'get_2000_army', name: () => t('get2000Army'), reward: 5000, check: () => gameState.army >= 2000 },
    { id: 'spend_10000_gold', name: () => t('spend10000Gold'), reward: 3000, check: () => gameState.goldSpent >= 10000 }
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

// Map country positions (percentage based)
const countryPositions = {
    'Spain': { x: 42, y: 42 },
    'France': { x: 47, y: 38 },
    'Italy': { x: 52, y: 42 },
    'Lithuania': { x: 56, y: 32 },
    'Belgium': { x: 48, y: 35 },
    'Germany': { x: 51, y: 35 },
    'United Kingdom': { x: 45, y: 32 },
    'Poland': { x: 54, y: 35 },
    'Netherlands': { x: 49, y: 34 },
    'Russia': { x: 70, y: 30 },
    'China': { x: 78, y: 42 },
    'Japan': { x: 88, y: 40 },
    'Brazil': { x: 30, y: 65 },
    'USA': { x: 20, y: 40 },
    'India': { x: 73, y: 48 },
    'South Korea': { x: 85, y: 42 }
};

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
    bombs: 0,
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
let attackTarget = { name: '', flag: '', difficulty: 1, isBoss: false, isSuperboss: false, cities: [] };
let selectedCity = null;

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

    // Apply language
    applyLanguage();

    // Setup country selection - both cards and map
    setupCountrySelection();

    // Setup start button
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', startGame);

    // Setup modal close on outside click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Initialize world map
    initWorldMap();
}

function setupCountrySelection() {
    const countryCards = document.querySelectorAll('.country-card');
    const startBtn = document.getElementById('start-btn');

    countryCards.forEach(card => {
        card.addEventListener('click', () => {
            countryCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            gameState.country = card.dataset.country;
            gameState.flag = card.dataset.flag;
            startBtn.classList.add('active');

            // Also highlight on map
            highlightMapCountry(gameState.country);
        });
    });
}

// ==================== WORLD MAP ====================

function initWorldMap() {
    const mapContainer = document.getElementById('world-map');
    if (!mapContainer) return;

    // Create map markers for each playable country
    const playableCountries = ['Spain', 'France', 'Italy', 'Lithuania', 'Belgium', 'Germany', 'United Kingdom', 'Poland', 'Netherlands'];

    playableCountries.forEach(countryName => {
        const country = allCountries.find(c => c.name === countryName);
        const pos = countryPositions[countryName];
        if (country && pos) {
            const marker = document.createElement('div');
            marker.className = 'map-marker';
            marker.dataset.country = countryName;
            marker.dataset.flag = country.flag;
            marker.style.left = pos.x + '%';
            marker.style.top = pos.y + '%';
            marker.innerHTML = `<span class="marker-flag">${country.flag}</span><span class="marker-name">${countryName}</span>`;

            marker.addEventListener('click', () => selectCountryFromMap(countryName, country.flag));
            mapContainer.appendChild(marker);
        }
    });
}

function selectCountryFromMap(countryName, flag) {
    gameState.country = countryName;
    gameState.flag = flag;

    // Update card selection
    document.querySelectorAll('.country-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.country === countryName);
    });

    // Enable start button
    document.getElementById('start-btn').classList.add('active');

    // Highlight on map
    highlightMapCountry(countryName);
}

function highlightMapCountry(countryName) {
    document.querySelectorAll('.map-marker').forEach(marker => {
        marker.classList.toggle('selected', marker.dataset.country === countryName);
    });
}

// ==================== LANGUAGE SYSTEM ====================

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('warGame_language', lang);
    applyLanguage();
}

function applyLanguage() {
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        el.textContent = t(key);
    });

    // Update dynamic content
    updateDisplays();
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

        // Backward compatibility: ensure all properties exist with defaults
        // This handles saves from older versions that don't have newer features
        gameState = {
            // Core info
            country: country,
            flag: flag,
            saveVersion: parsed.saveVersion || 1,

            // Resources - ensure numbers, default if missing
            gold: typeof parsed.gold === 'number' ? parsed.gold : 1000,
            army: typeof parsed.army === 'number' ? parsed.army : 10,
            tanks: typeof parsed.tanks === 'number' ? parsed.tanks : 0,
            planes: typeof parsed.planes === 'number' ? parsed.planes : 0,
            ships: typeof parsed.ships === 'number' ? parsed.ships : 0,
            drones: typeof parsed.drones === 'number' ? parsed.drones : 0,
            bombs: typeof parsed.bombs === 'number' ? parsed.bombs : 0,

            // Stats
            totalPurchased: parsed.totalPurchased || 0,
            goldSpent: parsed.goldSpent || 0,
            battlesWon: parsed.battlesWon || 0,
            battlesLost: parsed.battlesLost || 0,

            // Progress
            questsCompleted: Array.isArray(parsed.questsCompleted) ? parsed.questsCompleted : [],
            questLevel: parsed.questLevel || 'starter',
            redeemedCodes: Array.isArray(parsed.redeemedCodes) ? parsed.redeemedCodes : [],

            // Multiplayer
            playerId: parsed.playerId || gameState.playerId,
            activeTeamCode: parsed.activeTeamCode || null,
            personalResources: parsed.personalResources || null
        };

        // Update save version for future compatibility
        gameState.saveVersion = 3;
    } else {
        gameState = {
            country: country,
            flag: flag,
            saveVersion: 3,
            gold: 1000,
            army: 10,
            tanks: 0,
            planes: 0,
            ships: 0,
            drones: 0,
            bombs: 0,
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
    const elements = {
        'gold-display': gameState.gold,
        'army-display': gameState.army,
        'army-header-display': gameState.army,
        'tanks-display': gameState.tanks,
        'tanks-header-display': gameState.tanks,
        'planes-display': gameState.planes,
        'planes-header-display': gameState.planes,
        'ships-display': gameState.ships,
        'ships-header-display': gameState.ships,
        'drones-display': gameState.drones,
        'drones-header-display': gameState.drones,
        'bombs-display': gameState.bombs || 0,
        'bombs-header-display': gameState.bombs || 0,
        'stat-country': gameState.country,
        'stat-gold': gameState.gold,
        'stat-army': gameState.army,
        'stat-tanks': gameState.tanks,
        'stat-planes': gameState.planes,
        'stat-ships': gameState.ships,
        'stat-drones': gameState.drones,
        'stat-bombs': gameState.bombs || 0,
        'stat-purchased': gameState.totalPurchased,
        'stat-spent': gameState.goldSpent,
        'stat-won': gameState.battlesWon || 0,
        'stat-lost': gameState.battlesLost || 0
    };

    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    // Update team indicator
    const teamIndicator = document.getElementById('team-indicator');
    if (teamIndicator) {
        if (gameState.activeTeamCode) {
            teamIndicator.textContent = '👥 ' + t('teamMode');
            teamIndicator.classList.add('active');
        } else {
            teamIndicator.classList.remove('active');
        }
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
    if (type === 'settings') {
        updateSettingsModal();
    }
    document.getElementById(type + '-modal').classList.add('active');
    updateDisplays();
}

function closeModal(type) {
    document.getElementById(type + '-modal').classList.remove('active');
}

// ==================== SETTINGS ====================

function updateSettingsModal() {
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = currentLanguage;
    }
}

function toggleSetting(btn) {
    btn.classList.toggle('active');
}

function resetGame() {
    if (confirm(t('confirmReset'))) {
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

// ==================== SHOP FUNCTIONS ====================

function updateShopCost(unitType, unitPrice) {
    const input = document.getElementById('buy-' + unitType);
    const costDisplay = document.getElementById('cost-' + unitType);
    if (input && costDisplay) {
        const qty = Math.max(1, parseInt(input.value) || 1);
        input.value = qty;
        costDisplay.textContent = (qty * unitPrice).toLocaleString();
    }
}

function buyFromShop(unitType, unitPrice) {
    const input = document.getElementById('buy-' + unitType);
    const qty = Math.max(1, parseInt(input.value) || 1);
    const totalCost = qty * unitPrice;

    if (gameState.gold >= totalCost) {
        gameState.gold -= totalCost;
        gameState.goldSpent += totalCost;

        if (unitType === 'soldiers') {
            gameState.army += qty;
            gameState.totalPurchased += qty;
        } else {
            gameState[unitType] += qty;
        }

        updateDisplays();
        saveGame();

        // Reset input to 1
        input.value = 1;
        updateShopCost(unitType, unitPrice);
    } else {
        alert(t('notEnoughGold'));
    }
}

// Legacy functions for backward compatibility
function buyArmy(amount, cost) {
    if (gameState.gold >= cost) {
        gameState.gold -= cost;
        gameState.army += amount;
        gameState.totalPurchased += amount;
        gameState.goldSpent += cost;
        updateDisplays();
        saveGame();
    } else {
        alert(t('notEnoughGold'));
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
        alert(t('notEnoughGold'));
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
                case 1: diffLabel = '⭐ ' + t('easy'); diffClass = 'diff-easy'; break;
                case 2: diffLabel = '⭐⭐ ' + t('medium'); diffClass = 'diff-medium'; break;
                case 3: diffLabel = '⭐⭐⭐ ' + t('hard'); diffClass = 'diff-hard'; break;
                case 4: diffLabel = '⭐⭐⭐⭐ ' + t('veryHard'); diffClass = 'diff-veryhard'; break;
                case 5: diffLabel = '💀 ' + t('boss'); diffClass = 'diff-boss'; break;
                case 6: diffLabel = '🔥 ' + t('legendary'); diffClass = 'diff-legendary'; break;
                case 7: diffLabel = '⚡ ' + t('mythic'); diffClass = 'diff-mythic'; break;
                case 8: diffLabel = '☠️ ' + t('impossible'); diffClass = 'diff-impossible'; break;
            }

            const totalPower = country.soldiers + (country.tanks * 50) + (country.planes * 75) + (country.ships * 100) + (country.drones * 150) + ((country.bombs || 0) * 300);

            enemyDiv.innerHTML = `
                <div class="enemy-info">
                    <span class="enemy-flag">${country.flag}</span>
                    <div>
                        <div class="enemy-name">${country.name}</div>
                        <div class="enemy-difficulty ${diffClass}">${diffLabel}</div>
                        <div class="enemy-army">⚔️${country.soldiers} 🛡️${country.tanks} ✈️${country.planes} 🚢${country.ships} 🤖${country.drones} 💣${country.bombs || 0} = 💪${totalPower.toLocaleString()}</div>
                    </div>
                </div>
                <button class="attack-country-btn ${country.isSuperboss ? 'superboss-attack-btn' : (country.isBoss ? 'boss-attack-btn' : '')}" onclick="selectTarget('${country.name}', '${country.flag}', ${country.difficulty}, ${country.isBoss || false}, ${country.isSuperboss || false})">⚔️ ${t('attack')}</button>
            `;
            container.appendChild(enemyDiv);
        }
    });
}

function selectTarget(name, flag, difficulty = 1, isBoss = false, isSuperboss = false) {
    const countryData = allCountries.find(c => c.name === name);
    attackTarget = { name, flag, difficulty, isBoss, isSuperboss, cities: countryData?.cities || ['Capital'] };
    selectedCity = null;

    closeModal('attack');

    // Show city selection modal
    showCitySelection();
}

function showCitySelection() {
    const container = document.getElementById('city-list');
    const titleEl = document.getElementById('city-selection-title');

    titleEl.textContent = `${attackTarget.flag} ${attackTarget.name} - ${t('selectCity')}`;
    container.innerHTML = '';

    // Get country data for enemy forces calculation
    const countryData = allCountries.find(c => c.name === attackTarget.name);
    const basePower = countryData ?
        countryData.soldiers + (countryData.tanks * 50) + (countryData.planes * 75) + (countryData.ships * 100) + (countryData.drones * 150) + ((countryData.bombs || 0) * 300) : 100;

    // Add Atomic War option at the top
    const atomicCost = Math.floor(basePower * 5); // 5x the total enemy power in gold
    const atomicDiv = document.createElement('div');
    atomicDiv.className = 'city-item atomic-war-item';
    atomicDiv.innerHTML = `
        <div class="city-info">
            <span class="city-icon">☢️</span>
            <div>
                <div class="city-name atomic-name">${t('atomicWar')}</div>
                <div class="city-defense atomic-desc">${t('atomicWarDesc')}</div>
                <div class="city-defense">💰 ${t('cost')}: ${atomicCost.toLocaleString()} ${t('gold')}</div>
            </div>
        </div>
        <button class="attack-city-btn atomic-btn" onclick="launchAtomicWar(${atomicCost})">☢️ ${t('launch')}</button>
    `;
    container.appendChild(atomicDiv);

    // Divider
    const divider = document.createElement('div');
    divider.className = 'city-divider';
    divider.innerHTML = `<span>${t('orAttackCity')}</span>`;
    container.appendChild(divider);

    attackTarget.cities.forEach((city, index) => {
        const cityDiv = document.createElement('div');
        cityDiv.className = 'city-item';

        // Each city has slightly different defense based on position
        const defenseModifier = 1 + (index * 0.1);
        const cityDefense = Math.floor(100 * defenseModifier);

        // Calculate required forces for this city
        const cityPower = Math.floor(basePower * defenseModifier);
        const recommendedPower = Math.floor(cityPower * 1.2); // 20% more than enemy for safe win

        cityDiv.innerHTML = `
            <div class="city-info">
                <span class="city-icon">🏙️</span>
                <div>
                    <div class="city-name">${city}</div>
                    <div class="city-defense">🛡️ ${t('defense')}: ${cityDefense}%</div>
                    <div class="city-forces">⚔️ ${t('enemyPower')}: ${cityPower.toLocaleString()}</div>
                    <div class="city-recommended">💡 ${t('recommended')}: ${recommendedPower.toLocaleString()}+ ${t('power')}</div>
                </div>
            </div>
            <button class="attack-city-btn" onclick="selectCity('${city}', ${defenseModifier})">⚔️ ${t('attack')}</button>
        `;
        container.appendChild(cityDiv);
    });

    openModal('city-selection');
}

function launchAtomicWar(cost) {
    console.log('launchAtomicWar called with cost:', cost, 'current gold:', gameState.gold);

    if (gameState.gold < cost) {
        alert(t('notEnoughGold'));
        return;
    }

    // Deduct cost
    gameState.gold -= cost;
    gameState.goldSpent += cost;
    console.log('Gold deducted, new gold:', gameState.gold);

    closeModal('city-selection');

    // Show atomic attack animation
    document.getElementById('attacking-target-display').textContent = `☢️ ${attackTarget.flag} ${attackTarget.name}`;
    document.getElementById('attacking-status').textContent = t('launchingNuke');
    openModal('attacking');

    let progress = 0;
    const progressBar = document.getElementById('attack-progress-bar');
    const progressText = document.getElementById('attack-progress-text');
    const statusText = document.getElementById('attacking-status');

    const statusMessages = [t('launchingNuke'), t('nukeInFlight'), t('targetAcquired'), t('impactImminent'), t('totalDestruction')];

    const interval = setInterval(() => {
        progress += 4;
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
                try {
                    showAtomicResult();
                } catch (error) {
                    console.error('Error in showAtomicResult:', error);
                    alert('Error in atomic war result: ' + error.message);
                }
            }, 300);
        }
    }, 80);
}

function showAtomicResult() {
    console.log('showAtomicResult called, attackTarget:', attackTarget);

    const countryData = allCountries.find(c => c.name === attackTarget.name);
    console.log('Found countryData:', countryData);

    // Capture ALL enemy forces
    const gained = {
        soldiers: countryData ? Math.floor(countryData.soldiers * 0.7) : 50,
        tanks: countryData ? Math.floor(countryData.tanks * 0.5) : 0,
        planes: countryData ? Math.floor(countryData.planes * 0.4) : 0,
        ships: countryData ? Math.floor(countryData.ships * 0.3) : 0,
        drones: countryData ? Math.floor(countryData.drones * 0.3) : 0,
        bombs: countryData ? Math.floor((countryData.bombs || 0) * 0.25) : 0
    };

    // Calculate gold reward - MUCH higher for atomic war (3x base + bonus multiplier)
    const difficulty = attackTarget.difficulty || 1;
    const cityCount = (attackTarget.cities && attackTarget.cities.length) || 1;
    const baseGold = 1500 * difficulty * difficulty; // 3x more than normal
    const cityBonus = baseGold * cityCount;
    const atomicBonus = difficulty >= 10 ? 500000 : (difficulty >= 8 ? 100000 : (difficulty >= 6 ? 50000 : 10000));
    const goldReward = cityBonus + atomicBonus;

    console.log('Atomic war rewards:', { gained, goldReward, difficulty, cityCount });
    console.log('gameState BEFORE atomic war:', JSON.parse(JSON.stringify(gameState)));

    // Update game state
    gameState.army += gained.soldiers;
    gameState.tanks += gained.tanks;
    gameState.planes += gained.planes;
    gameState.ships += gained.ships;
    gameState.drones += gained.drones;
    gameState.bombs = (gameState.bombs || 0) + gained.bombs;
    gameState.gold += goldReward;
    gameState.battlesWon += cityCount; // Count as winning all city battles

    console.log('gameState AFTER atomic war:', JSON.parse(JSON.stringify(gameState)));

    updateDisplays();
    saveGame();
    syncWithTeam();

    // Show result
    document.getElementById('result-title').textContent = `☢️ ${t('atomicVictory')}!`;
    document.getElementById('result-title').className = 'result-title victory';
    document.getElementById('result-country').textContent = `${attackTarget.flag} ${attackTarget.name} ${t('destroyed')}`;

    document.getElementById('enemy-forces-display').innerHTML = `
        <div class="enemy-stat">☢️ ${t('allCitiesDestroyed')}</div>
    `;

    document.getElementById('losses-display').innerHTML = `
        <div class="loss-stat">⚔️ ${t('noLosses')}</div>
    `;

    document.getElementById('gains-display').innerHTML = `
        <div class="gain-stat">👥 +${gained.soldiers.toLocaleString()} ${t('soldiersCaptured')}</div>
        ${gained.tanks > 0 ? `<div class="gain-stat">🛡️ +${gained.tanks.toLocaleString()} ${t('tanksCaptured')}</div>` : ''}
        ${gained.planes > 0 ? `<div class="gain-stat">✈️ +${gained.planes.toLocaleString()} ${t('planesCaptured')}</div>` : ''}
        ${gained.ships > 0 ? `<div class="gain-stat">🚢 +${gained.ships.toLocaleString()} ${t('shipsCaptured')}</div>` : ''}
        ${gained.drones > 0 ? `<div class="gain-stat">🤖 +${gained.drones.toLocaleString()} ${t('dronesCaptured')}</div>` : ''}
        ${gained.bombs > 0 ? `<div class="gain-stat">💣 +${gained.bombs.toLocaleString()} ${t('bombsCaptured')}</div>` : ''}
        <div class="gain-stat gold-reward">💰 +${goldReward.toLocaleString()} ${t('gold')}</div>
    `;

    document.getElementById('post-battle-stats').innerHTML = `
        <div class="post-stat">👥 ${t('army')}: ${gameState.army.toLocaleString()}</div>
        <div class="post-stat">🛡️ ${t('tanks')}: ${gameState.tanks.toLocaleString()}</div>
        <div class="post-stat">✈️ ${t('planes')}: ${gameState.planes.toLocaleString()}</div>
        <div class="post-stat">🚢 ${t('ships')}: ${gameState.ships.toLocaleString()}</div>
        <div class="post-stat">🤖 ${t('drones')}: ${gameState.drones.toLocaleString()}</div>
        <div class="post-stat">💣 ${t('bombs')}: ${(gameState.bombs || 0).toLocaleString()}</div>
        <div class="post-stat">💰 ${t('gold')}: ${gameState.gold.toLocaleString()}</div>
    `;

    console.log('Opening result modal, gameState after atomic war:', gameState);
    openModal('result');
}

function selectCity(cityName, defenseModifier) {
    selectedCity = { name: cityName, defenseModifier: defenseModifier };
    closeModal('city-selection');

    // Now show attack setup
    document.getElementById('target-country-name').textContent = `${attackTarget.name} - ${cityName}`;
    document.getElementById('target-country-flag').textContent = attackTarget.flag;
    document.getElementById('available-soldiers').textContent = gameState.army;
    document.getElementById('available-tanks').textContent = gameState.tanks;
    document.getElementById('available-planes').textContent = gameState.planes;
    document.getElementById('available-ships').textContent = gameState.ships;
    document.getElementById('available-drones').textContent = gameState.drones;
    document.getElementById('available-bombs').textContent = gameState.bombs || 0;
    document.getElementById('soldiers-input').value = Math.min(10, gameState.army);
    document.getElementById('soldiers-input').max = gameState.army;
    document.getElementById('tanks-input').value = 0;
    document.getElementById('planes-input').value = 0;
    document.getElementById('ships-input').value = 0;
    document.getElementById('drones-input').value = 0;
    document.getElementById('bombs-input').value = 0;

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
    const bombs = parseInt(document.getElementById('bombs-input').value) || 0;
    const totalPower = soldiers + (tanks * 50) + (planes * 75) + (ships * 100) + (drones * 150) + (bombs * 300);
    document.getElementById('total-power').textContent = totalPower.toLocaleString();
}

function launchAttack() {
    const soldiersSent = parseInt(document.getElementById('soldiers-input').value) || 0;
    const tanksSent = parseInt(document.getElementById('tanks-input').value) || 0;
    const planesSent = parseInt(document.getElementById('planes-input').value) || 0;
    const shipsSent = parseInt(document.getElementById('ships-input').value) || 0;
    const dronesSent = parseInt(document.getElementById('drones-input').value) || 0;
    const bombsSent = parseInt(document.getElementById('bombs-input').value) || 0;

    if (soldiersSent < 1) {
        alert(t('sendAtLeast1'));
        return;
    }
    if (soldiersSent > gameState.army || tanksSent > gameState.tanks ||
        planesSent > gameState.planes || shipsSent > gameState.ships ||
        dronesSent > gameState.drones || bombsSent > gameState.bombs) {
        alert(t('notEnoughUnits'));
        return;
    }

    closeModal('attack-setup');

    // Show attacking progress screen
    const targetText = selectedCity ? `${attackTarget.flag} ${attackTarget.name} - ${selectedCity.name}` : `${attackTarget.flag} ${attackTarget.name}`;
    document.getElementById('attacking-target-display').textContent = targetText;
    openModal('attacking');

    // Animate progress bar
    let progress = 0;
    const progressBar = document.getElementById('attack-progress-bar');
    const progressText = document.getElementById('attack-progress-text');
    const statusText = document.getElementById('attacking-status');

    const statusMessages = [t('preparingForces'), t('deployingTroops'), t('engagingEnemy'), t('battleInProgress'), t('finalizingAssault')];

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
                processBattleResult(soldiersSent, tanksSent, planesSent, shipsSent, dronesSent, bombsSent);
            }, 300);
        }
    }, 100);
}

function processBattleResult(soldiersSent, tanksSent, planesSent, shipsSent, dronesSent, bombsSent = 0) {
    // Calculate player power
    const playerPower = soldiersSent + (tanksSent * 50) + (planesSent * 75) + (shipsSent * 100) + (dronesSent * 150) + (bombsSent * 300);

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
    const enemyBombs = countryData ? (countryData.bombs || 0) : 0;

    let enemyPower = enemySoldiers + (enemyTanks * 50) + (enemyPlanes * 75) + (enemyShips * 100) + (enemyDrones * 150) + (enemyBombs * 300);

    // Apply city defense modifier
    if (selectedCity) {
        enemyPower = Math.floor(enemyPower * selectedCity.defenseModifier);
    }

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
        losses.bombs = Math.floor(bombsSent * Math.random() * 0.1);

        gained.soldiers = Math.floor(enemySoldiers * 0.5);
        gained.tanks = Math.floor(enemyTanks * 0.3);
        gained.planes = Math.floor(enemyPlanes * 0.25);
        gained.ships = Math.floor(enemyShips * 0.2);
        gained.drones = Math.floor(enemyDrones * 0.2);
        gained.bombs = Math.floor(enemyBombs * 0.15);

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
        gameState.bombs = (gameState.bombs || 0) - losses.bombs + gained.bombs;
        gameState.gold += goldReward;
        gameState.battlesWon = (gameState.battlesWon || 0) + 1;
    } else {
        losses.soldiers = Math.floor(soldiersSent * (0.4 + Math.random() * 0.3));
        losses.tanks = Math.floor(tanksSent * (0.3 + Math.random() * 0.3));
        losses.planes = Math.floor(planesSent * (0.3 + Math.random() * 0.3));
        losses.ships = Math.floor(shipsSent * (0.25 + Math.random() * 0.25));
        losses.drones = Math.floor(dronesSent * (0.25 + Math.random() * 0.25));
        losses.bombs = Math.floor(bombsSent * (0.2 + Math.random() * 0.2));
        gained = { soldiers: 0, tanks: 0, planes: 0, ships: 0, drones: 0, bombs: 0 };
        goldReward = 0;

        gameState.army = Math.max(1, gameState.army - losses.soldiers);
        gameState.tanks = Math.max(0, gameState.tanks - losses.tanks);
        gameState.planes = Math.max(0, gameState.planes - losses.planes);
        gameState.ships = Math.max(0, gameState.ships - losses.ships);
        gameState.drones = Math.max(0, gameState.drones - losses.drones);
        gameState.bombs = Math.max(0, (gameState.bombs || 0) - losses.bombs);
        gameState.battlesLost = (gameState.battlesLost || 0) + 1;
    }

    const cityName = selectedCity ? ` - ${selectedCity.name}` : '';
    showBattleResult(victory, attackTarget.name + cityName, attackTarget.flag,
        { soldiers: enemySoldiers, tanks: enemyTanks, planes: enemyPlanes, ships: enemyShips, drones: enemyDrones, bombs: enemyBombs, power: enemyPower },
        losses, gained, goldReward);
    updateDisplays();
    saveGame();
}

function showBattleResult(victory, enemyName, enemyFlag, enemyForces, losses, gained, goldReward) {
    const resultDiv = document.getElementById('battle-result');
    const title = document.getElementById('battle-title');

    title.textContent = victory ? '🎉 ' + t('victory') : '💀 ' + t('defeat');

    resultDiv.innerHTML = `
        <div class="battle-result-content">
            <div class="battle-icon">${victory ? '🏆' : '💔'}</div>
            <div class="battle-status ${victory ? 'victory' : 'defeat'}">
                ${victory ? t('youWon') : t('youLost')}
            </div>
            <p>${t('battleAgainst')} ${enemyFlag} ${enemyName}</p>

            <div class="enemy-forces">
                <div class="enemy-forces-title">${t('enemyForces')}:</div>
                <div class="battle-detail-row"><span>⚔️ ${t('soldiers')}</span><span>${enemyForces.soldiers.toLocaleString()}</span></div>
                <div class="battle-detail-row"><span>🛡️ ${t('tanks')}</span><span>${enemyForces.tanks.toLocaleString()}</span></div>
                <div class="battle-detail-row"><span>✈️ ${t('planes')}</span><span>${enemyForces.planes.toLocaleString()}</span></div>
                <div class="battle-detail-row"><span>🚢 ${t('ships')}</span><span>${enemyForces.ships.toLocaleString()}</span></div>
                <div class="battle-detail-row"><span>🤖 ${t('drones')}</span><span>${enemyForces.drones.toLocaleString()}</span></div>
                <div class="battle-detail-row"><span>💣 ${t('bombs')}</span><span>${(enemyForces.bombs || 0).toLocaleString()}</span></div>
                <div class="battle-detail-row"><span>💪 ${t('totalPower')}</span><span>${enemyForces.power.toLocaleString()}</span></div>
            </div>

            <div class="battle-details">
                <div class="battle-detail-row"><span>${t('soldierLosses')}</span><span class="battle-loss">-${losses.soldiers.toLocaleString()}</span></div>
                ${losses.tanks > 0 ? `<div class="battle-detail-row"><span>${t('tankLosses')}</span><span class="battle-loss">-${losses.tanks.toLocaleString()}</span></div>` : ''}
                ${losses.planes > 0 ? `<div class="battle-detail-row"><span>${t('planeLosses')}</span><span class="battle-loss">-${losses.planes.toLocaleString()}</span></div>` : ''}
                ${losses.ships > 0 ? `<div class="battle-detail-row"><span>${t('shipLosses')}</span><span class="battle-loss">-${losses.ships.toLocaleString()}</span></div>` : ''}
                ${losses.drones > 0 ? `<div class="battle-detail-row"><span>${t('droneLosses')}</span><span class="battle-loss">-${losses.drones.toLocaleString()}</span></div>` : ''}
                ${(losses.bombs || 0) > 0 ? `<div class="battle-detail-row"><span>${t('bombLosses')}</span><span class="battle-loss">-${losses.bombs.toLocaleString()}</span></div>` : ''}
                ${victory ? `
                <div class="battle-detail-row"><span>${t('soldiersCaptured')}</span><span class="battle-reward">+${gained.soldiers.toLocaleString()}</span></div>
                ${gained.tanks > 0 ? `<div class="battle-detail-row"><span>${t('tanksCaptured')}</span><span class="battle-reward">+${gained.tanks.toLocaleString()}</span></div>` : ''}
                ${gained.planes > 0 ? `<div class="battle-detail-row"><span>${t('planesCaptured')}</span><span class="battle-reward">+${gained.planes.toLocaleString()}</span></div>` : ''}
                ${gained.ships > 0 ? `<div class="battle-detail-row"><span>${t('shipsCaptured')}</span><span class="battle-reward">+${gained.ships.toLocaleString()}</span></div>` : ''}
                ${gained.drones > 0 ? `<div class="battle-detail-row"><span>${t('dronesCaptured')}</span><span class="battle-reward">+${gained.drones.toLocaleString()}</span></div>` : ''}
                ${(gained.bombs || 0) > 0 ? `<div class="battle-detail-row"><span>${t('bombsCaptured')}</span><span class="battle-reward">+${gained.bombs.toLocaleString()}</span></div>` : ''}
                <div class="battle-detail-row"><span>${t('goldLooted')}</span><span class="battle-reward">+${goldReward.toLocaleString()}</span></div>
                ` : ''}
                <div class="battle-detail-row" style="border-top: 1px solid rgba(255,255,255,0.2); margin-top: 10px; padding-top: 15px;">
                    <span>${t('yourForcesNow')}</span>
                    <span>⚔️${gameState.army.toLocaleString()} 🛡️${gameState.tanks.toLocaleString()} ✈️${gameState.planes.toLocaleString()} 🚢${gameState.ships.toLocaleString()} 🤖${gameState.drones.toLocaleString()} 💣${(gameState.bombs || 0).toLocaleString()}</span>
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
    if (gameState.questLevel === 'starter') return '🌟 ' + t('starterQuests');
    if (gameState.questLevel === 'normal') return '⚔️ ' + t('normalQuests');
    if (gameState.questLevel === 'hard') return '🔥 ' + t('hardQuests');
    return '🏆 ' + t('allQuestsCompleted');
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
                <div class="quest-category-title">🏆 ${t('allQuestsCompleted')}</div>
                <p style="text-align: center; opacity: 0.8; padding: 20px;">
                    ${t('allQuestsCompleted')}
                </p>
            </div>
        `;
        return;
    }

    let html = `<div class="quest-category"><div class="quest-category-title">${title}</div>`;

    quests.forEach(quest => {
        const isComplete = quest.check();
        const isClaimed = gameState.questsCompleted.includes(quest.id);
        const questName = typeof quest.name === 'function' ? quest.name() : quest.name;

        html += `
            <div class="quest-item ${isClaimed ? 'completed' : ''}">
                <div class="quest-info">
                    <div class="quest-name">${questName}</div>
                    <div class="quest-progress">${isComplete ? '✅ ' + t('completed') : '⏳ ' + t('inProgress')}</div>
                </div>
                ${isClaimed
                    ? '<span class="quest-check">✓</span>'
                    : isComplete
                        ? `<button class="claim-btn" onclick="claimQuest('${quest.id}', ${quest.reward})">${t('claim')} 💰${quest.reward}</button>`
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
        message.textContent = t('enterCodePlease');
        return;
    }

    if (gameState.redeemedCodes && gameState.redeemedCodes.includes(code)) {
        message.className = 'code-message error';
        message.textContent = t('alreadyRedeemed');
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
        message.textContent = `${t('codeRedeemed')} ${codeData.description}`;
        input.value = '';

        updateDisplays();
        saveGame();
        renderRedeemedCodes();
    } else {
        message.className = 'code-message error';
        message.textContent = t('invalidCode');
    }
}

function renderRedeemedCodes() {
    const list = document.getElementById('redeemed-list');
    if (!gameState.redeemedCodes || gameState.redeemedCodes.length === 0) {
        list.innerHTML = `<p style="opacity: 0.5;">${t('noCodesYet')}</p>`;
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
                        <div class="mode-title">🎮 ${t('playingAsTeam')}</div>
                        <div class="mode-team-name">${team.flag} ${team.name}</div>
                        <div class="mode-resources">
                            <span>💰 ${gameState.gold}</span>
                            <span>⚔️ ${gameState.army}</span>
                            <span>🛡️ ${gameState.tanks}</span>
                            <span>✈️ ${gameState.planes}</span>
                            <span>🚢 ${gameState.ships}</span>
                            <span>🤖 ${gameState.drones}</span>
                        </div>
                        <div class="mode-info">👥 ${team.members.length} ${t('members')} • Code: ${team.code}</div>
                        <div class="mode-info">${t('resourcesShared')}</div>
                        <button class="leave-team-btn" onclick="leaveTeam()">🚪 ${t('leaveTeam')}</button>
                    </div>
                `;
            }
        } catch (e) {
            html += `<div class="current-mode team-mode"><div class="mode-title">⚠️ ${t('serverOffline')}</div></div>`;
        }
    } else {
        html += `
            <div class="current-mode solo-mode">
                <div class="mode-title">👤 ${t('playingSolo')}</div>
                <div class="mode-resources">
                    <span>💰 ${gameState.gold}</span>
                    <span>⚔️ ${gameState.army}</span>
                    <span>🛡️ ${gameState.tanks}</span>
                    <span>✈️ ${gameState.planes}</span>
                    <span>🚢 ${gameState.ships}</span>
                    <span>🤖 ${gameState.drones}</span>
                </div>
                <div class="mode-info">${t('createOrJoin')}</div>
            </div>
        `;
    }

    // Show public teams
    try {
        const response = await fetch(API_URL + '/api/teams');
        const data = await response.json();
        if (data.success && data.teams.length > 0) {
            html += `<div class="teams-section-title">${t('publicTeams')}:</div>`;
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
                                <div class="team-members-count">👥 ${team.memberCount} ${t('members')}</div>
                            </div>
                        </div>
                        <button class="team-join-btn ${isActive ? 'active' : ''}" onclick="${isActive ? '' : `joinTeamByCode('${team.code}')`}">
                            ${isActive ? '✓ Active' : '→ ' + t('joinTeam')}
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
            <button class="team-option-btn create-btn" onclick="openCreateTeam()">✨ ${t('createTeam')}</button>
            <button class="team-option-btn join-btn" onclick="openJoinTeam()">🔗 ${t('joinByCode')}</button>
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
                syncIndicator.textContent = '🔄 ' + t('synced');
                syncIndicator.classList.add('active');
                setTimeout(() => syncIndicator.classList.remove('active'), 1000);
            }
        }
    } catch (e) {
        // Offline - use local data
    }
}
