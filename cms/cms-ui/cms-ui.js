let EmailInput = document.querySelector(".Email");
let passwordInput = document.querySelector(".password");
let signInBtn = document.querySelector(".sign-in-btn");

let messageBox = document.querySelector(".messageBox");
let ErrorMessage = document.querySelector(".ErrorMessage");
let ErrorMessageSpan = document.querySelector(".messageBox span");

let section = document.querySelectorAll(".section");

let changeLogoSection = document.querySelector(".changeLogoSection");
let changeLogoBtn = document.querySelector(".changeLogoBtn");
let chooseFile = document.querySelector(".chooseFile");

let manageWarningsSection = document.querySelector(".manageWarningsSection");
let warningTextBox = document.querySelector(".warningTextBox");
let addWarningBtn = document.querySelector(".addWarningBtn");
let warnings = document.querySelector(".warnings");
let alertsSection = document.querySelector(".alertsSection");
let Logo = document.querySelectorAll(".Logo");
let usersListSection = document.querySelector(".usersListSection");
let navbarLinksSection = document.querySelector(".navbarLinksSection");
let coursesSection = document.querySelector(".coursesSection");
let offerSection = document.querySelector(".offerSection");
let categorySection = document.querySelector(".categorySection");
let isDark;
// لینک های پنل سمت راست
let paneLinks = document.querySelectorAll(".paneLinks");
let paneLinks1 = document.querySelector(".panelLinks1");
let paneLinks2 = document.querySelector(".panelLinks2");
let paneLinks3 = document.querySelector(".panelLinks3");
let paneLinks4 = document.querySelector(".panelLinks4");
let paneLinks5 = document.querySelector(".panelLinks5");
let paneLinks6 = document.querySelector(".panelLinks6");
let paneLinks7 = document.querySelector(".panelLinks7");
let paneLinks8 = document.querySelector(".panelLinks8");
let paneLinks9 = document.querySelector(".panelLinks9");
let userAddjectiveElem;
let usersElem = document.querySelector(".users");
let usersArray = [];
let warningsArray = [];
let NavabrLinksArray = [];
let categoryArray = [];
let WarningItemCounter = 0;

// let NavabrLinksArray=[
//   {id:1, menu:'فرانت اند', sunMenu:'تست1, تست2, تست3'}
// ]

// NavabrLinksArray.forEach(function(link){
//   let HeaderLinks=link.sunMenu.split(', ')
//   HeaderLinks.forEach(function(link){
//     console.log(link);
//   })
// })

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
  changeThemeMode();
  ChangeAlertItemTheme();
  let windowSearch = new URLSearchParams(location.search).get("id");
  let errorLable = document.querySelector(".error404");
  if (JSON.parse(localStorage.getItem("navbar")) !== null) {
    NavabrLinksArray = JSON.parse(localStorage.getItem("navbar"));
  }
  switch (windowSearch) {
    case "1":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      changeLogoSection.style.display = "flex";
      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      paneLinks1.classList.add("active");
      break;

    case "2":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });

      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      MenuAndsubmenuGenerator();
      paneLinks2.classList.add("active");
      navbarLinksSection.style.display = "flex";
      break;

    case "3":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      manageWarningsSection.style.display = "flex";

      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      paneLinks3.classList.add("active");
      break;

    case "4":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      usersListSection.style.display = "flex";

      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      paneLinks4.classList.add("active");
      break;
    case "5":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      alertsSection.style.display = "flex";

      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      paneLinks5.classList.add("active");
      break;

    case "6":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      coursesSection.style.display = "flex";

      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      paneLinks6.classList.add("active");
      paneLinks7.classList.add("active");
      accordionItemsContainer.classList.add("active");
      downIcon.style.transform = "rotate(180deg)";
      break;

    case "7":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      offerSection.style.display = "flex";

      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      paneLinks6.classList.add("active");
      paneLinks8.classList.add("active");
      accordionItemsContainer.classList.add("active");
      downIcon.style.transform = "rotate(180deg)";
      break;

    case "8":
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      categorySection.style.display = "flex";

      paneLinks.forEach(function (Link) {
        Link.classList.remove("active");
      });
      paneLinks9.classList.add("active");
      break;

    default:
      section.forEach(function (sec) {
        sec.style.display = "none";
      });
      console.log(windowSearch);
      if (windowSearch == null) {
        errorLable.style.display = "block";
        errorLable.innerHTML = "لطفا یک گزینه را انتخاب کنید";
        errorLable.style.color = "green";
      } else {
        errorLable.style.display = "block";
        errorLable.innerHTML = "404: چنین صفحه ای نداریم!";
        errorLable.style.color = "red";
      }
      break;
  }

  if (JSON.parse(localStorage.getItem("warnings")) !== null) {
    warningsArray = JSON.parse(localStorage.getItem("warnings"));
    addWarningItem();
  }
};
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
  }
}

