var jumlahAngkot = 10;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6) {
        console.log('Angkot No ' +noAngkot+ ' Beroprasi dengan baik') 
    } else if (noAngkot === 8) {
        console.log('Angkot No ' +noAngkot+ ' sedang lembur')
    } else {
        console.log('Angkot No ' +noAngkot+ ' sedang tidak beroprasi')
    }
}