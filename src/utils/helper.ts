export const getDateElement = (date: Date) => {
  return {
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};