function showErrorMessage() {
  messageBox.style.cssText = `opacity: 1;
      visibility: visible;
      right:20px;
      `;
  ErrorMessageSpan.style.cssText = `animation: Error 3s;
      `;
  setTimeout(function () {
    messageBox.style.cssText = `opacity: 0;
      visibility: hidden;
      right:-100%;
      `;
    ErrorMessageSpan.style.cssText = `none`;
  }, 2800);
}

let isadmin;

if (JSON.parse(localStorage.getItem("users")) !== null) {
  usersArray = JSON.parse(localStorage.getItem("users"));
  isadmin = usersArray.some(function (user) {
    if (user.addjective == "admin") {
      return true;
    }
  });
  if (isadmin != true) {
    location.href = "../cms-login/cms-login.html";
  }
}
if (JSON.parse(localStorage.getItem("users")) === null) {
  location.href = "../../Log-in/login.html";
}

function changeLogo() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      localStorage.setItem("LogoSource", this.result);
    });
  }
}
changeLogoBtn.addEventListener("click", function () {
  changeLogo();
  location.reload();
});

addWarningBtn.addEventListener("click", function (event) {
  if (warningTextBox.value.length > 0) {
    let ishave = warningsArray.some(function (warnings) {
      if (warnings == warningTextBox.value) {
        return true;
      }
    });
    if (ishave != true) {
      warningsArray.push(warningTextBox.value);
      localStorage.setItem("warnings", JSON.stringify(warningsArray));
      addWarningItem();
      warningTextBox.value = "";
      showErrorMessage();
      ErrorMessage.innerHTML = "رویداد اضافه شد";
      ErrorMessageSpan.style.background = "green";
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = "رویداد از قبل وجود دارد!";
      ErrorMessageSpan.style.background = "red";
    }
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا فیلد را پر کنید";
    ErrorMessageSpan.style.background = "red";
  }
});
warningTextBox.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    if (warningTextBox.value.length > 0) {
      let ishave = warningsArray.some(function (warnings) {
        if (warnings == warningTextBox.value) {
          return true;
        }
      });
      if (ishave != true) {
        warningsArray.push(warningTextBox.value);
        localStorage.setItem("warnings", JSON.stringify(warningsArray));
        addWarningItem();
        showErrorMessage();
        ErrorMessage.innerHTML = "رویداد اضافه شد";
        ErrorMessageSpan.style.background = "green";
        warningTextBox.value = "";
      } else {
        showErrorMessage();
        ErrorMessage.innerHTML = "رویداد از قبل وجود دارد!";
        ErrorMessageSpan.style.background = "red";
      }
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = "لطفا فیلد را پر کنید";
      ErrorMessageSpan.style.background = "red";
    }
  }
});

function addWarningItem() {
  WarningItemCounter = 0;
  warnings.innerHTML = "";
  warningsArray.forEach(function (warning) {
    WarningItemCounter++;
    warnings.insertAdjacentHTML(
      "beforeend",
      `
  <div class="warning-item">
  <div class="warningNames">
  <span class="ItemNumber">` +
        WarningItemCounter +
        `</span>
              <p>` +
        warning +
        `</p></div>
              <button onclick="removeItem(event)">حذف</button>
            </div>
  `
    );
  });
}

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
}

