// foliaHTML v.1.0.0
// by liskqu, ProgramistaZpolski

addCSS = function(css="https://cdn.jsdelivr.net/gh/lisqu16/foliaHTML@0.1.1/css.css") {
    cssE=document.createElement("link");
    var attrbs = [{"attrb":"rel", "value":"stylesheet"}, {"attrb":"type", "value":"text/css"},
                  {"attrb":"href", "value":css}];
    for (var i in attrbs) cssE.setAttribute(attrbs[i].attrb, attrbs[i].value);
    document.head
        .appendChild(cssE);
}

var tags = ["duzyTekst", "naSrodku", "malyTekst", "przycisk", "tekstPrzycisk", "czcionkaSerif", "czcionkaSans", "czcionkaSans2", "czcionkaMono", "czcionkaMono2", "czcionkaMono", "czcionkaMono2", "czcionkaComic", "czcionkaDisplay", "cienMaly", "cienSredni", "cienDuzy", "cienNajwiekszy", "sredniTekst"];
loadTags = function() {
    try {
        if (typeof tags != "object") throw new Error("Nie udało się załadować \"tagów\".");
        for (var i of tags) document.createElement(tags[i]);
    } catch (error) {
        return console.error("Wystąpił błąd foliaHTML!\nTreść: "+error.message);
    }
}

function s() {
    addCSS();
    loadTags();
}
