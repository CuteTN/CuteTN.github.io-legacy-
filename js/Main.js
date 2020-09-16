import {loadHomeContent, language} from "./LoadContent.js"

// Tab switching thingy ////////////////////////////////////////
const pMenubarButtonToDiv = {
    "p-menubar-button-home": "div-home",
    "p-menubar-button-blogs": "div-blogs",
    "p-menubar-button-playgrounds": "div-playgrounds",
}

function disableAllTab(){
    Object.keys(pMenubarButtonToDiv).map(
        function (key, index){
            var divId = pMenubarButtonToDiv[key];
            var element = document.getElementById(divId);
            element.style.display = "none";
        }
    )   
}

function switchTab(menubarButtonId){
    disableAllTab();
    var divId = pMenubarButtonToDiv[menubarButtonId];
    var element = document.getElementById(divId);
    element.style.display = "block";
}

////////////////////////////////////////////////////////////////
    
// Open links in new tabs //////////////////////////////////////////////////////////////
    
function setOpenLinksInNewTab()
{
    var elements = document.getElementsByTagName("a");
    console.log(elements);
    Array.from(elements).forEach(element => {
        element.target = "_blank";
    });
}

////////////////////////////////////////////////////////////////


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

}

export function onLoad()
{
    initializeEventListeners();
    loadHomeContent("EN");
    setOpenLinksInNewTab(); 
}

window.onload = onLoad;