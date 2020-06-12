let recordActivityToggle = document.getElementById("recordActivityToggle");
let hideViewsToggle = document.getElementById("hideViewsToggle");

let statsButton = document.getElementById("statsButton");
let privacyButton = document.getElementById("privacyButton");
let helpButton = document.getElementById("helpButton");

chrome.storage.sync.get(['record_activity'], result => {
  recordActivityToggle.checked = result.record_activity;
  console.log("%c Toggle ",
          "color: white; background-color: #2274A5",
          `recordActivityToggle: set to ${recordActivityToggle.checked}`);
});

chrome.storage.sync.get(['hide_views'], result => {
  hideViewsToggle.checked = result.hide_views;
  console.log("%c Toggle ",
          "color: white; background-color: #2274A5",
          `hideViewsToggle: set to ${recordActivityToggle.checked}`);
});

recordActivityToggle.addEventListener("change", function() {
  chrome.storage.sync.set({ record_activity: this.checked }, () => {
    console.log("%c Toggle ", "color: white; background-color: #2274A5",
                `Record Activity Toggle updated`);
  });
});

hideViewsToggle.addEventListener("change", function() {
  chrome.storage.sync.set({ hide_views: this.checked }, () => {
    console.log("%c Toggle ", "color: white; background-color: #2274A5",
                `Hide Views Toggle updated`);
  });

  chrome.storage.local.get(null, items => {
    console.log(items);
  });
});

statsButton.addEventListener("click", () => {
  chrome.tabs.create({url: '../stats.html'}); 
});
