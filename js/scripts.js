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

$('.project-link').on('click', function(e){
    e.preventDefault();

    var page = $(this).data().link;
    document.location = page;
});
$('carousel-inner').on('click', function(e){
    e.preventDefault();

    var page = $(this).data().link;
    document.location = page;
});