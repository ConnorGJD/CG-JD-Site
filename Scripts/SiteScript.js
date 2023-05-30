//NavBar hider (Version 1 - faster response but more demanding)
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() 
// {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) 
//     {
//         document.getElementById("NavBanner").style.top = "0";
//     } 
//     else if(window.pageYOffset > 500 && window.matchMedia("(min-width: 1100px)").matches) /*Check for minimum scrolled distance and mobile view*/
//     {
//         document.getElementById("NavBanner").style.top = "-10vh";
//     }
//     prevScrollpos = currentScrollPos;
// }

//NavBar hider (Version 2 - more performant with a reduced polling rate)
var pollingRate;
var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function()
{ 
    clearTimeout(pollingRate)
    pollingRate = setTimeout(function()
    {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) 
        {
            document.getElementById("NavBanner").style.top = "0";
        } 
        else if(window.pageYOffset > 500 && window.matchMedia("(min-width: 1100px)").matches) /*Check for minimum scrolled distance and mobile view*/
        {
            document.getElementById("NavBanner").style.top = "-10vh";
        }
        prevScrollpos = currentScrollPos;
    },
    40)//Polling rate in milliseconds
})


//Mobile hamburger
function mobileDropDown()
{
    var mblDrop = document.getElementById("NavItemContainer");
    var mblBtn = document.getElementById("mobiNavBtn");

    if(mblDrop.classList.contains("open"))
    {
        mblDrop.classList.remove("open");
        mblBtn.classList.remove("open");
    }
    else
    {
        mblDrop.classList.add("open");
        mblBtn.classList.add("open");
    }
}