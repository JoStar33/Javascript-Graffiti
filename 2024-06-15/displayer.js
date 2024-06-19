/**
 * @typedef { Object } userArrayElement
 * @property { number } id
 * @property { string } name
 * @property { string } phone
 * @property { string } address
 * @property { string } memo
 */

/**
 * @param { userArrayElement[] } userArray
 */
export const userInfoDisplayer = (userArray) => {
  console.log("[이름]     [전화번호]       [주소]");
  userArray.map((user) => {
    console.log(`${user.name}    ${user.phone}     ${user.address}`);
  });
};

export const findPersonInfoDisplayer = () => {
  console.log("\n 찾고싶은 사용자 정보를 입력해주세요.");
  console.log("");
  console.log("사용자 이름입력바람");
  console.log("종료: 0");
};

export const consoleInfoDisplayer = () => {
  console.log("\n🚨숫자만 입력가능!");
  console.log("");
  console.log("사람찾기: 1");
  console.log("메모하기: 2");
  console.log("종료: 0");
};
