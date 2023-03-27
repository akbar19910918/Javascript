// Assalom alekum.
// Coding Challengning birinchi savoli!

// Sizga N integer  raqam beriladi. N istalgan integer raqam bo'lishi mumkun.
// Misol uchun 9, mana shu raqamni binary korinishi 1001. 

//  savol! 
// Berilgan N integierning, binary korinishidagi, 1lar oralig'idagi 0 larning eng uzun ketma ketligini toping.

// javobni function ichida yozing ex:
// function findLength(N){
//   // code ni shu yerga yozing
//  }

//  misol uchun:
// N = 9:
// binary korinishi 1001,  ko'rib turibsiz bunda faqat bitta 0 lar ketma ketligi bor. uning uzunligi 2 ga teng. Javob return 2

//  keyingi namuna:
// N = 529:
// binary korinishi 1000010001 korib turibsiz bu yerda 0lar ketma ketligi ikkita ularning eng uzun ketma ketligi 4ta

// ---------------------------------------------------------------------------------------------------------

// ❗️ Sizlarga N uzunligidagi A nomli array Hamda S intiger qiymat berildi. 

// ⚡️ Sizni vazifangiz:
// A nomli array ichida o'rta arifmetik qiymati S ga teng bo'lgan nechta davomiy fragment bor.


// 📌 #1 misol uchun
// A = 2,1,3
// S = 2 // orta arifmetik qiymati
// mana shu holatda natija 3 bo'lishi kerak
// sababi orta arifmetik qiymati 
// 2/1 = 2,
// 1,3/2 = 2
// 2,1,3/3 = 2 

// 📌 #2
// A = 2,1,4  S = 3
// result 0
// sababi orta arfimetigi 3ga teng boladigon qiymat array ichida yoq

// 📌 #3
// A= 0,4,3,-1
// S = 2
// result 2
// 0,4/2 = S
// 4,3,-1/2 = S


// function Test(A, S){
// .... code ni shu yerga yozing
// }
//------------------------------------------------------------
//                      1-masala
// berilgan stringda nechta katta va nechta kichik xarf mavjud.
// let str="Webbrain Academy"
// j:2 katta xarf 13 kichik xarf
//
    //  let text="Webbrain Academy"
    //   function Count(str){
    //          upper = 0, 
    //          lower = 0
    //         for (var i = 0; i < str.length; i++) 
    //         { 
    //           if (str[i] >= "A" && str[i] <= "Z") upper++; 
    //           else if (str[i] >= "a" && str[i] <= "z") lower++; 
    //         } 
    //         console.log(upper +" katta harf "  ); 
    //         console.log(lower+" kichik harf " ); 
        
    //       }

    //       Count(text);
//-------------------------------------------------------------------------
//                            2-masala
// berilgan stringdagi @ ni a harfiga o'zgartiring
// var text="Wabbr@in Ac@demy"


// function almashtirish(str)  
//       { 
//         let res="";
//         for ( i = 0; i < str.length; i++){       
//             if(str.charAt(i)=='@'){
//                 res=res+'a';
//             }
//             else{
//                 res=res+str.charAt(i); 
//             }
//         } 
//         console.log(res);
//       }

// almashtirish(text);
//-----------------------------------------------------------------
//                          3-masala
// Dublicate bo'lgan harflarni o'chiring

   //   let text="webbbraiiin accaddemmy"
   //      function removeDuplicates(str){
   //       let res="";
      
   //      for( i=0;i<str.length;i++){
   //           for( j=1;j<i;j++){
   //              if(){
                  
   //              } 
                
   //          }  
         
   //      } 
   //      console.log(res,);
   //     }
   //      removeDuplicates(text);

//      ?????????????????????????????????????????????
//     -----------------------------------------------------------------
//                4-masala
//   String ichidagi raqamlarni toping.
//     "we66ra1n acad4my"

//   let text="we66ra1n acad4my"
//       function Count(str) {       
//                   let num = ""
//                   let soni=0;
//                   for (var i = 0; i < str.length; i++) 
//         { 
//           if (str[i] >= "0" && str[i] <= "9"){
//            num=num+str[i]; 
//            soni++;
//           }
        
