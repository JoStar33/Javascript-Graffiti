const optionData = [
  {
    id: 0,
    name: "하의",
    children: [
      {
        id: 2,
        name: "청바지",
        children: [
          {
            id: 10,
            name: "청",
          },
          {
            id: 142,
            name: "흑청",
          },
          {
            id: 1252,
            name: "진청",
          },
        ],
      },
      {
        id: 4,
        name: "슬렉스",
      },
      {
        id: 5,
        name: "골땐바지",
      },
    ],
  },
  {
    id: 1,
    name: "상의",
    children: [
      {
        id: 8,
        name: "반팔",
      },
    ],
  },
];

const depth1 = [];
const depth2 = [];
const depth3 = [];

const depthPusher = (depthStack, option) => {
  delete option.children;
  if (depthStack === 1) {
    return depth1.push(option);
  }
  if (depthStack === 2) {
    return depth2.push(option);
  }
  if (depthStack === 3) {
    return depth3.push(option);
  }
  return;
};

const depthSeparator = (optionArray, depthStack) => {
  optionArray.forEach((option) => {
    console.log(option.name);
    depthPusher(depthStack, option);
    if (!option.children) return;
    depthSeparator(option.children, depthStack + 1);
  });
};

depthSeparator(optionData, 1);

console.log(depth1);