function removeItem(event) {
  let warningIndex = warningsArray.indexOf(
    event.target.previousElementSibling.childNodes[1].nextElementSibling
      .innerHTML
  );
  warningsArray.splice(warningIndex, 1);
  localStorage.setItem("warnings", JSON.stringify(warningsArray));
  showErrorMessage();
  ErrorMessage.innerHTML = "رویداد حذف شد";
  ErrorMessageSpan.style.background = "red";
  addWarningItem();
  console.log(
    event.target.previousElementSibling.childNodes[1].nextElementSibling
      .innerHTML
  );
}
let ItemCounter = 0;
usersELemsGenerator();
function usersELemsGenerator() {
  if (JSON.parse(localStorage.getItem("users")) !== null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
    usersElem.innerHTML = "";
    usersArray.forEach(function (user) {
      ItemCounter++;
      usersElem.insertAdjacentHTML(
        "beforeend",
        `
         <div class="userItem">
         <span class="ItemNumber">` +
          user.id +
          `</span>
              <div class="userNames">
                <p class="userNameElem">` +
          user.name +
          `</p>
                <span class="userAddjective">` +
          user.addjective +
          `</span>
          <span class="userLoginStory">` +
          user.islogin +
          `</span>
              </div>
              <button class="removeUser" onclick="removeUser(event)">حذف</button>
            </div>
          
`
      );
    });
  }

  userAddjectiveElem = document.querySelectorAll(".userAddjective");
  userLoginStoryElem = document.querySelectorAll(".userLoginStory");
  userAddjectiveElem.forEach(function (userElem) {
    if (userElem.innerHTML == "admin") {
      userElem.innerHTML = "مدیر";
      userElem.style.color = "rgb(78 129 251)";
      userElem.style.backgroundColor = "rgb(14 165 233 / 0.1)";
      userElem.parentElement.parentElement.childNodes[5].remove();
    } else if (userElem.innerHTML == "user") {
      userElem.innerHTML = "کاربر";
      userElem.style.color = "rgb(46 213 115)";
      userElem.style.backgroundColor = "rgba(0,255,0,.1)";
    }
  });

  userLoginStoryElem.forEach(function (userLoginElem) {
    if (userLoginElem.innerHTML == "true") {
      userLoginElem.innerHTML = "لاگین کرده";
      userLoginElem.style.color = "rgb(46 213 115)";
      userLoginElem.style.backgroundColor = "rgba(0,255,0,.1)";
    } else if (userLoginElem.innerHTML == "false") {
      userLoginElem.innerHTML = "لاگین نکرده";
      userLoginElem.style.color = "rgb(255,0,0)";
      userLoginElem.style.backgroundColor = "rgba(255, 0, 0, 0.377)";
    }
  });
}

function removeUser(event) {
  let userIndex;
  usersArray.forEach(function (user) {
    if (
      user.name ==
      event.target.parentElement.childNodes[3].childNodes[1].innerHTML
    ) {
      userIndex = usersArray.indexOf(user);
    }
  });
  console.log(userIndex);
  usersArray.splice(userIndex, 1);
  localStorage.setItem("users", JSON.stringify(usersArray));
  showErrorMessage();
  ErrorMessage.innerHTML = "کاربر حذف شد";
  ErrorMessageSpan.style.background = "green";
  usersELemsGenerator();
}

let saveMenuBtn = document.querySelector(".saveMenuBtn");
let OriginalMenuTextBox = document.querySelector(".OriginalMenuTextBox");
let OriginalMenuHrefTextBox = document.querySelector(
  ".OriginalMenuHrefTextBox"
);
let manuItemBox = document.querySelector(".manuItemBox");

