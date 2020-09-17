import { pickContentDict } from "./ContentPicker.js"

// global data ////////////////////////////////////////////////
const language = {
    EN: "EN",
    VI: "VI",
}    

var pageState = {
    language: language.EN,
    divId: "div-home",
}
///////////////////////////////////////////////////////////////

// Tab switching thingy ////////////////////////////////////////
const pMenubarButtonToDiv = {
    "p-menubar-button-home": "div-home",
    "p-menubar-button-blogs": "div-blogs",
    "p-menubar-button-playgrounds": "div-playgrounds",
}

function disableAllTab() {
    Object.keys(pMenubarButtonToDiv).map(
        function (key, index) {
            var divId = pMenubarButtonToDiv[key];
            var element = document.getElementById(divId);
            element.style.display = "none";
        }
    )   
}

function hideTab(divId) {
    var divElement = document.getElementById(divId);
    divElement.style.display = "none";
}

function showTab(divId) {
    var divElement = document.getElementById(divId);
    divElement.style.display = "block";
}

function switchTab(menubarButtonId) {
    hideTab(pageState.divId);
    
    pageState.divId = pMenubarButtonToDiv[menubarButtonId];
    
    showTab(pageState.divId);
    loadContent(pageState);
}
////////////////////////////////////////////////////////////////

// switching language thingy /////////////////////////////////////
const imgSettingButtonToLang = {
    "img-language-setting-button-VI": language.VI,
    "img-language-setting-button-EN": language.EN,
}

function setFontFamilyToContent(fontFamily, contentDict)
{
    Array.from(Object.keys(contentDict)).forEach(elementId => {
        var element = document.getElementById(elementId);
        if(!element)
            return;

        element.style.fontFamily = fontFamily;
    });
}

function setLanguage(language) {
    pageState.language = language;
    loadContent(pageState);
}
///////////////////////////////////////////////////////////////

// loading content thingy //////////////////////////////////////////////////////////////
export function loadContent(pageState)
{
    var contentDict = pickContentDict(pageState.divId, pageState.language);
    if(!contentDict)
        return;
    
    if(pageState.language == language.VI)
        setFontFamilyToContent("Arial", contentDict);
    else
        setFontFamilyToContent("Comic Sans MS", contentDict);
    
    Object.keys(contentDict).map
    (
        function (id, index) 
        {
            var element = document.getElementById(id);
            element.innerHTML = contentDict[id];
        }
    );
}

/*
async function loadContentElement(elementID, filePath)
{
    var element = document.getElementById(elementID);
    var txtFile = await fetch(filePath); // fetch txt file
    var text = await txtFile.text(); // transform stream to txt
    element.innerHTML = text;
} 

function getContentFilePath(prefix, language)
{
    return `./txt/${prefix}_${language}.txt`;
}
*/
    
////////////////////////////////////////////////////////////////

// Open links in new tabs //////////////////////////////////////////////////////////////
    
function setOpenLinksInNewTab()
{
    var elements = document.getElementsByTagName("a");
    Array.from(elements).forEach(element => {
        element.target = "_blank";
    });
}

////////////////////////////////////////////////////////////////

// initialization //////////////////////////////////////////////////////////////
function initializeEventListeners(){
    Object.keys(pMenubarButtonToDiv).map(
        function (key, index) {
            var pButton = document.getElementById(key);
            pButton.addEventListener("click", 
                function () {
                    switchTab(key);
                }
            )
        }
    )   
    
    Object.keys(imgSettingButtonToLang).map(
        function (key, index) {
            var imgButton = document.getElementById(key);
            imgButton.addEventListener("click",
                function() {
                    var language = imgSettingButtonToLang[key];
                    setLanguage(language);
                }
            )
        }
    )

}

export function onLoad()
{
    initializeEventListeners();
    loadContent(pageState);
    setOpenLinksInNewTab(); 
}

window.onload = onLoad;