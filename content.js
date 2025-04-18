const content = {
  pageTitle: "قصائد – إسماعيل الهلالي",
  nav: {
    home: "الرئيسية",
    about: "حول",
    poems: "قصائد",
    contact: "اتصال"
  },
  header: {
    title: "مرحباً بك في عالمي الشعري",
    description: "كلماتي تنبع من إحساس، وتبحث عن صدى في قلبك. اقرأ، تأمل، وشارك هذا الجمال الداخلي.",
    cta: "تصفّح القصائد"
  },
  about: {
    title: "عن الشاعر",
    description: "إسماعيل الهلالي، شاعر يبحث عن النقاء في الكلمة، وعن المعنى في التفاصيل. يكتب في الحب، والروح، والهوية. يرى في الشعر مرآةً صادقةً للذات وللحياة."
  },
  poems: {
    title: "قصائد مختارة",
    poem1: "يا ليتني كنت نسمةً<br>تمرّ بين يديكِ<br>أو فكرةً تختبئ في عينيكِ<br>أو سكونًا يُنصت لنبض قلبك",
    poem2: "وحدها الكلمةُ الصادقةُ<br>تعرفُ طريقَها إلى الروح<br>فلا تحتاجُ إلى شرحٍ<br>ولا تبريرٍ ولا توقيع"
  },
  subscribe: {
    title: "اشترك لتصلك القصائد الجديدة",
    description: "أدخل بريدك الإلكتروني وسأرسل لك كل جديد بمجرد نشره.",
    inputPlaceholder: "بريدك الإلكتروني",
    button: "اشترك الآن"
  },
  footer: {
    content: "© 2025 إسماعيل الهلالي | جميع الحقوق محفوظة – للتواصل: ismail@example.com"
  }
};

function populateContent() {
  document.getElementById("page-title").textContent = content.pageTitle;
  document.getElementById("nav-home").textContent = content.nav.home;
  document.getElementById("nav-about").textContent = content.nav.about;
  document.getElementById("nav-poems").textContent = content.nav.poems;
  document.getElementById("nav-contact").textContent = content.nav.contact;
  document.getElementById("header-title").textContent = content.header.title;
  document.getElementById("header-description").textContent = content.header.description;
  document.getElementById("header-cta").textContent = content.header.cta;
  document.getElementById("about-title").textContent = content.about.title;
  document.getElementById("about-description").textContent = content.about.description;
  document.getElementById("poems-title").textContent = content.poems.title;
  document.getElementById("poem-1").innerHTML = content.poems.poem1;
  document.getElementById("poem-2").innerHTML = content.poems.poem2;
  document.getElementById("subscribe-title").textContent = content.subscribe.title;
  document.getElementById("subscribe-description").textContent = content.subscribe.description;
  document.getElementById("subscribe-input").placeholder = content.subscribe.inputPlaceholder;
  document.getElementById("subscribe-button").textContent = content.subscribe.button;
  document.getElementById("footer-content").textContent = content.footer.content;
}

document.addEventListener("DOMContentLoaded", populateContent);
