
// function findOddNames(list) {
//   let num = [];
//   for (let i = 0; i < list.length; i++) {
//     num[i] = 0
//     for (let j = 0; j < list[i].firstName.length; j++) {
//       num[i] += list[i].firstName.charCodeAt(j)
//     }
//   }
//   let odd = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 !== 0) {
//       odd.push(list[i])
//     }
//   }
//   if (odd.length == 0) {
//     return []
//   } else {
//     return odd
//   }
// }

// function findOddNames(list) {
//   return list.filter(item => {
//     return item.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0
//   });
// }




