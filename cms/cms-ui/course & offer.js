let coruseName = document.querySelector(".coruse-name");
let coruseImg = document.querySelector(".coruse-img");
let coruseDesc = document.querySelector(".coruse-desc");
let coruseTeacher = document.querySelector(".coruse-teacher");
let coruseTime = document.querySelector(".coruse-time");
let corusePrice = document.querySelector(".coruse-price");
let addCourseBtn = document.querySelector(".add-course-btn");
let courseForm = document.querySelector(".course-form");
let courseCategoryBox = document.querySelector(".course-category-box");
categoryArray = [];
let courseArray = [
  // {
  //   id: 1,
  //   name: "a",
  //   imgUrl: "",
  //   desc: "b",
  //   teacher: "c",
  //   time: "d",
  //   price: "e",
  // },
];

if (JSON.parse(localStorage.getItem("Category")) !== null) {
  categoryArray = JSON.parse(localStorage.getItem("Category"));
  courseCategoryBox.innerHTML = "";
  categoryArray.forEach(function (category) {
    courseCategoryBox.insertAdjacentHTML(
      "beforeend",
      `
        <div class="Category-item">
                <label for="` +
        (categoryArray.indexOf(category) + 1) +
        `">` +
        category +
        `</label>
                <input type="checkbox" class="checkbox" id="` +
        (categoryArray.indexOf(category) + 1) +
        `">
              </div>
        `
    );
  });
}
let courseCategory = "";
let checkbox = document.querySelectorAll(".checkbox");

if (JSON.parse(localStorage.getItem("courses")) !== null) {
  courseArray = JSON.parse(localStorage.getItem("courses"));
}

