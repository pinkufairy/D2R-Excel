"use strict";

function makeReferenceLinkHtml(page, element, pathToHtml="") {
    let link = "";
    let text = "";

    if (page && element) {
        link = `${page}.html#${element}`;
        text = `${page}#${element}`;
    }
    else if (page) {
        link = `${page}.html`;
        text = page;
    }
    else if (element) {
        link = `#${element}`;
        text = `#${element}`;
    }
    else {
        console.error(`${page} ${element} is not a valid reference link. Format is "$!page!$", "$!page#element!$, or $!#element!$"`);
        return "";
    }

    return `<a class="reference-link" target="_blank" href="${pathToHtml}${link}">${text}</a>`;
}

function replaceReferenceLink(match, p1, pageOverride, pathToHtml) {
    if (p1) {
        let i = p1.indexOf('#');
        if (i >= 0) {
            var splits = [p1.slice(0,i), p1.slice(i+1)];
            if (!splits || splits.length > 2) {
                console.error(`Too few or too many splits when creating data link ${p1}`);
            }
            else if (splits[0]) {
                // Page and element
                return makeReferenceLinkHtml(splits[0], splits[1], pathToHtml);
            }
            else if (pageOverride) {
                // Page and element, using the page override
                return makeReferenceLinkHtml(pageOverride, splits[1], pathToHtml);
            }
            else {
                // Just element
                return makeReferenceLinkHtml("", splits[1], pathToHtml);
            }
        }
        else {
            // Just page
            return makeReferenceLinkHtml(p1, "", pathToHtml);
        }
    }
    return match;
}

function parseJSONText(text, pageOverride, pathToHtml="") {
    // Reference Links
    text = text.replaceAll(/\$\!(.*?)\!\$/g, (match, p1) => replaceReferenceLink(match, p1, pageOverride, pathToHtml));
    return text;
}

function createTable(table, entries, pageOverride, attachIds = true) {
    const header = table.querySelector("thead");
    const body = table.querySelector("tbody");
    let isHeader = true;

    for (const rowData of entries) {
        const row = (isHeader ? header : body).insertRow();
        for (const columnData of rowData) {
            let col = {};
            if (isHeader) {
                col = document.createElement("th");
                row.appendChild(col);
            }
            else {
                col = row.insertCell();
            }

            if (typeof columnData == 'string') {
                // Normal cell
                col.innerHTML = parseJSONText(columnData, pageOverride);
            }
            else {
                // Cell with an id
                col.innerHTML = parseJSONText(columnData.text, pageOverride);

                if (attachIds && columnData.id) {
                    col.id = columnData.id;

                    // Add a link
                    const colLink = document.createElement("a");
                    colLink.classList.add("field-table-link");
                    colLink.innerText = "\u{1F517}";
                    colLink.href = `#${col.id}`;
                    col.appendChild(colLink);
                }
            }
        }
        isHeader = false;
    }
}

