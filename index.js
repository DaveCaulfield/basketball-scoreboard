let homeScore = 0;
let guestScore = 0;

let homeScorePoints = document.getElementById("home-points-parag")
let guestScorePoints = document.getElementById("guest-points-parag")

let homeSide = document.getElementById("home")
let guestSide = document.getElementById("guest")

// home score functions:

function incrementHome1() {
    homeScore += 1;
    homeScorePoints.textContent = homeScore;
    leadScore()

}

function incrementHome2() {
    homeScore += 2;
    homeScorePoints.textContent = homeScore;
    leadScore()
}

function incrementHome3() {
    homeScore += 3;
    homeScorePoints.textContent = homeScore;
    leadScore()
}


function decrementHome1() {
    homeScore -= 1;
    homeScorePoints.textContent = homeScore;
    if (homeScore < 1) {
        homeScore = 0;
        homeScorePoints.textContent = 0;
    }
    leadScore()
}

function decrementHome2() {
    homeScore -= 2;
    homeScorePoints.textContent = homeScore;
    if (homeScore < 1) {
        homeScore = 0;
        homeScorePoints.textContent = 0;
    }
    leadScore()
}

function decrementHome3() {
    homeScore -= 3;
    homeScorePoints.textContent = homeScore;
    if (homeScore < 1) {
        homeScore = 0;
        homeScorePoints.textContent = 0;
    }
    leadScore()
}




// guest score functions:

function incrementGuest1() {
    guestScore += 1;
    guestScorePoints.textContent = guestScore;
    leadScore()
}

function incrementGuest2() {
    guestScore += 2;
    guestScorePoints.textContent = guestScore;
    leadScore()
}

function incrementGuest3() {
    guestScore += 3;
    guestScorePoints.textContent = guestScore;
    leadScore()
}


function decrementGuest1() {
    guestScore -= 1;
    guestScorePoints.textContent = guestScore;
    if (guestScore < 1) {
        guestScore = 0;
        guestScorePoints.textContent = 0;
    }
    leadScore()
}

function decrementGuest2() {
    guestScore -= 2;
    guestScorePoints.textContent = guestScore;
    if (guestScore < 1) {
        guestScore = 0;
        guestScorePoints.textContent = 0;
    }
    leadScore()
}


function decrementGuest3() {
    guestScore -= 3;
    guestScorePoints.textContent = guestScore;
    if (guestScore < 1) {
        guestScore = 0;
        guestScorePoints.textContent = 0;
    }
    leadScore()
}





function leadScore() {
    if (homeScore > guestScore) {
        homeSide.style.color = "lime";
        guestSide.style.color = "white";
    } else if (guestScore > homeScore) {
        guestSide.style.color = "lime";
        homeSide.style.color = "white";
    } else {
        homeSide.style.color = "white";
        guestSide.style.color = "white";
    }
}

function resetScoreboard() {
    homeScore = 0;
    homeScorePoints.textContent = homeScore;
    guestScore = 0;
    guestScorePoints.textContent = guestScore;
    homeSide.style.color = "white";
    guestSide.style.color = "white";
}

