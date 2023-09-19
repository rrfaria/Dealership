//OPEN TRIGGER
var openTrigger = $('.menu-trigger');
var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

//CLOSE TRIGGER
var closeTrigger = $('.close-trigger');
var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');

//LOGO
var logo = $('.logo');

//MENU
var menuContainer = $('.menu-container');
var menu = $('.menu');
var menuTop = $('.menu-bg.top');
var menuMiddle = $('.menu-bg.middle');
var menuBottom = $('.menu-bg.bottom');
var menubgCenter = $('.menu-bg-center');
var socialItens = $('.menu-container .social-itens li');
//TL
var tlOpen = new TimelineMax({paused: true});
var tlClose = new TimelineMax({paused: true});


//COLORS
var bgMenu="#ffffff";
var bgEndTrans="#8f293c";


var innerMenu = $('.inner-container');
//OPEN TIMELINE
tlOpen.add("preOpen")
    .to(logo, 0.4, {
        scale: 0.8,
        opacity: 0,
        ease: Power2.easeOut
    }, "preOpen")
    .to(openTriggerTop, 0.4, {
        x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
            closeTrigger.css('z-index','25');
        }
    }, "preOpen")
    .to(openTriggerMiddle, 0.4, {
        x: "+=80px", y: "-=80px", ease: Power4.easeIn,
        onComplete: function() {
            openTrigger.css('visibility','hidden');
        }
    }, "preOpen")
    .to(openTriggerBottom, 0.4, {
        x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
    }, "preOpen")
    .add("open", "-=0.4")
    .to(innerMenu,0.2,{
        display:"block"
    }, "preOpen")
    .to(menuTop, 0.8, {
        y: "-10%",
        ease: Power4.easeInOut,
        alpha:1
    }, "open")
    .to(menuMiddle, 0.8, {
        scaleY: 1,
        ease: Power4.easeInOut
    }, "open")
    .to(menuBottom, 0.8, {
        y: "-114%",
        ease: Power4.easeInOut,
        alpha:1
    }, "open")
    .to(menuContainer,0.8,{
        backgroundColor:bgMenu
    }, "open")
    .staggerFrom(socialItens, 0.5, {
        scale:0.5,
        opacity:0,
        ease:Elastic.easeOut,
        force3D:true}
    , 0.1,"open")

    .fromTo(menu, 0.6, {
        y: 30, opacity: 0, visibility: 'hidden'
    }, {
        y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
    }, "-=0.2")
    .add("preClose", "-=0.8")
    .to(closeTriggerLeft, 0.8, {
        x: "-=100px", y: "+=100px", ease: Power4.easeOut
    }, "preClose")
    .to(closeTriggerRight, 0.8, {
        x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
    }, "preClose");

//CLOSE TIMELINE
tlClose.add("close")
    .to(menuTop, 0.2, {
        backgroundColor: bgEndTrans, ease: Power4.easeInOut, onComplete: function() {
            logo.css('z-index','26');
            closeTrigger.css('z-index','5');
            openTrigger.css('visibility','visible');
        }
    }, "close")
    .to(menuMiddle, 0.2, {
        backgroundColor: bgEndTrans, ease: Power4.easeInOut
    }, "close")
    .to(menuBottom, 0.2, {
        backgroundColor: bgEndTrans, ease: Power4.easeInOut
    }, "close")
    .to(socialItens, 0.2, {
            scale:0,
            opacity:0,
            ease:Power4.easeOut,
            force3D:true}
        , 0.2,"close")
    .to(menuContainer, 0.2, {
        backgroundColor: 'transparent', ease: Power4.easeInOut
    }, "close")
    .to(menu, 0.6, {
        y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
            menu.css('visibility','hidden');
        }
    }, "close")
    .to(logo, 0.8, {
        scale: 1, opacity: 1, ease: Power4.easeInOut
    }, "close", "+=0.2")
    .to(menuTop, 0.8, {
        y: "-130%",
        ease: Power4.easeInOut,
        alpha:0
    }, "close", "+=0.2")
    .to(menuMiddle, 0.8, {
        scaleY: 0,
        ease: Power4.easeInOut
    }, "close", "+=0.2")
    .to(menuBottom, 0.8, {
        y: "23%",
        ease: Power4.easeInOut,
        alpha:0,
        onComplete: function() {
            menuTop.css('background-color',bgMenu);
            menuMiddle.css('background-color',bgMenu);
            menuBottom.css('background-color',bgMenu);
        }
    }, "close", "+=0.2")
    .to(closeTriggerLeft, 0.2, {
        x: "+=100px", y: "-=100px", ease: Power4.easeIn
    }, "close")
    .to(closeTriggerRight, 0.2, {
        x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
    }, "close")
    .to(openTriggerTop, 1, {
        x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
    }, "close")
    .to(openTriggerMiddle, 1, {
        x: "-=80px", y: "+=80px", ease: Power4.easeOut
    }, "close")
    .to(openTriggerBottom, 1, {
        x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
    }, "close")
    .to(innerMenu, 1, {
        display:'none', ease: Power4.easeOut
    }, "close");

