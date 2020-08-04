
ctnr = document.querySelector(".container-ds");
icon = document.querySelector(".icon-ds");
iconm = document.querySelector(".slider-icon");

icon.addEventListener("click", function()
{

  document.querySelector(".tooltiptext1").style.visibility = "hidden";

  if(icon.classList[2] == 'fa-angle-down')
  {
    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up');
    icon.classList.add('icon-slidedown');
    ctnr.classList.add('container-slidedown');
  }

  else {
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
    icon.classList.remove('icon-slidedown');
    ctnr.classList.remove('container-slidedown');
  }
});

// ***************************************************************************

iconm.addEventListener("mouseover", function()
{
  document.querySelector(".tooltiptext").style.visibility = "hidden";

});
