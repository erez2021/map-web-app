const whiteHexadecimal = 16777215;

export const generateRandomHexColor = () => {
  const randomColor = Math.floor(Math.random() * whiteHexadecimal).toString(16);
  return '#' + randomColor.padStart(6, '0');
};
