
ctnr = document.querySelector(".container-ds");
icon = document.querySelector(".icon-ds");

icon.addEventListener("click", function()
{
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
