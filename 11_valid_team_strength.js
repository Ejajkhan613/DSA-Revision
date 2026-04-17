// Validate Team Strength

// Description:
// There are two teams. Given an integer n and an array of length 2n,
// the first n elements of the array represent the strength of the first team and
// the next n elements represent the strength of the second team.

// You have to calculate the absolute difference between the total strengths of both teams.

// If this difference is less than a given integer k, print "Valid"
// Otherwise, print "Invalid"

const n = 4;
const arr = [4, 3, 2, 1, 5, 4, 2, 1];
const k = 3;

let i = 0;
let j = n;

let isum = 0;
let jsum = 0;

while (i < n) {
    isum += arr[i];
    i++;
    jsum += arr[j];
    j++;
}

if (Math.abs(isum - jsum) < k) {
    console.log("Valid");
} else {
    console.log("Invalid");
}