function createBittable(table, entries, pageOverride) {
    const header = table.querySelector("thead");
    const body = table.querySelector("tbody");

    // Add the header
    let headerCols = ["", "Description", "Decimal", "Binary"];
    const headerRow = header.insertRow();
    for (const columnData of headerCols) {
        const col = headerRow.insertCell();
        col.innerHTML = parseJSONText(columnData, pageOverride);
    }

    let entryInputs = [];
    let radioGroups = {};
    let input = {};

    // Find the max binary length
    let binaryLength = 0;
    {
        let index = 0;
        let max = 0;

        for (const rowData of entries) {
            const isObject = typeof rowData != 'string';
            const isHeader = isObject && rowData.header;
            if (!isHeader) {
                const decimal = isObject && (rowData.decimal != undefined) ? rowData.decimal : (1 << index) >>> 0;
                index++;
                if (decimal > max) {
                    binaryLength = decimal.toString(2).length;
                    max = decimal;
                }
            }
        }
    }


    // Add the input value
    {
        const row = body.insertRow();

        // First col is empty
        row.insertCell();

        // Second col is empty
        row.insertCell();

        // Third col is number input/output
        const inputCol = row.insertCell();

        // Fourth col is binary value
        const binaryCol = row.insertCell();

        // Setup input
        input = document.createElement("input");
        input.classList.add("field-bittable-input");
        input.type = "number";
        input.valueAsNumber = 0;
        ['input', 'change'].forEach(eventName =>{
            input.addEventListener(eventName, event=>{
                let index = 0;

                for (const rowData of entries) {
                    const isObject = typeof rowData != 'string';
                    const isHeader = isObject && rowData.header;

                    if (!isHeader) {
                        const decimal = isObject && (rowData.decimal != undefined) ? rowData.decimal : (1 << index) >>> 0;
                        const entryInput = entryInputs[index];

                        if (entryInput.type == "radio") {
                            // Radio group: Has to equal the value in the mask exactly
                            const valueMasked = (event.target.valueAsNumber & radioGroups[entryInput.name].mask) >>> 0;
                            const checked = valueMasked == decimal;
                            entryInputs[index].checked = checked;
                        }
                        else {
                            // Checkbox: Check all that match
                            const checked = (event.target.valueAsNumber & decimal) >>> 0;
                            entryInputs[index].checked = checked;
                        }
                        index++;
                    }
                }
                binaryCol.innerText = `${event.target.valueAsNumber.toString(2).padStart(binaryLength, "0")}`;
            });
        });
        inputCol.appendChild(input);

        // Setup binary
        binaryCol.innerText = `${input.valueAsNumber.toString(2).padStart(binaryLength, "0")}`;
    }

    // Add the entries
    {
        let index = 0;
        for (const rowData of entries) {
            const row = body.insertRow();
            
            const isObject = typeof rowData != 'string';
            const isHeader = isObject && rowData.header;
            const decimal = isObject && (rowData.decimal != undefined) ? rowData.decimal : (1 << index) >>> 0;
            const text = parseJSONText(isObject ? rowData.text : rowData, pageOverride);
            index += isHeader ? 0 : 1;

            // Initialize radio group data
            if (isObject && rowData.radiogroup) {
                if (!radioGroups[rowData.radiogroup]) {
                    radioGroups[rowData.radiogroup] = {};
                }
            }

            // First col is entry input
            const entryInputCol = row.insertCell();
            if (!isHeader) {
                const entryInput = document.createElement("input");
                if (isObject && rowData.radiogroup) {
                    entryInput.classList.add("field-bittable-radiobutton");
                    entryInput.type = "radio";
                    entryInput.name = rowData.radiogroup;
                    entryInput.addEventListener('change', (event) => {
                        // Have to unset the previous radio button's value before setting our new one
                        let prevDecimal = radioGroups[entryInput.name].decimal;
                        if (prevDecimal != undefined) {
                            input.valueAsNumber = (input.valueAsNumber & ~prevDecimal) >>> 0;
                        }

                        radioGroups[entryInput.name].decimal = decimal;
                        if (event.currentTarget.checked) {
                            if (decimal == 0) {
                                input.valueAsNumber = 0;
                            }
                            else {
                                input.valueAsNumber = (input.valueAsNumber | decimal) >>> 0;
                            }
                        }

                        input.dispatchEvent(new Event("change"));
                    });
                }
                else {
                    entryInput.classList.add("field-bittable-checkbox");
                    entryInput.type = "checkbox";
                    entryInput.addEventListener('change', (event) => {
                        if (event.currentTarget.checked) {
                            if (decimal == 0) {
                                input.valueAsNumber = 0;
                            }
                            else {
                                input.valueAsNumber = (input.valueAsNumber | decimal) >>> 0;
                            }
                        }
                        else {
                            input.valueAsNumber = (input.valueAsNumber & ~decimal) >>> 0;
                        }
                        input.dispatchEvent(new Event("change"));
                    });
                }

                entryInputs.push(entryInput);
                entryInputCol.appendChild(entryInput);
            }
            else if (rowData.radiogroup) {
                // Headers for radio groups define a mask that is used to ensure only valid values are set
                radioGroups[rowData.radiogroup].mask = rowData.radiogroupmask;
            }

            // Second col is description
            const descCol = row.insertCell();
            descCol.innerHTML = text;

            // Third col is decimal value
            const decimalCol = row.insertCell();
            decimalCol.innerText = isHeader ? "" : `${decimal}`;

            // Fourth col is binary value
            const binaryCol = row.insertCell();
            binaryCol.innerText = isHeader ? "" : `${decimal.toString(2).padStart(binaryLength, "0")}`;
        }
    }
}

function findField(container, fieldName) {
    if (container.fields) {
        for (let field of container.fields) {
            if (field.id)
            {
                if (field.id == fieldName) {
                    return field;
                }
            }
            else if (field.name == fieldName) {
                return field;
            }
            
            let subField = findField(field, fieldName);
            if (subField) {
                return subField;
            }
        }
    }
    return null;
}

