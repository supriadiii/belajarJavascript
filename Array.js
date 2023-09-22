let namaBuah = ["apel", "pear", "jeruk"]

console.log(namaBuah)

// mengakses salah satu value array
console.log(namaBuah[0])
console.log(namaBuah[1])
console.log(namaBuah[2])

// mengecek jumlah value yang ada di dalam array
console.log("jumlah buah yang ada dalam array adalah "+ namaBuah.length)

// menambahkan value di dalam array 
namaBuah.push("anggur")

console.log("value array setelah di tambah "+namaBuah)

// mengeluarkan nilai terakhir di dalam array
namaBuah.pop()
console.log("value array setelah dilakukan pop "+namaBuah)
// mengeluarkan nilai pertama di dalam array
namaBuah.shift()
console.log("value array setelah di shift "+namaBuah)
//  menambahakan nilai di awal array
namaBuah.unshift("buah naga")
console.log("value array setelah di tambah nilai di awal "+namaBuah)
// menghapus value di dalam Array 
delete namaBuah[1]
console.log("value array setelah di delete value nya  "+namaBuah)
// menhapus value element
namaBuah.splice(1,1)
console.log("value array setelah di spice value nya  "+namaBuah)
console.log("=============================================")

// menambahkan data dengan splice
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);