function addCourse(e) {
  if (
    coruseName.value.length > 0 &&
    coruseImg.value.length > 0 &&
    coruseDesc.value.length > 0 &&
    coruseTeacher.value.length > 0 &&
    coruseTime.value.length > 0 &&
    corusePrice.value.length > 0
  ) {
    checkbox.forEach(function (ch) {
      if (ch.checked) {
        courseCategory += ch.previousElementSibling.innerHTML + ", ";
      }
    });

    let imgUrlFromInput;
    const files = coruseImg.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgUrlFromInput = this.result;
        if (courseCategory == "") {
          courseCategory = "دسته بندی نشده";
        }
        courseArray.push({
          id: courseArray.length + 1,
          name: coruseName.value,
          imgUrl: imgUrlFromInput,
          desc: coruseDesc.value,
          teacher: coruseTeacher.value,
          time: coruseTime.value,
          originalPrice: corusePrice.value,
          percent: 0,
          offerPrice: 0,
          category: courseCategory,
        });
        insertCourse();
        localStorage.setItem("courses", JSON.stringify(courseArray));
        location.reload();
      });
    }

    checkbox.forEach(function (ch) {
      ch.checked = false;
    });
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا تمام فیلد ها را پرکنید";
  }
}
addCourseBtn.addEventListener("click", addCourse);
const ProductGrid = document.querySelector(".Product-Grid");
function insertCourse() {
  ProductGrid.innerHTML = "";
  courseArray.forEach(function (course) {
    let splitedCategory = course.category.split(", ");
    if (course.percent == 0) {
      ProductGrid.insertAdjacentHTML(
        "afterbegin",
        `

<div class="Product-Card">
              <button class="courseDeleteBtn" onclick="removeCourseHandler(event)" id="` +
          course.id +
          `">حذف</button>
              <span class="course-id">` +
          course.id +
          `</span>
              <div class="Card-header">
                <img
                  src="` +
          course.imgUrl +
          `"
                  alt=""
                />
              </div>
              <div class="Card-Body">
                <div class="Category-Box" id="` +
          course.id +
          `">
                </div>
                <h4 class="course-Name">
                  <a href="">` +
          course.name +
          `</a>
                </h4>
                <p class="course-Desc">
                  ` +
          course.desc +
          `
                </p>
                <div class="Course-Info">
                  <div class="Teacher-Info">
                  <a href="">
                  <i class="fa fa-user"></i>
                  <span>` +
        course.teacher +
        `</span>
        </a>
                    <i class="fa fa-clock-o"></i>
                    <span>` +
          course.time +
          `</span>
                  </div>
                  <div class="Course-Star">
                    <i class="fa fa-star"></i>
                    <span>5.0</span>
                  </div>
                </div>
              </div>
              <div class="Card-Footer">
                <div class="students-Box">
                  <i class="fa fa-users"></i>
                  <span class="Student-Number">268</span>
                </div>
                <h4 class="Course-Price">` +
          course.originalPrice
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
          ` تومان</h4>
              </div>
            </div>

`
      );
      // alert(course.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',$&'))

      let categoryContainer = document.querySelector(".Category-Box");
      splitedCategory.forEach(function (cat) {
        if (cat != "") {
          categoryContainer.insertAdjacentHTML(
            "beforeend",
            `
    <a href="">` +
              cat +
              `</a>
    `
          );
        }
      });
    }
    if (course.percent > 0 && course.percent < 100) {
      ProductGrid.insertAdjacentHTML(
        "afterbegin",
        `

<div class="Product-Card">
              <button class="courseDeleteBtn" onclick="removeCourseHandler(event)" id="` +
          course.id +
          `">حذف</button>
              <span class="course-id">` +
          course.id +
          `</span>
              <div class="Card-header">
                <img
                  src="` +
          course.imgUrl +
          `"
                  alt=""
                />
                <span class="free-lable">${course.percent}%</span>
              </div>
              <div class="Card-Body">
                <div class="Category-Box" id="` +
          course.id +
          `">
                </div>
                <h4 class="course-Name">
                  <a href="">` +
          course.name +
          `</a>
                </h4>
                <p class="course-Desc">
                  ` +
          course.desc +
          `
                </p>
                <div class="Course-Info">
                  <div class="Teacher-Info">
                  <a href="">
                    <i class="fa fa-user"></i>
                    <span>` +
          course.teacher +
          `</span>
          </a>
                    <i class="fa fa-clock-o"></i>
                    <span>` +
          course.time +
          `</span>
                  </div>
                  <div class="Course-Star">
                    <i class="fa fa-star"></i>
                    <span>5.0</span>
                  </div>
                </div>
              </div>
              <div class="Card-Footer">
                <div class="students-Box">
                  <i class="fa fa-users"></i>
                  <span class="Student-Number">268</span>
                </div>
                <div class="price-Box">
                <h6>${course.originalPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&")} تومان</h6>
                <h4 class="Course-Price">` +
          course.offerPrice
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
          ` تومان</h4>
                </div>
              </div>
            </div>

`
      );

      let categoryContainer = document.querySelector(".Category-Box");
      splitedCategory.forEach(function (cat) {
        if (cat != "") {
          categoryContainer.insertAdjacentHTML(
            "beforeend",
            `
    <a href="">` +
              cat +
              `</a>
    `
          );
        }
      });
    }
    if (course.percent == 100) {
      ProductGrid.insertAdjacentHTML(
        "afterbegin",
        `

<div class="Product-Card">
              <button class="courseDeleteBtn" onclick="removeCourseHandler(event)" id="` +
          course.id +
          `">حذف</button>
              <span class="course-id">` +
          course.id +
          `</span>
              <div class="Card-header">
                <img
                  src="` +
          course.imgUrl +
          `"
                  alt=""
                />
                <span class="free-lable">${course.percent}%</span>
              </div>
              <div class="Card-Body">
                <div class="Category-Box" id="` +
          course.id +
          `">
                </div>
                <h4 class="course-Name">
                  <a href="">` +
          course.name +
          `</a>
                </h4>
                <p class="course-Desc">
                  ` +
          course.desc +
          `
                </p>
                <div class="Course-Info">
                  <div class="Teacher-Info">
                  <a href="#">
                    <i class="fa fa-user"></i>
                    <span>` +
          course.teacher +
          `</span></a>
                    <i class="fa fa-clock-o"></i>
                    <span>` +
          course.time +
          `</span>
                  </div>
                  <div class="Course-Star">
                    <i class="fa fa-star"></i>
                    <span>5.0</span>
                  </div>
                </div>
              </div>
              <div class="Card-Footer">
                <div class="students-Box">
                  <i class="fa fa-users"></i>
                  <span class="Student-Number">268</span>
                </div>
                
                <div class="price-Box">
                <h6 class="Course-Price">` +
          course.originalPrice
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
          ` تومان</h6>
                <h4>رایگان!</h4>
                </div>
              </div>
            </div>

`
      );

      let categoryContainer = document.querySelector(".Category-Box");
      splitedCategory.forEach(function (cat) {
        if (cat != "") {
          categoryContainer.insertAdjacentHTML(
            "beforeend",
            `
    <a href="#">` +
              cat +
              `</a>
    `
          );
        }
      });
    }
  });
}

