let bops = [
    ["No.", "Title", "Duration"],
    [1, "Intro.", "1:01"],
    [2, "BOP BOP!", "3:39"],
    [3, "Fiesta", "3:31"],
    [4, "Tweet Tweet", "3:11"],
    [5, "Lemonade", "3:43"],
    [6, "Love You Like", "3:30"],
    [7, "Mirror", "3:24"]
]

let tabel = document.createElement('table');

for (bop of bops){
    tabel.insertRow();
    for(album of bop){
        let newCell = tabel.rows[tabel.rows.length - 1].insertCell();
        newCell.textContent = album;
    }
}

document.querySelector('.bop-list').append(tabel);