function climbingLeaderboard(ranked, player) {
    let uniqueRanked = [...new Set(ranked)];
    let result = [];
    let j = uniqueRanked.length - 1;
    for (let i = 0; i < player.length; i++) {
        while (j >= 0) {
            if (player[i] >= uniqueRanked[j]) {
                j--;
            } else {
                result.push(j + 2);
                break;
            }
        }
        if (j < 0) {
            result.push(1);
        }
    }
    return result;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))



