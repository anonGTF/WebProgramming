document.addEventListener('DOMContentLoaded', () => {
    const elmDay = document.querySelector('#day');
    for (let i = 1; i <= 31; i++) {
        let perDay = document.createElement("option");
        perDay.setAttribute("value", i);
        perDay.innerText = i;
        elmDay.appendChild(perDay);
    }

    const elmMonth = document.querySelector('#month');
    let list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 1; i <= 12; i++) {
        let per = document.createElement("option");
        per.setAttribute("value", i);
        per.innerText = list[i - 1];
        elmMonth.appendChild(per);
    }

    const start = document.querySelector('#start');
    list = ['am', 'pm']
    for (let j = 0; j < 2; j++) {
        for (let i = 1; i <= 12; i++) {
            let per = document.createElement("option");
            per.setAttribute("value", i);
            per.innerText = `${i}${list[j]}`;
            start.appendChild(per);
        }
    }

    const start_m = document.querySelector('#start_m');
    for (let i = 1; i <= 60; i++) {
        let per = document.createElement("option");
        per.setAttribute("value", i);
        per.innerText = `:${i}`;
        start_m.appendChild(per);
    }

    const d_h = document.querySelector('#d_h');
    for (let i = 0; i <= 23; i++) {
        let per = document.createElement("option");
        per.setAttribute("value", i);
        per.innerText = `${i} hrs`;
        d_h.appendChild(per);
    }

    const d_m = document.querySelector('#d_m');
    for (let i = 0; i <= 59; i++) {
        let per = document.createElement("option");
        per.setAttribute("value", i);
        per.innerText = `${i} mins`;
        d_m.appendChild(per);
    }

    const myform = document.querySelector('#myform');

    let loc = myform['loc'];
    let title = myform['title'];
    let notes = myform['notes'];
    let month = myform['month'];
    let year = myform['year'];
    let day = myform['day'];

    myform.addEventListener('submit', (e) => {
        e.preventDefault();

        let titleVal = title.value;
        let notesVal = notes.value;

        if (titleVal == '' || titleVal.length > 50) {
            alert("Title tidak diisi atau terisi lebih dari 50 karakter")
            return;
        } else if (notesVal.length > 120) {
            alert("Notes terisi lebih dari 120 karakter");
            return;
        }

        alert("Data berhasil tersimpan");
    });

    loc.addEventListener('change', () => {
        notes.value = loc.value;
    });

    date = [day, month, year];
    date.forEach((elm) => {
        elm.addEventListener('change', () => {
            if (year.value == "2020" && month.value >= 4 && day.value > 6) {
                alert("Isian tidak bisa melewati tanggal hari ini");
                day.selectedIndex = 5;
                month.selectedIndex = 3;
            }
        });
    });
});