// Sum of Special Pairs

// You are given an array A of N integers.

// Write a program to find the sum of the absolute difference between all such pairs (A[i],A[j])
//  such that: i<j, and (j−i) is prime.

let arr = [1, 2, 3, 5, 7, 12];

function special_pairs(arr) {
    let sum = 0;
    for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            let p = isPrime(b - a);
            if (p) {
                sum += Math.abs(arr[a] - arr[b]);
            }
        }
    }
    console.log(sum);
}

special_pairs(arr);

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let a = 2; a <= Math.sqrt(num); a++) {
        if (num % a == 0) {
            return false;
        }
    }
    return true;
}
