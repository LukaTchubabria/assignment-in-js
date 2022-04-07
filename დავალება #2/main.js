/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [num1,boolean1,boolean2,emptyString];
const isTrue = [num2,text,text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("azc" > "ah")
//ამ შემთხვევაში ჯერ ვადარებთ ორივე სტრინგის პირველ "Character"-ს(ქართულად არ მახსოვს რა ქვია),
//თუ ერთმანეთის ტოლია გადავდივართ მეორეზე და იმათ ვადარებთ, მოცემულ პირობაში b<h და შესაბამისად დებულება იქნებოდა არასწორი,
//ამიტომ b შევცვალე ისეთი ასოთი, რომელიც უფრო მაღლა იდგებოდა h ზე და დებულება გახდა ჭეშმარიტი
console.log(2 === "002")
//ამ შემთხვევაშიც გვაქვს ერთ მხარეს რიცხვი და მეორე მხარეს სტრინგი,
// სტრინგი ხდება რიცხვი და შესაბამისად "002" ხდება რიცხვი 2  და დებულებაც არის ჭეშმარიტი




// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 
let age = prompt("What's your age?");

if(age >= 18){
  console.log("You can drink");
}else{
  console.log("You can't drink");
}

//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
let score = prompt("enter your score");
let barrier = 70;
let secondChance = 50;
let teamLeader = 100;

let result;

if(score >= teamLeader){
  result="you have chance to be a team leader";
}else if(barrier <= score){
  result="You are in the team";
}else if(score < barrier && score >= secondChance){
  result="You can try again";
}else{
  result="Go home";
}

console.log(result);




//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

result = (score >= teamLeader) ? "you have chance to be a team leader" :
(barrier <= score) ? "You are in the team" : 
(score < barrier && score >= secondChance) ? "You can try again" :
"Go home";


console.log(result);

//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ

if(colorId == 0){
  console.log("black");
}else if(colorId == 1){
  console.log("blue");
}else if(colorId == 2){
  console.log("green");
}else if(colorId == 3){
  console.log("red");
}else if(colorId == 4){
  console.log("white");
}else{
  console.log(undefined);
}

//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ


let color = (colorId == 0) ? "black":
(colorId == 1) ? "blue":
(colorId == 2) ? "green" : 
(colorId == 3) ? "red" :
(colorId == 4) ? "white" :
undefined;

console.log(color);
//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ

switch(colorId){
  case 0:
    color = "black";
    break;
  case 1: 
    color = "blue";
    break;
  case 2: 
    color = "green";
    break;
  case 3: 
    color = "red";
    break;
  case 4:  
     color = "white";
     break;
  default:
    undefined;
}

//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())

function myFun() {
  let x = prompt("მე მზად არ ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  switch(x){
    case "გამარჯობა" :
      alert("გამარჯობა");
      break;
    case "მაინტერესებს სამუშაო საათები" :
      alert("ორშაბათი-პარასკევი 10:00 - 18:00");
      break;
    case "მინდა ჩაწერა" :
      alert("მოგვწერეთ დღე და საათი");
      break;
    default : 
    alert("ჩაწერილი ხართ");
  }

  //

  // რეკურსიული ფუნქცია
  myFun()
}