// Check if any neighbour is a prime

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

let arr = [3, 4, 2, 5, 7, 5];

let count = 0;
for (let a = 0; a < arr.length; a++) {
    if (
        (arr[a - 1] !== undefined && isPrime(arr[a - 1])) ||
        (arr[a + 1] !== undefined && isPrime(arr[a + 1]))
    ) {
        count++;
    }
}

console.log(count);