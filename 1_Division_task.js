// You are given a number N.

// Let’s say you derive a variable x which is equal to the floor
// of a number you get when 32 is divided by N.

// In case x is 0, print Too Low
// In case it is not possible to generate a valid number, print -1
// In all other cases, print x

function division_tast(N) {
    const num = 32;

    let x = Math.floor(N / num);

    if (x == 0) {
        console.log("Too Low");
    } else if (N == 0) {
        console.log(-1);
    } else {
        console.log(x);
    }
}

division_tast(12);
