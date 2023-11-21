//객체를 강제 동결시켜버리고 프로퍼티는 유일무이한 값이 되었다.
const enumByJavascript = Object.freeze({
  사용자그룹명: Symbol('usr_grp_nm'),
  상위사용자그룹설정: Symbol('up_usr_grp_nm'),
  회원정보수정설정: Symbol('acct_mod_psb_yn'),
  그룹공유폴더이름: Symbol('shar_str_nm')
});

const headerRename = (value) => {
  switch(value) {
    case '사용자그룹명': 
      value = enumByJavascript.사용자그룹명;
    case '회원정보수정설정': 
      value = enumByJavascript.회원정보수정설정;
    case '상위사용자그룹설정': 
      value = enumByJavascript.상위사용자그룹설정;
    case '그룹공유폴더이름': 
      value = enumByJavascript.그룹공유폴더이름;
  }
  return value;
};

//description을 통해 내부 스트링을 확인가능.
console.log(headerRename('회원정보수정설정'));