NavabrLinksArray.forEach(function (link) {
  let HeaderLinks = link.sunMenu.split(", ");
  HeaderLinks.forEach(function (link) {});
});
saveMenuBtn.addEventListener("click", function (event) {
  showErrorMessage();
  ErrorMessage.innerHTML = "منو اضافه شد";
  ErrorMessageSpan.style.background = "green";
  AddMenuGenerator(event);
});
OriginalMenuTextBox.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    event.target.nextElementSibling.focus();
    // AddMenuGenerator(event);
  }
});
OriginalMenuHrefTextBox.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    // event.target.nextElementSibling.focus()
    if (
      event.target.value.length > 0 &&
      event.target.previousElementSibling.value.length > 0
    ) {
      showErrorMessage();
      ErrorMessage.innerHTML = "منو اضافه شد";
      ErrorMessageSpan.style.background = "green";
      AddMenuGenerator(event);
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = "لطفا فیلد هارا پرکنید!";
      ErrorMessageSpan.style.background = "red";
    }
  }
});
function AddMenuGenerator(event) {
  if (OriginalMenuTextBox.value.length > 0) {
    NavabrLinksArray.push({
      id: NavabrLinksArray.length + 1,
      menu: OriginalMenuTextBox.value,
      sunMenu: "",
      menuHref: OriginalMenuHrefTextBox.value,
      submenuHref: "",
    });
    OriginalMenuTextBox.value = "";
    OriginalMenuHrefTextBox.value = "";
    MenuAndsubmenuGenerator();
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا فیلد هارا پرکنید!";
    ErrorMessageSpan.style.background = "red";
  }
}
function addSubmenuGenerator(event) {
  if (event.target.parentElement.childNodes[1].value.length > 0) {
    showErrorMessage();
    ErrorMessage.innerHTML = "زیر منو اضافه شد";
    ErrorMessageSpan.style.background = "green";
    NavabrLinksArray.forEach(function (link) {
      if (
        link.menu + " " ==
        event.target.parentElement.previousElementSibling.childNodes[0]
          .innerHTML
      ) {
        link.sunMenu += event.target.parentElement.childNodes[1].value + ", ";
        link.submenuHref += event.target.previousElementSibling.value + ", ";
      }
    });
    // localStorage.setItem("navbar", JSON.stringify(NavabrLinksArray));
    MenuAndsubmenuGenerator();
  }
}

function addSubmenuByEnter1(event) {
  if (event.target.value.length > 0 && event.keyCode === 13) {
    // NavabrLinksArray.forEach(function (link) {
    //   if (
    //     link.menu == event.target.parentElement.previousElementSibling.innerHTML
    //   ) {
    //     link.sunMenu += event.target.value + ", ";
    //   }
    // });
    // console.log(NavabrLinksArray);
    // MenuAndsubmenuGenerator();
    event.target.nextElementSibling.focus();
  }
}
// function addSubmenuByEnter2(event) {
//   if (event.target.value.length > 0 && event.keyCode === 13) {
//     // NavabrLinksArray.forEach(function (link) {
//     //   if (
//     //     link.menu == event.target.parentElement.previousElementSibling.innerHTML
//     //   ) {
//     //     link.sunMenu += event.target.value + ", ";
//     //   }
//     // });
//     console.log(NavabrLinksArray);
//     // MenuAndsubmenuGenerator();
//     addSubmenuGenerator(event)
//     // event.target.nextElementSibling.focus()
//   }
// }
let newLinks;
function MenuAndsubmenuGenerator() {
  manuItemBox.innerHTML = "";
  NavabrLinksArray.forEach(function (link) {
    newLinks = link.sunMenu.split(", ");
    newSubHref = link.submenuHref.split(", ");
    // console.log(newLinks);
    manuItemBox.insertAdjacentHTML(
      "afterbegin",
      `

  <div class="menuItem">
  <button class="removeUser" onclick="removeMenu(event)">حذف</button>
              <h3 class="menuName"><span>` +
        link.menu +
        ` </span><span class="menuLinkSpan">https://${link.menuHref}</span> </h3>
              <div class="addNewSubmenuBox">
                <input type="text" class="addSubmenu" onkeydown="addSubmenuByEnter1(event)"  placeholder="عنوان زیرمنو رو وارد کنید" name="" id="">
                <input type="text" class="addSubmenu" placeholder="لینک زیرمنو رو وارد کنید" name="" id="">
                <button class="addSubmenuBtn" onclick="addSubmenuGenerator(event)">انتشار</button>
                <div class="submenuBox"></div>
              </div>
            </div>
  `
    );
    let submenuBox = document.querySelector(".submenuBox");
    newLinks.forEach(function (newLinks2) {
      if (newLinks2 != "") {
        console.log(newSubHref[0]);
        console.log("index:  " + newLinks.indexOf(newLinks2));
        submenuBox.insertAdjacentHTML(
          "beforeend",
          `<h4><span>` +
            newLinks2 +
            ` </span><span class="hrefLabel">https://${
              newSubHref[newLinks.indexOf(newLinks2)]
            }</span>
            <button class="removeUser" onclick="removeSubMenu(event)">حذف</button></h4>`
        );
      }
    });
  });
  localStorage.setItem("navbar", JSON.stringify(NavabrLinksArray));
}

