// Check Palindrome

let Num = 123454321;
let Dup = Num;
let Rev = 0;
while (Dup >= 1) {
    let rem = Dup % 10;
    Rev = Rev * 10 + rem;
    Dup = Math.floor(Dup / 10);
}

console.log(Num == Rev)