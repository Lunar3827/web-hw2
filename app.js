// ===== Part A =====
let sumA = 0;
for (let i = 0; i < ratings.length; i++) {
  sumA += ratings[i];
}
const avgA = sumA / ratings.length;
console.log(`A1: 평균 평점 ${avgA}`);

let maxA = 0;
for (let i = 1; i < ratings.length; i++) {
  if (ratings[i] > ratings[maxA]) {
    maxA = i;
  }
}
console.log(`A2: 최고 평점 영화 ${titles[maxA]} (${ratings[maxA]})`);

let count8A = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] >= 8.0) {
    count8A++;
  }
}
console.log(`A3: 8점 이상인 영화 ${count8A}편`);

let count2020 = 0;
let count2010 = 0;
let count2000 = 0;
let countBefore = 0;

for (let i = 0; i < years.length; i++) {
  const decade = years[i] - (years[i] % 10);
  switch (decade) {
    case 2020:
      count2020++;
      break;
    case 2010:
      count2010++;
      break;
    case 2000:
      count2000++;
      break;
    default:
      countBefore++;
      break;
  }
}
console.log(`A4 2020년대 ${count2020}편, 2010년대 ${count2010}편, 2000년대 ${count2000}편, 그 이전 ${countBefore}편`);

let bigA = "";
for (let i = 0; i < audiences.length; i++) {
  if (audiences[i] >= 1000000) {
    if (bigA !== "") {
      bigA += " ";
    }
    bigA += titles[i];
  }
}
if (bigA === "") {
  bigA = "없음";
}
console.log(`A5 관객 100만 이상: ${bigA}`);

