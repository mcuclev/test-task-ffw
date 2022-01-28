class UrlObject {
    constructor(protocol, domain, path, search, hash) {
        this.protocol = protocol;
        this.domain = domain;
        this.path = path;
        this.search = search;
        this.hash = hash;
    }
}

let parseUrl = (url) => {
    
    //did not consider RegEx as this approach wouldn't be the most succinct
    //option 1 - new URL()
    const a = new URL(url);
    
    //option 2 - createElement - browser-only
    // let a = document.createElement('a');
    // a.setAttribute('href', url);

    let urlObj = new UrlObject(a.protocol, a.hostname, a.pathname, a.search, a.hash);

    return urlObj;
}

console.log(parseUrl('https://yandex.md/weather/kishinev?lat=47.024672&lon=28.832336#foo'));