let board = document.querySelectorAll(".grid");
let turn = document.getElementById('turn');
let replay = document.getElementById('replay');
let turnCount = 0;
let playerTurn = 0;
let win = false;

$('.grid').on('click', function() {
    if(!win && this.innerHTML == '') {
        if(playerTurn == 0) {
            executeTurn(this, 'X');
            if(!win && turnCount < 8) {
                turn.innerHTML = 'Player O Turn';
                playerTurn = 1;
            }
        }
        else {
            executeTurn(this, 'O');
            if(!win && turnCount < 8) {
                turn.innerHTML = 'Player X Turn';
                playerTurn = 0;
            }
        }
    }
});

replay.addEventListener('click', () => {
    resetGame();
});

function resetGame() {

    for(let i = 0; i < board.length; i++) {
        let grid = document.getElementById(`${board[i].id}`);
        grid.innerHTML = '';
        grid.classList.remove('filled');
        grid.classList.remove('winGrid');
    }
    replay.setAttribute('class', 'btn btn-secondary');
    turn.removeAttribute('class');
    turn.removeAttribute('role');
    turn.innerHTML = 'Player X Starts';
    win = false;
    playerTurn = 0;
    turnCount = 0;
}

function executeTurn(element, mark) {
    element.innerHTML = mark;
    element.classList.add("filled");
    checkWin(element);
    turnCount++;
}

 function checkWin(element) {
    let g1 = document.getElementById('grid1');
    let g2 = document.getElementById('grid2');
    let g3 = document.getElementById('grid3');
    let g4 = document.getElementById('grid4');
    let g5 = document.getElementById('grid5');
    let g6 = document.getElementById('grid6');
    let g7 = document.getElementById('grid7');
    let g8 = document.getElementById('grid8');
    let g9 = document.getElementById('grid9');


    //Check to see if it was a draw

    if(turnCount == 8) {
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = 'It was a Draw!';
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }
    //Check Diagonals for win

    if(g1.innerHTML == g5.innerHTML && g5.innerHTML == g9.innerHTML && g1.innerHTML != '') {
        g1.classList.add('winGrid');
        g5.classList.add('winGrid');
        g9.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        console.log(element.innerHTML);
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }

    if(g3.innerHTML == g5.innerHTML && g5.innerHTML == g7.innerHTML && g3.innerHTML != '') {
        g3.classList.add('winGrid');
        g5.classList.add('winGrid');
        g7.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }

    //Check Horizontals for win

    if(g1.innerHTML == g2.innerHTML && g2.innerHTML == g3.innerHTML && g1.innerHTML != '') {
        g1.classList.add('winGrid');
        g2.classList.add('winGrid');
        g3.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }

    if(g4.innerHTML == g5.innerHTML && g5.innerHTML == g6.innerHTML && g4.innerHTML != '') {
        g4.classList.add('winGrid');
        g5.classList.add('winGrid');
        g6.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }

    if(g7.innerHTML == g8.innerHTML && g8.innerHTML == g9.innerHTML && g7.innerHTML != '') {
        g7.classList.add('winGrid');
        g8.classList.add('winGrid');
        g9.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }

    //Check Verticals for win

    if(g1.innerHTML == g4.innerHTML && g4.innerHTML == g7.innerHTML && g1.innerHTML != '') {
        g1.classList.add('winGrid');
        g4.classList.add('winGrid');
        g7.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }

    if(g2.innerHTML == g5.innerHTML && g5.innerHTML == g8.innerHTML && g2.innerHTML != '') {
        g2.classList.add('winGrid');
        g5.classList.add('winGrid');
        g8.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }

    if(g3.innerHTML == g6.innerHTML && g6.innerHTML == g9.innerHTML && g3.innerHTML != '') {
        g3.classList.add('winGrid');
        g6.classList.add('winGrid');
        g9.classList.add('winGrid');
        turn.setAttribute('class', 'alert alert-success');
        turn.setAttribute('role', 'alert');
        turn.innerHTML = `Player ${element.innerHTML} is the Winner!`;
        win = true;
        replay.setAttribute('class', 'btn btn-success');
        return;
    }
}
