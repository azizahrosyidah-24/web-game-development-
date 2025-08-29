//latihan:
//1. buatlah perulangan yang menampilkan bilangan ganjil  
//2. buatlah perulangan yang menampilkan bilangan genap 
//3. buatlah perulangan yang menampilkan nama-nama teman kalian dari array 
//4. 5 bintang pola kebawah
//5. bintang pola 5 kotak persegi 
//6. bintang pola segitiga menurun 
//7. bintang pola segitiga terbalik keatas 

//jawaban

//1.
console.log("ini adalah bilangan ganjil : ")
for (let b = 1; b <= 5; b++) {
    if(b % 2 !== 0)
    console.log(b);
   }

//2.
console.log("ini adalah bilangan genap : ")
for (let b = 1; b <= 5; b++) {
    if(b % 2 === 0)
    console.log(b);
   }

   //3. 
   console.log("ini nama teman-teman saya : ")
let nama = ["zizah", "balqis", "icha", "putri", "pani"];
for (let item of nama) {
    console.log(item);
}

   //4.
   console.log("ini adalah bintang kebawah : ")
   for (let r = 1; r <= 5; r++) {
    console.log("*");
   }

   //5.
   console.log("ini adalah bintang persegi : ")
   for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= 5; j++) {
        baris += "*";
    }
    console.log(baris);
   }
   
   //6.
   console.log("ini adalah bintang segitiga menurun : ")
   for (let i = 1; i <= 5; i++) {
       let baris = "";
       for (let j = 1; j <= i; j++) {
           baris += "* ";
        }
        console.log(baris);
    }
   
   //7.
   console.log("ini adalah bintang segitiga terbalik : ")
    for (let i = 5; i >= 1; i--) {
     let baris = "";
     for (let j = 1; j <= i; j++) {
         baris += "* ";
     }
     console.log(baris);
    }
