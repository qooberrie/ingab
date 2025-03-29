//function clickMenu() {
//  if (menuHamburger.style.display == "none") {
//    menuHamburger.style.display = "block";
//  } else menuHamburger.style.display == "none";
//}

//function showSection(section){
//  const item = document.querySelectorAll('.section');
//  item.forEach((s) => s.classList.remove('active'));

//  const target = document.getElementById(id);
//  if (target) target.classList.add('active');
//}

function showSection(section) {
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.remove("active"));

  document
    .querySelectorAll(`.${section}`)
    .forEach((sec) => sec.classList.add("active"));
}
