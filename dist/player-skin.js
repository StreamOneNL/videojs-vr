(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }
        
        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            head.appendChild(style);
        } else if (style.styleSheet) { // for IE8 and below
            head.appendChild(style);
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            head.appendChild(style);
        }
    }
};

},{}],2:[function(require,module,exports){
var css = "/* Cursor grabs video when hovering over or holding down */\n.video-js canvas {\n  width: 100% !important;\n  height: 100% !important;\n}\n.video-js.vjs-has-started canvas {\n  cursor: url(http://brightcove360.s3-website-us-east-1.amazonaws.com/assets/grab.png);\n  cursor: url(http://brightcove360.s3-website-us-east-1.amazonaws.com/assets/grab.cur), move;\n}\n.video-js.vjs-has-started canvas:active {\n  cursor: url(http://brightcove360.s3-website-us-east-1.amazonaws.com/assets/grabbing.png);\n  cursor: url(http://brightcove360.s3-website-us-east-1.amazonaws.com/assets/grabbing.cur), move;\n}\n/* Play button is the 360 video icon, fades out in 3 seconds on play */\n.video-js:not(.vjs-error):not(.vjs-disabled) button.vjs-big-play-button {\n  font-size: 30px;\n  top: 50%;\n  left: 50%;\n  margin: -2.1em 0 0 -2.1em;\n  height: 4.2em;\n  width: 4.2em;\n  background: url(http://brightcove360.s3-website-us-east-1.amazonaws.com/assets/360-video.svg);\n  background-size: contain;\n  -webkit-filter: drop-shadow( -2px -2px 2px rgba(0, 0, 0, 0.5) );\n  filter: drop-shadow( -2px -2px 2px rgba(0, 0, 0, 0.5) );\n  border: none;\n  transition: opacity 3s ease-in-out;\n  -moz-transition: opacity 3s ease-in-out;\n  -webkit-transition: opacity 3s ease-in-out;\n  -o-transition: opacity 3s ease-in;\n}\n.video-js.vjs-disabled button.vjs-big-play-button,\n.videojs.vjs-error button.vjs-big-play-button {\n  -moz-transition: none !important;\n  -webkit-transition: none !important;\n  -o-transition: opacity 0 ease-in !important;\n  transition: none !important;\n}\n.video-js.vjs-fullscreen button.vjs-big-play-button {\n  margin: -4em 0 0 -4em;\n  height: 8em;\n  width: 8em;\n}\n.video-js:hover button.vjs-big-play-button,\n.video-js button.vjs-big-play-button:focus,\n.video-js button.vjs-big-play-button:active,\n.video-js button.vjs-big-play-button:focus,\n.video-js:active button.vjs-big-play-button {\n  background-color: transparent;\n  transition: opacity 3s ease-in-out;\n  -moz-transition: opacity 3s ease-in-out;\n  -webkit-transition: opacity 3s ease-in-out;\n}\n.video-js .vjs-big-play-button:before {\n  content: '';\n}\n.vjs-controls-disabled .vjs-big-play-button,\n.vjs-has-started button.vjs-big-play-button {\n  font-size: 30px;\n  opacity: 0;\n  display: block;\n  pointer-events: none;\n}\n/* Hide extra full screen button */\n.webvr-button[title=\"Fullscreen mode\"] {\n  display: none !important;\n}\n.vjs-errors-content-container {\n  top: 30px !important;\n}\n/* Showing icons and video on mobile */\n.video-js.vjs-using-native-controls .vjs-poster {\n  display: block !important;\n}\n.video-js.vjs-using-native-controls button.vjs-big-play-button {\n  display: block !important;\n}\n.video-js.vjs-using-native-controls.vjs-has-started .vjs-control-bar {\n  display: block !important;\n}\n/* Default height when previewing player */\n.video-js {\n  height: 360px;\n  width: 640px;\n}\n/* The following CSS is for testing, is similar to what is already included in Brightcove studio */\n/* Display played time and time duration */\n.video-js .vjs-current-time,\n.vjs-no-flex .vjs-current-time,\n.video-js .vjs-duration,\n.vjs-no-flex .vjs-duration,\n.vjs-time-divider {\n  display: inline;\n  padding: 0;\n}\n.video-js .vjs-time-control.vjs-time-divider {\n  padding: 0 4px;\n  margin: 0;\n  width: 12px;\n  min-width: 0px;\n}\n.video-js .vjs-remaining-time.vjs-time-control.vjs-control {\n  display: none;\n}\n/* Show progress bar at top of control bar, with custom progress fill color */\n.video-js .vjs-progress-control {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 5px;\n  top: -5px;\n}\n.video-js .vjs-progress-control:hover {\n  height: 15px;\n  top: -15px;\n}\n.vjs-progress-control .vjs-progress-holder {\n  margin: 0;\n}\n.video-js .vjs-progress-control .vjs-load-progress,\n.video-js .vjs-progress-control .vjs-progress-holder {\n  height: 100%;\n}\n.video-js .vjs-play-progress:before {\n  display: none;\n}\n.video-js .vjs-progress-holder .vjs-play-progress,\n.video-js .vjs-volume-level {\n  height: 100%;\n  background-color: #D12D81;\n}\n/* Move full screen button to the right since progress bar can no longer push it to the right */\n.video-js .vjs-fullscreen-control {\n  position: absolute;\n  right: 0;\n}\n/* Darken control bar and increase height */\n.vjs-has-started .vjs-control-bar {\n  background-color: rgba(24, 23, 17, 0.72);\n}\n.video-js.vjs-has-started {\n  font-size: 13px;\n}\n/* Control bar padding/margin adjustments */\n.video-js .vjs-play-control {\n  margin-right: -20px;\n}\n.vjs-control.vjs-button.vjs-volume-menu-button-horizontal {\n  margin-right: -2px;\n}\n"; (require("browserify-css").createStyle(css, { "href": "src/css/player.css"})); module.exports = css;
},{"browserify-css":1}],3:[function(require,module,exports){
require('../css/player.css');

},{"../css/player.css":2}]},{},[3]);
