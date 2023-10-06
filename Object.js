const mahasiswa ={
    Nama :"Supriadi",
    Umur :22,
    Kelas :"PTIK A",
    PRODI :"PTIK",
    "home world": "Tattooine"
}
//  memanggil value yang ada di dalam object 
console.log(`halo  nama ${mahasiswa.Nama}`)
console.log(`saya adalah mahasiswa prodi ${mahasiswa.PRODI}`)
console.log(`Saya berasal dari ${mahasiswa["home world"]}`);

//mengedit nilai value yang ada di dalam object
mahasiswa.Nama="Dina Nazzila lubis"
mahasiswa["Umur"]=23

console.log(mahasiswa)

// menambahakan property di dalam object 
mahasiswa.Fakultas = "FT"

console.log(mahasiswa)

// menghapus property di dalam object
delete mahasiswa.Fakultas

console.log(mahasiswa)