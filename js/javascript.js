/**
 * Created by Home on 01/06/2016.
 */

var $alertButton = $(".closable-alert").children("button");
var $alertDiv = $(".closable-alert");
var $notificationBell = $(".alert-icon");
var $greenBall = $(".ball");
var $notificationDiv = $("#notification-div");
var $navBarAnchor = $(".main-nav").children("a");
var $lineChartNav = $("#select-graph-list").children("li").children("h3");
var $submitMessage = $(document.getElementById("submit-message"));
var $profileName = $(document.getElementById("profile-name"));

$notificationDiv.hide();

function WinResize() {
    if ($(window).width() < 768) {
        $profileName.attr("class", "hidden");
    }
    else {
        $profileName.removeAttr("class");
    }
}

$(document).ready(WinResize());

$(window).resize(function() {
    WinResize();
});

// code to hide alert bar.

$alertButton.click(function () {
    $alertDiv.addClass("hidden");
});

// code for notification tab


$notificationBell.click(function () {
    $greenBall.addClass("hidden");

    if (!$notificationDiv.is(':visible')) {
        $notificationDiv.show();
    } else {
        $notificationDiv.hide();
    }
});

// green border nav bar

$navBarAnchor.click(function () {
    $navBarAnchor.removeClass("selected");
    $(this).addClass("selected");
});

// autocomplete

$(function () {
    var availableTags = [
        "Damon Yorke",
        "Dave Bellamy",
        "Megan Mossheart",
        "Florence Tonra"
    ];
    $("#search-bar-two").autocomplete({
        source: availableTags
    });
});

// local storage


// when the page loads I want to look for the values set in localStorage(""). then assign the

function loadStyles() {

    var isTrueEmail = (localStorage.email === 'true');
    $("#email").prop("checked", isTrueEmail);

    var isTruePublic = (localStorage.public === 'true');
    $("#public").prop("checked", isTruePublic);

    $("#select-timezone").val(localStorage.timezone);

}

function setStyles() {

    localStorage.email = $("#email").prop("checked");
    localStorage.public = $("#public").prop("checked");
    localStorage.timezone = $("#select-timezone").val();

}

function cancelStyles() {
    $("#email").prop("checked", false);
    $("#public").prop("checked", false);
    $("#select-timezone").val(0);
    setStyles();

}

loadStyles();

$("#save-button").click(function () {
    setStyles();
});

$("#cancel-button").click(function () {
    cancelStyles();
});

// line chart nav

$lineChartNav.click(function () {
    $lineChartNav.removeClass("graph-selected");
    $(this).addClass("graph-selected");
});

// changing the graphs

$("#select-graph-list li h3").on("click", function () {
    $(".line-chart-div").children("canvas").addClass("hidden");
    var childIndex = $(this).parent().index();
    var $canvasDetails = $(".line-chart-div").children("canvas")[childIndex];
    $canvasDetails.removeAttribute("class");
});


// submit message

$submitMessage.click(function () {
    if (document.getElementById("message-for-user").value === "") {
        $("#message-prompt").text("Please enter a message");
    } else {
        $("#message-prompt").text("Your message has been sent");
    }
});