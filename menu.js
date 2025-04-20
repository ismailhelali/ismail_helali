const content = {
  pageTitle: "قصائد – إسماعيل الهلالي",
  nav: {
    home: "الصفحة الرئيسية",
    about: "اسماعيل هلالي شاعر الروح",
    poems: "مسودة قصيدة",
    contact: "اتصال"
  },
  
};

function populateContent() {
  document.getElementById("nav-home").textContent = content.nav.home;
  document.getElementById("nav-about").textContent = content.nav.about;
  document.getElementById("nav-poems").textContent = content.nav.poems;
  document.getElementById("nav-contact").textContent = content.nav.contact;
  
}

document.addEventListener("DOMContentLoaded", populateContent);
