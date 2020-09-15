import {loadAllContent} from "./LoadContent.js"

export function onLoad()
{
    loadAllContent("EN");
}

window.onload = onLoad;