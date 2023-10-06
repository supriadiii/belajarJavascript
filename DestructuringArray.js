// const favorite = ["bakmi", "sate", "sosis", "naspad"]

// // const [fistFood, secondFood, thirdFood, fourthFood]= favorite

// // console.log(fistFood)
// // console.log(secondFood)
// // console.log(thirdFood)
// // console.log(fourthFood)


// // jika cuma salah satu saja yang ingin di buat variabele bisa di buat seperi ini 
// // const[ , , thirdFood]=favorite

// // console.log(thirdFood)

// // jika ingin mengubah nilai menggunakan array
// let myFood = "Ice Cream";
// let herFood = "Noodles";
 
// [myFood, herFood] = favorite;

// console.log(myFood)
// console.log(herFood)


// // swab variable 
// var a = 1
// var b =2
// var temp

// console.log("nilai sebalum swab")
// console.log("ini nilai a :" ,a)
// console.log("ini nilai b :" ,b)
// temp = a
// a=b
// b= temp
// console.log("nilai sesudah swab")
// console.log("ini nilai a :" ,a)
// console.log("ini nilai b :" ,b)

// Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.

const c = 1
const d = 2

console.log("nilai sebelum swap")
console.log("ini nilai c :", c)
console.log("ini nilai d :", d)

// Menukar nilai c dan d menggunakan array destructuring assignment
[c, d] = [d, c]

console.log("nilai setelah swap")
console.log("ini nilai c :", c)
console.log("ini nilai d :", d)

