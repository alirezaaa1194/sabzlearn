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
    // rgb(148 163 184)
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
  }
}
/////////////////////////////////////////////////////////////////////////

let usersArray = [];

if (JSON.parse(localStorage.getItem("users")) !== null) {
  usersArray = JSON.parse(localStorage.getItem("users"));
}

let isloginTosite = usersArray.some(function (user) {
  if (user.islogin == true) {
    return true;
  }
});

if (isloginTosite == true) {
  location.href = ".././index.html";
}

let signInBtn = document.querySelector(".sign-in-btn");
let nameInput = document.querySelector(".name");
let phoneNumberInput = document.querySelector(".phone-Number");
let EmailInput = document.querySelector(".Email");
let passwordInput = document.querySelector(".password");
let messageBox = document.querySelector(".messageBox");
let ErrorMessage = document.querySelector(".ErrorMessage");
let ErrorMessageSpan = document.querySelector(".messageBox span");
let Logo=document.querySelectorAll('.Logo')
let ishave;
let newUser;
signInBtn.addEventListener("click", function () {
  if (
    nameInput.value.length > 0 &&
    phoneNumberInput.value.length > 0 &&
    EmailInput.value.length > 0 &&
    passwordInput.value.length > 0
  ) {
    if (JSON.parse(localStorage.getItem("users")) !== null) {
      // اگر خالی نبود
      ishave = usersArray.some(function (user) {
        if (user.Email == EmailInput.value) {
          return true;
        } else {
          return false;
        }
      });
      if (ishave) {
        showErrorMessage();
        ErrorMessage.innerHTML = "شما قبلا ثبت نام کرده اید، لطفا وارد شوید";
      } else {
        usersArray.forEach(function (user) {
          user.islogin = false;
        });

        newUser = usersArray.push({
          id: usersArray.length + 1,
          name: nameInput.value,
          phoneNumber: phoneNumberInput.value,
          Email: EmailInput.value,
          password: passwordInput.value,
          islogin: true,
          addjective:'user'
        });
        localStorage.setItem("users", JSON.stringify(usersArray));
        location.href = ".././index.html";
      }
    } else {
      newUser = usersArray.push({
        id: usersArray.length + 1,
        name: nameInput.value,
        phoneNumber: phoneNumberInput.value,
        Email: EmailInput.value,
        password: passwordInput.value,
        islogin: true,
        addjective:'user'
      });
      localStorage.setItem("users", JSON.stringify(usersArray));
      location.href = ".././index.html";
    }
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا تمام فیلد ها را پرکنید";
  }
});

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
if(localStorage.getItem('LogoSource')!==null){
  Logo.forEach(function(img){
    img.setAttribute('src', localStorage.getItem('LogoSource'))
  })
}
else{
  Logo.forEach(function(img){
    img.setAttribute('src', 'https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp')
  })
}