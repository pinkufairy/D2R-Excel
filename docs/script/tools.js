"use strict";

///////////////////////////////////////////////
// Calc tools
function tableCalcTool(container, formulaString, getResult) {
    let xMin = Number(container.dataset.xmin);
    let xMax = Number(container.dataset.xmax);
    if (xMin === undefined) {
        xMin = 1;
    }
    if (xMax === undefined) {
        xMax = 60;
    }

    let divA = document.createElement("div");
    divA.classList.add("flex-row");

    let labelA = document.createElement("div");
    labelA.innerText = "a:";

    let inputA = document.createElement("input");
    inputA.classList.add("tool-number-input");
    inputA.type = "number";
    inputA.valueAsNumber = 0;

    let divB = document.createElement("div");
    divB.classList.add("flex-row");

    let labelB = document.createElement("div");
    labelB.innerText = "b:";

    let inputB = document.createElement("input");
    inputB.classList.add("tool-number-input");
    inputB.type = "number";
    inputB.valueAsNumber = 0;

    let labelResults = document.createElement("div");
    labelResults.innerHTML = `Results (<code>${formulaString}</code>):`;

    let resultsTable = document.createElement("table");
    let resultsTableBody = document.createElement("tbody");

    for (let i = xMin; i <= xMax; i+=10)
    {
        const rowMax = Math.min(xMax + 1, i + 10);

        const xRow = resultsTableBody.insertRow();
        for (let j = i; j < rowMax; j++) {
            let col = xRow.insertCell();
            col.innerText = j.toString();
            col.classList.add("bold-text");
        }

        const resultRow = resultsTableBody.insertRow();
        for (let j = i; j < rowMax; j++) {
            let col = resultRow.insertCell();
            col.classList.add("results-row");
            col.xIndex = j;
        }
    }

    let recalculate = () => {
        const a = inputA.valueAsNumber;
        const b = inputB.valueAsNumber;

        for (let resultCol of resultsTable.querySelectorAll(".results-row")) {
            const result = getResult(resultCol.xIndex, a, b);
            resultCol.innerText = result.toString();
        }
    };

    ['input', 'change'].forEach(eventName => {
        inputA.addEventListener(eventName, recalculate);
        inputB.addEventListener(eventName, recalculate);
    });

    divA.appendChild(labelA);
    divA.appendChild(inputA);
    container.appendChild(divA);
    divB.appendChild(labelB);
    divB.appendChild(inputB);
    container.appendChild(divB);
    container.appendChild(labelResults);
    resultsTable.appendChild(resultsTableBody);
    container.appendChild(resultsTable);

    recalculate();
}

function linearCalcTool(container) {
    tableCalcTool(container, "a + (x - 1) * b", (x, a, b) => { return a + (x - 1) * b; });
}

function diminishingCalcTool(container) {
    tableCalcTool(container, "((((110 * x) / (x + 6)) * (b - a)) / 100) + a", (x, a, b) => { 
        let val = Math.trunc((110 * x) / (x + 6));
        val = Math.trunc(((val * (b - a)) / 100) + a);
        val = Math.min(val, b);
        return val; 
    });
}

///////////////////////////////////////////////
function generateTools() {
    for (let tool of document.querySelectorAll(".linear-calc-tool")) {
        linearCalcTool(tool);
    }

    for (let tool of document.querySelectorAll(".diminishing-calc-tool")) {
        diminishingCalcTool(tool);
    }
}
