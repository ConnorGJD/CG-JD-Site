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
window.addEventListener("scroll",
function()
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
            document.getElementById("NavBanner").style.top = "-10.1vh";
            sweepAllMenus();//Close menus when navbar slides away on desktop
        }
        prevScrollpos = currentScrollPos;
    }, 40)//Polling rate in milliseconds
})



//Mobile hamburger
var mblDrop = document.getElementById("NavItemContainer");
var mblBtn = document.getElementById("mobiNavBtn");
//DropMenu
const menus =
[
    document.getElementById('TestMenu'),
    document.getElementById('TestMenu1')
]
//Manu Handeler
function naviMenus(recive)
{   
    switch(recive)
    {
        //Mobile "Hamburger"
        case 'mobile':
            if(mblDrop.classList.contains("open"))
            {
                sweepAllMenus();
                mblDrop.classList.remove("open");
                mblBtn.classList.remove("open");
            }
            else
            {
                
                mblDrop.classList.add("open");
                mblBtn.classList.add("open");
            }
        break;

        //TestMenu
        case 0:
            if(menus[0].classList.contains("Open"))
            {
                menus[0].classList.remove("Open");
            }
            else
            {
                sweepAllMenus();
                menus[0].classList.add("Open");
            }
        break;

        //TestMenu1
        case 1:
            if(menus[1].classList.contains("Open"))
            {
                menus[1].classList.remove("Open");
            }
            else
            {
                sweepAllMenus();
                menus[1].classList.add("Open");
            }
        break;
        
    }
}
//Manu sweeper - to close all menus. Used every time a menu is opened to close any others
function sweepAllMenus()
{
    menus.forEach(element =>
    {
        element.classList.remove("Open");
    });
}