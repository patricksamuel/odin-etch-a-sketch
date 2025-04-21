console.log("Hello");


const genGridVar = document.querySelector("#generateGrid");
const superContainerVar = document.querySelector(".superContainer");
const containerVar = document.querySelector(".container");

function genGridFun(tileNum) {
    containerVar.textContent = "";

    for (let i=0; i<tileNum ; i++) {
        const rowAdd = document.createElement("div");
        rowAdd.classList.add("rowContainer");
        for (let j=0;j<tileNum;j++) {
            const divAdd = document.createElement("div");
            divAdd.classList.add("gridMember");
            rowAdd.appendChild(divAdd);
            divAdd.addEventListener("mouseenter", (event) =>{
                console.log("hover");
                event.target.style.background = "purple";
    
                // reset the color after a short delay
                setTimeout(() => {
                event.target.style.background = "";
                }, 500);
            },false);
        }
        containerVar.appendChild(rowAdd);
    }
}

genGridVar.addEventListener("click", () => {
    let tileNumInput = prompt("Enter the grid width");
    while (tileNumInput > 100) {
        tileNumInput = prompt("Enter the grid width");
    }

    alert("correct");
    genGridFun(tileNumInput);
})

// for (let i=0; i<16 ; i++) {
//     const rowAdd = document.createElement("div");
//     rowAdd.classList.add("rowContainer");
//     for (let j=0;j<16;j++) {
//         const divAdd = document.createElement("div");
//         divAdd.classList.add("gridMember");
//         rowAdd.appendChild(divAdd);
//         divAdd.addEventListener("mouseenter", (event) =>{
//             console.log("hover");
//             event.target.style.background = "purple";

//             // reset the color after a short delay
//             setTimeout(() => {
//             event.target.style.background = "";
//             }, 500);
//         },false);
//     }
//     containerVar.appendChild(rowAdd);
// }
