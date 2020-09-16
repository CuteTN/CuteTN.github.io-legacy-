import { contentEN } from "./Content_EN.js"

export const language =
{
    EN: "EN",
    VI: "VI"
}

export const content =
{
    "EN": contentEN,
    "VI": null,
}


export function loadHomeContent(language)
{
    Object.keys(content[language]).map
    (
        function (id, index) 
        {
            var element = document.getElementById(id);
            element.innerHTML = content[language][id]
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