function removeMenu(event) {
  let removingMenu = NavabrLinksArray.findIndex(function (menuLink) {
    return menuLink.menu == event.target.nextElementSibling.childNodes[0].innerHTML.trim();
  });
  NavabrLinksArray.splice(removingMenu, 1);
  MenuAndsubmenuGenerator();
  showErrorMessage();
  ErrorMessage.innerHTML = "منو حذف شد";
  ErrorMessageSpan.style.background = "red";
}
function removeSubMenu(event) {
  NavabrLinksArray.forEach(function (menuLink) {
    // alert(event.target.previousElementSibling.previousElementSibling.innerHTML.trim())
    let splitedlink = menuLink.sunMenu.split(", ");
    let submenuIndex = splitedlink.indexOf(
      event.target.previousElementSibling.previousElementSibling.innerHTML.trim()
    );
    splitedlink.splice(submenuIndex, 1);
    splitedlink = splitedlink.join(", ");
    menuLink.sunMenu = splitedlink;
    showErrorMessage();
    ErrorMessage.innerHTML = "زیر منو حذف شد";
    ErrorMessageSpan.style.background = "red";
    MenuAndsubmenuGenerator();
  });
}

let alertsArray = [];
const AlertTitleTextBox = document.querySelector(".AlertTitleTextBox");
const AlertTextBox = document.querySelector(".AlertTextBox");
const addAlertBtn = document.querySelector(".addAlertBtn");
const Alerts = document.querySelector(".Alerts");
const colorBtn = document.querySelectorAll(".colorBtn");

colorBtn.forEach(function (color) {
  color.addEventListener("click", function (event) {
    colorBtn.forEach(function (color2) {
      color2.dataset.color = "";
      color2.classList.remove("active");
    });
    event.target.dataset.color = "active";
    event.target.classList.add("active");
  });
});

if (JSON.parse(localStorage.getItem("alerts")) != null) {
  alertsArray = JSON.parse(localStorage.getItem("alerts"));
  alertsGenerator();
  // ChangeAlertItemTheme()
}
let activeColor;
addAlertBtn.addEventListener("click", addAlert);
AlertTextBox.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.target.nextElementSibling.focus();
  }
});
AlertTitleTextBox.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    if (event.target.value.length > 0 && AlertTextBox.value.length > 0) {
      showErrorMessage();
      ErrorMessage.innerHTML = " اطلاعیه اضافه شد";
      ErrorMessageSpan.style.background = "green";
      insertCategory(categoryArray);
      addAlert();
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = "لطفا فیلد هارا پرکنید!";
      ErrorMessageSpan.style.background = "red";
    }
  }
});
function addAlert() {
  if (AlertTextBox.value.length > 0) {
    let ishave = alertsArray.some(function (alert) {
      if (alert.name == AlertTextBox.value) {
        return true;
      }
    });

    if (ishave != true) {
      colorBtn.forEach(function (color) {
        if (color.dataset.color == "active") {
          activeColor = getComputedStyle(color).backgroundColor;
        }
      });
      if (activeColor == undefined) {
        colorBtn[0].dataset.color = "active";
        colorBtn[0].classList.add("active");
        activeColor = getComputedStyle(colorBtn[0]).backgroundColor;
      }
      alertsArray.push({
        name: AlertTextBox.value,
        color: activeColor,
        title: AlertTitleTextBox.value,
      });
      showErrorMessage();
      ErrorMessage.innerHTML = " اطلاعیه اضافه شد";
      ErrorMessageSpan.style.background = "green";
      localStorage.setItem("alerts", JSON.stringify(alertsArray));
      alertsGenerator();
      // ChangeAlertItemTheme()
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = " اطلاعیه از قبل وجود دارد";
      ErrorMessageSpan.style.background = "red";
    }
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا فیلد را پر کنید";
    ErrorMessageSpan.style.background = "red";
  }
  colorBtn.forEach(function (color) {
    color.dataset.color = "";
    color.classList.remove("active");
  });
  AlertTextBox.value = "";
  AlertTitleTextBox.value = "";
}
// OriginalMenuHrefTextBox.addEventListener('keydown', function(event){
//   if(event.keyCode==13){
//   if(event.target.value.length>0){
//     showErrorMessage();
//     ErrorMessage.innerHTML = 'منو اضافه شد';
//     ErrorMessageSpan.style.background = "green";
//   }
//   else{
//     showErrorMessage();
//     ErrorMessage.innerHTML = "لطفا فیلد8 را پر کنید";
//     ErrorMessageSpan.style.background = "red";
//   }
// }
// })
function alertsGenerator() {
  Alerts.innerHTML = "";
  alertsArray.forEach(function (alert) {
    Alerts.insertAdjacentHTML(
      "afterbegin",
      `
          <div class="alert-item">
          <div>
            <h3>${alert.name}</h3>
            <p>${alert.title}</p>
            </div>
         <span class="colorBtn alertColor" style="background-color:` +
        alert.color +
        `;"></span>
         <button>حذف</button>
          </div>
  `
    );
  });
}

