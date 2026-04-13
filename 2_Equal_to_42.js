// Equal to 42 or not!

// You are given an array of N integers.
// You need to print Yes if 42 is present in array, else print No.

function equal(arr) {
    const match = 42;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == match) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}

equal([42, 43, 45, 65, 43]);
