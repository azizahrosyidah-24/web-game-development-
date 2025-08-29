// latihan
// 1. buatlah perulangan yang menampillkan bilangan ganjil

console.log ("Bilangan Ganjil:");
for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 2. buatlah perulangan yang menampillkan bilangan genap

console.log("Bilangan Genap:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. buatlah perulangan yang menampilkan nama nama nama teman kalian dari array minimal 3

console.log("Nama Teman:");
const teman = [ "pani", "icha", "putri", "azizah"];
for (let i = 0; i < teman.length; i++) {
    console.log(teman[i]);
}

// 4. bintang pola lima kebawah

console.log("Bintang Pola 5 Bawah:");
for (let i = 0; i < 5; i++) {
    console.log("*");
}

// 5. bintang pola 5 kotak persegi

console.log("Bintang Pola 5 Kotak Persegi:");
for (let i = 0; i < 5; i++) {
    console.log("*****");
}

// 6. bintang bola segitiga menurun

console.log("Bintang Pola Segitiga Naik:");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// 7. bintang pola segitiga naik

console.log("Bintang Pola Segitiga Menurun:");
for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}