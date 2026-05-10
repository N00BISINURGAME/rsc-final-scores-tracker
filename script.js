const container = document.getElementById("scores-container");

const games = [

    {
        league: "LFG",
        away: "Baltimore",
        awayScore: "47",
        home: "Fyatteville",
        homeScore: "31",
        status: "FINAL",
        channel: "RSC1"
    },

    {
        league: "HCBB",
        away: "San Francisco",
        awayScore: "5",
        home: "Milwaukee",
        homeScore: "1",
        status: "FINAL",
        channel: "RSC1"
    },

    {
        league: "HSFL",
        away: "Marcos",
        awayScore: "35",
        home: "Hough",
        homeScore: "43",
        status: "FINAL",
        channel: "RSC3"
    },

    {
        league: "UFF",
        away: "Portsmouth",
        awayScore: "-",
        home: "Panthers",
        homeScore: "-",
        status: "PLAYING",
        channel: "RSC2"
    }

];

games.forEach(game => {

    const statusClass = game.status.toLowerCase();

    const card = `
    
    <div class="league-section">

        <div class="league-header">
            ${game.league}
        </div>

        <div class="game-card">

            <div class="team-row">

                <div class="team-info">

                    <img 
                        class="team-logo"
                        src="assets/logos/${game.league.toLowerCase()}/${game.away.toLowerCase()}.png"
                        onerror="this.style.display='none'"
                    >

                    <span class="team-name">
                        ${game.away}
                    </span>

                </div>

                <span class="team-score">
                    ${game.awayScore}
                </span>

            </div>

            <div class="team-row">

                <div class="team-info">

                    <img 
                        class="team-logo"
                        src="assets/logos/${game.league.toLowerCase()}/${game.home.toLowerCase()}.png"
                        onerror="this.style.display='none'"
                    >

                    <span class="team-name">
                        ${game.home}
                    </span>

                </div>

                <span class="team-score">
                    ${game.homeScore}
                </span>

            </div>

            <div class="game-footer ${statusClass}">
                ${game.status} • ${game.channel}
            </div>

        </div>

    </div>

    `;

    container.innerHTML += card;

});