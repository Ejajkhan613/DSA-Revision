// Find the pair whose sum is K

let K = 25;

let arr = [7, 4, 9, 6, 26, 8, 11, 17];

arr = arr.sort((a, b) => a - b);

let i = 0;
let j = arr.length - 1;

while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum == K) {
        console.log(arr[i], arr[j]);
        return;
    } else if (sum > K) {
        j--;
    } else {
        i++;
    }
}
