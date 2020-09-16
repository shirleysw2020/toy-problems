const champagneTower = (poured, queryRow, queryGlass) => {

  // Create empty ChampagneMatrix
  const champagneMatrix = []
  for (let row = 0; row <= queryRow; row++) {
    champagneMatrix[row] = Array(row + 1).fill(0);
  }

  // Keep track of total champagne flowed through each glass
  champagneMatrix[0][0] = poured;
  for (let i = 0; i < queryRow; i++) {
    for (let j = 0; j <= i; j++) {
      if (champagneMatrix[i][j] > 1) {
        const overflow = (champagneMatrix[i][j] - 1) / 2;
        champagneMatrix[i + 1][j] += overflow;
        champagneMatrix[i + 1][j + 1] += overflow;
      }
    }
  }

  // return queried Glass amount
  return Math.min(champagneMatrix[queryRow][queryGlass], 1);
}
