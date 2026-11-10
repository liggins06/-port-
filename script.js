const sportConfig = {
  NBA: {
    label: 'Quarter',
    defaultSeconds: 12 * 60,
    maxPeriod: 4,
    scores: [1, 2, 3],
    teamNames: { home: 'Lakers', away: 'Celtics' },
    playerStats: {
      home: [
        { name: 'LeBron James', meta: '27 PTS • 8 REB • 7 AST' },
        { name: 'Anthony Davis', meta: '21 PTS • 12 REB • 2 BLK' },
        { name: 'Austin Reaves', meta: '18 PTS • 4 REB • 6 AST' },
        { name: 'Dangelo Russell', meta: '16 PTS • 3 REB • 5 AST' },
      ],
      away: [
        { name: 'Jayson Tatum', meta: '31 PTS • 9 REB • 6 AST' },
        { name: 'Jaylen Brown', meta: '26 PTS • 5 REB • 3 AST' },
        { name: 'Kristaps Porzingis', meta: '19 PTS • 8 REB • 2 BLK' },
        { name: 'Jrue Holiday', meta: '13 PTS • 4 REB • 7 AST' },
      ],
    },
  },
  WNBA: {
    label: 'Quarter',
    defaultSeconds: 10 * 60,
    maxPeriod: 4,
    scores: [1, 2, 3],
    teamNames: { home: 'Liberty', away: 'Aces' },
    playerStats: {
      home: [
        { name: 'Breanna Stewart', meta: '24 PTS • 9 REB • 5 AST' },
        { name: 'Sabrina Ionescu', meta: '18 PTS • 7 AST • 4 REB' },
        { name: 'Jonquel Jones', meta: '16 PTS • 11 REB • 2 BLK' },
        { name: 'Courtney Vandersloot', meta: '12 PTS • 9 AST • 3 STL' },
      ],
      away: [
        { name: 'Aja Wilson', meta: '28 PTS • 10 REB • 4 AST' },
        { name: 'Kelsey Plum', meta: '20 PTS • 5 AST • 2 STL' },
        { name: 'Jackie Young', meta: '16 PTS • 4 REB • 5 AST' },
        { name: 'Chelsea Gray', meta: '14 PTS • 8 AST • 2 STL' },
      ],
    },
  },
  NCAA: {
    label: 'Half',
    defaultSeconds: 20 * 60,
    maxPeriod: 2,
    scores: [1, 2, 3],
    teamNames: { home: 'Duke', away: 'UNC' },
    playerStats: {
      home: [
        { name: 'Cooper Flagg', meta: '22 PTS • 8 REB • 5 AST' },
        { name: 'Tyrese Proctor', meta: '17 PTS • 4 AST • 2 STL' },
        { name: 'Mark Mitchell', meta: '14 PTS • 7 REB • 2 BLK' },
        { name: 'Kon Knueppel', meta: '12 PTS • 3 REB • 2 AST' },
      ],
      away: [
        { name: 'RJ Davis', meta: '26 PTS • 5 AST • 4 REB' },
        { name: 'Armando Bacot', meta: '18 PTS • 12 REB • 2 BLK' },
        { name: 'Cormac Ryan', meta: '15 PTS • 4 AST • 2 STL' },
        { name: 'Harrison Ingram', meta: '11 PTS • 9 REB • 3 AST' },
      ],
    },
  },
  NFL: {
    label: 'Quarter',
    defaultSeconds: 15 * 60,
    maxPeriod: 4,
    scores: [3, 6, 7],
    teamNames: { home: 'Chiefs', away: '49ers' },
    playerStats: {
      home: [
        { name: 'Patrick Mahomes', meta: '287 PASS YDS • 2 TD' },
        { name: 'Isiah Pacheco', meta: '92 RUSH YDS • 1 TD' },
        { name: 'Travis Kelce', meta: '8 REC • 101 YDS • 1 TD' },
        { name: 'Chris Jones', meta: '2 SACKS • 6 TFL' },
      ],
      away: [
        { name: 'Brock Purdy', meta: '254 PASS YDS • 1 TD' },
        { name: 'Christian McCaffrey', meta: '104 RUSH YDS • 1 TD' },
        { name: 'Deebo Samuel', meta: '7 REC • 93 YDS' },
        { name: 'Nick Bosa', meta: '1.5 SACKS • 4 QBH' },
      ],
    },
  },
  MLB: {
    label: 'Inning',
    defaultSeconds: 20 * 60,
    maxPeriod: 9,
    scores: [1, 2, 3],
    teamNames: { home: 'Yankees', away: 'Dodgers' },
    playerStats: {
      home: [
        { name: 'Aaron Judge', meta: '2 H • 1 RBI • 1 BB' },
        { name: 'Giancarlo Stanton', meta: '1 HR • 2 RBI' },
        { name: 'Anthony Volpe', meta: '1 H • 1 RBI • 1 SB' },
        { name: 'Juan Soto', meta: '2 H • 2 BB' },
      ],
      away: [
        { name: 'Mookie Betts', meta: '3 H • 1 RBI' },
        { name: 'Shohei Ohtani', meta: '1 HR • 2 RBI' },
        { name: 'Freddie Freeman', meta: '2 H • 1 RBI' },
        { name: 'Will Smith', meta: '1 H • 1 RBI' },
      ],
    },
  },
  Soccer: {
    label: 'Half',
    defaultSeconds: 45 * 60,
    maxPeriod: 2,
    scores: [1, 2, 3],
    teamNames: { home: 'Barcelona', away: 'Real Madrid' },
    playerStats: {
      home: [
        { name: 'Lamine Yamal', meta: '1 G • 2 A • 5 key passes' },
        { name: 'Pedri', meta: '89% pass accuracy • 1 goal' },
        { name: 'Robert Lewandowski', meta: '2 shots on target • 1 goal' },
        { name: 'Jules Kounde', meta: '6 duels won • 2 tackles' },
      ],
      away: [
        { name: 'Kylian Mbappe', meta: '2 goals • 1 assist' },
        { name: 'Jude Bellingham', meta: '1 goal • 7 ball recoveries' },
        { name: 'Vinicius Jr.', meta: '4 dribbles • 2 chances created' },
        { name: 'Federico Valverde', meta: '94% pass accuracy • 5 tackles' },
      ],
    },
  },
  Cricket: {
    label: 'Over',
    defaultSeconds: 10 * 60,
    maxPeriod: 20,
    scores: [1, 2, 4],
    teamNames: { home: 'India', away: 'Australia' },
    playerStats: {
      home: [
        { name: 'Virat Kohli', meta: '48* • 5x4 • 1x6' },
        { name: 'Rohit Sharma', meta: '31 • 4x4 • 2x6' },
        { name: 'Kuldeep Yadav', meta: '2/24 • 4 overs' },
        { name: 'Hardik Pandya', meta: '18* • 2 wickets' },
      ],
      away: [
        { name: 'Travis Head', meta: '62 • 7x4 • 2x6' },
        { name: 'Steve Smith', meta: '44 • 3x4 • 1x6' },
        { name: 'Pat Cummins', meta: '3/27 • 5 overs' },
        { name: 'Mitchell Starc', meta: '2/21 • 4 overs' },
      ],
    },
  },
  PBA: {
    label: 'Quarter',
    defaultSeconds: 12 * 60,
    maxPeriod: 4,
    scores: [1, 2, 3],
    teamNames: { home: 'Barangay Ginebra', away: 'San Miguel' },
    playerStats: {
      home: [
        { name: 'Scottie Thompson', meta: '18 PTS • 8 REB • 7 AST' },
        { name: 'Jamie Malonzo', meta: '16 PTS • 6 REB • 2 BLK' },
        { name: 'Justin Brownlee', meta: '22 PTS • 5 REB • 4 AST' },
        { name: 'Christian Standhardinger', meta: '15 PTS • 10 REB • 2 AST' },
      ],
      away: [
        { name: 'June Mar Fajardo', meta: '24 PTS • 12 REB • 3 AST' },
        { name: 'CJ Perez', meta: '20 PTS • 4 REB • 3 AST' },
        { name: 'Marcio Lassiter', meta: '17 PTS • 2 STL • 4 3PM' },
        { name: 'Jericho Cruz', meta: '14 PTS • 5 AST • 2 STL' },
      ],
    },
  },
  NHL: {
    label: 'Period',
    defaultSeconds: 20 * 60,
    maxPeriod: 3,
    scores: [1, 2, 3],
    teamNames: { home: 'Maple Leafs', away: 'Bruins' },
    playerStats: {
      home: [
        { name: 'Auston Matthews', meta: '2 G • 1 A • 5 SOG' },
        { name: 'William Nylander', meta: '1 G • 2 A' },
        { name: 'Mitchell Marner', meta: '1 A • 3 SOG • 24:00 TOI' },
        { name: 'Morgan Rielly', meta: '2 A • 4 BLKS' },
      ],
      away: [
        { name: 'David Pastrnak', meta: '1 G • 3 A' },
        { name: 'Brad Marchand', meta: '2 G • 1 A' },
        { name: 'Charlie McAvoy', meta: '1 A • 6 HITS' },
        { name: 'Jeremy Swayman', meta: '.941 SV% • 27 saves' },
      ],
    },
  },
  Boxing: {
    label: 'Round',
    defaultSeconds: 3 * 60,
    maxPeriod: 12,
    scores: [1, 2, 3],
    teamNames: { home: 'Red Corner', away: 'Blue Corner' },
    playerStats: {
      home: [
        { name: 'Red Corner Boxer', meta: '76% JAB • 112 punches' },
        { name: 'Power Shot', meta: '9 landed • 2 knockdowns' },
        { name: 'Body Work', meta: '18 landed • 6 to the ribs' },
        { name: 'Defense', meta: '41% damage avoided' },
      ],
      away: [
        { name: 'Blue Corner Boxer', meta: '68% defense • 98 punches' },
        { name: 'Counter Attack', meta: '7 landed • 1 knockdown' },
        { name: 'Uppercut', meta: '11 landed • 3 clean' },
        { name: 'Stamina', meta: '88% last-round output' },
      ],
    },
  },
  MMA: {
    label: 'Round',
    defaultSeconds: 5 * 60,
    maxPeriod: 5,
    scores: [1, 2, 3],
    teamNames: { home: 'Pereira', away: 'Adesanya' },
    playerStats: {
      home: [
        { name: 'Significant Strikes', meta: '52 landed • 18 head shots' },
        { name: 'Takedowns', meta: '2/4 attempts • 1 clean' },
        { name: 'Pressure', meta: '72% forward movement' },
        { name: 'Defense', meta: '58% damage avoided' },
      ],
      away: [
        { name: 'Counter Strikes', meta: '41 landed • 9 clean' },
        { name: 'Range Control', meta: '3 leg kicks • 2 jabs' },
        { name: 'Clinches', meta: '5 successful • 29 sec' },
        { name: 'Submission Threat', meta: '1 arm-triangle setup' },
      ],
    },
  },
  Bellator: {
    label: 'Round',
    defaultSeconds: 5 * 60,
    maxPeriod: 5,
    scores: [1, 2, 3],
    teamNames: { home: 'Bader', away: 'Fedor' },
    playerStats: {
      home: [
        { name: 'Heavy Hands', meta: '29 significant strikes' },
        { name: 'Pressure', meta: '6 forward advances' },
        { name: 'Ground control', meta: '1:18' },
        { name: 'Defense', meta: '61% damage avoided' },
      ],
      away: [
        { name: 'Counter combo', meta: '26 landed • 5 clean' },
        { name: 'Clinch', meta: '4 successful • 18 sec' },
        { name: 'Kicks', meta: '7 leg strikes • 3 body' },
        { name: 'Submission', meta: '1 guillotine setup' },
      ],
    },
  },
  Tennis: {
    label: 'Set',
    defaultSeconds: 90 * 60,
    maxPeriod: 3,
    scores: [1, 2, 3],
    teamNames: { home: 'Djokovic', away: 'Alcaraz' },
    playerStats: {
      home: [
        { name: 'First serves', meta: '72% • 22 aces' },
        { name: 'Break points', meta: '3/5 converted' },
        { name: 'Return winners', meta: '9' },
        { name: 'Net points', meta: '7/9 won' },
      ],
      away: [
        { name: 'Forehand winners', meta: '14' },
        { name: 'Second serve', meta: '60% • 6 aces' },
        { name: 'Baseline rallies', meta: '21 won' },
        { name: 'Unforced errors', meta: '11' },
      ],
    },
  },
  'Table Tennis': {
    label: 'Game',
    defaultSeconds: 30 * 60,
    maxPeriod: 7,
    scores: [1, 2, 3],
    teamNames: { home: 'Fan Zhendong', away: 'Ma Long' },
    playerStats: {
      home: [
        { name: 'Forehand loops', meta: '21 winners' },
        { name: 'Service return', meta: '68% success' },
        { name: 'Short game', meta: '14/18 won' },
        { name: 'Footwork', meta: '9 explosive steps' },
      ],
      away: [
        { name: 'Backhand flicks', meta: '17 winners' },
        { name: 'Spin control', meta: '82% effective' },
        { name: 'Counterplay', meta: '11/14 won' },
        { name: 'Consistency', meta: '91% rally survival' },
      ],
    },
  },
  UFC: {
    label: 'Round',
    defaultSeconds: 5 * 60,
    maxPeriod: 5,
    scores: [1, 2, 3],
    teamNames: { home: 'Fighter A', away: 'Fighter B' },
    playerStats: {
      home: [
        { name: 'Striking', meta: '48 significant strikes' },
        { name: 'Takedowns', meta: '2/3 attempts' },
        { name: 'Ground control', meta: '1:12' },
        { name: 'Defense', meta: '64% defense' },
      ],
      away: [
        { name: 'Striking', meta: '39 significant strikes' },
        { name: 'Control', meta: '1:42 control time' },
        { name: 'Clinches', meta: '6 successful' },
        { name: 'Submission', meta: '1 threat' },
      ],
    },
  },
};

