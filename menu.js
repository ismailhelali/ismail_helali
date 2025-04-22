const menu = {
    nav: {
        home: "الصفحة الرئيسية",
        about: "اسماعيل هلالي شاعر الروح",
        poems: "مسودة قصيدة",
        contact: "اتصال"
    }
};

function populateMenu() {
    const menuDiv = document.getElementById("menu");
    if (!menuDiv) {
        console.error("Menu div not found!");
        return;
    }

    const nav = document.createElement("nav");

    const menuItems = [
        { id: "nav-home", href: "#", text: menu.nav.home },
        { id: "nav-about", href: "/ismail_helali/about", text: menu.nav.about },
        { id: "nav-poems", href: "/ismail_helali/zajal", text: menu.nav.poems },
        { id: "nav-contact", href: "#contact", text: menu.nav.contact }
    ];

    menuItems.forEach(item => {
        const link = document.createElement("a");
        link.id = item.id;
        link.href = item.href;
        link.textContent = item.text;
        nav.appendChild(link);
    });

    menuDiv.appendChild(nav);
}

document.addEventListener("DOMContentLoaded", populateMenu);
