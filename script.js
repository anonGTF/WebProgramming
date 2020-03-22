const getHuruf = () => {
    const formku = document.querySelector('#formku');

    formku.addEventListener('submit', (e) => {
        e.preventDefault();

        let nilai = formku['nilai'].value;

        if (nilai >= 0 && nilai <= 40) {
            huruf = 'E';
        } else if (nilai >= 41 && nilai <= 55) {
            huruf = 'D';
        } else if (nilai >= 56 && nilai <= 60) {
            huruf = 'C';
        } else if (nilai >= 61 && nilai <= 65) {
            huruf = 'BC';
        } else if (nilai >= 66 && nilai <= 70) {
            huruf = 'B';
        } else if (nilai >= 71 && nilai <= 80) {
            huruf = 'AB';
        } else if (nilai >= 81 && nilai <= 100) {
            huruf = 'A';
        } else {
            huruf = 'input tidak valid';
        }
        formku['huruf'].setAttribute('value', huruf);
    });
};

const lompatLima = () => {
    const batas = prompt('masukan batas: ');

    for (let i = 1; i <= batas; i++) {
        if (i % 5 === 0 || i % 2 === 0) {
            continue;
        }
        document.writeln(`${i} `);
    }
};

const calc = () => {
    const formCalc = document.querySelector('#calculator');
    const operator = document.querySelectorAll('.operator');

    operator.forEach((op) => {
        op.addEventListener('click', (e) => {
            e.preventDefault();

            const bil1 = parseFloat(formCalc['bil1'].value);
            const bil2 = parseFloat(formCalc['bil2'].value);
            const hasil = formCalc['hasil'];

            switch (op.value) {
                case '+':
                    hsl = bil1 + bil2;
                    break;
                case '-':
                    hsl = bil1 - bil2;
                    break;
                case 'x':
                    hsl = bil1 * bil2;
                    break;
                case '/':
                    hsl = bil1 / bil2;
                    break;
                default:
                    hsl = 'not valid';
                    break;
            }
            hasil.setAttribute('value', hsl);
        });
    });
};