let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userscorepara = document.querySelector('#user-score');
const compscorepara = document.querySelector('#comp-score');

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a draw, play again!";
    msg.style.backgroundColor = "gray";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText =' You win!';
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = 'You lose!' ;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("Comp choice =", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});