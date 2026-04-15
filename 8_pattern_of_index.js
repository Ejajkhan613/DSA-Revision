// Print the pattern

// 0 1 0 2 0
// 1 1 1 2 1
// 2 1 2 2 2
// 3 1 3 2 3
// 4 1 4 2 4

let N = 5;

for (let a = 0; a < N; a++) {
    let line = "";
    for (let b = 0; b < N; b++) {
        if (b % 2 != 0) {
            line += b + " "
        } else {
            line += a + " "
        }
    }
    console.log(line);
}
