// Exit the Grid

// Description

// You are playing the famous Maze Runner Arcade Game.
// The game contains a maze which has values {'L', 'R', 'U', 'D'},
// where L -> indicates that you move left, R -> indicates that you move right,

// U -> indicates that you move up, while D -> indicates that you move down.
// The score is calculated as the number of moves in which you exit the grid.
// If you cannot exit the grid, that means your score should be returned as 0.
// Given a square matrix, denoting the maze, write a program to calculate the score.

// Note: You will always enter the maze through the position (0,0).

let matrix = [
    ["L", "R", "R", "D"],
    ["L", "L", "L", "D"],
    ["U", "U", "U", "D"],
    ["D", "D", "D", "D"]
];

let i = 0;
let j = 0;

let n = matrix.length;

let steps = 0;
let map = new Set();

while (i < n && j < n && i >= 0 && j >= 0) {
    if (map.has(`${i},${j}`)) {
        console.log(0);
        return;
    }

    map.add(`${i},${j}`);

    if (matrix[i][j] == "R") {
        j++;
    } else if (matrix[i][j] == "L") {
        j--;
    } else if (matrix[i][j] == "U") {
        i--;
    } else {
        i++;
    }
    steps++;
}

console.log(steps);
