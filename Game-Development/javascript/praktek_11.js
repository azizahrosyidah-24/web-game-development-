//perulangan 
// perulangan akan membantu kita mengeksekusi kode yang berulang-ulang,berapapun yang kita mau. Ada lima macam bentuk perulangan di javascript. secara umum perulangan ini di bagi dua. 
//yaitu: counted loop dan uncoundted loop.

//counted loop dan uncounted loop 
//counted loop merupakan perulangan yang jelas dan sudah jelas jumlah banyak perulangannya.
//uncounted loop merupakan perulangan yang tidak jelas berapa kali dia harus mengulang.

//counted loop dan uncounted loop 
//perulangan yang termasuk dalam counted loop: perulangan for, perulangan foreach, perulangan repeat 
//perulangan yang termasuk dalam uncounted loop: perulangan while, perulangan do/while 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// //for loop
//    for  (let a = 1; a <= 5; a++) {
//     console.log(a);
//    }

 //for loop
  //digunakan jika jumlah perulangan sudah jelas.
//    for (let b = 1; b <= 5; b++) {
//     console.log("perulangan ke-" + b);
//    }

   //while loop 
//    //digunakan jika perulangan tergantung kondisi,dan kita belum tahu berapa kali akan mengulang.
//    let c = 2;
//    while (c >= 1) {
//     console.log("angka:" + c);
//     c++;
//    }

   //Do...While Loop
   //Hampir sama dengan while, tetapi minimal satu kali dijalankan meskipun kondisi salah. 
//    let d = 6;
//    do {
//     console.log("angka:" + d);
//     d++;
//    }while (d >= 5);
   
//    let e = 6;
//    do {
//     console.log("angka:" + e);
//     e++;
//    }while (e <= 5);

   //for...of loop
   //digunakan untuk mengulang isi array
   let buah = ["apel", "jeruk", "mangga", "anggur", "strawbery"];
   for (let item of buah) {
    console.log("ini adalah buah " + item);
   }

   //for in loop
   //digunakan untuk mengulang properti (key) dari object.
   let siswa = { nama: "zizah", umur: 16, jurusan: "RPL"};
   for (let key in siswa) {
    console.log(key + ":" + siswa[key]);
   }
   let guru = { nama: "bui", umur: 17, jurusan: "TKJ"};
   for (let key in siswa) {
    console.log(key + ":" + siswa[key]);
   }
   let murid = { nama: "balqis", umur: 18, jurusan: "TI"};
   for (let key in siswa) {
    console.log(key + ":" + siswa[key]);
   }
   let siswi = { nama: "icha", umur: 19, jurusan: "PPLG"};
   for (let key in siswa) {
    console.log(key + ":" + siswa[key]);
   }
