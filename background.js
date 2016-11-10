// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.background="url(\'http://nemethbalazs.f.fazekas.hu/make_america_great_again.jpg\')"; var im=document.images; for (i = 0; i < im.length; ++i){im[i].src="http://nemethbalazs.f.fazekas.hu/trump.jpg"; im[i].srcset=""}'
  });
});