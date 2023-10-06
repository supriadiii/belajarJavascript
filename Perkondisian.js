// contoh satu
const isRaining = true

console.log("persiapan sebelum berangkat sekolah")

if(isRaining){
    console.log("hari ini akan hujan, bawa payung")
}
console.log("berangkat sekolah")

// contoh 2 
let x = 50
if(x>70 ){
    console.log(x)
}else{
    console.log("nilai x kurang dari 70")
}

// contoh 3 
let languange = "Franch"
let greeting = "selamat pagi dunia "

if (languange=== "English"){
    greeting="Good Morning Word"
}else if(languange = "French"){
    greeting="Bonjour"
}else if(languange = "jawa"){
    greeting="selamat isuk"
}
console.log(greeting)

// contoh 4 ternary operator atau conditional expressions
const isMember = false
const discount = isMember ?0.1:0
console.log(`anda mendapatkan diskon sebesar ${discount*100}%`)

// contoh 5
let name = ""

if (name) {
    console.log(`halo ${name}`)
}else{
    console.log("Nama masi kosong")
}