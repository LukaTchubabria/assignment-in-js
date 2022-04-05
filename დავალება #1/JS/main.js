/* 
მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 1) კომენტარები
 2) ცვლადები
 3) მონაცემთა ტიპები
 4) ოპერატორები და არითმეტიკა

 */



// 1 კომენტარები

/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/

// ________მოსწავლის კომენტარი________
//ფიფქი დავსვი შესაბამის ადგილზე და აღარ ჩხუბობს ჩემი ედიტორი, კარგი გოგო ხარო.

//--------------------------------------------------------------------------------


// 2 ცვლადები

/*
  // მსურს ჩემი Spotify ლისტის განახლება 
  // ამაში კი თქვენი დახმარება მჭირდება
  // აღწერეთ თქვენი საყვარელი მომღერლის
  // (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  // გაითვალისწინეთ რომ ამისთვის უნდა
  // გამოიყენოთ მხოლოდ (const, let)
  // (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

// >>>> კოდი დაწერეთ აქ


// ________მოსწავლის კომენტარი________
// ვინმე სახალისოს დავწერ ( არამგონია Spotify ლისტის განახლებისთვის გამოგადგეს )

const firstName = "ლელა";
const lastName = "წურწუმია";
let lelasAge = 53;
const birthYear = 1969;
const birthLocation = "Georgia";

// ________მოსწავლის კომენტარი________
// ვიკიპედიაშიც ყოფილა ეს ქალი ლეგენდა
// რა მოძრაობაა ლელაა!
//--------------------------------------------------------------------------------






  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  //რომელსაც გამოვიყენებთ მომავალში.

  //წიგნების მაღაზიის მაგალითი:

  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;



// >>>> კოდი დაწერეთ აქ


const product1 = "00123";
const categoryRing = "Ring";
const madeInItaly = "Made in Italy";
let productQuant00123 = 80;

const product2 = "00212";
const categoryChain = "Chain";
const madeInChina = "Made in China";
let productQuant00212 = 96;

const product3 = "00324";
const categoryAirring = "Airring";
madeInChina;
let productQuant00324 = 72;

const product4 = "00124";
categoryRing;
madeInChina;
let productQuant00124 = 111;

const product5 = "00213";
categoryChain;
madeInItaly;
let productQuant00213 = 300;

const product6 = "00325";
categoryAirring;
madeInChina;
let productQuant00325 = 234;

const product7 = "00456";
const categoryNecklace = "Necklace";
const madeInTurkey = "Made in Turkey";
let productQuant00456 = 89;


// ________მოსწავლის კომენტარი________
//მგონი ამის გაკეთება ობჯექთში ჯობს

//--------------------------------------------------------------------------------



// 3 მონაცემთა ტიპები

/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/




const hisName = "bob";
const isHigh = true;
const dateOfBirth = 1995;
let age = 27;



// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 true

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number");

//--------------------------------------------------------------------------------




// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)

// ეს ქვემოთ კომენტარად მონიშნული, არის ჩემი პროდუქტის მახასიათებლები
// const product7 = "00456";
// const categoryNecklace = "Necklace";
// const madeInTurkey = "Made in Turkey";
// let productQuant00456 = 89;

console.log(typeof product7 === "string");
console.log(typeof categoryNecklace === "string");
console.log(typeof madeInTurkey === "string");
console.log(typeof productQuant00456 === "number");



//--------------------------------------------------------------------------------



// ოპერატორები არითმეტიკა

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ
console.log(num++);
console.log(num + 2);
console.log (num* 2);
console.log (num**2);
console.log(num+=10);



console.log(num)


//--------------------------------------------------------------------------------


// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ

const myName = "Tiko";
let myAge = 30;           // But in this year I'll already be 31
let isMyAgeCorrect = true;
const currentYear = 2022;
const myBirthYear = 1991; //Time where the dinosaurs were alive


const countMyAge = currentYear-myBirthYear;


console.log(typeof(countMyAge));
console.log(myName+myAge, typeof(myName+myAge));
console.log(myName+isMyAgeCorrect, typeof(myName+isMyAgeCorrect));
console.log(isMyAgeCorrect+myAge, typeof(isMyAgeCorrect+myAge));

//--------------------------------------------------------------------------------
// ------------------- to be continue -------------------