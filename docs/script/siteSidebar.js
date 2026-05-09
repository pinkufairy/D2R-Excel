"use strict";

function closeResponsiveSidebar() {
    for (const element of document.querySelectorAll(".hamburger input:checked")) {
        element.checked = false;
    }
}

///////////////////////////////////////////////
// Index

function populateSidebarRecursive(index, pathToHomeDirectory, ul) {
    const li = document.createElement("li");
    const indexPath = pathToHomeDirectory + (index.path ? index.path : "");
    const isLink =  indexPath.lastIndexOf(".html") != "-1";

    // Text and links
    if (isLink) {
        const link = document.createElement("a");
        link.setAttribute("href", indexPath);
        link.innerHTML = index.name;
        let fileName = indexPath.split("/").pop();
        if (window.location.pathname.indexOf(fileName) != -1) {
            link.classList.add("current");
        }
        li.addEventListener("click", closeResponsiveSidebar);
        li.appendChild(link);
    }
    else {
        li.innerHTML = index.name;
    }

    // Populate children
    if (index.children) {
        const ulChildren = document.createElement("ul");
        for (const childIndex of index.children) {
            populateSidebarRecursive(childIndex, pathToHomeDirectory, ulChildren)
        }
        li.appendChild(ulChildren);
    }

    ul.appendChild(li);
}

///////////////////////////////////////////////
// Search

const SearchResultFile = 0;
const SearchResultField = 1;

function getSearchResults(text, search) {
    let results = [];

    if (!text) {
        return results;
    }

    text = text.toLowerCase();
    for (const file of search) {
        if (file.name.toLowerCase().includes(text)) {
            let fileResult = {};
            "\u{1F517}";
            fileResult.name = `<b>\u{1F5CE}</b>  ${file.name}`;
            fileResult.path = file.path;
            fileResult.type = SearchResultFile;
            results.push(fileResult);
        }

        if (file.fields) {
            for (const field of file.fields) {
                if (field.name.toLowerCase().includes(text)) {
                    let fieldResult = {};
                    fieldResult.name = `<b>\u{1F3F7}</b> ${field.name}`;
                    fieldResult.path = field.path;
                    fieldResult.file = `<b>\u{1F5CE}</b> ${file.name}`;
                    fieldResult.type = SearchResultField;
                    results.push(fieldResult);
                }

                if (field.subfields) {
                    for (const subfield of field.subfields) {
                        if (subfield.name.toLowerCase().includes(text)) {
                            let subfieldResult = {};
                            subfieldResult.name = `<b>\u{1F3F7}</b> ${subfield.name}`;
                            subfieldResult.path = subfield.path;
                            subfieldResult.file = `<b>\u{1F5CE}</b> ${file.name}`;
                            subfieldResult.type = SearchResultField;
                            results.push(subfieldResult);
                        }
                    }
                }
            }
        }
    }

    return results;
}

function generateSearchResults(inputSearch, ulSearchResults, pathToHomeDirectory) {
    ulSearchResults.innerHTML = "";
    
    let styleA = true;

    const results = getSearchResults(inputSearch.value, search);
    results.sort((a, b) => { return a.type - b.type; });

    for (const result of results) {
        const searchResult = document.createElement("li");
        searchResult.classList.add("search-result");
        searchResult.classList.add(styleA ? "search-style-a" : "search-style-b");
        styleA = !styleA;

        const searchLink = document.createElement("a");
        searchLink.innerHTML = result.name;
        searchLink.href = pathToHomeDirectory + result.path;
        searchLink.addEventListener("click", (e) => {
            inputSearch.value = "";
            inputSearch.dispatchEvent(new KeyboardEvent('keyup', {}));
            closeResponsiveSidebar();
        });

        switch (result.type) {
            case SearchResultFile:
                searchLink.classList.add("search-result-file");
                break;
            case SearchResultField:
                searchLink.classList.add("search-result-field");
                break;
        }

        if (result.file) {
            const searchFile = document.createElement("span");
            searchFile.classList.add("search-result-file");
            searchFile.innerHTML = result.file;
            searchLink.appendChild(searchFile);
        }

        searchResult.appendChild(searchLink);
        ulSearchResults.appendChild(searchResult);
    }
}

