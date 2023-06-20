export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

export const formatNumberWithCommas = (numberString: string) => {
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatTime = (seconds: number) => {
  const formattedSeconds = String(seconds).padStart(2, "0");
  return formattedSeconds;
};
