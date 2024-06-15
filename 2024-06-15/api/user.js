import { BASE_URL } from "./index.js";

/**
 * @typedef { Object } userInfo
 * @property { number } id ID
 * @property { string } name 고유이름
 * @property { string } username 사용자 아이디
 * @property { string } email 사용자 이메일
 * @property { string } phone 핸드폰번호
 * @property { string } website 웹사이트 주소
 * @property { string } province
 * @property { string } city 사는 지역
 * @property { string } district 주소
 */

/**
 *
 * @returns { userInfo[] }
 */
export const fetchUserInfo = async () => {
  const response = await fetch(`${BASE_URL}users`, { method: "GET" });
  const parsedData = await response.json();
  return parsedData;
};
