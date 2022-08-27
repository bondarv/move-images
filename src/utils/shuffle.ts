export const shuffle = (array: string[]) => {
  const resultArray = [...array];
  let currentIndex = resultArray.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [resultArray[currentIndex], resultArray[randomIndex]] = [
      resultArray[randomIndex],
      resultArray[currentIndex],
    ];
  }

  return resultArray;
};
