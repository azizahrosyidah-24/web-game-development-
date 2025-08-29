// tipe data ada 2 tipe data primitif dan tipe data non primitif 
// tipe data (Nomor(Number), tulisan(strings), salah Benar(bolean), tidak dijelaskan(fined), tipe data kosong(null))

// tipe data non primitif (object, arrays)

// tipe data tulisan (strings)
let nama
nama = "RPL itu mudah"

console.log ('berikut adalah total teks : ' + nama. length)
// berikut adalah sintak untuk mengambil teks dalam variabel
console.log (nama.slice (0, 31))

// berikut adalah sintak untuk mengganti kalimat
let kalimat = "saya suka matcha"
console.log(kalimat.replaceAll ("ayam, kucing"))

// berikut adalah sintak untuk membuat huruf kapital
let a = "ayam"
console.log(a.toLocalleUpperCase)

//  berikut adalah sintak untuk membuat huruf kecil 
let b = "KUICNG" 
console.log(b.toLowerCase())

// berikut adalah sintak untuk menghapus jarak diawal dan diakhir
let c ="     kambing dan bebek     "
console.log(c.trim())

// merubah teks menjadi array 
let d = "ayam-kambing-kucing-bebek"
console.log(d.split("-"))

// template literal
let pangilan = "zizah"
let umur = 16
let teks = 'nama saya' + panggilan + ' umur saya ' + umur 
console.log (teks)

// latihan
let kata = "ngoding sederhana"
let kata2 = "dan juga menyenengkan"
// 1 ambil kata (ngoding)
// 2 ambil kata hana di kata sederhana
// 3 gabungkan kata dan kata2 jadi 1 baris 
// 4 buat huruf besar semua kata 


