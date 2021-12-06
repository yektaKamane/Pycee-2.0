
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showpageaction"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        })
    }

})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "btn_is_pushed"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "run"});
        });
    }

})



