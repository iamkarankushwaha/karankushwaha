// Load Header Component
(async () => {
    try {
        const res = await fetch('index.html#header');
        if (!res.ok) throw new Error('Header load failed');

        const htmlText = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const header = doc.getElementById('header');
        if (!header) throw new Error('Header element not found in index page');

        document.getElementById('header').innerHTML = header.innerHTML;

    } catch (err) {
        console.error(err);
    }
})();



// load footer
(async () => {
    try {
        const res = await fetch('index.html#footer');
        if (!res.ok) throw new Error('Footer load failed');

        const htmlText = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const footer = doc.getElementById('footer');
        if (!footer) throw new Error('Header element not found in index page');

        document.getElementById('footer').innerHTML = footer.innerHTML;

    } catch (err) {
        console.error(err);
    }
})();