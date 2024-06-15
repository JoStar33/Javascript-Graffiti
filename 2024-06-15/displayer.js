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

export const consoleInfoDisplayer = () => {
  console.log("\n🚨숫자만 입력가능!");
  console.log("");
  console.log("입력한 정보 입력: 1");
  console.log("종료: 0");
};
