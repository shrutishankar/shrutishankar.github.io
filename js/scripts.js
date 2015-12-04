"use strict";

/**
 * THis smooth scrolls the page to the selected link in the navigation anchor.
 */
$('.anchor').on('click', function(e){
    e.preventDefault();

    var targetId = $(this).data().id;
    var target = $("#"+targetId);

    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});


/**
 * This adds rule to the document style sheets based on provided sheet
 */
var addRule = (function (sheet) {
    if(!sheet) return;
    return function (selector, styles) {
        if (sheet.insertRule) {
            return sheet.insertRule(selector + " {" + styles + "}", sheet.cssRules ? sheet.cssRules.length : 0);
        }
        if (sheet.addRule) {
            return sheet.addRule(selector, styles);
        }
    }
}(document.styleSheets[document.styleSheets.length - 1]));




// add 100 data-width pseudo-selectors
var i = 101;
while (i--) {
    addRule("[data-techskill='" + i + "%']", "width:" + i + "%");
}
