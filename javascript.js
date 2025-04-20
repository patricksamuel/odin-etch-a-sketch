console.log("Hello");

const containerVar = document.querySelector(".container");

for (let i=0; i<16 ; i++) {
    const rowAdd = document.createElement("div");
    rowAdd.classList.add("rowContainer");
    for (let j=0;j<16;j++) {
        const divAdd = document.createElement("div");
        divAdd.classList.add("gridMember");
        rowAdd.appendChild(divAdd);

    }
    containerVar.appendChild(rowAdd);

}