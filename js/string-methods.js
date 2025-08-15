//                          STRING METHODS
//     1:  substr-metodi
//Sintaksis
//let string = "Substr"
//string.substr(start, length);
//EXAMPLE;
//let text = "Greatings";
//console.log(text.substr(4, 6));

//     2:   substring-metodi
//  substring - bu huddi substrning ozi(yangilangani), biz bu metodni biron bir elementimizning ma'lum qismini kesib olishda ishlatamiz.
//  Sintaksis
//  string.substring(startIndex, endindex);
//  Exapmle;
//  let text = `JavaScript`
//  console.log(text.substring(0, 3))  // Bu (Java) so'zini kesib beradi;
//  XUSUSIYATI: startIndexga manfiy son qo'ysak uni 0 deb olib ketadi, ammo endIndxga manfiy son qo'ya olmaymiz

//      3:   split-metodi
//  split - bu metod obyektning ma'lum qismini maxsus separetor yordamida ajratib beradi. Yangi massive ham yaratib beradi.
//  separator - qaysi belgiga qarab ajratish(Masalan: "", " ", -, ".", ",")
//  limit - maximal necht element olish kerakligini belgilaydi;
//  MISOL:
//  let text = "apple,banana,orange";
//  console.log(text.split(","));
//  console.log(text.split(""));

//      4: trim-metodi
//  trim - bu metod shunchaki berilgan element oldidagi bo'sh joylarni olib beradi
//  MISOL:
//  let text = "                                  Shuncha probel tashlasang ham befoyda             ";
//  console.log(text.trim(" ")) // "Shuncha probel tashlasang ham befoyda"

//      5: includes-metodi
//  includes - JavaScriptfagi includes metodi massive yoki matn ichida ma'lum qiymat bor-yo'qligini tekshiradi va true yoki false qaytaradi
//  Sintaksis
//  string.includes(searchValue, positon);
//  searchValue - qidirilayotgan qiymat;
//  position - qidiruv boshlanishi kerak bo'lgan qiymay(berilmasa boshidan qidirib boshlaydi); 
// MISOL;
//  let text = "Salom dunyo, bu JavaScript";
//  console.log(text.includes("dunyo")); // true: chunki "dunyo so'zi bor"
//  let massive = "olma,anor,o'rik";
//  console.log(massive.includes("shaftoli")); // false

//       6: replace-metodi
//  replace - bu metod matn yoki massive ichidagi ma'lum qiymatning birinchisini yangi qiymatga o'zgartiradi;
//  Sintaksis;
//  string.replace(searchValue, newValue);
//  Misol:
//  let text = "Bu replace metodi";
//  console.log(text.replace("replace", "o'zgartirish"));  // Bu o'zgartirish metodi

//        7: charAt-metodi
//  charAt - JS dagi charAt() metodi - matnning berilgan indeksidagi bitta belgini qaytaradi
//  let text = "Salom";
//  console.log(text.charAt(2)) // "l"

//        8: indexOf-metodi
//  indexOf - bu metod string yoki array ichida berilgan qiymatning birinchi uchragan qiymatning o'rnini(joylashuvini) qaytaradi, agar bo'lmasa False qaytaradi.
//  Sintaksis
//  Array.indexOf(searchValue, [startIndex]);
//  MISOL:
//  let text = "Assalomu aleykum";
//  console.log(text.indexOf("o"));  // 5

//         9: lastIndexOf-metodi
//  lastIndexOf - bu metod indexOf metodining teskarisi, farqi bu qidiruvni orqadan boshlaydi 

//         10: repeat-metodi
//  repeat - bu metod berilgan qiymatni takrorlab beradi




//                 ARRAY METHODS
//  push metodi - JS dagi push metodi massiv oxiriga element qo'shib beradi;
//  shift metodi - bu metod massive boshidan element olib tashlaydi;
//  pop metodi - bu metod pushning teskarisi ya'ni massive oxiridan element ochiradi
//  unshift metodi - bu metod shiftning teskarisi ya'i massive boshiga element qo'shadi
//  MISOL:
// const numbers = [1, 2, 3];
// numbers.push(4); // [1,2,3,4];
// numbers.shift() // [2,3];
// numbers.pop()  // [1,2];
// numbers.unshift(0)  // [0,1,2,3];
// console.log(numbers)



//               HOMEWORKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
// 1.
//  let text = "JavaScript oson til";
//  console.log(text.substring(4, 10));
// 2.
//  let massive = "olma,anor,banan";
//  console.log(massive.split(" "));
// 3.
//  let text = "Bugun havo yaxshi";
//  console.log(text.includes("yashil")); // False
// 4.
//  let text = "Men Python o‘rganaman";
//  console.log(text.replace("Python", 'JavaScript'));
// 5.
//  let text = "Salom";
//  console.log(text.charAt(3)) // o;
// 6.
//  let text = "BU UCHUN CHARCODEAT KERAK WKAN USTOZ"
// 7.
//  let text = "JavaScript yaxshi til";
//  console.log(text.indexOf("yaxshi")); // 11;
// 8.
//  let text = "Javascript Javascript";
//  let change = text.split(" ");
//  console.log(change.length - 1)
// 9.
//  let date = '2025-08-13';
//  let change = date.split('-');
//  let change2 = `${change[2]}/${change[1]}/${change[0]}`
//  console.log(change2)
// 10.
//  let text = "       Salom      "
//  console.log(text.trim());
// 11.
//  let text = "Men codingni yaxshi ko‘raman";          // replaceAll haqida gpt aytdi
//  let result = text.replaceAll(" ", "_");
//  console.log(result);
// 12.
//  let text = "Frontend";
//  let capitalized = text.toUpperCase();
//  console.log(capitalized);
// 13.
//  let text = "JAVASCRIPT";
//  let lower = text.toLowerCase();
//  console.log(lower)
// 14.
//  let text = "Salom dunyo";
//  let splitter = text.split(" ")
//  console.log(`${splitter[1]} ${splitter[0]}`)
// 15.
// let text = "salom";
// let splitter = 