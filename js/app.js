const OpenBtn = document.querySelector(".OpenBtn");
const closeBtn = document.querySelector(".closeBtn");
const navbar2 = document.querySelector(".navbar2");
const cover = document.querySelector(".cover");
const UserAccountBtn = document.querySelector(".UserAccountBtn");
const userInfoCard = document.querySelector(".userInfoCard");
const dropDownAccountCover = document.querySelector(".dropDownAccountCover");
const SwitchTeheme = document.querySelectorAll(".SwitchTeheme");
const themeTitle = document.querySelector(".themeTitle");
const exitBtn = document.querySelector(".exit-Btn");
const AccountBtn = document.querySelector(".Account-Btn");
let Logo = document.querySelectorAll(".Logo");
let warnigSection = document.querySelector(".warnig-section");
let menubar = document.querySelector(".menubar");
let usersArray = [];
let warningsArray = [];
let NavabrLinksArray = [];
let alertsArray = [];
let isOpenNavbar = false;
OpenBtn.addEventListener("click", openNavbar);
closeBtn.addEventListener("click", openNavbar);
cover.addEventListener("click", openNavbar);
function openNavbar() {
  if (isOpenNavbar === false) {
    navbar2.style.right = "0%";
    cover.style.cssText = "visibility: visible; opacity:1;";
    document.body.style.overflowY = "hidden";
    isOpenNavbar = true;
  } else {
    navbar2.style.right = "-100%";
    cover.style.cssText = "visibility: hidden; opacity:0;";
    document.body.style.overflowY = "auto";
    isOpenNavbar = false;
  }
}

function openAndCloseDropdown() {
  if (JSON.parse(localStorage.getItem("users")) !== null) {
    if (userInfoCard.style.visibility == "visible") {
      userInfoCard.style.visibility = "hidden";
      userInfoCard.style.opacity = "0";
      dropDownAccountCover.style.visibility = "hidden";
      dropDownAccountCover.style.opacity = "0";
    } else {
      userInfoCard.style.visibility = "visible";
      userInfoCard.style.opacity = "1";
      dropDownAccountCover.style.visibility = "visible";
      dropDownAccountCover.style.opacity = "1";
    }
    usersArray = JSON.parse(localStorage.getItem("users"));
  } else {
    UserAccountBtn.remove();
  }
}
UserAccountBtn.addEventListener("click", openAndCloseDropdown);
dropDownAccountCover.addEventListener("click", openAndCloseDropdown);

// SwitchTeheme1.addEventListener("click", function (event) {
//   switchThemeHandler(event);
// });
// function switchThemeHandler(event) {
//   SwitchTeheme1icon.classList.replace('fa-moon-o', 'fa-sun-o')

// }
const SwitchTeheme1 = document.querySelector(".SwitchTeheme1 i");
const SwitchTeheme2 = document.querySelector(".SwitchTeheme2 i");
let isDark;

SwitchTeheme.forEach(function (switchBtn) {
  switchBtn.addEventListener("click", function (event) {
    if (isDark == false) {
      SwitchTeheme1.classList.replace("fa-moon-o", "fa-sun-o");
      SwitchTeheme2.classList.replace("fa-moon-o", "fa-sun-o");
      themeTitle.innerHTML = "تم روشن";
      isDark = true;
      localStorage.setItem("theme", "dark");
    } else {
      SwitchTeheme1.classList.replace("fa-sun-o", "fa-moon-o");
      SwitchTeheme2.classList.replace("fa-sun-o", "fa-moon-o");
      themeTitle.innerHTML = "تم تیره";
      isDark = false;
      localStorage.setItem("theme", "light");
    }
    changeThemeMode();
    changeAlertTheme();
  });
});

