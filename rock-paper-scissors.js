const prompt = require('prompt-sync')({sigint: true});

let player1 = prompt("Player 1 enter: rock, paper, or scissors : " )
let player2 = prompt("Player 2 enter: rock, paper, or scissors : " )


if (player1 === "rock" && player2 === "paper"){
    console.log("Player 2 wins!")
}
else if (player1 === "paper" && player2 === "scissors"){
    console.log("Player 2 wins!")
}
else if (player1 === "scissors" && player2 === "rock"){
    console.log("Player 2 wins!")
}
else if (player2 === "rock" && player1 === "paper"){
    console.log("Player 1 wins!")
}
else if (player2 === "paper" && player1 === "scissors"){
    console.log("Player 1 wins!")
}
else if (player2 === "scissors" && player1 === "rock"){
    console.log("Player 1 wins!")
}
else if (player1 === "rock" && player2 === "rock"){
    console.log("Tie! Try Again!")
}
else if (player1 === "scissors" && player2 === "scissors"){
    console.log("Tie! Try Again!")
}
else if (player1 === "paper" && player2 === "paper"){
    console.log("Tie! Try Again!")
}
else if (player1 !== "paper" || "rock" || "scissors"){
    console.log("Invalid Input!")
}
else if (player2 !== "paper" || "rock" || "scissors"){
    console.log("Invalid Input!")
}