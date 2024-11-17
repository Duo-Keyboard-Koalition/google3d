async function init() {
    const { Map3DElement } = await window.google.maps.importLibrary("maps3d");
    
    const map3DElement = new Map3DElement({
        center: { lat: 43.6425, lng: -79.3871, altitude: 400 },
        range: 1000,
        tilt: 60,
    });

    document.body.append(map3DElement);
}

async function loadGoogleMapsApi() {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; 
    b = b[c] || (b[c] = {}); 
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { 
        await (a = m.createElement("script")); 
        e.set("libraries", [...r] + ""); 
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); 
        e.set("callback", c + ".maps." + q); 
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e; 
        d[q] = f; 
        a.onerror = () => h = n(Error(p + " could not load.")); 
        a.nonce = m.querySelector("script[nonce]")?.nonce || ""; 
        m.head.append(a) 
    })); 
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) 
}

const g = {
    key: "AIzaSyDDGQQEA0grrP2FPL_iNZhEX0hlxTOMuwM",
    v: "alpha",
};

loadGoogleMapsApi(g).then(init);
