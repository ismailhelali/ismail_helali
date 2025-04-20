const content = {
  pageTitle: "قصائد – إسماعيل الهلالي",

  header: {
    title: "مرحبا بك في هدا المكان المميز المليئ بكلمات وشعر من صفاء الروح",
    description: "قصائدي تنبع من كل شيء حولي و  من القلب و العقل و الروح. وهدفي أن أعيش متعة الحياة و أخرج من فخ المعاناة.",
    cta: "🔗 اكتشف القصائد الآن"
  },
  about: {
    title: "عن الشاعر",
    description: " نشر إسماعيل هذه القصائد ليؤكد أن الإنسان قادر على التغلب على مخاوفه وأزماته، محولًا كل تحدٍ إلى أرض خصبة للإبداع",
    cta: "اقرأ المزيد عن الشاعر"
  },
  poems: {
    title: "قصائد مختارة",
    poem1: "يا ليتني كنت نسمةً<br>تمرّ بين يديكِ<br>أو فكرةً تختبئ في عينيكِ<br>أو سكونًا يُنصت لنبض قلبك",
    poem2: "وحدها الكلمةُ الصادقةُ<br>تعرفُ طريقَها إلى الروح<br>فلا تحتاجُ إلى شرحٍ<br>ولا تبريرٍ ولا توقيع"
  },
  subscribe: {
    title: "حبل التواصل",
    description: "أضف بريدك الالكتروني لتصلك المختارات الشعرية الجديدة مباشرةً.",
    inputPlaceholder: "بريدك الإلكتروني",
    button: "اشترك الآن"
  },
  footer: {
    content: "© 2025 إسماعيل الهلالي | جميع الحقوق محفوظة – للتواصل: ismail@example.com"
  }
};

function populateContent() {
  document.getElementById("page-title").textContent = content.pageTitle;
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
