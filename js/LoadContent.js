const EN = "EN";
const VI = "VI";

const WelcomePrefix = "Welcome";
const BriefInfoPrefix = "BriefInfo";

function loadContentElement(elementID, filePath)
{
    var element = document.getElementById(elementID);
    var fr = new FileReader();
    var content = fr.readAsText(filePath, "utf-8");
    console.log(content);
    element.innerHTML = content;
}

function getContentFilePath(prefix, language)
{
    return "../txt/" + prefix + "_" + language + ".txt";
}

function loadAllContent(language)
{
    loadContentElement("h1-welcome-title", getContentFilePath(WelcomePrefix, language));
    loadContentElement("")
}

export
{
    EN,
    VI,
    loadAllContent,
}