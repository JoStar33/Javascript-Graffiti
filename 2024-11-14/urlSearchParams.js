const searchParam = "?search=12451&id=gsgdfhg243&searchType=TEST";
const urlSearchParams = new URLSearchParams(searchParam);

//URLSearchParams { 'search' => '12451', 'id' => 'gsgdfhg243', 'searchType' => 'TEST' }
console.log(urlSearchParams);

//12451
console.log(urlSearchParams.get("search"));
urlSearchParams.set("final", "info");

//쿼리 문자열로 다시 변환할때는 아래와 같이 toString
//search=12451&id=gsgdfhg243&searchType=TEST&final=info
console.log(urlSearchParams.toString());
