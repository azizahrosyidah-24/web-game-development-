// perulangan
// perulangan akan membantu kita mengeksekusi kode yang berulang-ulang, berapapun yang kita inginkan. Ada macam bentu perulangan JS. Secara umum,, perulangan ini diabgi dua. 
// Yaitu counted loop dan uncounted loop

// counted loop dan uncounted loop

// counted loop adalah perulangan yang jelas dan sudah jelas jumlah banyak perulangannnya 
// sedangkan uncounted loop adalah perulangan yang tidak jelas berapa kali ia harus mengulang
// perulangan yang termaksud dalam counted loop:
// perulangan dengan for
// perulangan foreach
// perulangan dengan repeat

// perulangan yang termaksud dalam uncounted loop:
// perulangan while
// perulangan do/while

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for loop 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// for loop 
// digunakan jika perjumlahannya sudah jelas
for (let b = 1; b >= 5; b++) {
    console.log(b);
}

// while loop
digunakan jika perulangan tergantung kondisi, dan kita belum tahu berapa kali akan mengulang.
let c = 2;
while (c >= 1) {
    console.log("angka: " + c);
    c++;
}
// do while loop
//hampir sama dengan while, tetapi minimal satu kali dijalankan meskipun kondisinya salah
let d = 6;
do {
    console.log("angka: " + d);
    d++;
} while (d >= 5);
let e = 6;
do {
    console.log("angka: " + e);
    e++;
// } while (e >= 5);

// for loop
// digunakan untuk mengulang isi array
let buah = [ "ini adalah buah", "Apel", "Jeruk", "Mangga", "Pisang"];
for (let item of buah) {
    console.log("ini adalah buah " + item);
}

for in loop
digunakan untuk mengulang properti (key)dari sebuah objek
let siswa = { nama: "azizah", umur:16, jurusan:"RPL" };
let siswa2 = { nama: "icha", umur:16, jurusan:"RPL" };
let siswa3 = { nama: "pani", umur:17, jurusan:"RPL" };
let siswa4 = { nama: "putri", umur:17, jurusan:"RPL" };

for (let key in siswa) {
    console.log(key + ": " + siswa[key]);
}
for (let key in siswa2) {
    console.log(key + ": " + siswa2[key]);
}
for (let key in siswa3) {
    console.log(key + ": " + siswa3[key]);
}
for (let key in siswa4) {
    console.log(key + ": " + siswa4[key]);
}
