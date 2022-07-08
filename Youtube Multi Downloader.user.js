// ==UserScript==
// @name Youtube Multi Downloader
// @name:sk Youtube Multi Downloader
// @name:fi Youtube Multi Downloader
// @name:hu Youtube Multi Downloader
// @name:es Youtube Multi Downloader
// @name:eo Youtube Multi Downloader
// @name:nl Youtube Multi Downloader
// @name:id Youtube Multi Downloader
// @name:fr-CA Youtube Multi Downloader
// @name:it Youtube Multi Downloader
// @name:de Youtube Multi Downloader
// @name:ko Youtube Multi Downloader
// @name:pl Youtube Multi Downloader
// @name:fr Youtube Multi Downloader
// @name:zh-CN Youtube Multi Downloader
// @name:th Youtube Multi Downloader
// @name:sr Youtube Multi Downloader
// @name:el Youtube Multi Downloader
// @name:cs Youtube Multi Downloader
// @name:tr Youtube Multi Downloader
// @name:ru Youtube Multi Downloader
// @name:pt-BR Youtube Multi Downloader
// @name:bg Youtube Multi Downloader
// @name:zh-TW Youtube Multi Downloader
// @name:he Youtube Multi Downloader
// @name:ro Youtube Multi Downloader
// @name:sv Youtube Multi Downloader
// @name:ar Youtube Multi Downloader
// @name:ja Youtube Multi Downloader
// @name:vi Youtube Multi Downloader
// @name:uk Youtube Multi Downloader
// @name:da Youtube Multi Downloader
// @name:nb Youtube Multi Downloader
// @name:ug Youtube Multi Downloader
// @description This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:ko This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:ro This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:sr This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:fr This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:da This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:eo This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:vi This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:tr This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:hu This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:he This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:pt-BR This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:ru This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:pl This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:uk This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:ar This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:nl This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:id This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:bg This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:ug This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:fr-CA This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:zh-CN This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:th This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:es This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:de This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:ja This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:el This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:fi This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:nb This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:cs This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:zh-TW This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:it This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:sv This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @description:sk This script adds a download button, a faster way to download audio from YouTube and with guaranteed quality. This site is very simple, fast and effective to download! Best of all!
// @namespace https://github.com/Dasemu
// @homepageURL https://greasyfork.org/scripts/34613
// @author Dasemu
// @version 1.0
// @date 2022-07-08
// @icon https://i.pinimg.com/originals/81/70/c0/8170c0b0cddec975b7c2553c20c1ab7e.png
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license MIT
// @noframes
// @match *://*.youtube.com/*
// ==/UserScript==

(function() {
    if (document.getElementById("browser-app") || document.getElementById("masthead") || window.Polymer) {
    setInterval(function() {
        if (window.location.href.indexOf("watch?v=") < 0) {
            return false;
        }
        if (document.getElementById("meta-contents") && document.getElementById("downloader") === null) {
            AddYT();
        }
    }, 1);

    setElement = function(url) {
       var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
       var match = String(url).match(regExp);
       return (match&&match[7].length==11)? match[7]: false;
    };
}

function AddYT() {
    var addButton = document.createElement("tp-yt-paper-button");
    addButton.id = "downloader";
    addButton.appendChild(document.createTextNode("DESCARGAR"));
    addButton.classList.add("style-scope", "ytd-subscribe-button-renderer")
    addButton.target = "_blank";

    var Container = document.querySelector("[id='owner']");

    console.log(Container.className.indexOf("ytd-video-secondary-info-renderer"))

    if(Container){
        if(Container.className.indexOf("ytd-video-secondary-info-renderer") > -2){
            Container.appendChild(addButton);
            var url = "//yt1s.com/en332?q=" + encodeURIComponent(location.href)
            addButton.addEventListener("click", function(){window.open(url, '_blank').focus();});
        }
    }
}
})();
