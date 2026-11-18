const titles = [
  "킹덤 오브 헤븐", "패션 오브 크라이스트", "나니아 연대기: 사자, 마녀 그리고 옷장", "반지의 제왕: 반지 원정대", "몬티 파이튼의 성배", "극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "벨제붑의 노래", "클레이페이스"
]

const ratings = [
  7.0, 7.5, 7.1, 8.4, 7.8, 7.4, 7.2, 8.0, 6.1, 7.5
]

const years = [
  2005, 2004, 2005, 2001, 1975, 2026, 2026, 2026, 2026, 2026
]

const audiences = [
  0, 0, 0, 0, 0, 2248126, 3374510, 104874, 1999477, 77153
]

// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
  {
    title: "킹덤 오브 헤븐",
    year: 2005,
    date: "2005-05-03",
    rating: 7.0,
    audience: 0,
    poster: "/bwQ4a50Jp0aU1jpoM4m1PbEzo36.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "패션 오브 크라이스트",
    year: 2004,
    date: "2004-02-25",
    rating: 7.5,
    audience: 0,
    poster: "/rBM5o2HpmCfDejuIPybI09tkY3V.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "나니아 연대기: 사자, 마녀 그리고 옷장",
    year: 2005,
    date: "2005-12-07",
    rating: 7.1,
    audience: 0,
    poster: "/vSY6MgDWD5Ch5I87X8BaxZyydCI.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "반지의 제왕: 반지 원정대",
    year: 2001,
    date: "2001-12-18",
    rating: 8.4,
    audience: 0,
    poster: "/r18JdjImbWDRwkbVDIzWoLQqkCo.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "몬티 파이튼의 성배",
    year: 1975,
    date: "1975-04-03",
    rating: 7.8,
    audience: 0,
    poster: "/7nTkHjETdGMYK1phHwDbPsrzbYl.jpg",
    type: "mine",
    rank: null
  },

  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-09-30",
    rating: 7.4,
    audience: 2248126,
    poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
    type: "boxoffice",
    rank: 1
  },
  {
    title: "암살자(들)",
    year: 2026,
    date: "2026-09-23",
    rating: 7.2,
    audience: 3374510,
    poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg",
    type: "boxoffice",
    rank: 2
  },
  {
    title: "실낙원",
    year: 2026,
    date: "2026-10-21",
    rating: 8.0,
    audience: 104874,
    poster: "/wkm9BQLok7U2KihcCspCa663Qse.jpg",
    type: "boxoffice",
    rank: 3
  },
  {
    title: "타짜: 벨제붑의 노래",
    year: 2026,
    date: "2026-10-23",
    rating: 6.1,
    audience: 1999477,
    poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg",
    type: "boxoffice",
    rank: 4
  },
  {
    title: "클레이페이스",
    year: 2026,
    date: "2026-10-21",
    rating: 7.5,
    audience: 77153,
    poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg",
    type: "boxoffice",
    rank: 5
  }];