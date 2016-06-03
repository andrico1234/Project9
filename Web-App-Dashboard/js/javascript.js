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
var $lineChartDisplay = $(".line-chart-div").children("canvas");
var $submitMessage = $(document.getElementById("submit-message"));
  
$notificationDiv.hide();

// graph function
// function graphSelect() {
//     for (var i = 0; i < $lineChartNav.length; i++) {
//         if ($lineChartNav[i].hasAttribute("class", "graph-selected")) {
//             // console.log("for statement run");
//             $lineChartDisplay[i].removeAttribute("class");
//         }
//     }
// }

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


// line chart nav


// submit message

$submitMessage.click(function() {
   if (document.getElementById("message-for-user").value == "") {
       $("#message-prompt").text("Please enter a message");
   } else {
       $("#message-prompt").text("Your message has been sent");
   }
});