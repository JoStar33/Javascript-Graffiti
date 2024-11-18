const BASE_URL = "https://koreanjson.com/";
const onePromise = () => Promise.resolve("One!");

const fetcher = fetch(`${BASE_URL}users`, { method: "GET" });
const timeoutValue = async () => {
  return await onePromise();
};

const main = async () => {
  const response = await Promise.all([fetcher, timeoutValue]);
  console.log(await response[0].json());
};
main();
