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

// ===== Part B =====
// function average(list) {
//   return averageBy(list, "rating");
// }

// function best(list) {
//   let maxObj = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (list[i].rating > maxObj.rating) {
//       maxObj = list[i];
//     }
//   }
//   return maxObj;
// }

// function filterByRating(list, min) {
//   return list.filter(m => m.rating >= min);
// }

// function sortBy(list, key, desc) {
//   const sorted = [...list].sort((a, b) => {
//     let result = 0;
//     if (typeof a[key] === "string") {
//       result = a[key].localeCompare(b[key]);
//     } else {
//       result = a[key] - b[key];
//     }
//     const sign = desc ? -1 : 1;
//     return result * sign;
//   });
//   return sorted;
// }

// function search(list, keyword) {
//   const query = keyword.trim().toLowerCase();
//   return list.filter(m => m.title.toLowerCase().includes(query));
// }

// function formatNumber(n) {
//   return Number(n).toLocaleString("ko-KR");
// }

// function yearsSince(dateStr) {
//   const targetYear = new Date(dateStr).getFullYear();
//   const currentYear = new Date().getFullYear();
//   return currentYear - targetYear;
// }

// const bestMovie = best(movies);
// const topAudienceMovie = sortBy(movies, "audience", true)[0];

// const summaryText = 
//   `전체 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}점\n` +
//   `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)\n` +
//   `관객 1위 상영작 ${topAudienceMovie.title} (누적 ${formatNumber(topAudienceMovie.audience)}명)`;

// document.getElementById("out").textContent = summaryText;

// // ===== Part C =====
// function getList(data) {
//   return data.results;
// }

// function averageBy(list, key) {
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     sum += list[i][key];
//   }
//   return sum / list.length;
// }

// console.log(`C1 page ${TMDB.page}, total_pages ${TMDB.total_pages}, total_results ${TMDB.total_results}, 이번 응답 ${getList(TMDB).length}편`);
// console.log(`C2 상영작 평균 평점: ${averageBy(getList(TMDB), "vote_average").toFixed(1)}`);

// console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title", "release_date", "vote_average"]);

// const searchResult = search(getList(TMDB), "the");
// console.log(`C4 검색 결과: ${searchResult.length}편`);