window.onload = function () {
  if (localStorage.getItem("theme") === null) {
    isDark = false;
  } else {
    if (localStorage.getItem("theme") == "light") {
      isDark = false;
    } else {
      isDark = true;
    }
  }
  if (isDark == false) {
    SwitchTeheme1.classList.replace("fa-sun-o", "fa-moon-o");
    SwitchTeheme2.classList.replace("fa-sun-o", "fa-moon-o");
    themeTitle.innerHTML = "تم تیره";
  } else {
    SwitchTeheme1.classList.replace("fa-moon-o", "fa-sun-o");
    SwitchTeheme2.classList.replace("fa-moon-o", "fa-sun-o");
    themeTitle.innerHTML = "تم روشن";
  }
  changeThemeMode();
  changeAlertTheme();
  if (JSON.parse(localStorage.getItem("users")) === null) {
    UserAccountBtn.remove();
  } else {
    usersArray = JSON.parse(localStorage.getItem("users"));
    // console.log(usersArray);
  }

  let loginedUser = usersArray.find(function (user) {
    return user.islogin == true;
  });
  if (loginedUser != undefined) {
    userNameElem.innerHTML = loginedUser.name;
    AccountBtn.remove();
  } else {
    UserAccountBtn.remove();
    userInfoCard.insertAdjacentHTML(
      "beforebegin",
      `
    <div class="Account-Btn">
          <a href="./Log-in/login.html" class="login-Btn">ورود</a>
          <a href="./sign-in/signin.html" class="sign-in-Btn">عضویت</a>
          <a href="./Log-in/login.html" class="Responsive-login-btn"><i class="fa fa-user"></i></a>
        </div>
    `
    );
  }
};

if (localStorage.getItem("LogoSource") !== null) {
  Logo.forEach(function (img) {
    img.setAttribute("src", localStorage.getItem("LogoSource"));
  });
} else {
  Logo.forEach(function (img) {
    img.setAttribute(
      "src",
      "https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp"
    );
  });
  turnOffDragable();
}

function changeThemeMode() {
  if (isDark == true) {
    //dark
    document.documentElement.style.setProperty("--lightColor", "rgb(28 28 40)");
    document.documentElement.style.setProperty(
      "--primaryLightColor",
      "rgb(28 28 40)"
    );
    document.documentElement.style.setProperty(
      "--borderColor",
      "rgb(50 51 77)"
    );
    document.documentElement.style.setProperty("--hoverColor", "rgb(28 28 40)");
    document.documentElement.style.setProperty(
      "--hoverBorderColor",
      "rgb(119 124 148)"
    );
    document.documentElement.style.setProperty(
      "--secondDynamicCoor",
      "rgb(50 51 77)"
    );
    document.documentElement.style.setProperty("--TextLightColor", "#fff");
    document.documentElement.style.setProperty(
      "--activeMenuItem2Hover",
      "#fff"
    );
    document.documentElement.style.setProperty("--cardTextColor", "#fff");
    document.documentElement.style.setProperty("--mainColor", "rgb(28 28 40)");
    document.documentElement.style.setProperty(
      "--FerechexHoverColor",
      "rgb(74 75 109)"
    );
    document.documentElement.style.setProperty(
      "--Warning-bg-color",
      "rgb(40 41 61)"
    );
    document.documentElement.style.setProperty(
      "--category-color",
      "rgb(250 204 21)"
    );
    document.documentElement.style.setProperty(
      "--category-bg-color",
      "rgb(250 204 21 / 0.1)"
    );
    document.documentElement.style.setProperty(
      "--SecondTextLightColor",
      "rgb(148 163 184)"
    );
    document.documentElement.style.setProperty(
      "--bannerRedColor",
      "rgb(239 68 68)"
    );
  } else {
    //light
    document.documentElement.style.setProperty("--lightColor", "#fff");
    document.documentElement.style.setProperty(
      "--primaryLightColor",
      "rgb(243 244 246)"
    );
    document.documentElement.style.setProperty(
      "--borderColor",
      "rgb(243 244 246)"
    );
    document.documentElement.style.setProperty(
      "--hoverColor",
      "rgb(229 231 235)"
    );
    document.documentElement.style.setProperty(
      "--hoverBorderColor",
      "rgb(243 244 246)"
    );
    document.documentElement.style.setProperty("--secondDynamicCoor", "#fff");
    document.documentElement.style.setProperty(
      "--TextLightColor",
      "rgb(63 63 70)"
    );
    document.documentElement.style.setProperty(
      "--activeMenuItem2Hover",
      "#000"
    );
    document.documentElement.style.setProperty(
      "--cardTextColor",
      "rgb(100 116 139)"
    );
    document.documentElement.style.setProperty(
      "--mainColor",
      "rgb(243 244 246)"
    );
    document.documentElement.style.setProperty(
      "--FerechexHoverColor",
      "rgb(243 244 246)"
    );
    document.documentElement.style.setProperty("--Warning-bg-color", "#fff");
    document.documentElement.style.setProperty(
      "--category-color",
      "rgb(78 129 251)"
    );
    document.documentElement.style.setProperty(
      "--category-bg-color",
      "rgb(14 165 233 / 0.1)"
    );
    document.documentElement.style.setProperty(
      "--SecondTextLightColor",
      "rgb(100 116 139)"
    );

    document.documentElement.style.setProperty(
      "--bannerRedColor",
      "rgb(236 72 153)"
    );
    // AlertBanner.forEach(function (alertItem) {
    //   if (getComputedStyle(alertItem).backgroundColor == "rgb(236 72 153)") {
    //     getComputedStyle(alertItem).backgroundColor = " rgb(239 68 68)";
    //   }
    // });

    AlertBanner.forEach(function (alerts) {
      if (getComputedStyle(alerts).backgroundColor == "rgb(236 72 153)") {
        alerts.style.backgroundColor = "rgb(239 68 68)";
      }
    });
  }
}

