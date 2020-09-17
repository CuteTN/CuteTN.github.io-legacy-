import { contentDict_homeEN } from "./contentDict_homeEN.js";
import { contentDict_homeVI } from "./contentDict_homeVI.js";

const contentDecision = {
    "div-home": {"EN": contentDict_homeEN, "VI": contentDict_homeVI},
}

/*
    content dict: content dictionary
*/

export function pickContentDict(divID, language)
{
    var temp = contentDecision[divID];
    if(!temp)
        return null;

    return temp[language];
}