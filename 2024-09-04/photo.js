function solution(name, yearning, photo) {
  const photoMap = new Map();
  name.forEach((element, index) => {
    photoMap.set(element, yearning[index]);
  });
  const newPhoto = photo.map((photoElement) => {
    let result = 0;
    photoElement.forEach((nameValue) => {
      result += photoMap.get(nameValue) ?? 0;
    });
    return result;
  });
  return newPhoto;
}