const productSlider = document.querySelectorAll(".Product-slider");
const scrollRightBtn = document.querySelector(".scroll-right-btn");
const scrollReftBtn = document.querySelector(".scroll-left-btn");

let scrollWidth = Number(
  productSlider[0].scrollWidth -
    getComputedStyle(productSlider[0]).width.split("px").join("")
);
let scrollWidth2 = Number(
  productSlider[1].scrollWidth -
    getComputedStyle(productSlider[1]).width.split("px").join("")
);
let ProductCard = document.querySelector(".Product-Card");
let CardWidth = getComputedStyle(ProductCard).width.split("px").join("");

scrollReftBtn.addEventListener("click", function () {
  scrollToright();
});

scrollRightBtn.addEventListener("click", function () {
  scrollToleft();
});

function scrollToright() {
  productSlider.forEach(function (slider) {
    slider.scrollBy(-CardWidth, 0);
    if (slider.scrollLeft == -scrollWidth) {
      slider.scrollTo(CardWidth, 0);
    }
    if (productSlider[1].scrollLeft == -scrollWidth2) {
      productSlider[1].scrollTo(CardWidth, 0);
    }
  });
}
function scrollToleft() {
  productSlider.forEach(function (slider) {
    slider.scrollBy(CardWidth, 0);
  });
}
let userNameElem = document.querySelector(".userName");

setInterval(scrollToright, 4000);

exitBtn.addEventListener("click", function () {
  usersArray.forEach(function (user) {
    user.islogin = false;
    user.addjective = "user";
  });
  // console.log(usersArray);
  localStorage.setItem("users", JSON.stringify(usersArray));
  location.reload();
});

if (
  JSON.parse(localStorage.getItem("warnings")) !== null &&
  JSON.parse(localStorage.getItem("warnings")).length > 0
) {
  warningsArray = JSON.parse(localStorage.getItem("warnings"));
  addWarningItem();
} else {
  warningsArray.push("این یک رویداد تستی است 😊");
  localStorage.setItem("warnings", JSON.stringify(warningsArray));
}

function addWarningItem() {
  warnigSection.innerHTML = "";
  warningsArray.forEach(function (warning) {
    warnigSection.insertAdjacentHTML(
      "afterbegin",
      `
      <a href="" class="Warning-Box">
      <span>!</span>
      <span>توجه: </span>
      <span class="Warning-Text">` +
        warning +
        `</span
      >
    </a>
  `
    );
  });
}

let NavigationBar = document.querySelector(".NavigationBar ul");

