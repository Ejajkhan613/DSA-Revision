// Find the triplet whose sum is K

let k = 24;

let arr = [7, 5, 9, 6, 26, 8, 11, 17];

arr = arr.sort((a, b) => a - b);

function triplet() {
    for (let a = 0; a < arr.length - 1; a++) {
        let b = a + 1;
        let c = arr.length - 1;

        while (b < c) {
            let sum = arr[a] + arr[b] + arr[c];

            if (sum == k) {
                return `${arr[a]}, ${arr[b]}, ${arr[c]}`;
            } else if (sum > k) {
                c--;
            } else {
                b++;
            }
        }
    }
    return -1;
}

let ans = triplet();
console.log(ans);