const state = {
  home: 0,
  away: 0,
  period: 1,
  secondsRemaining: sportConfig.NBA.defaultSeconds,
  timerOn: false,
  sport: 'NBA',
};

const homeScoreEl = document.getElementById('homeScore');
const awayScoreEl = document.getElementById('awayScore');
const periodDisplay = document.getElementById('periodDisplay');
const clockDisplay = document.getElementById('clockDisplay');
const toggleTimerBtn = document.getElementById('toggleTimerBtn');
const resetBtn = document.getElementById('resetBtn');
const sportSelect = document.getElementById('sportSelect');
const periodLabel = document.getElementById('periodLabel');
const homeTeamName = document.getElementById('homeTeamName');
const awayTeamName = document.getElementById('awayTeamName');
const homeScoreButtons = document.getElementById('homeScoreButtons');
const awayScoreButtons = document.getElementById('awayScoreButtons');
const homePlayersList = document.getElementById('homePlayersList');
const awayPlayersList = document.getElementById('awayPlayersList');
const homeLeadersTitle = document.getElementById('homeLeadersTitle');
const awayLeadersTitle = document.getElementById('awayLeadersTitle');
const tickerText = document.getElementById('tickerText');

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const renderScoreButtons = () => {
  const config = sportConfig[state.sport];

  const buildButtons = (team, container) => {
    container.innerHTML = '';
    config.scores.forEach((points) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `${team}-btn score-btn`;
      btn.dataset.team = team;
      btn.dataset.points = String(points);
      btn.textContent = `+${points}`;
      container.appendChild(btn);
    });
  };

  buildButtons('home', homeScoreButtons);
  buildButtons('away', awayScoreButtons);
};

