// <-------- კალკულატორი -------#### //

/*
    აქ უნდა შევქმნათ კალკულატორი იუზერისთვის,
    თავიდან იუზერს, prompt-ით უნდა ჩააწერინოთ ხუთი რიცხვი(და იფებით უნდა დაჩეკოთ ნამდვილად ჩაწერა თუ არა რიცხვი)
    მაგ ხუთი რიცხვის შემდეგ უნდა ჩააწერინოთ რა არითმეტიკული მოქმედება გააკეთოს ჩვენმა კალკულატორმა,
    (აქ შეუძლია ჩაწეროს მარტო '-','+','*' თუ სხვა რამეს ჩაწერს ახლიდან ამოუგდეთ სანამ არ ჩაწერს ამ სამიდან ერთ-ერთს)
    ამ პრომპტებიდან ხუთი მიღებული რიცხვი უნდა ჩასეტოთ მასივში და ერთ ცვლადში უნდა გქონდეთ რა არითმეტიკული მოქმედება უნდა ჩავატაროთ(რაც იუზერი აარჩევს).
    შემდეგ უნდა შექმნათ ფუნქცია რმელიც მიიღებს 2 პარამეტრს პირვილი იქნება მასივი და მეორე არითმეტიკული მოქმედება, და მაგ ფუნქციამ არითმეტიკული მნიშვნელობის მიხედვით უნდა
    გააკეთოს გამოთვლა თუ '+' არის უნდა ყველა მასივის ელემენტი მიამატოს ერთმანეთს(მაგ. 1 + 2 + 3 + 4 + 5) თუ "*" გაამრავლოს (მაგ. 1 * 2 * 3 * 4 * 5)
*/

////// =>> კოდი დაწერეთ აქ

let arr = [];

let operator;

function takeNumbers(){
    for(var i = 0; i < 5; i++){

    let enter = prompt('enter number');

if(enter > 0 && enter < 1000000000000000000000000){
    
    arr.push(+enter);
    
}else{
    enter = prompt('enter numbers only');
    
    arr.push(+enter);
   
 }

}   //აქ იუზერს ვთხოვთ შეიყვანოს რიცხვი,და თუ რიცხვს არ შეიყვანს მანამდე ამოუგდებს prompts სანამ არ შეიყვანს რიცხვს
    //ამ შეყვანილ რიცხვებს ვაერთიანებთ ერთ მასივში
    //+ით სტრინგი ხდება რიცხვი, რომ შემდეგ არითმეტიკულად შევძლოთ გამოთვლა

}


console.log(arr);

function chooseOperator(){
    let chooseAction = prompt('enter - , + or * only');

    if(chooseAction == '*'|| chooseAction == '+'|| chooseAction == '-' ){
       operator = chooseAction;
      
    }else{
       chooseAction = prompt('enter - , + or * only');
    }   //აქ იუზერი ირჩევს არითმეტიკულ მოქმედებას 


}


takeNumbers();
chooseOperator();

function calculate(param1,param2){
    let result = param1[0];
    
     for(let i = 1; i < param1.length; i++){
         if(param2 == '+'){
             result += param1[i];
         }else if(param2 == '*'){
             result *= param1[i];
         }else if(param2 == '-'){
             result -= param1[i];
         }
     }  
    
    return result;
}



console.log(calculate(arr,operator));


//////


// <-------- თანაკვეთა -------#### //

/*
    თქვენი დავალებაა შექმნათ ფუნცქცია რომელიც აბრუნებს ახალ მასივს, მასივი კი შედგება ამ ორი მასივის თანაკვეთისგან (რომელსაც ორივე შეიცავს)
    შექმენით ორი მასივი და გამოიყენეთ იგივე ფუნქცია რომ იპოვოთ ამ ორი მასივის თანანაკვეთა
*/

const Arr1 = [1, 23, 3, 34, 54, 6];
const Arr2 = [23, 3, 123, 34, 43, 4, 41]

////// =>> კოდი დაწერეთ აქ

let newArr = [];

function connect(param1,param2){
    for(let i = 0; i < param1.length; i++){
        
        for(let j = 0; j < param2.length; j++){
            
            if(param1[i]==param2[j]){

                newArr.push(param1[i]);
                
            }
        }
    }
    
    return newArr;
}

console.log(connect(Arr1,Arr2));


//////



// <-------- ასინქრონული ფუნქცია -------#### //

/**
 * შექმენით ასინქრონული ფუნქცია რომელიც დაითვლის ათამდე, 10 წამის განმავლობაში (1++ == 1წმ)
 */


////// =>> კოდი დაწერეთ აქ
function counter() {
  let i = 1;
  
  setInterval(function() {
    if(i <= 10){
        console.log(i++);
    } 
}, 1000);
} 

counter();


//////



// <-------- უდიდესი რიცხვი -------#### //

/**
 * შექმენით ისეთი ფუნქცია რომელიც დაგიბრუნებთ მიწოდებული მასივის უდიდეს რიცხვს
 */


////// =>> კოდი დაწერეთ აქ
function biggestNum(arr){
    let higher = [];
for(let i = 0; i < arr.length; i++){

    if(arr[i] > higher){
        higher = arr[i];
    }
    
}
return higher
}

console.log(biggestNum([1,8,13,5,127])); 


//////



// <-------- პროცენტის გამოთვლა -------#### //

/**
 *  ჩვენ ვაკეთებთ პროგრამას ბანკისთვის სადაც ადამიანს ვთავაზობთ შეიყვანოს თანხა და დროის ოდენობა (თვეში). 
 *  პროცენტი თვეების მიხედვით: 1-6 თვემდე 10%, 6-12 თვემდე 14%, 1წელზე ზემოთ 20%
 *  გამოთვალეთ სულ რამდენი იქნება გადასახდელი პროცენტთან ერთად.
 */

////// =>> კოდი დაწერეთ აქ
let amount = prompt('please,enter amount of money');
let month = prompt('please,enter month amount');



function calculatePercent(x,y){
let percent;
    if(x >= 1 && x <= 6){
    percent = (y * 10) / 100;
}else if(x > 6 && x <= 12){
    percent = (y * 14) / 100;
}else{
    percent = (y * 20) / 100;
}

return percent;
}

console.log(calculatePercent(month,amount));


//////