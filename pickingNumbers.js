function pickingNumbers(ar) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        count = 0;
        for (let j = 0; j < ar.length; j++) {
            if (ar[i] - ar[j] === 0 || ar[i] - ar[j] === 1) {
                count++;
            }
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))