const renderPlayerStats = () => {
  const config = sportConfig[state.sport];

  const renderTeamStats = (teamKey, listEl, titleEl, teamLabel) => {
    const players = config.playerStats[teamKey] || [];
    titleEl.textContent = `${teamLabel} Leaders`;
    listEl.innerHTML = players
      .map(
        (player) => `
          <li>
            <span class="player-name">${player.name}</span>
            <span class="player-meta">${player.meta}</span>
          </li>
        `
      )
      .join('');
  };

  renderTeamStats('home', homePlayersList, homeLeadersTitle, config.teamNames.home);
  renderTeamStats('away', awayPlayersList, awayLeadersTitle, config.teamNames.away);
};

const updateTicker = () => {
  const config = sportConfig[state.sport];
  const leader = state.home === state.away
    ? 'Teams are tied' 
    : `${state.home > state.away ? config.teamNames.home : config.teamNames.away} leads ${Math.abs(state.home - state.away)}`;

  const gameState = state.timerOn ? 'Live now' : 'Waiting to start';
  tickerText.textContent = `${config.label} ${state.period} • ${gameState} • ${config.teamNames.home} ${state.home} - ${state.away} ${config.teamNames.away} • ${leader}`;
};

const updateDisplay = () => {
  const config = sportConfig[state.sport];

  homeScoreEl.textContent = state.home;
  awayScoreEl.textContent = state.away;
  periodDisplay.textContent = state.period;
  clockDisplay.textContent = formatTime(state.secondsRemaining);
  periodLabel.textContent = config.label;
  homeTeamName.textContent = config.teamNames.home;
  awayTeamName.textContent = config.teamNames.away;
  renderPlayerStats();
  updateTicker();
};