if (JSON.parse(localStorage.getItem("navbar")) !== null) {
  NavabrLinksArray = JSON.parse(localStorage.getItem("navbar"));
  InsertNavbarItems();
} else {
  NavabrLinksArray = [
    {
      id: 1,
      menu: "فرانت اند",
      sunMenu:
        "آموزش HTML, آموزش CSS, آموزش FlexBox, آموزش CSS Grid, آموزش Tailwind CSS, آموزش اصولی طراحی قالب, آموزش بوت استرپ, آموزش جاوااسکریپت, آموزش جامع ری اکت ReactJS, آموزش ویو جی اس, آموزش وی اس کد - Vscode, آموزش NPM, ",
      menuHref: "#",
      submenuHref: "#, #, #, #, #, #, #, #, #, #, #, #",
    },
    {
      id: 2,
      menu: "امنیت",
      sunMenu:
        "نقشه راه ورود به دنیای هک و امنیت, شبکه با گرایش امنیت, لینوکس با گرایش امنیت, آموزش هکر قانونمند - CEH V11, آموزش کالی لینوکس, آموزش پایتون سیاه, آموزش Burp Suite, آموزش جاوااسکریپت سیاه, ",
      menuHref: "#",
      submenuHref: "#, #, #, #, #, #, #, #, ",
    },
    {
      id: 3,
      menu: "پایتون",
      sunMenu:
        "دوره آموزش پایتون, پروژه های کاربردی با پایتون, ترفند های کاربردی با پایتون, متخصص جنگو, مصور سازی داده با پایتون, ",
      menuHref: "#",
      submenuHref: "#, #, #, #, #, ",
    },
    {
      id: 4,
      menu: "مهارت های نرم",
      sunMenu: "",
      menuHref: "#",
      submenuHref: "",
    },
    {
      id: 5,
      menu: "مقالات",
      sunMenu:
        "اچ تی ام ال, بوت استرپ, پروژه های برنامه نویسی, تست نفوذ و امنیت وب, جی کوئری, ری اکت جی اس, سی اس اس, شروع برنامه نویسی, طراحی سایت, ویو جی اس, ",
      menuHref: "#",
      submenuHref: "#, #, #, #, #, #, #, #, #, #",
    },
    {
      id: 6,
      menu: "پنل مدیریت",
      sunMenu: "",
      menuHref: "./cms/cms-ui/cms-ui.html",
      submenuHref: "",
    },
  ];
  localStorage.setItem("navbar", JSON.stringify(NavabrLinksArray));
  InsertNavbarItems();
}
let StableNavItem;
function InsertNavbarItems() {
  NavigationBar.innerHTML = "";
  NavabrLinksArray.forEach(function (nav) {
    if (nav.sunMenu.length > 0) {
      NavigationBar.insertAdjacentHTML(
        "afterbegin",
        `
  <li>
                <a href="${nav.menuHref}" class="NavItem"
                  >` +
          nav.menu +
          `
                  <i class="fa fa-angle-down"></i>
                  <ul class="SubMenu">
                   
                  </ul>
                </a>
              </li>
  `
      );

      menubar.insertAdjacentHTML(
        "afterbegin",
        `
        <li class="menuItem">
        <a class="menuLink" onclick="openResponsiveSubMenu(event)"
          >` +
          nav.menu +
          `<i class="fa fa-angle-down"></i
        ></a>
        <ul class="responsiveSubmenu">
          
        </ul>
      </li>
      `
      );
    } else {
      NavigationBar.insertAdjacentHTML(
        "afterbegin",
        `
  <li>
                <a href="${nav.menuHref}" class="NavItem"
                  >` +
          nav.menu +
          `
</a>
              </li>
  `
      );

      menubar.insertAdjacentHTML(
        "afterbegin",
        `
        <li class="menuItem">
        <a class="menuLink" href="${nav.menuHref}" onclick="openResponsiveSubMenu(event)"
          >` +
          nav.menu +
          `</a>
      </li>
      `
      );
    }

    let subMenu = document.querySelector(".SubMenu");
    let responsiveSubmenu = document.querySelector(".responsiveSubmenu");
    nav.sunMenu = nav.sunMenu.split(", ");
    nav.submenuHref = nav.submenuHref.split(", ");

    nav.sunMenu.forEach(function (subMenuItem) {
      // console.log()

      if (subMenuItem != "") {
        subMenu.insertAdjacentHTML(
          "afterbegin",
          `
  <li><a href="${nav.submenuHref[nav.sunMenu.indexOf(subMenuItem)]}">` +
            subMenuItem +
            `</a></li>
  `
        );
        responsiveSubmenu.insertAdjacentHTML(
          "afterbegin",
          `
        
        <li class="responsiveMenuItem">
        <a href="${nav.submenuHref[nav.sunMenu.indexOf(subMenuItem)]}">` +
            subMenuItem +
            `</a>
      </li>
        
        `
        );
      }
    });
  });
}
const menuLink = document.querySelectorAll(".menuLink");
function openResponsiveSubMenu(event) {
  if (event.target.classList == "menuLink active") {
    event.target.classList.remove("active");
  } else {
    menuLink.forEach(function (menuLinkItem) {
      menuLinkItem.classList.remove("active");
    });
    event.target.classList.add("active");
  }
}
let header = document.querySelector("header");