//EVENTS
openTrigger.on('click', function(){
    if(tlOpen.progress() < 1){
        tlOpen.play();
    } else {
        tlOpen.restart();
    }
});

closeTrigger.on('click', function(){
    if(tlClose.progress() < 1){
        tlClose.play();
    } else {

        tlClose.restart();
    }
});

//Footer
$(document).ready(function(){
    contactActive();

});

function contactActive(){
    var contactBlock =$('.contact-block');
    if(contactBlock.hasClass('active')){
        contactBlock.removeClass('active');
    }
    else{
        setTimeout(function () {
            contactBlock.addClass('active');
        }, 1000);
    }
}

/**
 * Check if has focus on TAB - cross browser
 */

// main visibility API function
// use visibility API to check if current tab is active or not
var vis = (function(){
    var stateKey,
        eventKey,
        keys = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
})();

// check if current tab is active or not
vis(function(){

    if(vis()){

        // tween resume() code goes here
        globalFocus();
        setTimeout(function(){
            //console.log("tab is visible - has focus");

        },300);

    } else {

        // tween pause() code goes here
        //console.log("tab is invisible - has blur");
        globalFocus();
    }
});


// check if browser window has focus
var notIE = (document.documentMode === undefined),
    isChromium = window.chrome;

if (notIE && !isChromium) {

    // checks for Firefox and other  NON IE Chrome versions
    $(window).on("focusin", function () {
        globalFocus();
        // tween resume() code goes here
        setTimeout(function(){
            //console.log("focus");

        },300);

    }).on("focusout", function () {

        // tween pause() code goes here
       // console.log("blur");
        globalFocus();
    });

} else {

    // checks for IE and Chromium versions
    if (window.addEventListener) {

        // bind focus event
        window.addEventListener("focus", function (event) {
            globalFocus();
            // tween resume() code goes here
            setTimeout(function(){

                //console.log("focus");
            },300);

        }, false);

        // bind blur event
        window.addEventListener("blur", function (event) {
            globalFocus();
            // tween pause() code goes here
           // console.log("blur");

        }, false);

    } else {

        // bind focus event
        window.attachEvent("focus", function (event) {
            globalFocus();
            // tween resume() code goes here
            setTimeout(function(){

                //console.log("focus");
            },300);

        });

        // bind focus event
        window.attachEvent("blur", function (event) {

            // tween pause() code goes here
            //console.log("blur");
            globalFocus()
        });
    }
}



// GLOBAL FOCUS - INSERT HERE ALL TO ANIMATE WHEN TAB/WINDOWS FOCUS

function globalFocus(){
    contactActive();
}


//global hasclass
function hasClass(element, selector){
    return (' ' + element.className + ' ').indexOf(' ' + selector + ' ') > -1;
}
