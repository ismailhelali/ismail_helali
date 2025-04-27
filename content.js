const content = {
  pageTitle: "قصائد –  الشاعر إسماعيل الهلالي",
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
    poem1: "الصمت نور وسط العتمة <br>الصمت وسط ضجيج و الف كلمة <br>و الصمت تكون وحدك او بين الزحمة <br>يطير بيك لجوارحك و يعطيك / يدوقك من لمحبة نسمة <br>تسمع فيه شدى الطيور و غنى البحور و لحان الجبال <br>الصمت يخلي أفكارك واضحة مرتبة لا تلقى بينها جدال <br>الصمت الحان من لخيال ،  يرويها كل من يتنفس <br>الصمت دوى لجراح كل حد فهاد الدنيا مكرفص <br>الصمت علوم لكل من كان بالحرف يعيش و يتفلسف <br>الصمت ماليه وصف من اللي نعرفوه ، هو هوا للي يتنفس<br>شحال قدني نوصف",
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
  document.getElementById("poem-2").inner