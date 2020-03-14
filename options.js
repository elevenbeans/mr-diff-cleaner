// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let $confirmButton = document.getElementById('confirmButton');
let $NameInputer = document.getElementById('nameInputer');

$confirmButton.addEventListener('click', function() {
  if ($NameInputer.value) {
    chrome.storage.sync.set({folderName: $NameInputer.value}, function() {
      alert('new name is ' + $NameInputer.value);
    })
  }
});