Alerts.addEventListener("click", function (event) {
  if (event.target.tagName == "BUTTON") {
    let deleteAlertIndex = alertsArray.findIndex(function (alert) {
      return (
        alert.name ==
        event.target.previousElementSibling.previousElementSibling.innerHTML
      );
    });
    alertsArray.splice(deleteAlertIndex, 1);
    localStorage.setItem("alerts", JSON.stringify(alertsArray));
    showErrorMessage();
    ErrorMessage.innerHTML = " اطلاعیه حذف شد";
    ErrorMessageSpan.style.background = "green";
    alertsGenerator();
    // ChangeAlertItemTheme()
  }
});
let categoryInput = document.querySelector(".categoryInput");
let addCategoryBtn = document.querySelector(".addCategoryBtn");
let categoryBox = document.querySelector(".categoryBox");

if (JSON.parse(localStorage.getItem("Category")) !== null) {
  categoryArray = JSON.parse(localStorage.getItem("Category"));
}
else{
  categoryArray.push('فرانت اند', 'بک اند', 'پایتون')
  localStorage.setItem("Category", JSON.stringify(categoryArray));
}

function categoryGenerator() {
  if (categoryInput.value.length > 0) {
    let ishave = categoryArray.some(function (category) {
      if (category == categoryInput.value) {
        return true;
      }
    });
    if (ishave !== true) {
      categoryArray.push(categoryInput.value);
      localStorage.setItem("Category", JSON.stringify(categoryArray));
      showErrorMessage();
      ErrorMessage.innerHTML = "دسته بندی اضافه شد";
      ErrorMessageSpan.style.background = "green";
      insertCategory(categoryArray);
      categoryInput.value = "";
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = "دسته بندی از قبل وجود دارد";
      ErrorMessageSpan.style.background = "red";
    }
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا فیلد را پرکنید!";
    ErrorMessageSpan.style.background = "red";
  }
}
insertCategory(categoryArray);
function insertCategory(categoryArray) {
  categoryBox.innerHTML = "";
  categoryArray.forEach(function (category) {
    categoryBox.insertAdjacentHTML(
      "beforeend",
      `
    
    <div class="CategoryItem">
              <p class="categoryName">` +
        category +
        `</p>
              <button onclick="deleteCategoryHandler(event)">حذف</button>
            </div>
    `
    );
  });
}

function deleteCategoryHandler(event) {
  let index = categoryArray.findIndex(function (category) {
    return category == event.target.previousElementSibling.innerHTML;
  });

  categoryArray.splice(index, 1);
  localStorage.setItem("Category", JSON.stringify(categoryArray));
  showErrorMessage();
  ErrorMessage.innerHTML = "دسته بندی حذف شد";
  ErrorMessageSpan.style.background = "green";
  insertCategory(categoryArray);
}

addCategoryBtn.addEventListener("click", categoryGenerator);
categoryInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    categoryGenerator();
  }
});

let alertColor = document.querySelectorAll(".alertColor");
function ChangeAlertItemTheme() {
  if (isDark == true) {
    alertColor.forEach(function (alerts) {
      if (alerts.style.backgroundColor == "rgb(236, 72, 153)") {
        alerts.style.backgroundColor = "rgb(239, 68, 68)";
      }
      console.log(alerts);
    });
  } else {
    alertColor.forEach(function (alerts) {
      if (alerts.style.backgroundColor == "rgb(239, 68, 68)") {
        alerts.style.backgroundColor = "rgb(236, 72, 153)";
      }
      console.log(alerts);
    });
  }
}
