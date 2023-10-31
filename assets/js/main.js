// =============================
//        lvl_1_8:filter()
// =============================
console.log("%c======== lvl_1_8:filter() ========", "color:greenyellow");
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const geradeZahlen = numArr.filter((x) => {
  if (x % 2 === 0) {
    return x;
  }
});
console.log(geradeZahlen);
const ungeradeZahlen = numArr.filter((x) => {
  if (x % 2 === 1) {
    return x;
  }
});
console.log(ungeradeZahlen);

// =============================
//        lvl_1_8:filter()-2
// =============================
console.log("%c======== lvl_1_8:filter()-2 ========", "color:greenyellow");
const wordArr = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];
const less6WordArr = wordArr.filter((x) => {
  if (x.length <= 6) {
    return x;
  }
});
console.log(less6WordArr);

// =============================
//        lvl_1_8:filter()-3
// =============================
console.log("%c======== lvl_1_8:filter()-3 ========", "color:greenyellow");
const heroArr = [
  "Superman",
  "Batman",
  undefined,
  ,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  ,
  null,
];

const newHeroArr = heroArr.filter((x) => {
  if (x !== null && x !== undefined) {
    return x;
  }
});
console.log(newHeroArr);

// =============================
//        lvl_1_8:filter()-4
// =============================
console.log("%c======== lvl_1_8:filter()-4 ========", "color:greenyellow");
const zahlen = [12, 25, 7, 18, 30, 5];
const zahlenUnder20 = zahlen.filter((x) => {
  if (x < 20) {
    return x;
  }
});
console.log(zahlenUnder20);
const zahlenMulti2 = zahlenUnder20.map((x) => x * 2);
console.log(zahlenMulti2);
