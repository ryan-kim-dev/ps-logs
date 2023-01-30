// 1. key 값의 첫번째 - 이전 내용이 겹치는 항목들을 하나의 객체로 만들어야 한다
// 2. 첫번째 - 뒤의 문자열에서 -다음 글자를 대문자로 바꾸면서 -를 제거해야 한다
// 3. 1,2로 정제된 문자열이 key가 되고 eng 값과 kor 값이 각각 value가 되어야 한다
//     1. eng 끼리, kor 끼리 별도 배열을 생성할까?

function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].eng);
  }
  return newArr;
}
const result = solution(input);

const fs = require('fs');

fs.writeFile('./temp/engArr.js', JSON.stringify(result), function (err) {
  if (err === null) console.log('success');
  else console.log('fail');
});

// // function toCamelCase(str) {
// //   return str.replace(/-(\w)/g, function (match) {
// //     return match[1].toUpperCase();
// //   });
// // }

// const transformedInput = arr => {
//   const engResult = [];
//   const korResult = [];

//   arr.map(item => {
//     let key = toCamelCase(item.key);
//     engResult.push({
//       [key]: item.eng,
//     });
//   });

//   arr.map(item => {
//     let key = toCamelCase(item.key);
//     korResult.push({
//       [key]: item.kor,
//     });
//   });

//   return [engResult, korResult];
// };

// function middleware(arr) {
//   return transformedInput(arr);
// }

// const temp = middleware(input)[0];

// // fs.writeFile('./engRes.js', JSON.stringify(result[0]), function (err) {
// //   if (err === null) console.log('success');
// //   else console.log('fail');
// // });

// // fs.writeFile('./korRes.js', JSON.stringify(result[1]), function (err) {
// //   if (err === null) console.log('success');
// //   else console.log('fail');
// // });

// function toCamelCase(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];
//       const newKey = key.replace(/([A-Z])/g, match => `${match[0].toLowerCase()}`);
//       if (typeof value === 'object') {
//         toCamelCase(value);
//       }
//       if (key !== newKey) {
//         obj[newKey] = value;
//         delete obj[key];
//       }
//     }
//   }
// }

// function solution(temp) {
//   let result = temp;
//   for (let menu in temp) {
//     toCamelCase(temp[menu]);
//   }
//   return result;
// }

// const result = solution(temp);

// const fs = require('fs');
// fs.writeFile('./temp/en.js', JSON.stringify(result), function (err) {
//   if (err === null) console.log('success');
//   else console.log('fail');
// });