///////////////////////////////////////////////
// Site Sidebar

function populateSiteSidebar(pathToHomeDirectory, siteIndex) {
    const sidebarContainer = document.querySelector("#site-sidebar");

    // Search
    const divSearch = document.createElement("div");
    divSearch.id = "site-search";

    const inputSearch = document.createElement("input");
    inputSearch.id = "site-search-bar";
    inputSearch.type = "text";

    const ulSearchResults = document.createElement("ul");
    ulSearchResults.id = "site-search-results";

    inputSearch.addEventListener("focus", (e) => {
        ulSearchResults.classList.add("focused");
    });
    inputSearch.addEventListener("blur", (e) => {
        if (!e.relatedTarget || !ulSearchResults.contains(e.relatedTarget)) {
            ulSearchResults.classList.remove("focused");
        }
    });
    inputSearch.addEventListener("keyup", (e) => {
        generateSearchResults(inputSearch, ulSearchResults, pathToHomeDirectory);
    });

    divSearch.append(inputSearch);
    divSearch.append(ulSearchResults);
    sidebarContainer.append(divSearch);

    // Index
    const ulIndex = document.createElement("ul");
    ulIndex.classList.add("site-index");

    for (const index of siteIndex) {
        populateSidebarRecursive(index, pathToHomeDirectory, ulIndex);
    }

    sidebarContainer.appendChild(ulIndex);
}

///////////////////////////////////////////////
// Page Sidebar

function createSidebarField(field, ulFields) {
    const liField = document.createElement("li");
    const fieldLink = document.createElement("a");

    fieldLink.href = `#${field.id ? field.id : field.name}`;
    fieldLink.innerHTML = field.name;

    liField.appendChild(fieldLink);
    ulFields.appendChild(liField);

    if (field.fields) {
        const ulFieldFields = document.createElement("ul");
        for (const subField of field.fields) {
            createSidebarField(subField, ulFieldFields);
        }
        liField.appendChild(ulFieldFields);
    }
}

function createSidebarFile(fileData, ulSidebar) {
    const liFile = document.createElement("li");
    liFile.innerText = fileData.title;
    ulSidebar.appendChild(liFile);

    const ulFields = document.createElement("ul");
    for (const field of fileData.fields) {
        createSidebarField(field, ulFields);
    }

    ulSidebar.appendChild(ulFields);
}

function populatePageSidebar(fileData, container = null) {
    const sidebar = document.querySelector("#page-sidebar");
    const ulSidebar = container ? container : document.createElement("ul");

    createSidebarFile(fileData, ulSidebar)

    if (fileData.appendFiles) {
        for (const appendFile of fileData.appendFiles) {
            createSidebarFile(files[appendFile], ulSidebar)
        }
    }

    if (!container) {
        sidebar.appendChild(ulSidebar);
    }
}

function playActiveAnimation() {
    const currentlyActive = document.querySelectorAll(".active");
    for (let active of currentlyActive) {
        active.classList.remove("active");
        void active.offsetWidth;
    }

    const id = decodeURIComponent(location.hash).substring(1);
    if (id) {
        const hashed = document.getElementById(id);
        if (hashed) {
            // Find the first target in the parent stack
            let target = hashed;
            while (target && !target.classList.contains("page-sidebar-target")) {
                target = target.parentElement;
            }

            if (target) {
                target.classList.add("active");
            }
        }
    }
}

function fixupPageSidebar() {
    // Add highlighting on scroll
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            const id = entry.target.id;
            const selector = `#page-sidebar li a[href="${id ? `#${id}` : ""}"]`;

            if (entry.isIntersecting) {
                document.querySelector(selector).classList.add('current');
            }
            else {
                document.querySelector(selector).classList.remove('current');
            }
        };
    });
    document.querySelectorAll('.page-sidebar-target').forEach((field) => {
        observer.observe(field);
    });

    // Add responsive design support to the page sidebar after it is generated
    for (const li of document.querySelectorAll("#page-sidebar a")) {
        li.addEventListener("click", closeResponsiveSidebar);
    }

    // Add highlight animation on targeted elements
    window.addEventListener("hashchange", playActiveAnimation);
    playActiveAnimation();
}