let userColor = "green";

const body = document.querySelector('body');
const container = document.querySelector('#container');
const gridBtn = document.querySelector('#gridBtn');
const colorPicker = document.querySelector('#colorPicker');
const colorSample = document.querySelector('#colorSample');

function removeAllChildren(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

gridBtn.addEventListener('click', (e) => {
    const size = parseInt(prompt("How many squares wide should the grid be?"));
    if (isNaN(size)){
        alert("Please enter a number.");
    }
    else if (size>99 || size<1) {
        alert("Please enter a number between 1 and 99.");
    }
    else {
        removeAllChildren(container);
        drawGrid(size);
    }
})


function drawGrid(s=16){
    for (i=0; i<s; i++){
        const div = document.createElement('div');
        div.classList.add("row");
        container.appendChild(div);
    }
    const rows = document.querySelectorAll(".row");
    for (const row of rows){
        for (i=0; i<s; i++){
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
}

colorPicker.addEventListener('input', (e) =>  {
    let userColor = colorPicker.value;
    colorSample.style.backgroundColor = userColor;
})

drawGrid();

