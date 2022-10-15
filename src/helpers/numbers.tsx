export const toCompactNumber = (number) => {
  if (number > 9999) {
    return Intl.NumberFormat("en", {notation: "compact"}).format(number);
  } else {
    return number;
  }
};