function createAppendField(appendField, fileTitle, pageOverride) {
    const appendfieldTemplate = document.querySelector("#appendfield-template");
    const appendfieldClone = appendfieldTemplate.content.cloneNode(true);

    // Summary
    const summary = appendfieldClone.querySelector(".appendfield-summary");
    summary.innerText = `Display ${fileTitle}#${appendField.name}`;

    // Description
    const description = appendfieldClone.querySelector(".field-description");
    description.innerHTML = parseJSONText(appendField.description, pageOverride);

    // Table
    if (appendField.table) {
        const attachIds = false;
        createTable(appendfieldClone.querySelector(".field-table"), appendField.table, pageOverride, attachIds);
    }
    else if (appendField.bittable) {
        createBittable(appendfieldClone.querySelector(".field-table"), appendField.bittable, pageOverride);
    }
    else {
        appendfieldClone.querySelector(".field-table").remove();
    }

    return appendfieldClone;
}

function createField(fieldClone, jsonFieldClone, field) {

    const fieldElement = fieldClone.querySelector(".field");
    fieldElement.id = field.id ? field.id : field.name;

    // Field name
    const nameLink = fieldClone.querySelector(".field-name");
    nameLink.href = `#${fieldElement.id}`;
    const nameText = nameLink.querySelector("h3");
    nameText.innerText = field.name;

    // Alternate names
    if (field.altNames) {
        const altNameTargets = fieldClone.querySelector(".field-alt-name-targets");
        const altNames = fieldClone.querySelector(".field-alt-names");
        for (const altName of field.altNames) {
            const altTarget = document.createElement("div");
            altTarget.id = altName;
            altNameTargets.appendChild(altTarget);

            const alt = document.createElement("a");
            alt.classList.add("field-alt-name");
            alt.href = `#${altName}`;
            const altH = document.createElement("h4");
            altH.innerText = altName;
            alt.appendChild(altH);
            altNames.appendChild(alt);
        }
    }
    else {
        fieldClone.querySelector(".field-alt-names").remove();
    }

    // Type
    if (field.type && field.type.type) {
        const getTypeStrings = (type) => {
            let typeString = "";
            let tooltipString = "";
            switch (type.type) {
                case "int":
                case "int or":
                    typeString = `Integer`;
                    tooltipString = `Limit: ${type.memSize} bits`
                    break;

                case "float":
                    typeString = `Float`;
                    tooltipString = `Limit: ${type.memSize} bits`
                    break;

                case "text":
                    typeString = `Text`;
                    tooltipString = `Max Length: ${type.dataLength ? type.dataLength : `\u221e`} characters<br>Limit: ${type.memSize ? type.memSize : `\u221e`} bits`
                    break;

                case "reference":
                    typeString = `Reference of ${makeReferenceLinkHtml(type.file, type.field)}`;
                    tooltipString = `Max Length: ${type.dataLength} characters<br>Limit: ${type.memSize} bits`
                    break;
                    
                case "string":
                    typeString = `Localized String`;
                    tooltipString = `Max Length: ${type.dataLength} characters<br>Limit: ${type.memSize} bits`
                    break;

                case "boolean":
                case "inverse boolean":
                    typeString = "Boolean";
                    tooltipString = jsonFieldClone ? "true or false" : "0 or 1";
                    break;
                
                case "parse":
                    if (type.description) {
                        typeString = `Parse: ${parseJSONText(type.description)}`;
                    }
                    else {
                        console.error(`Parse type for ${field.name} has no description`);
                    }
                    break;

                case "comment":
                    typeString = "Comment";
                    tooltipString = "This field is not used by code";
                    break;

                case "object":
                    if (type.file && type.field) {
                        typeString = `Object of ${makeReferenceLinkHtml(type.file, type.field)}`;
                    }
                    else {
                        typeString = "Object";
                    }
                    break;

                case "array":
                    let [typeString2, tooltipString2] = getTypeStrings(type.arrayType);
                    typeString = `Array of ${typeString2}`;
                    tooltipString = tooltipString2;
                    break;

                default:
                    // Just display whatever we put otherwise. The validation script will pick up any errors
                    typeString = type.type;
            }
            return [typeString, tooltipString];
        }

        let [typeString, tooltipString] = getTypeStrings(field.type);

        const typeText = fieldClone.querySelector(".field-type-text");
        const typeTooltip = fieldClone.querySelector(".field-type-tooltip-text");
        typeText.innerHTML = typeString;
        typeTooltip.innerHTML = tooltipString;

        if (!tooltipString) {
            fieldClone.querySelector(".field-type-tooltip-icon").remove()
        }
    }
    else {
        fieldClone.querySelector(".field-type").remove();
    }

    // Description
    const description = fieldClone.querySelector(".field-description");
    description.innerHTML = parseJSONText(field.description);

    // Table
    if (field.table) {
        createTable(fieldClone.querySelector(".field-table"), field.table);
    }
    else if (field.bittable) {
        createBittable(fieldClone.querySelector(".field-table"), field.bittable);
    }
    else {
        fieldClone.querySelector(".field-table").remove();
    }

    // Append field
    let removeAppendField = true;
    if (field.appendField) {
        let otherFile = files[field.appendField.file];
        if (otherFile) {
            let appendField = findField(otherFile, field.appendField.field);
            if (appendField) {
                const appendFieldClone = createAppendField(appendField, otherFile.title, field.appendField.file);

                const appendFieldContainer = fieldClone.querySelector(".field-appendfield")
                appendFieldContainer.appendChild(appendFieldClone);
                removeAppendField = false;
            }
            else {
                console.error(`${field.name}: Append field ${field.appendField.file}#${field.appendField.field} does not exist`)
            }
        }
    }
    if (removeAppendField) {
        fieldClone.querySelector(".field-appendfield").remove();
    }

    if (jsonFieldClone) {
        if (field.fields) {
            const jsonFieldTemplate = document.querySelector("#json-field-template");
            const fieldTemplate = document.querySelector("#field-template");

            let subFieldsContainer = jsonFieldClone.querySelector(".json-properties");

            for (const subField of field.fields) {
                const jsonSubFieldClone = jsonFieldTemplate.content.cloneNode(true);
                const subFieldClone = fieldTemplate.content.cloneNode(true);

                createField(subFieldClone, jsonSubFieldClone, subField);

                jsonSubFieldClone.querySelector(".json-field").appendChild(subFieldClone);
                subFieldsContainer.appendChild(jsonSubFieldClone);
            }
        }
        else {
            jsonFieldClone.querySelector(".json-divider").remove();
        }
    }
}

