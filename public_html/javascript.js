/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

var timeOut = null;
var scroll = 0;

$(function() {
    $('.horizontal ul').on('mousemove', function(e) {
        if (e.pageX >= $(window).width() * .8 && timeOut === null) {
            scroll = $(this).scrollLeft();
            scrollLeft($(this));
        } else if (e.pageX <= $(window).width() * .2 && timeOut === null) {
            scroll = $(this).scrollLeft();
            scrollRight($(this));
        } else if (e.pageX < $(window).width() * .8 && e.pageX > $(window).width() * .2 && timeOut !== null) {
            window.clearInterval(timeOut);
            timeOut = null;
        }
    });

    $('.horizontal ul').mouseleave(function() {
        window.clearInterval(timeOut);
        timeOut = null;
    });

    $('#dragTo').on('ondragover', function(e) {
        console.log('hi');
        e.preventDefault();
    });

});


function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var obj = $('#' + data).clone();
    obj.addClass('dragged');
    obj.css('z-index', 5);
    $(ev.target).append(obj);
}


function scrollLeft(elem) {
    timeOut = window.setInterval(function() {
        scroll += 15;
        if (scroll > elem[0].scrollWidth - elem.width())
            scroll = elem[0].scrollWidth - elem.width();
        elem.scrollLeft(scroll);
    }, 25);
}

function scrollRight(elem) {
    timeOut = window.setInterval(function() {
        scroll -= 15;
        if (scroll < 0)
            scroll = 0;
        elem.scrollLeft(scroll);
    }, 25);
}