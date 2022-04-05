export const getString = (date) => {
  // return date.toISOString().slice(0, 10);
  // //ISO형식 문자열 반환 모질라 검색해보자
  let year = date.getFullYear();

  let month = date.getMonth() + 1;

  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
