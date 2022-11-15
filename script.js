
// chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    
//     const title = tabs[0].title;
//     const linky = document.getElementById('linky');

//     linky.innerHTML = title;

//   });


const url1 = window.location.href;
const linky = document.getElementById('linky');

linky.innerHTML = url1;
