var o,s,e;s=(o=jQuery)(window),e=o("body"),// Breakpoints.
breakpoints({default:["1681px",null],xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:["361px","480px"],xxsmall:[null,"360px"]}),// Play initial animations on page load.
s.on("load",function(){window.setTimeout(function(){e.removeClass("is-preload")},100)}),"ie"==browser.name&&e.addClass("is-ie"),browser.mobile&&e.addClass("is-mobile"),// Scrolly.
o(".scrolly").scrolly({offset:100}),browser.canUse("object-fit")||(o(".image[data-position]").each(function(){var s=o(this),e=s.children("img");// Apply img as background.
s.css("background-image",'url("'+e.attr("src")+'")').css("background-position",s.data("position")).css("background-size","cover").css("background-repeat","no-repeat"),// Hide img.
e.css("opacity","0")}),o(".gallery > a").each(function(){var s=o(this),e=s.children("img");// Apply img as background.
s.css("background-image",'url("'+e.attr("src")+'")').css("background-position","center").css("background-size","cover").css("background-repeat","no-repeat"),// Hide img.
e.css("opacity","0")})),// Gallery.
o(".gallery").on("click","a",function(s){var e=o(this),a=e.parents(".gallery").children(".modal"),i=a.find("img"),n=e.attr("href");n.match(/\.(jpg|gif|png|mp4)$/)&&(// Prevent default.
s.preventDefault(),s.stopPropagation(),a[0]._locked||(// Lock.
a[0]._locked=!0,// Set src.
i.attr("src",n),// Set visible.
a.addClass("visible"),// Focus.
a.focus(),// Delay.
setTimeout(function(){// Unlock.
a[0]._locked=!1},600)))}).on("click",".modal",function(s){var a=o(this),i=a.find("img");!a[0]._locked&&a.hasClass("visible")&&(// Stop propagation.
s.stopPropagation(),// Lock.
a[0]._locked=!0,// Clear visible, loaded.
a.removeClass("loaded"),// Delay.
setTimeout(function(){a.removeClass("visible"),setTimeout(function(){// Clear src.
i.attr("src",""),// Unlock.
a[0]._locked=!1,// Focus.
e.focus()},475)},125))}).on("keypress",".modal",function(s){var e=o(this);27==s.keyCode&&e.trigger("click")}).on("mouseup mousedown mousemove",".modal",function(o){// Stop propagation.
o.stopPropagation()}).prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>').find("img").on("load",function(s){var e=o(this).parents(".modal");setTimeout(function(){e.hasClass("visible")&&// Set loaded.
e.addClass("loaded")},275)});//# sourceMappingURL=index.b1e6849f.js.map

//# sourceMappingURL=index.b1e6849f.js.map
