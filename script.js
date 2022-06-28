let userColor = "green";

const body = document.querySelector('body');
const container = document.querySelector('#container');

for (i=0; i<16; i++){
    const div = document.createElement('div');
    div.classList.add("row");
    container.appendChild(div);
}

const rows = document.querySelectorAll(".row");
for (const row of rows){
    for (i=0; i<16; i++){
        const sq = document.createElement('div');
        sq.classList.add("square");
        sq.addEventListener('click', (e) => {
            let userColor = document.querySelector('#colorPicker').value;
            e.target.classList.toggle("colored");
            if (e.target.classList.contains("colored")){
                e.target.style.backgroundColor = userColor;
            }
            else {
                e.target.style.backgroundColor = "#FFFFFF";
            }
        });
        sq.addEventListener('mouseenter', (e) => {
            e.target.classList.toggle("hovered");
        })
        sq.addEventListener('mouseleave', (e) => {
            e.target.classList.toggle("hovered");
        })
        row.appendChild(sq);
    }
}
