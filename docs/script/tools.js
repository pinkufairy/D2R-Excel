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

    let numInputs = Number(container.dataset.numinputs);
    if (numInputs === undefined) {
        numInputs = 1;
    }

    let inputs = [];
    let inputDivs = [];
    for (let i = 0; i < numInputs; i++)
    {
        let div = document.createElement("div");
        div.classList.add("flex-row");

        // Technically only supports 26 parameters
        let label = document.createElement("div");
        label.innerText = `${String.fromCharCode('a'.charCodeAt(0) + i)}:`;

        let input = document.createElement("input");
        input.classList.add("tool-number-input");
        input.type = "number";
        input.valueAsNumber = 0;

        div.appendChild(label);
        div.appendChild(input);

        inputs.push(input);
        inputDivs.push(div);
    }

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
        const params = Array.from(inputs, i => i.valueAsNumber);

        for (let resultCol of resultsTable.querySelectorAll(".results-row")) {
            const result = getResult(resultCol.xIndex, params);
            resultCol.innerText = result.toString();
        }
    };

    ['input', 'change'].forEach(eventName => {
        inputs.forEach(i => i.addEventListener(eventName, recalculate));
    });

    container.append(...inputDivs);
    container.appendChild(labelResults);
    resultsTable.appendChild(resultsTableBody);
    container.appendChild(resultsTable);

    recalculate();
}

function linearCalcTool(container) {
    tableCalcTool(container, "a + (x - 1) * b", (x, params) => { return params[0] + (x - 1) * params[1]; });
}

function diminishingCalcTool(container) {
    tableCalcTool(container, "((((110 * x) / (x + 6)) * (b - a)) / 100) + a", (x, params) => { 
        const a = params[0];
        const b = params[1];
        let val = Math.trunc((110 * x) / (x + 6));
        val = Math.trunc(((val * (b - a)) / 100) + a);
        val = Math.min(val, b);
        return val; 
    });
}

function levelDamageCalcTool(container) {
    tableCalcTool(container, "", (x, params) => { 
        const a = params[0];
        const b = params[1];
        const c = params[2];
        const d = params[3];
        const e = params[4];

        const LEVEL1_DAMAGE = 1;
        const LEVEL2_DAMAGE = 8;
        const LEVEL3_DAMAGE = 16;
        const LEVEL4_DAMAGE = 22;
        const LEVEL5_DAMAGE = 28;

        if (x <= 1)
        {
            return 0;
        }

        if (x > LEVEL5_DAMAGE)
        {
            return (LEVEL2_DAMAGE - 1) * a + (LEVEL3_DAMAGE - LEVEL2_DAMAGE) * b + (LEVEL4_DAMAGE - LEVEL3_DAMAGE) * c + (LEVEL5_DAMAGE - LEVEL4_DAMAGE) * d + (x - LEVEL5_DAMAGE) * e;
        }
        else if (x > LEVEL4_DAMAGE)
        {
            return (LEVEL2_DAMAGE - 1) * a + (LEVEL3_DAMAGE - LEVEL2_DAMAGE) * b + (LEVEL4_DAMAGE - LEVEL3_DAMAGE) * c + (x - LEVEL4_DAMAGE) * d;
        }
        else if (x > LEVEL3_DAMAGE)
        {
            return (LEVEL2_DAMAGE - 1) * a + (LEVEL3_DAMAGE - LEVEL2_DAMAGE) * b + (x - LEVEL3_DAMAGE) * c;
        }
        else if (x > LEVEL2_DAMAGE)
        {
            return (LEVEL2_DAMAGE - 1) * a + (x - LEVEL2_DAMAGE) * b;
        }
        else
        {
            return (x - 1) * a;
        }
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

    for (let tool of document.querySelectorAll(".level-damage-calc-tool")) {
        levelDamageCalcTool(tool);
    }
}
