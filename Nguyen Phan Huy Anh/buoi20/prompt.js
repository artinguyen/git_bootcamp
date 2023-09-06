let notify = document.querySelector('h1');

function reload() {
    let value = prompt('Vui long nhap 1 so');
    if (isNaN(value)) {
        notify.textContent = "Nhap so"
    } else {
        if (Number(value) % 2 != 0) {
            notify.textContent = "Day la so le";
        } else {
            notify.textContent = "Khong phai so le";
        }
    }
}

window.onload = reload();