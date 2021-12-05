
chrome.runtime.sendMessage({todo: "showpageaction"});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "load"){
        console.log("Data is loaded and safe to read");

        // I think it's better not to specify "flex" class so I removed them all
        // Keep a refrence to the previous node object to backtrack if necessary 

        var nested_classes = ["notebook-vertical", "notebook-horizontal", "layout vertical grow", "layout horizontal grow", 
        "layout vertical grow notebook-tab-content", "overflow-flexbox-workaround", "notebook-container", "notebook-scrolling-horizontal",
        "notebook-content-background", "notebook-content", "notebook-cell-list", "cell code icon-scrolling", "main-content", 
        "codecell-input-output", "inputarea horizontal layout code", "editor lazy-editor", "editor monaco", "lazy-virtualized",
        "monaco-editor no-user-select  showUnused showDeprecated vs"];
        
        var i=0;
        var temp1;
        var temp2;
        var node = document.getElementsByTagName("body")[0];

        for (i=0; i<nested_classes.length; i++){
            if (i==0){
                temp1 = node.getElementsByClassName(nested_classes[i])[0];
                continue;
            }
            else if(i==1){
                temp2 = temp1.getElementsByClassName(nested_classes[i])[0];
                continue;
            }
            else if (i>=2 && temp2 != undefined){
                console.log("Log no error:");
                console.log(node);
                console.log(temp1);
                console.log(temp2);
                node = temp1;
                temp1 = temp2;
                temp2 = temp2.getElementsByClassName(nested_classes[i])[0];
            }  
            else{
                // in else you should backtrack the problem
                // skiping one class may word
                // because I've put alternative classes after eachother

                console.log("Can't find the class: ");
                console.log(nested_classes[i-1]);
                
                console.log("Log (error):");
                console.log(node);
                console.log(temp1);
                console.log(temp2);
            }
        }

        //console.log(node);

        /*
        var node = document.getElementsByTagName("body")[0].getElementsByClassName("notebook-vertical")[0]
        .getElementsByClassName("notebook-horizontal")[0].getElementsByClassName("layout vertical grow")[0]
        .getElementsByClassName("layout horizontal grow")[0].getElementsByClassName("layout vertical grow notebook-tab-content")[0]
        .getElementsByClassName("overflow-flexbox-workaround")[0].getElementsByClassName("notebook-container")[0]

        .getElementsByClassName("notebook-scrolling-horizontal")[0].getElementsByClassName("notebook-content-background")[0]
        .getElementsByClassName("notebook-content")[0].getElementsByClassName("notebook-cell-list")[0]
        .getElementsByClassName("cell code icon-scrolling")[0].getElementsByClassName("main-content")[0]
        .getElementsByClassName("codecell-input-output")[0].getElementsByClassName("inputarea horizontal layout code")[0]
        .getElementsByClassName("editor flex lazy-editor")[0].getElementsByClassName("editor flex monaco")[0]
        
        .getElementsByClassName("monaco-editor no-user-select  showUnused showDeprecated vs")[0].getElementsByClassName("overflow-guard")[0];
        .getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].getElementsByClassName("lines-content monaco-editor-background")[0]
        .getElementsByClassName("view-lines monaco-mouse-cursor-text")[0].getElementsByClassName("view-line")[0];
        */



        //var text = node.textContent;
        //var text2 = node.innerHTML;

        //console.log(text);
        //node.style.backgroundColor = "salmon";
    }

})
