let folderName = 'dist';

chrome.storage.sync.get(['folderName'], function(result) {
    folderName = result.folderName;
});

function listenDiffRequest() {
    chrome.runtime.onMessage.addListener(
        function(request) {
            if (request.type === 'mr-diff-res-complete') {
                setTimeout(function() {
                    $(`.diff-file .file-title-name:contains("/${folderName}/")`).parent().parent().parent().parent().remove();
                    $(`.file-row-name:contains("${folderName}")`).parent().parent().parent().remove();  
                }, 0);
            }
        }
    );
}

listenDiffRequest();