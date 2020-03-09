function hitungLuas() {
    let panjang = prompt("masukan panjang: ");
    let lebar = prompt("masukan lebar: ");
    alert(`Luas : ${panjang * lebar}`);
}

function inputBarang() {
    const tableku = document.querySelector('#tableku');
    let nama, harga, jumlah, subtotal, total = 0;

    for (let index = 1; index <= 3; index++) {
        nama = prompt(`masukan nama barang ${index}:`);
        harga = prompt(`masukan harga barang ${index}: `);
        jumlah = prompt(`masukan jumlah barang ${index}: `);
        subtotal = harga * jumlah;
        total += subtotal;

        let baris = document.createElement("tr");
        baris.innerHTML = `
            <td>${nama}</td>
            <td>${harga}</td>
            <td>${jumlah}</td>
            <td>${subtotal}</td>
        `;

        tableku.appendChild(baris);
    }

    let h_total = document.createElement("tr");
    h_total.innerHTML = `
        <td></td>
        <td></td>
        <td>Total</td>
        <td>${total}</td>`;
    tableku.appendChild(h_total);
}