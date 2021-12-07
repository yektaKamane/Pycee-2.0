
chrome.runtime.sendMessage({todo: "showpageaction"});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "load"){
        console.log("load");
        // google colab 
        // var node = document.getElementsByTagName("body")[0].getElementsByClassName("notebook-vertical")[0]
        // .getElementsByClassName("notebook-horizontal")[0].getElementsByClassName("layout vertical grow")[0]
        // .getElementsByClassName("layout horizontal grow")[0].getElementsByClassName("layout vertical grow notebook-tab-content")[0]
        // .getElementsByClassName("overflow-flexbox-workaround")[0].getElementsByClassName("notebook-container")[0]
        // .getElementsByClassName("notebook-scrolling-horizontal")[0].getElementsByClassName("notebook-content-background")[0]
        // .getElementsByClassName("notebook-content ")[0].getElementsByClassName("notebook-cell-list")[0]
        // .getElementsByClassName("cell code icon-scrolling")[0].getElementsByClassName("main-content")[0]
        // .getElementsByClassName("codecell-input-output")[0].getElementsByClassName("inputarea horizontal layout code")[0]
        // .getElementsByClassName("editor flex lazy-editor")[0].getElementsByClassName("editor flex monaco")[0]
        // .getElementsByClassName("monaco-editor no-user-select  showUnused showDeprecated vs")[0].getElementsByClassName("overflow-guard")[0]
        // .getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].getElementsByClassName("lines-content monaco-editor-background")[0]
        // .getElementsByClassName("view-lines monaco-mouse-cursor-text")[0].getElementsByClassName("view-line")[0];
        // console.log(node);
        

        //www.online-python.com
        var node = document.getElementsByTagName("body")[0].getElementsByTagName("div")[0]
        .getElementsByClassName("main-content d-flex")[0].getElementsByClassName("container")[0]
        .getElementsByClassName("split")[0].getElementsByTagName("div")[0].getElementsByClassName(" ace_editor ace-tm")[0]
        .getElementsByClassName("ace_scroller")[0].getElementsByClassName("ace_content")[0]
        .getElementsByClassName("ace_layer ace_text-layer")[0];

        var text = node.textContent;
        // var text2 = node.innerHTML;

        console.log(text);
        node.style.backgroundColor = "blue";
    }

})
