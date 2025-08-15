// "OBJECTS"
// let person={
//     name: "Simon",
//     age: 15,
//     job: 'student',
// };
// console.log(person);

// "ARRAYS=MASSIVES"
// let fruits=['apple', 'banana', 'pineaplle', 'grape']
// console.log(fruits.length);

// "WINDOW METHODS"
// 1. alert
//saytga kirganimizda birinchi korinuvchi window
// alert('Hello World!');

// example:
// let massage=("Hello World!");
// alert(massage);

//2. prompt
// Oynaning so'rov usullari kirish qiymatlarini olish uchun brauzeringizda kirish bilan so'rov oynasini ko'rsatadi va kiritilgan ma'lumotlar o'zgaruvchida saqlanishi mumkin. prompt() usuli ikkita argumentni oladi. Ikkinchi dalil ixtiyoriydir.
// let userName=prompt("Ismingizni kiriting:", "");
// console.log("Hi!", userName);

//3. confirm
//confirm() usuli OK va Bekor qilish tugmasi bilan birga belgilangan xabarga ega dialog oynasini ko'rsatadi. Tasdiqlash oynasi ko'pincha foydalanuvchidan biror narsani bajarish uchun ruxsat so'rash uchun ishlatiladi. Window confirm() argument sifatida qatorni oladi. OK tugmasini bosish haqiqiy qiymatni beradi, Bekor qilish tugmasini bosish esa noto'g'ri qiymatni beradi.
// confirm("Foydalanuvchi shartlariga rozimisiz?");
// let info = confirm("Foydalanuvchi shartlariga rozimisiz?");
// console.log(info);

/////////                                      "MATH OBYEKTI --> JavaScriptda Math bu — matematik funksiyalarni bajaruvchi tayyor ob'ekt."
1;
//  Math.max - "Massive ichidagi eng latta sonni topadi"
//  EXAMPLE:
//  console.log(Math.max(2,4,5,12,172,356));
2;
//  Math.min --> "Math.maxning teskarisi, massive ichidagi eng kichik qiymatni topadi"
//  EXAMPLE:
//  console.log(Math.min(1,2,3,4,5,9));  // 9
3;
//  Math.round --> "Sonni birlar xonasgacha yaxlitlaydi"
//  EXAPMLE:
//  console.log(Math.round(36.4)); //36
4;
//  Math.floor --> "Sonni har doim pastga qarab butun songa keltiradi."
//  EXAMPLE:
//  console.log(Math.floor(5.9));  //5
//  console.log(Math.floor(-5.9));  //-6
5;
//  Math.ceil --> "Math.floorning teskarisi, sonni tepaga qarab butun songa yaxlitlaydi"
//  EXAMPLE:
//  console.log(Math.ceil(4.1));  //5
//  console.log(Math.ceil(-3.2)); //-3
6;
//  Math.random --> "Tasodifiy(random) son yaratadi"
//  Example:
//  let randomNum = Math.random()
//  console.log(randomNum);  //Math.random har doim 0 va 1 orasida boladi va hech qachon 1 bo'la olmaydi.
7;
// Math.pow --> "Darajaga ko'taradi";
// Example:
// Math.pow(x, y) --> "x bu darajaga ko'tarilayotgan son, y esa daraja"
// console.log(Math.pow(2, 3)); // 2^3 = 8;
8;
// Math.sqrt --> "Kvadrat ildiz"
// Example:
// Math.sqrt(9) --> "9 ning kvadrat ildizini chiqaradi, ya'ni 3";
// let square_root = prompt("Sonni kiriting");
// alert(Math.sqrt(square_root));
9;
// Math.abs --> "Sonning moduli";
// Example:
// let absolute_value = prompt("Modulini topmoqchi bo'lgan soningizni kiriting");
// alert (absolute_value + " " + "ning moduli" + " " + Math.abs(absolute_value));
10;
// Math.trunc --> "Sonning butun qismini oladi, shunchaki kasrdan oldingi sonni oladi "
// Example:
// console.log(Math.trunc(7.6725256)) //7;

