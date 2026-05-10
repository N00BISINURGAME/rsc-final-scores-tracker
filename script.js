const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTi69SlOELKx_49-rnpEBPel2YfVUCuzZ5evYGgFD7cevYc6laRx_T2W2Vx7kyoxXZWO_iiyUvcFNru/pub?gid=0&single=true&output=csv";

const container = document.getElementById("scores-container");

function loadScores() {

    // Clears old cards before reloading
    container.innerHTML = "";

    Papa.parse(sheetURL, {

        download: true,
        header: true,

        complete: function(results) {

            const data = results.data;

            data.forEach(game => {

                if (!game.LEAGUE) return;

                let awayScore = "-";
                let homeScore = "-";

                if (game.SCORE && game.SCORE.includes("-")) {

                    const scores = game.SCORE.split("-");

                    awayScore = scores[0];
                    homeScore = scores[1];

                }

                const statusClass = game.STATUS
                    ? game.STATUS.toLowerCase()
                    : "";

                const card = `
                
                <div class="league-section">

                    <div class="league-header">
                        ${game.LEAGUE}
                    </div>

                    <div class="game-card">

                        <div class="team-row">

                            <div class="team-info">

                                <img 
                                    class="team-logo"
                                    src="assets/logos/${game.LEAGUE.toLowerCase()}/${game.AWAY.toLowerCase()}.png"
                                    onerror="this.style.display='none'"
                                >

                                <span class="team-name">
                                    ${game.AWAY}
                                </span>

                            </div>

                            <span class="team-score">
                                ${awayScore}
                            </span>

                        </div>

                        <div class="team-row">

                            <div class="team-info">

                                <img 
                                    class="team-logo"
                                    src="assets/logos/${game.LEAGUE.toLowerCase()}/${game.HOME.toLowerCase()}.png"
                                    onerror="this.style.display='none'"
                                >

                                <span class="team-name">
                                    ${game.HOME}
                                </span>

                            </div>

                            <span class="team-score">
                                ${homeScore}
                            </span>

                        </div>

                        <div class="game-footer ${statusClass}">
                            ${game.STATUS} • ${game.CHANNEL}
                        </div>

                    </div>

                </div>

                `;

                container.innerHTML += card;

            });

        }

    });

}

// Load immediately
loadScores();

// Auto refresh every 30 seconds
setInterval(loadScores, 30000);