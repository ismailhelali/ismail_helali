const menu = {
  nav: {
    home: "الصفحة الرئيسية",
    about: "اسماعيل هلالي شاعر الروح",
    poems: "مسودة قصيدة",
    contact: "اتصال"
  },
  
};

function populateMenu() {
  document.getElementById("nav-home").textContent = menu.nav.home;
  document.getElementById("nav-about").textContent = menu.nav.about;
  document.getElementById("nav-poems").textContent = menu.nav.poems;
  document.getElementById("nav-contact").textContent = menu.nav.contact;
  
}

document.addEventListener("DOMContentLoaded", populateMenu);