//  GAME: KOMPUTER O"YLAGAN SONNI TOPING
// let taxminiySon = prompt("Komputer o'ylagan sonni toping")
// let randomSon = Math.floor(Math.random() * 11)
// if (taxminiySon == randomSon) {
//         alert ("Qoyil siz komputer o'ylagan sonni topdingiz u" + randomSon + "O'ylagan edi")
//     } else{
//         alert ("Afsuski siz topa olmadingiz u" + " " + randomSon + " " + "O'ylagan edi")
//     }

//  Topshiriqlar
//level-1
// 1.
// let a = 10
// console.log(a);

// 2.
// let name = prompt("ismingizni kiriting:", " ");
// let lastName = prompt("familyangizni kiriting:", " ");
// let hello= "salom"
// console.log(alert("hello: "+  name +lastName))

// 3.
// let thisYear=2025;
// let birthYear = prompt ("tug'ilgan yilingizni kirting:", "");
// let age = (thisYear - birthYear)
// alert("Siz: "+ age + " yoshdasiz")

//4.
// let time = 5
// let minutes = (time*60)
// let seconds = (time*3600)
// let milliseconds = (time*3600*1000)
// console.log(time + " soat", minutes, "daqiqaga,", seconds, "soniyaga,", milliseconds, "millisoniyaga teng");

// 5.
// let a = 15;
// let b = 20;
// let c = a*b;
// console.log(c);

// 6.
// let a = 30;
// let b = 10;
// let c = (a+b)/2;
// console.log(c);

// 7.
// let a = 20;
// let b = 60;
// let c = 40;
// let d =(a+b+c)/3;
// console.log(d);

//level-2
// 1.
// let name = promt("Ismingizni kiriting:", "");
// if (ism.length > 7) {
//     console.log("Ismingiz uzun");
// } else {
//     console.log("Ismingiz qisqa");
// }
// 2.
// let ism2 = prompt("Ismingizni kiriting:", "");
// let familya = prompt("Familiyangizni kiriting:");

// if (ism2.length > familya.length) {
//     console.log("Ismingiz uzun");
// } else if (familya.length > ism2.length) {
//     console.log("Familiyangiz uzun");
// } else {
//     console.log("Ikkalasi teng");
// }
// 3.
// let weekday = +prompt("hafta kunini kiriting");
// if (weekday==1){
//     alert("Bu dushanba kuni");
// } else if(weekday==2){
//     alert("Bu seshanba kuni");
// } else if (weekday==3) {
//     alert ("Bu kun chorshanba");
// } else if(weekday==4){
//     alert("bu kun payshanba");
// } else if(weekday==5){
//     alert("bu kun juma");
// } else if(weekday==6){
//     alert("Bu kun Shanba");
// } else if (weekday==7){
//     alert("Bu kun Yakshanba");
// } else if (weekday<<7){
//     alert("Bunday o'rinda hafta kuni yo'q")
// }

//                         TOPSHIRIQLAR
1;
// let a = prompt("perimetrini topmoqchi bo'lgan kvadratigiz tomoni uzunligini kiriting");
// alert("kvadratning perimetri" + " " + a*4);

2;
// let a = prompt ("yuzini topmoqchi bo'lgan kvadratigiz tomoni uzunligini kiriting");
// alert("ushbu kvadrat yuzi" + " " + Math.pow(a, 2) + " " +  "ga teng")

3;
// let a = Number(prompt("Yuzi va perimetrini topmoqchi bo'lgan to'g'ri to'rtburchakingizning bo'yini kiriting"));
// let b = Number(prompt("Yuzi va perimetrini topmoqchi bo'lgan to'g'ri to'rtburchakingizning enini kiriting"));
// let yuzi = a * b;
// let perimetr = (a + b) * 2;
// alert("Bu to'g'ri to'rtburchak yuzi " + yuzi + " ga teng, perimetri esa " + perimetr + " ga teng");

4;
// let d = Number(prompt("uzunligini aniqlamoqchi bo'lgan aylanangiz diametrini yozing"));
// const PI = 3.14;
// const length = PI * d
// alert("aylana uzunligi" + " " + length + " " + "ga teng");

5;
// const a = Number(prompt("hajmi va to'la sirtini topmoqchi bo'lgan kubingizning yon tomonini kiriting"));
// const volume = a ** 3;
// const surface = 6 * (a ** 2);
// alert("ushbu kub hajmi" + " " + volume + " " + "ga, yuzi esa" + " " + surface + " " + "ga teng!")

