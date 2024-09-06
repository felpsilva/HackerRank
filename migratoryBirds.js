function migratoryBirds(arr) {
  let birdCount = {};
  let max = 0;
  let maxBird = 0;
  for (let i = 0; i < arr.length; i++) {
    if (birdCount[arr[i]]) {
      birdCount[arr[i]]++;
    } else {
      birdCount[arr[i]] = 1;
    }
  }
  for (let bird in birdCount) {
    if (birdCount[bird] > max) {
      max = birdCount[bird];
      maxBird = bird;
    }
  }
  console.log(maxBird);
}

migratoryBirds([1, 1, 4, 4, 4, 5, 3, 3, 3]);
