// Find longest Palindromic substring

function isPalindrome(substr) {
    let i = 0;
    let j = substr.length - 1;

    while (i < j) {
        if (substr[i] != substr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

let str = "racecar";

let len = -1;
for (let i = 0; i < str.length; i++) {
    let bag = "";
    for (let j = i; j < str.length; j++) {
        bag += str[j];

        if (isPalindrome(bag)) {
            len = Math.max(len, bag.length);
        }
    }
}

console.log(len);
