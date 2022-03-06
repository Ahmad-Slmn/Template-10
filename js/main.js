/*global $, jQuery, alert*/

$(function () {

    "use strict";

    $(window).scroll(function () {

        if ($(this).scrollTop() >= $("nav").height()) {

            $("nav").addClass("scroll")

        } else {
            $("nav").removeClass("scroll")
        }
    })

    // Deal With Tabs

    $(".tabs ul li").click(function () {

        $(".tabs-content > div").hide()

        $(this).addClass("selected").siblings().removeClass("selected");

        $($(this).data('class')).show()
    })

    // Show The Arrow-up If Window scrollY Is >= 700
    $(window).scroll(function () {

        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })
    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })


    // Smoothly Scroll To Elment
    $("nav ul li a").click(function (e) {

        e.preventDefault();

        $(".navbar-collapse").toggleClass("show");
        
        $("html, body").animate({

            scrollTop: $("#" + $(this).data("scroll")).offset().top + 1

        })
    })


    // Sync Navbar Links With My All Sections
    $(window).scroll(function () {

        $("section, header").each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {


                let sections = $(this).attr('id');

                $("nav ul li a").removeClass("change");

                $('nav ul li a[data-scroll="' + sections + '"]').addClass("change")

            }
        })
    })


});
