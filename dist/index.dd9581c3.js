// Handles loading the events for <model-viewer>'s slotted progress bar
document.querySelector("model-viewer").addEventListener("progress",e=>{let t=e.target.querySelector(".progress-bar"),r=e.target.querySelector(".update-bar");0===e.detail.totalProgress?(t.style.display="block",r.style.width="0%"):(r.style.width=`${100*e.detail.totalProgress}%`,1===e.detail.totalProgress&&(t.style.display="none"))});//# sourceMappingURL=index.dd9581c3.js.map

//# sourceMappingURL=index.dd9581c3.js.map