6;
// const a = Number(prompt("hajmi va to'la sirtini topmoqchi bo'lgan parallelepipedingizning enini kiriting"));
// const b = Number(prompt("hajmi va to'la sirtini topmoqchi bo'lgan parallelepipedingizning bo'yini kiriting"));
// const c = Number(prompt("hajmi va to'la sirtini topmoqchi bo'lgan parallelepipedingizning balandligini kiriting"));
// const volume = a*b*c;
// const surface = 2*(a*b+b*c+c*a);
// alert("ushbu parallelepipedning hajmi" + " " + volume + " " + "ga, yuzi esa" + " " + surface + " " + "ga teng!")

// 7.
// const R = Number(prompt("uzunligi va yuzini topmoqchi bo'lgan doirangiz radiusini kiriting!"));
// const PI = 3.14;
// const length = 2*PI*R;
// const surface = PI*R ** 2;
// alert("Ushbu doira uzunlligi" + " " + length + " " + "ga, yuzi esa" + " " + surface + " " + "ga teng");

// 8.
// let a = Number(prompt("a sonini kiriting;"));
// let b = Number(prompt("b sonini kiriting;"));
// let avarage = (a+b)/2;
// alert("Bu ikki son o'rta arifmetigi" + " " + avarage + " " + "ga teng!");

// 9.
// let a = Number(prompt("a sonini kiriting"));
// let b = +prompt("b sonini kiriting");
// if (a == 0){
//     alert("A soni 0 ga teng bo'lishi mumkinmas");
// }
// if (b == 0){
//     alert("B soni 0 ga teng bo'lishi mumkinmas");
// } else{
//     alert(a + " " + "va"+ " " + b + " " + "sonlarining yig'indisi" + " " + (a+b) + " " + "ga teng");
//     alert(a + " " + "va" + " " + b + " " + "sonlarining ko'paytmasi:" + " " + (a*b) + " " + "ga teng");
//     alert(a + " " + "sonining kvadrati" + " " + (a**2) + " " + "ga teng");
//     alert(b + " " + "sonining kvadrati" + " " + (b**2) + " " + "ga teng");
// }

//                                                                TOPSHIRIQ
// Majburiy blok

// let fullName = prompt("Ismingizni kiriting:");
// alert("Salom " + fullName);

// let motherTongue = +prompt("Majburiy-blok ona-tili fanidan olgan ballingizni kiriting:");
// let english = +prompt("Majburiy-blok ingliz-tili fanidan olgan ballingizni kiriting:");
// let math = +prompt("Majburiy-blok matematika fanidan olgan ballingizni kiriting:");

// let maxobligated = 60;
// let minobligated = 45;
// let totalscore = motherTongue + english + math;

// if (totalscore >= minobligated && totalscore <= maxobligated) {
//     alert("Tabriklaymiz, siz majburiy-blok imtihonidan o'tdingiz!");

//     // Asosiy imtihon ballari
//     let geografiya = +prompt("Geografiya fanidan olgan ballingizni kiriting (0-70):");
//     let tarix = +prompt("Tarix fanidan olgan ballingizni kiriting (0-70):");
//     let fizika = +prompt("Fizika fanidan olgan ballingizni kiriting (0-70):");

//     let asosiyJami = geografiya + tarix + fizika;

//     if (asosiyJami > 190 && asosiyJami <= 210) {
//         alert("Tabriklaymiz! Siz GRAND asosida o‘qishga qabul qilindingiz. Jami ballingiz: " + asosiyJami);
//     } else if (asosiyJami > 110 && asosiyJami <= 190) {
//         alert("Siz KONTRAKT asosida o'qishga qabul qilindingiz. Jami ballingiz: " + asosiyJami);
//     } else if (asosiyJami >= 70 && asosiyJami <= 110) {
//         alert("Siz SUPERKONTRAKT asosida o'qishga qabul qilindingiz. Jami ballingiz: " + asosiyJami);
//     } else {
//         alert("Afsuski siz asosiy imtihondan o'ta olmadingiz. Jami ballingiz: " + asosiyJami);
//     }

// } else {
//     alert("Afsuski siz asosiy blok imtihoniga kira olmaysiz");
// }



