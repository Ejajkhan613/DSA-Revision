// Find even sum of subarrays and count

let arr = [1, 2, 3];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    let bag = 0;
    for (let j = i; j < arr.length; j++) {
        bag += arr[j];

        if (bag % 2 == 0) {
            count++;
        }
    }
}
console.log(count);
