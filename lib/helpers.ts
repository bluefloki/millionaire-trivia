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

export const formatNumberForMobile = (number: string): string => {
  const num = Number(number);
  const absNum = Math.abs(num);

  const abbreviations = [
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];

  for (let i = abbreviations.length - 1; i >= 0; i--) {
    if (absNum >= abbreviations[i].value) {
      const roundedNumber = Number((num / abbreviations[i].value).toFixed(1));
      return roundedNumber + abbreviations[i].symbol;
    }
  }

  return num.toString();
};
