//NavBar hider
var prevScrollpos = window.pageYOffset;
window.onscroll = function() 
{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) 
    {
        document.getElementById("NavBanner").style.top = "0";
    } 
    else if(window.pageYOffset > 500 && window.matchMedia("(min-width: 1100px)").matches) 
    {
        document.getElementById("NavBanner").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
}


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