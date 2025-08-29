//variabel
let a, b, c, d, e, f;

//isi variabel
a = 2; b = 4; c = 6; d = 8; e = 10; f = 12

//kondisi
if (a > 1) {
    // kondisi lebih basar 
    console.log("nilai a lebih besar dari 1");
} 
if (b < 3) {
    // kondisi lebih kecil
    console.log("nilai b lebih kecil dari 3");
}
if (c != 5) {
    //kondisi tidak sama
    console.log("nilai c tidak sama dengan 5");
}
if(d == 8) {
    console.log("nilai d sama dengan 8");
}
if(e == 8 || e == 10) {
    //kondisi jika salah satu kondisi terpenuhi
    console.log("salah satu dari nilai terpenuhi");
}
if("f == 8 && f = 10") {
    //harus kedua nilai terpenuhi
    console.log("keduanya terpenuhi");
}