"use strict";

/**
 * This smooth scrolls the page to the selected link in the navigation anchor.
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
 * This takes you to the project link page
 */
$('.project-link').on('click', function(e){
    e.preventDefault();

    var page = $(this).data().link;
    document.location = page;
});

/**
 * popover
 */
var projects = $('.portfolio-project-label');
for(var i=0; i<projects.length; i++) {
    var content = $(projects[i]).children('article').html();
    if(content) {
        $(projects[i]).popover({
            animation: true,
            html: true,
            placement: 'right',
            content: content,
            trigger: 'focus'
        });

    }
}

