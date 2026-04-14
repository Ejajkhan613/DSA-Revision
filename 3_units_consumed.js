// Units Consumed

// Description

// Electricity consumption is measured via slab rates for a particular wattage capacity,
// which is as follows:

// Units Consumed	        Per Unit Price (in Rupees/unit)
// 0 - 50	                3
// 51 - 150                 5
// 150 and above	        10

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// You are given total amount of bill, N, you need to find total unit consumed.

let N = 100;

N = N - 80;

if (N <= 150) {
    console.log(N / 3);
} else if (N <= 650) {
    console.log((N - 150) / 5 + 50);
} else {
    console.log((N - 650) / 10 + 150);
}
