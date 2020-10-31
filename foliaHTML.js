// foliaHTML v.1.0.0
// by liskqu, ProgramistaZpolski
let CSScustomURL;

addCSS = function (css = "css.css") {
    cssE = document.createElement("link");
    var attrbs = [{ "attrb": "rel", "value": "stylesheet" }, { "attrb": "type", "value": "text/css" },
    { "attrb": "href", "value": css }];
    for (var i in attrbs) cssE.setAttribute(attrbs[i].attrb, attrbs[i].value);
    document.head
        .appendChild(cssE);
}
addCSScustomURL = function (css = CSScustomURL) {
    cssE = document.createElement("link");
    var attrbs = [{ "attrb": "rel", "value": "stylesheet" }, { "attrb": "type", "value": "text/css" },
    { "attrb": "href", "value": css }];
    for (var i in attrbs) cssE.setAttribute(attrbs[i].attrb, attrbs[i].value);
    document.head
        .appendChild(cssE);
}

var tags = ["duzyTekst", "naSrodku", "malyTekst", "przycisk", "tekstPrzycisk", "czcionkaSerif", "czcionkaSans", "czcionkaSans2", "czcionkaMono", "czcionkaMono2", "czcionkaMono", "czcionkaMono2", "czcionkaComic", "czcionkaDisplay", "cienMaly", "cienSredni", "cienDuzy", "cienNajwiekszy", "sredniTekst",
    "kolorRozowyCzerwony10", "kolorCzerwony20", "kolorCzerwony10", "kolorCzerwonyPomaranczowy10", "kolorPomaranczowy30",
    "kolorPomaranczowy20", "kolorPomaranczowy10", "kolorZolty10", "kolorPomaranczowyZolty20", "kolorPomaranczowyZolty10",
    "kolorZoltyZielony10", "kolorZielony20", "kolorZielony10", "kolorZielonyCyan10", "kolorCyan30", "kolorCyan20",
    "kolorCyan10", "kolorCyanNiebieski20", "kolorCyanNiebieski10", "kolorNiebieski10", "kolorNiebieskiMagenta30", "kolorNiebieskiMagenta20",
    "kolorNiebieskiMagenta10", "kolorMagenta20", "kolorMagenta10", "kolorMagentaRozowy20", "kolorMagentaRozowy10",
    "kolorSzary40", "kolorSzary30", "kolorSzary20", "kolorSzary10", "kolorZarazWracam", "kolorDND", "kolorOnline", "kolorNiedostepny", "kolorPozaBiurem",
    "kolorTloOstrzezenia", "kolorOstrzezenia", "kolorTloPowaznegoOstrzezenia", "kolorPowaznegoOstrzezenia", "kolorTlaErroru",
    "kolorErroru", "kolorTlaSukcesu", "kolorSukcesu", "poLewej", "poPrawej", "przekreslonyTekst", "pogrubionyTekst", "lekkiTekst", "najwiekszyTekst"];
loadTags = function () {
    try {
        if (typeof tags != "object") throw new Error("Nie udało się załadować \"tagów\".");
        for (var i of tags) document.createElement(tags[i]);
    } catch (error) {
        return console.error("Wystąpił błąd foliaHTML!\nTreść: " + error.message);
    }
}

function s() {
    addCSS();
    loadTags();
}
function sc(curl) {
    CSScustomURL = curl;
    addCSScustomURL();
    loadTags();
}


/* Web Components */
class Obrazek extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        let imgLink;
        console.log(this.hasAttribute('plik'));
        if (this.hasAttribute('plik')) {
            imgLink = this.getAttribute('plik');
        } else {
            imgLink = 'https://via.placeholder.com/300/09f/fff.webp';
        }
        

        const img = document.createElement('img');
        img.src = imgLink;
        wrapper.appendChild(img);

        /*const style = document.createElement('style');
        console.log(style.isConnected);*/


        /*style.textContent = `
        img {
          width: 1.2rem;
        }
      `;*/

        /*shadow.appendChild(style);*/
        shadow.appendChild(wrapper);
    }
}
class Odnosnik extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        let Linkacz;
        console.log(this.hasAttribute('strona'));
        if (this.hasAttribute('strona')) {
            Linkacz = this.getAttribute('strona');
        } else {
            Linkacz = '#';
        }
        let tekst;
        console.log(this.hasAttribute('tekst'));
        if (this.hasAttribute('tekst')) {
            tekst = this.getAttribute('tekst');
        } else {
            tekst = ' ';
        }

        const hyperlink = document.createElement('a');
        hyperlink.href = Linkacz;
        hyperlink.innerText = tekst;
        wrapper.appendChild(hyperlink);

        const style = document.createElement('style');
        console.log(style.isConnected);


        style.textContent = `
        a {
          color: #5e81ac;
        }
      `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}


customElements.define('obrazek-folia', Obrazek);
customElements.define('link-folia', Odnosnik);