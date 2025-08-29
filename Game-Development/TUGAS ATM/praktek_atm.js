let saldo = 10000000;

function prosesATM() {
    const menu = document.getElementById("menu").value;
    const jumlahInput = document.getElementById("jumlah").value;
    const jumlah = parseInt(jumlahInput);
    let hasil = "";

    if (menu === "cek") {
        hasil = "Saldo Anda: Rp " + saldo.toLocaleString("id-ID");
    } else if (menu === "tarik") {
        if (!isNaN(jumlah) && jumlah > 0 && jumlah <= saldo) {
            saldo -= jumlah;
            hasil = "Penarikan berhasil. Saldo sekarang: Rp " + saldo.toLocaleString("id-ID");
        } else {
            hasil = "Saldo tidak cukup atau jumlah tidak valid.";
        }
    } else if (menu === "setor") {
        if (!isNaN(jumlah) && jumlah > 0) {
            saldo += jumlah;
            hasil = "Setoran berhasil. Saldo sekarang: Rp " + saldo.toLocaleString("id-ID");
        } else {
            hasil = "Jumlah tidak valid.";
        }
    }

    document.getElementById("hasil").innerText = hasil;
}