//         } 
//         console.log(num); 
//         console.log("raqamlar soni "+soni);
//       }
//       Count(text);
//---------------------------------------------------------------

//              5-masala
//
// string berilgan stringning xar bir belgisini 2 marta takrorlab qiymat qaytaring
// res= "wweebbbbrraaiinn"
   //   let web="webbrain"
   //   function takror (str){
   //      let res=""
   //      for(i=0;i<str.length;i++){
   //       for(j=1;j<3;j++){
   //          if(str[i]=str[j]){
   //             res=res+str[i];
   //          }
   //       }
                   
   //      }console.log(res);
   //   }
   //   takror(web)
//---------------------------------------------------------------
//           6-masala
// berilgan so'zlar palindrom yoki palindrom emasligini tekshiring
// non,kiyik,kichik,ko'k,ikki

// function palindrome(str){
//    for(var i=0;i<str.length/2;i++){
//       if(str[i]!==str[str.length-1-i]){
//          return "palimdrom emas";
//       }
//    }
//    return "palindrom";
// }
// let text="ikki";
// console.log(palindrome(text));



//----------------------------------------------------------------
//            7-masala
//let str1="web",let str2="ewb"
// berilgan stringdagi harflar soni bir biriga teng yoki 
//  teng emasligini aniqlang.tartib muxum emas

//   let text1="web";
//   let text2="ewb";
//   function taqqoslang(str1,str2){
//    res=0;
//    num=0;
//    for(i=0;i<str1.length;i++){
//      res++;
//    };
//    for(i=0;i<str2.length;i++){
//       num++
//    };
//    if(res==num){
//       console.log("harflar soni teng");
//    }
//    else{res ==! num;
//    console.log("harflar soni teng emas")};
//   }
//   taqqoslang("web",text2)

// ----------------------------------------------------------------

//            8-masala
// let str= "webbraaiiin"
// string ziplash
// res=web2ra2i3n
// let abc="webbraaiiin"

// function ziplash(str){
//    res="";
  
//    for(var i=0;i<str.length;i++){
      
//       for(var j=1;j<str.length;j++){
//          var count=1;
//          if(str[i]==str[j]){
//             count++;
//             res=res+str[i]+count;
//          }
//          else{
//             res=res+str[i];
//            break;
//          }
//          break;
//    }
   
//    }console.log(res);
// }
// ziplash(abc);



//-----------------------------------------------------------------

//            9-masala
// object ichidagi age lar yig'indisini toping
// let obj={
//   title:"webbrain",
//   age:2,
//   child:{
//     age:4,
//     name:"webbrain",
//     child:{
//       age:3
//     }
//   }
// }

// let sum=0;
// while(obj){
//     sum+=obj.age;
//     obj=obj.child;
// }
// console.log(sum);
//---------------------------------------------------------

//                 10-masala

// object valuelarining boolen tipidagi malumotlarini qaytaring keylari bn
// let obj={
//   id:1,
//   name:"webbrain",
//   offline:true,
//   online:true,
//   individual:false,
// };
//       function boolen(){
//          for(var i in obj)
//       if(obj[i]==true || obj[i]==false){
//          console.log(i+" "+obj[i]);
//       }
//       }
//       boolen();

//------------------------------------------------------

//             11-masala
let num=[2,3,5,3,2,3,6,8,7,6];
// remore dublicates
// new Set dan foydalanmang

function removeDuplicates(array){
  var res="";
   for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
         if(array[i]!==array[j]){
           res=res+array[j]+","
         }
      }
      
   }
   console.log(array);
}
removeDuplicates(num);

//-----------------------------------------------------------

//           12-masala
// arraylerni bir biriga taqqoslang
// let num1 =[1,2,3];
// let num2 =[1,2,3];
//-----------------------------------------------------

//              13-masala
// arraydagi 2xonali sonlarni chiqaring
// let arr=[3,9,12,25,83,120];
// function sonlar(arr){
//    for(i=0;i<arr.length;i++){
//      if(arr[i]>9 && arr[i]<100){
//      console.log(arr[i]);
//       }
//    }
// }
// sonlar(arr);