const resetState = () => {
  const config = sportConfig[state.sport];
  state.home = 0;
  state.away = 0;
  state.period = 1;
  state.secondsRemaining = config.defaultSeconds;
  state.timerOn = false;
  toggleTimerBtn.textContent = 'Start';
  toggleTimerBtn.setAttribute('aria-pressed', 'false');
  updateDisplay();
};

const tick = () => {
  if (!state.timerOn) return;

  if (state.secondsRemaining > 0) {
    state.secondsRemaining -= 1;
    updateDisplay();
    return;
  }

  state.timerOn = false;
  toggleTimerBtn.textContent = 'Start';
  toggleTimerBtn.setAttribute('aria-pressed', 'false');
};

setInterval(tick, 1000);

toggleTimerBtn.addEventListener('click', () => {
  state.timerOn = !state.timerOn;
  toggleTimerBtn.textContent = state.timerOn ? 'Pause' : 'Start';
  toggleTimerBtn.setAttribute('aria-pressed', String(state.timerOn));
  updateTicker();
});

sportSelect.addEventListener('change', (event) => {
  state.sport = event.target.value;
  renderScoreButtons();
  resetState();
});

document.querySelectorAll('[data-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const { action } = button.dataset;
    const config = sportConfig[state.sport];

    if (action === 'period-up') {
      state.period = Math.min(config.maxPeriod, state.period + 1);
    }
    if (action === 'period-down') {
      state.period = Math.max(1, state.period - 1);
    }
    updateDisplay();
  });
});

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.score-btn');
  if (!trigger) return;

  const { team, points } = trigger.dataset;
  const value = Number(points);

  if (team === 'home') state.home += value;
  if (team === 'away') state.away += value;

  updateDisplay();
});

renderScoreButtons();
updateDisplay();
