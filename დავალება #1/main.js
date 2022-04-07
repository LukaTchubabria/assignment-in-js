/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/



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
  
const name = 'Dua';
const username = 'Lipa';
let age = 26;
const year = 1997;
const  placeOfBirth = 'London';



// 

/
  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  წიგნების მაღაზიის მაგალითი:

  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;
*/


/ / >>>> კოდი დაწერეთ აქ
  
const productName = 'Gym Clothes';
const productOwner = 'Gymshark';

let item1 = 'top';
let priceOfItem1 = '15$';
let quantOfItem1 = 53;

let item2 = 'shorts';
let priceOfItem2 = '50$';
let quantOfItem2 = 100;

let item3 = 'leggins';
let priceOfItem3 = '70$';
let quantOfItem3 = 90;

let item4 = 'trainers';
let priceOfItem4 = '150$';
let quantOfItem4 = 133;



//



// 3 მონაცემთა ტიპები

/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/



const age = 1;
const hisName = "bob";
const isHigh = true;
const dateOfBirth = 1995;




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



/ აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)
console.log(typeof productName);
console.log(typeof productOwner);
console.log(typeof  item1);
console.log(typeof priceOfItem1);
console.log(typeof quantOfItem1);


// ოპერატორები არითმეტიკა

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ

let increase = 2;

num *= increase;
num += increase;
num **=increase;


//

console.log(num);



// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ

let name = '50';
let num = 33;

//აქ ვცადე სხვადასხვა ტიპის ცვლადების შეკრება და გავიგე მაგათი ჯამის ტიპი 
console.log(name + num);
console.log(typeof(name + num));    


//გავიგე ცალ-ცალკე ცვლადების ტიპები
typeof(name);
typeof(num); 


//სტრინგი გადავიყვანე რიცხვში ორნაირი ხერხით და ისე შევკრიბე
console.log(num+ +name);
console.log(num + Number(name));


//აქ უკვე გადაყვანის შემდეგ გავიგე ტიპი 
console.log(typeof(num + Number(name)));

//