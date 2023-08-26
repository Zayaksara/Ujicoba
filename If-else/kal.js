// ATM PROMPT!
alert('WELCOME TO PROMPT ATM!')
let bahasa = prompt('Masukan bahasa! (INDONESIA & ENGLISH').toLowerCase();


switch (bahasa){
    case 'indonesia':
        prompt('Selamat datang di ATM! Silahkan masukan sandi anda.');
        break;
    case 'english':
        prompt('Welcome to ATM! Please input your password');
        break;
    default:
        alert('Bahasa anda tidak tersedia (your language is not available');
} 

const masukanPassword = 123456;

switch(bahasa){
    case 'indonesia':
        if (masukanPassword === 123456){
            transaksi = parseInt(prompt('Pilih transaksi: 1. Cek Saldo, 2. Tarik Tunai, 3. Masukan saldo'))
        } else{
            alert('Sandi yang anda masukan salah! Silahkan coba lagi')
        }
        break;

    case 'english':
        if (masukanPassword === 123456){
           transaksi = parseInt(prompt('Select a transaction: 1. Check Balance, 2. Withdraw Cash, 3. Input Balance '))
        } else{
            alert('The password you entered is incorrect! Please try again')
        }
        break;
    default:
        alert('Bahasa anda tidak tersedia (your language is not available)')
}

let checkBalance = 800000;
 

switch (bahasa){
    case 'indonesia':
        switch (transaksi){
            case 1:
                alert(`Saldo anda tersisa ${checkBalance}`)
                break;
            case 2:
                tarikSaldo = parseInt(prompt('Masukan uang yang ingin di tarik'));
                if (isNaN(tarikSaldo)) {
                    alert('Masukkan jumlah uang yang valid.');
                } else {
                    if (tarikSaldo <= checkBalance) {
                        kurangUang = checkBalance - tarikSaldo;
                        alert(`Anda telah berhasil menarik uang sejumlah ${tarikSaldo}. Saldo Anda sekarang ${kurangUang}`);
                    } else {
                        alert('Saldo tidak mencukupi untuk melakukan tarik tunai.');
                    }
                }
                break;
            case 3:
                masukanSaldo = parseInt(prompt('Masukan uang yang ingin di input'));
                if (isNaN(masukanSaldo)){
                    alert('Masukan saldo yang valid.');
                } else {
                    tambahUang = masukanSaldo + checkBalance;
                    alert(`Anda telah berhasil memasukan uang sejumlah ${masukanSaldo}. Saldo Anda sekarang ${tambahUang}`)
                }
                break;
            default:
                alert('Input data yang valid')            
        }
        break;

    case 'english':
        switch (transaksi){
            case 1:
                alert(`Your balance remaining ${checkBalance}`)
                break;
            case 2:
                tarikSaldo = parseInt(prompt('Enter the money you want to withdraw'));
                if (isNaN(tarikSaldo)) {
                    alert('Enter a valid amount of money.');
                } else {
                    if (tarikSaldo <= checkBalance) {
                        checkBalance - tarikSaldo;
                        alert(`You have successfully withdrawn an amount ${tarikSaldo}. Your current balance ${checkBalance}`);
                    } else {
                        alert('Insufficient balance to withdraw cash.');
                    }
                }
                break;
            case 3:
                masukanSaldo = parseInt(prompt('Enter the money you want to input'));
                if (isNaN(masukanSaldo)){
                    alert('Enter a valid amount of money.');
                } else {
                    tambahUang = masukanSaldo + checkBalance;
                    alert(`You have successfully entered the amount of ${masukanSaldo}. Your current balance ${tambahUang}`)
                }
                break;
            
            default:
                alert('Input valid data')
        }
}

switch(bahasa){
    case 'indonesia':
        alert('Terima kasih telah menggunakan Prompt ATM');
        break;
    case 'english':
        alert('Thank you for using Prompt ATM')
        break;
    default:
        alert('Bahasa anda tidak tersedia (your language is not available)')
}

