function Karakter(Name, Job){
    if(Job === "programer"){
        console.log("Seorang programer")
    }else if(Job ==="dokter"){
        console.log("seorang dokter")
    }else{
        console.log("pengangguran")
    }
    console.log(`nama saya adalah ${Name} dan saya bekerja sebagai ${Job}`)

}

Karakter("adi", "programer")


function GajiBersih(Gaji, pengangguran){
    return Gaji - pengangguran
}

let HasilGajiBersih = GajiBersih(10000000, 5000000)
console.log(HasilGajiBersih)

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
  };
  
  function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
  }
  
  introduce(user);

//   default parameter 
function Perkalian(number1, number2=8){
    console.log(`${number1} * ${number2} = ${number1*number2}`)
}

Perkalian(5)

// Rest Parameter
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4,10));