//                       OXIRGI DARS SHU:
//                        TOPSHIRIQ
// 1.
// let person  = {
//     name: "Simon",
//     lastname: "Brown",
//     livingCity: "New-york",
//     age: 23,
//     isMarried: false,
//     wasBorn: 2002,
// }
// console.log(typeof person.name);
// console.log(typeof person.age);
// console.log(typeof person.lastname);
// console.log(typeof person.livingCity);
// console.log(typeof person.isMarried);
// console.log(typeof person.wasBorn);
// 2.
// let string = "10";
// let num = 10;
// let checking = (typeof string  === typeof num);
// console.log(checking) ;
//3.
// let num = parseInt(9.8);
// let num2 = 10;
// let checking = (num == num2);
// console.log(checking) // False


//                         TOPSHIRIQ-2
1.
// let a = 2;
// console.log("a soni juft")
// let b = 3
// console.log("b soni toq son")
2.
// let a = +prompt("a ni kiriting");
// if(a > 0){
//     console.log("a musbat son")
// } else if(a < 0){
//     console.log("a manfiy son");
// } else if(a = 0){
//     console.log("a soni 0")
// } else {
//     console.log("a belgi son emas")
// }
3.
// let a = 3;
// let b = 2;
// let c = 1;
// console.log(a > b, b > c)
// 4.
// let a = 3;
// let b = 2;
// let c = 1;
// if (b < a, b > c) {
//     console.log("b soni a va c sonlari orasida yotadi")
// } else{
//     console.log("b soni a va c orasida yotmaydi")
// }
// 5.
// let a = 7;
// let b = 11;

// if (a % 2 !== 0 && b % 2 !== 0) {
//     console.log("Ikkala son ham toq");
// } else {
//     console.log("Kamida bittasi toq emas");
// }
//  6.
// let a = prompt("a sonini kiriting");
// let b = prompt(" b sonini kiriting");
// let c = prompt("c sonini kiriting");
// let d = prompt("d sonini kiriting");

// if (a > 0, b > 0, c > 0, d > 0){
//     console.log("Barcha raqamlar musbat")
// } else {
//     console.log("Barcha raqamlar ham musbat emas")
// }
// 7.
// let a = 2;
// let b = 4;
// let c = -3;
// if(a > 0, b > 0) {
//     console.log(a + " " + "va" + " " + b + " " + "sonlari musbat")
// } else if(a > 0, c > 0) {
//     console.log(" a va c somlari musbat")
// } else if(b > 0, c > 0){
//     console.log("b va c sonlari musbat");
// } else if(a > 0, b > 0, c > 0) {
//     console.log("barcha raqamalar musbat");
// } else {
//     console.log('kamida 2 ta raqqaam ham musbat emas')
// }
// 8.
// let 

//                                       TOPSHIRIQ-2

// 1;
// let name = prompt("Ismingizni kiriting:");
// switch (true) {
//   case name.length >= 7:
//     console.log("Ismingiz uzun");
//     break;
//   case name.length < 7:
//     console.log("ismingiz qisqa");
// }
//2.
// let firstName = prompt("Ismingizni kiriting:");
// let lastName = prompt("Familiyangizni kiriting:");

// switch(true) {
//     case firstName.length > lastName.length:
//         console.log("Ismingiz familiyangizdan uzun");
//         break;
//     case firstName.length < lastName.length:
//         console.log("Familiyangiz ismingizdan uzun");
//         break;
//     case firstName.length === lastName.length :
//         console.log("Ismingiz uzunligi familiyangiz uzunligiga teng");        
// }
// 3.
// let day = +prompt("Hafta kunini raqamlar bilan kiriting:");
// switch(true) {
//     case day === 1 :
//         console.log("Bugun dushanba kuni");
//         break;
//     case day === 2 :
//         console.log("Bugun seshanba");
//         break;
//     case day === 3 :
//         console.log("Bugun chorshanba");
//         break;
//     case day === 4 :
//         console.log("Bugun payshaba");
//         break
//     case day === 5 :
//         console.log("bugun Juma");
//         break;
//     case day === 6 :
//         console.log("bugun Shanba");
//         break
//     case day === 7 :
//         console.log("Bugun Yakshanba");
//         break;
//     case day > 7 :
//         console.log("Bunday kun yo'q")      
// }

// let name = 'Asadbek';
// let job = 'student';
// console.log(`Mening ismim ${name}, va men ${job} man`)