insertCourse();

function removeCourseHandler(event) {
  let index = courseArray.findIndex(function (course) {
    return course.id == event.target.id;
  });
  for (let i = index + 1; i < courseArray.length; i++) {
    courseArray[i].id--;
    console.log(courseArray[i].id);
  }
  courseArray.splice(index, 1);
  localStorage.setItem("courses", JSON.stringify(courseArray));
  insertCourse();
}

function showErrorMessage() {
  messageBox.style.cssText = `opacity: 1;
    visibility: visible;
    left:20px;
    `;
  ErrorMessageSpan.style.cssText = `animation: Error 3s;
    `;
  setTimeout(function () {
    messageBox.style.cssText = `opacity: 0;
    visibility: hidden;
    left:-100%;
    `;
    ErrorMessageSpan.style.cssText = `none`;
  }, 2800);
}

const allCoursePercent = document.querySelector(".all-course-percent-input");
const setOfferBtn1 = document.querySelector(".set-offer-btn1");

let oneCourseInputId = document.querySelector(".one-course-input-id");
let coursePercentInput = document.querySelector(".course-percent-input");
let setOfferbtn2 = document.querySelector(".set-offer-btn2");

setOfferBtn1.addEventListener("click", setOfferToAll);
setOfferbtn2.addEventListener("click", setOfferToOne);

allCoursePercent.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    setOfferToAll();
  }
});

oneCourseInputId.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    coursePercentInput.focus();
  }
});
coursePercentInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    setOfferToOne();
  }
});

function setOfferToAll() {
  if (allCoursePercent.value.length > 0) {
    if (isNaN(allCoursePercent.value) !== true) {
      if (allCoursePercent.value >= 0 && allCoursePercent.value <= 100) {
        if (courseArray.length > 0) {
          courseArray.forEach(function (course) {
            course.percent = +allCoursePercent.value;
            course.offerPrice =
              ((100 - course.percent) / 100) * course.originalPrice;
          });
          showErrorMessage();
          ErrorMessage.innerHTML = "تخفیف با موفقیت اعمال شد";
          ErrorMessageSpan.style.backgroundColor = "green";
          localStorage.setItem("courses", JSON.stringify(courseArray));
          allCoursePercent.value = "";
          insertCourse();
        } else {
          showErrorMessage();
          ErrorMessage.innerHTML = "شما هیچ دوره ای ندارید!";
        }
      } else {
        showErrorMessage();
        ErrorMessage.innerHTML = "لطفا تخفیف را در بازه ی 0 تا 100 وارد کنید!";
      }
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = "لطفا مقدار عددی وارد کنید!";
    }
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا فیلد را پرکنید!";
  }
}

function setOfferToOne() {
  if (
    oneCourseInputId.value.length > 0 &&
    coursePercentInput.value.length > 0
  ) {
    if (
      isNaN(oneCourseInputId.value) !== true &&
      isNaN(coursePercentInput.value) !== true
    ) {
      if (coursePercentInput.value >= 0 && coursePercentInput.value <= 100) {
        if (courseArray.length > 0) {
          let wantCourse = courseArray.find((course) => {
            return course.id == +oneCourseInputId.value;
          });
          if (wantCourse !== undefined) {
            wantCourse.percent = +coursePercentInput.value;
            wantCourse.offerPrice =
              ((100 - wantCourse.percent) / 100) * wantCourse.originalPrice;
            showErrorMessage();
            ErrorMessage.innerHTML = "تخفیف با موفقیت اعمال شد";
            ErrorMessageSpan.style.backgroundColor = "green";
            localStorage.setItem("courses", JSON.stringify(courseArray));
            oneCourseInputId.value = "";
            coursePercentInput.value = "";
            insertCourse();
          } else {
            showErrorMessage();
            ErrorMessage.innerHTML = "شما دوره ای با این id ندارید!";
          }
        } else {
          showErrorMessage();
          ErrorMessage.innerHTML = "شما هیچ دوره ای ندارید!";
        }
      } else {
        showErrorMessage();
        ErrorMessage.innerHTML = "لطفا تخفیف را در بازه ی 0 تا 100 وارد کنید!";
      }
    } else {
      showErrorMessage();
      ErrorMessage.innerHTML = "لطفا مقدار عددی وارد کنید!";
    }
  } else {
    showErrorMessage();
    ErrorMessage.innerHTML = "لطفا فیلد را پرکنید!";
  }
}