function createFields(fieldsContainer, fields) {
    const fieldTemplate = document.querySelector("#field-template");
    const jsonFieldTemplate = document.querySelector("#json-field-template");

    for (const field of fields) {
        let jsonFieldClone = null;
        if (field.fields) {
            jsonFieldClone = jsonFieldTemplate.content.cloneNode(true);
        }

        const fieldClone = fieldTemplate.content.cloneNode(true);
        createField(fieldClone, jsonFieldClone, field);

        if (jsonFieldClone) {
            jsonFieldClone.querySelector(".json-field").appendChild(fieldClone);
            fieldsContainer.appendChild(jsonFieldClone);
        }
        else {
            fieldsContainer.appendChild(fieldClone);
        }
    }
}

function createFile(fileData, fileContainer) {
    const fileTemplate = document.querySelector("#file-template");
    const fileClone = fileTemplate.content.cloneNode(true);

    const title = fileClone.querySelector(".file-title");
    title.innerText = fileData.title;

    const overview = fileClone.querySelector(".file-overview");
    overview.innerHTML = parseJSONText(fileData.overview);

    const fieldsContainer = fileClone.querySelector(".file-fields");

    fileContainer.appendChild(fileClone);

    createFields(fieldsContainer, fileData.fields);
}

function populateFile(fileData) {
    const fileContainer = document.querySelector("#file-content");
    createFile(fileData, fileContainer);

    if (fileData.appendFiles) {
        for (const appendFile of fileData.appendFiles) {
            const hr = document.createElement("hr");
            fileContainer.append(hr);
            createFile(files[appendFile], fileContainer)
        }
    }

    for (const field of document.querySelectorAll(".field")) {
        const nameLink = field.querySelector(".field-name");
        const divider = field.querySelector(".field-divider");

        // Set the width of the divider to the width of the name
        // The DOM is a fickle beast so the field must be added to the html body so width is generated
        divider.setAttribute("style", `width:${nameLink.offsetWidth}px`);
    }
}
