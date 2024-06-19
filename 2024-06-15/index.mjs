import { fetchUserInfo } from "./api/user.js";
import {
  userInfoDisplayer,
  consoleInfoDisplayer,
  findPersonInfoDisplayer,
} from "./displayer.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//요구사항: 주소록을 만들어주세요. 대신에 김씨성을 가진사람의 이름앞에 별을 붙여주시구요
//사용자의 정보를 3 x 3열 형태의 예쁜모양으로 만들어주세요. 이름 / 전화번호 / 사는지역 순으로요
//그리고 사용자의 정보아래에 메모를 달 수 있는 기능도 만들어주세요. 사용자의 메모 정보가 저장가능하도록 해주세요.

/**
 * @typedef { Object } userArrayElement
 * @property { number } id
 * @property { string } name
 * @property { string } phone
 * @property { string } address
 * @property { string } memo
 */

/**
 * @type { userArrayElement[] }
 */
let userArray = [];
let inputModeInfo = -1;

const main = async () => {
  const userInfo = await fetchUserInfo();
  const parsedUserInfo = userInfo.map((user) => ({
    id: user.id,
    name: user.name.slice(0, 1) === "김" ? `✨${user.name}` : user.name,
    phone: user.phone,
    address: `${user.province} ${user.city} ${user.district}`.trim(),
    memo: "",
  }));
  userArray = parsedUserInfo;
};

const findPerson = (line) => {
  const filteredUsers = userArray.filter((user) => user.name.includes(line));
  userInfoDisplayer(filteredUsers);
  findPersonInfoDisplayer();
};

await main();
userInfoDisplayer(userArray);
consoleInfoDisplayer();

rl.on("line", (line) => {
  const numberLine = parseInt(line);
  if (inputModeInfo === 1 && numberLine === 0) {
    userInfoDisplayer(userArray);
    consoleInfoDisplayer();
    inputModeInfo = -1;
    return;
  }
  if (inputModeInfo === 1) {
    findPerson(line);
    return;
  }
  if (isNaN(numberLine)) {
    console.log("숫자만 입력 가능합니다!");
    return;
  }
  if (numberLine === 1) {
    findPersonInfoDisplayer();
    inputModeInfo = 1;
    return;
  }
  if (numberLine === 0) {
    rl.close();
    return;
  }
  console.log("정의되지않은 숫자입니다!");
}).on("close", () => {
  process.exit();
});
