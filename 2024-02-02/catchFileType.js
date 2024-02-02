//Blob과 File의 타입체킹을 하기위해서는 아래와 같은 절차를 거치면 된다.
//instanceof를 활용하면 오케이

const catchFileType = () => {
  const file = new File([], "file");
  if (file instanceof File) return console.log("this is File");
  console.log("this is not File");
};

catchFileType();

const catchBlobType = () => {
  const blob = new Blob();
  if (blob instanceof Blob) return console.log("this is Blob");
  console.log("this is not Blob");
};

catchBlobType();

//this is File
//this is Blob
