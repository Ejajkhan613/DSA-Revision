// Remove smallest number to find the total sum which is divisible by 7

let arr = [14, 8, 2, 4, 7];

function rem_el(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let smallest = -1;
    let elem = Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if ((sum - arr[i]) % 7 == 0 && elem >= arr[i]) {
            smallest = i;
            elem = arr[i];
        }
    }

    console.log(smallest);
}
rem_el(arr);
