// 1. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring 




// function emptyarraypush(Array) {

// let Array2 = [];


// for (let i = 0; i < Array.length; i++) {
  
//     if (Array[i] > 2) {

//         Array2.push(Array[i]);
//     }
// }

// return Array2; 
// }

// let array1 = [23, 32, 1, 2, 3, 4, 1, 32, 1, 35, 132, 3]
// let result = emptyarraypush(array1);

// console,console.log(result);





// 2. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping 




// let arr = [3, 4, 32, 43, 22, 4, 90, 23, 30]
// function arrSon1(a) {
//     let couple = 0
//     let odd = 0
//     let res = 0
//     let resut = [];
//     for(let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0){
//             couple += a[i]
//         }else{
//             odd += a[i]
//         }
//     }

//     res = Math.abs(couple - odd);

//     resut.push(`Farqi: ${res}  Juft sonlar yigindisi: ${couple} Toq sonlar yigindisi: ${odd}`);
//     return resut;

// }
// console.log(arrSon1(arr));



// 3. foydalanuvchi 2 ta son kiritadi va shu 2 ta so oralig’idagi juft sonlar ye’g’indisini chiqaruvchi algaritm tuzing faqat 1 son 2 son dan kichikligini tekshiring 



// let numOne = +prompt("Enter the first number")
// let numTwo = +prompt("Enter the second number")

// function num(a, b) {
//     let res = Math.abs(a - b);
//     let result = 0;

//     for (let i = 0; i <= res ; i++){
//         if (i % 2 === 0){
//        result += i;
//         }
//     }

//     return result;

// }
// console.log(num(numOne , numTwo));





// 4. function argument tiga berilgan qiymatlar orasida faqat number larni alohida array ga ko'chiring va return qiling 



// function separating(...args) {
//     let numbersArray = [];

//     for (let i = 0; i < args.length; i++) {
//         if (typeof args[i] === 'number') {
//             numbersArray.push(args[i]);
//         }
//     }

//     return numbersArray;
// }

// let result = separating(24, 624, 'Abdialimov',  245, 'Temur', 242, false);

// console.log(result);





// 5. argument sifatida berilgan object ni value larinidan tashkil topgan array ni qaytaradigan function yarating






// 6. argument sifatida berilgan object ni key larinidan tashkil topgan array ni qaytaradigan function yarating



// function getArray(obj) {
//     return Object.keys(obj);
// }

// let about = {
//     firstName: "Temurbek",
//     lastName: "Abdialimov",
//     age: 20,
// };

// let keysArray = getArray(about);

// console.log(keysArray);





// 7. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin.



// let array = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
// function numberFourMinus(arr) {
//     let a = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== 4){
//            a.push(arr[i])
//         }
//     }

//     return a
// }
// console.log(numberFourMinus(array));



//  8. Ixtiyoriy object yaratilsin key va value lari 6 tadan kam bo'lmasin 1. value lar ro'yxati chiqarilsin 2. value larining yig'indisi topilsin


    

// let about = {
//     firstName: "Temurbek",
//     lastName: "Abdialimov",
//     age: 20,
//     countre: "Uzbekistan",
//     city: "qashqadaryo",
//     hobby: "basketball, reading, gaming",

// };

// let Array = Object.values(about);
// console.log(Array); 


// let sumOfValues = Array.reduce((acc, curr) => acc + curr, 0);
// console.log(sumOfValues);
