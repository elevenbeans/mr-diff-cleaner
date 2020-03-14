// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.webRequest.onCompleted.addListener(
  function() {
      chrome.tabs.query({ // 查找当前tab
        active: true,
        currentWindow: true
      }, function(tabs) { // 发送消息到当前tab,添加书签相关dom节点
        chrome.tabs.sendMessage(tabs[0].id, {
            type: 'mr-diff-res-complete'
        });
    });
  },
  {
      urls:[
        "http://*.ctripcorp.com/*/merge_requests/*/diffs.json",
      ],
      types: ["xmlhttprequest"]
  },
  [
      "responseHeaders"
  ]
);

chrome.storage.sync.set({folderName: 'dist'}, function() {
  console.log('Value is set to ' + 'dist');
});
