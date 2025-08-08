// // tipe data ada 2 tipe data primitif dan non primitif

// // Tipe Data (nomor(numbers), tulusan(strings), salah benar(bolean), tidak dijelaskan(undifined), tipe data kosong(null))
// // tipe data non primitif(object, arrays)

// // tipe data tulisan(string)

// let nama
// nama = "RPL itu mudah"
// console.log('berikut adalah total text : ' + nama.length)
// console.log('berikut adalah sintak untuk mengambil test dalam variabel : ' + nama.slice(0,3))

// let kalimat = 'saya suka apel'
// console.log( 'berikut adalah sintak untuk mengganti kalimat : '+ kalimat.replaceALL(' saya suka apel' , 'anggur'))

// let a = 'ayam'
// // berikut adalah sintak untuk mengganti Menjadi huruf besar
// console.log(a.toLoLeUpperCase)

// let b = 'KUCING'
// // berikut adalah sintak untuk mengganti Menjadi huruf kecil
// console.log(b.toLowerCase())

// let c = '                 KUCING ITU LUCU       '
// // berikut adalah sintak untuk menghapus awal spasi
// console.log(c.trim())

// let d = 'ayam-bebek-kucing-unta'
// // berikut adalah sintak untuk merubah text menjadi array
// console.log(d.split("-"))

// // template literal
// let e = 'widya'
// let umur = '16'
// let text = 'Nama saya'+ panggilan + 'umur saya' + umur;
// console.log(text)

// latihan
let kata = "ngoding sederhana"
let kata2 = "dan juga menyenangkan"
// 1 ambil kata (ngoding)
// 2 ambil hana di kata sederhana
// 3 gabungkan kata dan kata2 jadi 1 baris
// 4 buat huruf besar semua kata

// jawab
console.log(kata.slice(0,7))
console.log(kata.slice(13,17))
console.log(kata.slice(0,17) + kata2.slice(0,21) )
console.log(kata.toLocaleUpperCase())