if (JSON.parse(localStorage.getItem("alerts")) != null) {
  alertsArray = JSON.parse(localStorage.getItem("alerts"));
  alertsGenerator();
} else {
  alertsArray.push({
    name: "تخفیف های ویژه ی سبزلرن 😍",
    color: "rgb(46, 213, 115)",
    title: "این یک اطلاعیه تستی است",
  });
  localStorage.setItem("alerts", JSON.stringify(alertsArray));
  alertsGenerator();
}
function alertsGenerator() {
  alertsArray.forEach(function (alertItem, index) {
    header.insertAdjacentHTML(
      "beforebegin",
      `
    <div class="AlertBanner" id="` +
        (index + 1) +
        `" style="background-color:` +
        alertItem.color +
        `;">

        <div class="alert-info">
        <i class="" id="alertIcon"></i>
          <div>
          <h3>${alertItem.name}</h3>
          <p>${alertItem.title}</p>
          </div>
       </div>
    
    <button onclick="okAlertBtn(event)" class="alertOkBtn" style="color:black;">متوجه شدم</button>
    </div>
    `
    );
  });
}
let AlertBanner = document.querySelectorAll(".AlertBanner");
let alertOkBtn = document.querySelector(".alertOkBtn");
function changeAlertTheme() {
  if (isDark == true) {
    AlertBanner.forEach(function (alerts) {
      if (alerts.style.backgroundColor == "rgb(236, 72, 153)") {
        alerts.style.backgroundColor = "rgb(239, 68, 68)";
      }
      // console.log(alerts);
    });
  } else {
    AlertBanner.forEach(function (alerts) {
      if (alerts.style.backgroundColor == "rgb(239, 68, 68)") {
        alerts.style.backgroundColor = "rgb(236, 72, 153)";
      }
      // console.log(alerts);
    });
  }

  AlertBanner.forEach(function (alerts) {
    if (
      alerts.style.backgroundColor == "rgb(239, 68, 68)" ||
      alerts.style.backgroundColor == "rgb(236, 72, 153)"
    ) {
      alerts.childNodes[1].childNodes[1].className = "fa fa-close";
    } else if (alerts.style.backgroundColor == "rgb(250, 204, 21)") {
      // console.log(alerts.childNodes[1].childNodes[1].innerHTML);
      alerts.childNodes[1].childNodes[1].innerHTML = "i";
    } else {
      // console.log(alerts.childNodes[1].childNodes[1]);
      alerts.childNodes[1].childNodes[1].className = "fa fa-check";
    }
  });
}
changeAlertTheme();
function okAlertBtn(event) {
  event.target.parentElement.remove();
}
function turnOffDragable() {
  let img = document.querySelectorAll("img");
  img.forEach((pic) => {
    pic.setAttribute("draggable", "false");
    pic.setAttribute("loading", "lazy");
  });
}
