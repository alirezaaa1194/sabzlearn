let courseArray = [];
let ProductGrid = document.querySelector(".Product-Grid");
let ProductSliderOrigin = document.querySelector(".cms-Product-slider");
let originCourseArray=[]
console.log(ProductSliderOrigin);
if (JSON.parse(localStorage.getItem("courses")) !== null) {
  courseArray = JSON.parse(localStorage.getItem("courses"));
  //   let latestCourse=courseArray.filter(function(Course){
  // return Course
  //   })
  CourseGenerator();
} else {
  courseArray.unshift(
    {
      id: 1,
      name: "پروژه های کاربردی با PHP",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/11/IMAGE-1402-08-12-17_41_32-768x432.jpg",
      desc: "مینی پروژه‌های کاربری با PHP یه دوره آموزشی گام به گام هست که برای توسعه‌دهندگان وب، به ویژه کسایی که…",
      teacher: "معین باغشیخی",
      time: "01:33",
      originalPrice: "470000",
      percent: 100,
      offerPrice: "",
      category: "فرانت اند, بک اند",
    },
    {
      id: 2,
      name: "آموزش Next.js بصورت پروژه محور",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/sabz-next-768x432.png",
      desc: "نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های…",
      teacher: "محمدامین سعیدی راد",
      time: "19:52",
      originalPrice: "1290000",
      percent: 0,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 3,
      name: "آموزش حرفه ای NodeJS بدون پیش نیاز",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/nodeJs-min-768x432.jpg",
      desc: "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…",
      teacher: "محمدامین سعیدی راد",
      time: "55:56",
      originalPrice: "4350000",
      percent: 0,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 4,
      name: "آموزش پایتون رایگان مقدماتی تا پیشرفته + پروژه های جذاب",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/Com_python-768x432.png",
      desc: "حیف نیست محبوب ترین زبان برنامه نویسی دنیا رو  ناقص و بی هدف یادبگیری؟ ما تصمیم داریم دوره رایگان آموزش پایتون رو…",
      teacher: "رضا دولتی",
      time: "77:50",
      originalPrice: "6000000",
      percent: 100,
      offerPrice: "",
      category: "پایتون, ",
    },
    {
      id: 5,
      name: "Data Visualization با پایتون",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/Com_Data_Visualization-768x432.png",
      desc: "ما تو دنیایی زندگی میکنیم که همه چیز به سمت سریع تر شدن حرکت میکنه. برای ذهن انسان درک اشکال…",
      teacher: "رضا دولتی",
      time: "03:58",
      originalPrice: "619500",
      percent: 0,
      offerPrice: "",
      category: "پایتون, ",
    },
    {
      id: 6,
      name: "آموزش PWA بصورت پروژه محور",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/PWA-min-1-768x432.jpg",
      desc: "کلمه PWA مخفف Progressive Web App بوده و یه تکنولوژی تقریبا جدیده که میتونیم بهمون اجازه میده وب‌سایتی که توسعه…",
      teacher: "محمدامین سعیدی راد",
      time: "09:23",
      originalPrice: "855000",
      percent: 0,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 7,
      name: "ترفند های کاربردی پایتون",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/Com_python_tricks_min-768x432.png",
      desc: "همه میدونیم که زبان برنامه نویسی پایتون یه زبان خیلی جذاب، راحت و همینطور کاربردیه.  قبل از اینکه بخواین این…",
      teacher: "رضا دولتی",
      time: "08:31",
      originalPrice: "540000",
      percent: 0,
      offerPrice: "",
      category: "پایتون, ",
    },
    {
      id: 8,
      name: "دوره پروژه محور متخصص جنگو",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/Com_django-min-768x432.png",
      desc: "از ویژگی های مهم این دوره میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و توجه به جزئیات،…",
      teacher: "رضا دولتی",
      time: "32:43",
      originalPrice: "3500000",
      percent: 0,
      offerPrice: "",
      category: "بک اند, پایتون",
    },
    {
      id: 9,
      name: "آموزش جاوا اسکریپت رایگان مقدماتی تا پیشرفته + مینی پروژه",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/Com_JAVASCRIPT-768x432.png",
      desc: "",
      teacher: "محمدامین سعیدی راد",
      time: "88:25",
      originalPrice: "4000000",
      percent: 100,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 10,
      name: "آموزش جامع Html5 (آپدیت ۲۰۲۳)",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/HTML-852x479-2-1-768x432.png",
      desc: "",
      teacher: "حمیدرضا عبادی",
      time: "07:37",
      originalPrice: "220000",
      percent: 100,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 11,
      name: "آموزش جامع Css3 (آپدیت ۲۰۲۳)",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/CSS-852x479-1-768x432.png",
      desc: "",
      teacher: "حمیدرضا عبادی",
      time: "12:42",
      originalPrice: "150000",
      percent: 100,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 12,
      name: "پروژه های خلاقانه با Html و Css(آپدیت  ۲۰۲۳)",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/csshtml-852-768x432.jpg",
      desc: "",
      teacher: "مهرشاد براتی",
      time: "19:42",
      originalPrice: "220000",
      percent: 100,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 13,
      name: "آموزش جاوااسکریپت با گرایش امنیت | جاوااسکریپت سیاه",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/Com_black_js-768x432.png",
      desc: "",
      teacher: "قدیر یلمه",
      time: "17:20",
      originalPrice: "150000",
      percent: 100,
      offerPrice: "",
      category: "فرانت اند, ",
    },
    {
      id: 14,
      name: "راه اندازی کسب و کار شخصی برای برنامه نویسان",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/webinar1-852-1-768x432.png",
      desc: "",
      teacher: "قدیر یلمه",
      time: "06:01",
      originalPrice: "5000000",
      percent: 100,
      offerPrice: "",
      category: "",
    },
    {
      id: 15,
      name: "آموزش پروژه محور CSS Grid + پروژه لندینگ رستوران",
      imgUrl:
        "https://sabzlearn.ir/wp-content/uploads/2023/08/Com_css_grid-768x432.png",
      desc: "",
      teacher: "امیر الهی",
      time: "07:37",
      originalPrice: "35000",
      percent: 100,
      offerPrice: "",
      category: "",
    }
  );
  // courseArray.reverse()
  localStorage.setItem("courses", JSON.stringify(courseArray));
  CourseGenerator();
}

function CourseGenerator() {
  // alert(courseArray.length - 7);
  // alert(courseArray.length);
  // let lastCourse=courseArray.filter(course=>course.percent)
  ProductGrid.innerHTML = "";
  ProductSliderOrigin.innerHTML = "";
  if (courseArray.length > 8) {
    // courseArray.reverse()
    for (let i = 0; i < 8; i++) {
      originCourseArray.unshift(courseArray[i])
    }
    for (let i = 0; i < 8; i++) {
      // console.log(originCourseArray[i].name);
      // courseArray.forEach(function (course) {
      let splitedCategory = originCourseArray[i].category.split(", ");
      if (originCourseArray[i].percent == 0) {
        // if (ProductGrid.childElementCount < 8) {
        ProductGrid.insertAdjacentHTML(
          "afterbegin",
          `
    
    <div class="Product-Card">
                  <div class="Card-header">
                  <a href="#">
                    <img
                      src="` +
            originCourseArray[i].imgUrl +
            `"
                      alt=""
                    />
                    </a>
                  </div>
                  <div class="Card-Body">
                    <div class="Category-Box" id="` +
            originCourseArray[i].id +
            `">
                
                    </div>
                    <h4 class="course-Name">
                      <a href="">` +
            originCourseArray[i].name +
            `</a>
                    </h4>
                    <p class="course-Desc">
                      ` +
            originCourseArray[i].desc +
            `
                    </p>
                    <div class="Course-Info">
                      <div class="Teacher-Info">
                        <a href="">
                        <i class="fa fa-user"></i>
                        <span>` +
            originCourseArray[i].teacher +
            `</span>
                </a>
                        <i class="fa fa-clock-o"></i>
                        <span>` +
            originCourseArray[i].time +
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
            originCourseArray[i].originalPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
            ` تومان</h4>
                  </div>
                </div>
    
    `
        );
        ProductSliderOrigin.insertAdjacentHTML(
          "afterbegin",
          `
    
    <div class="Product-Card">
                  <div class="Card-header">
                  <a href="#">
                  <img
                    src="` +
          originCourseArray[i].imgUrl +
          `"
                    alt=""
                  />
                  </a>
                  </div>
                  <div class="Card-Body">
                    <div class="Category-Box Category-Box2" id="` +
            originCourseArray[i].id +
            `">
      
                    </div>
                    <h4 class="course-Name">
                      <a href="">` +
            originCourseArray[i].name +
            `</a>
                    </h4>
                    <p class="course-Desc">
                      ` +
            originCourseArray[i].desc +
            `
                    </p>
                    <div class="Course-Info">
                      <div class="Teacher-Info">
                      <a href="">
                      <i class="fa fa-user"></i>
                      <span>` +
            originCourseArray[i].teacher +
            `</span>
              </a>
                        <i class="fa fa-clock-o"></i>
                        <span>` +
            originCourseArray[i].time +
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
            originCourseArray[i].originalPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
            ` تومان</h4>
                  </div>
                </div>
    
    `
        );

        // alert(course.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',$&'))

        let categoryContainer = document.querySelector(".Category-Box");
        let categoryContainer2 = document.querySelector(".Category-Box2");
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
            categoryContainer2.insertAdjacentHTML(
              "beforeend",
              `
                <a href="">` +
                cat +
                `</a>
        `
            );
          }
        });
        // }
      }
      if (originCourseArray[i].percent > 0 && originCourseArray[i].percent < 100) {
        if (ProductGrid.childElementCount < 8) {
          ProductGrid.insertAdjacentHTML(
            "afterbegin",
            `
    
    <div class="Product-Card">
                  <div class="Card-header">
                  <a href="#">
                  <img
                    src="` +
          originCourseArray[i].imgUrl +
          `"
                    alt=""
                  />
                  </a>
                    <span class="free-lable">${originCourseArray[i].percent}%</span>
                  </div>
                  <div class="Card-Body">
                    <div class="Category-Box" id="` +
              originCourseArray[i].id +
              `">
                    </div>
                    <h4 class="course-Name">
                      <a href="">` +
              originCourseArray[i].name +
              `</a>
                    </h4>
                    <p class="course-Desc">
                      ` +
              originCourseArray[i].desc +
              `
                    </p>
                    <div class="Course-Info">
                      <div class="Teacher-Info">
                      <a href="">
                      <i class="fa fa-user"></i>
                      <span>` +
              originCourseArray[i].teacher +
              `</span>
              </a>
                        <i class="fa fa-clock-o"></i>
                        <span>` +
              originCourseArray[i].time +
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
                    <h6>${originCourseArray[i].originalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&")} تومان</h6>
                    <h4 class="Course-Price">` +
              originCourseArray[i].offerPrice
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
              ` تومان</h4>
                    </div>
                  </div>
                </div>
    
    `
          );
          ProductSliderOrigin.insertAdjacentHTML(
            "afterbegin",
            `
    
    <div class="Product-Card">
                  <div class="Card-header">
                  <a href="#">
                  <img
                    src="` +
          originCourseArray[i].imgUrl +
          `"
                    alt=""
                  />
                  </a>
                    <span class="free-lable">${originCourseArray[i].percent}%</span>
                  </div>
                  <div class="Card-Body">
                    <div class="Category-Box" id="` +
              originCourseArray[i].id +
              `">
                    </div>
                    <h4 class="course-Name">
                      <a href="">` +
              originCourseArray[i].name +
              `</a>
                    </h4>
                    <p class="course-Desc">
                      ` +
              originCourseArray[i].desc +
              `
                    </p>
                    <div class="Course-Info">
                      <div class="Teacher-Info">
                      <a href="">
                      <i class="fa fa-user"></i>
                      <span>` +
              originCourseArray[i].teacher +
              `</span>
              </a>
                        <i class="fa fa-clock-o"></i>
                        <span>` +
              originCourseArray[i].time +
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
                    <h6>${originCourseArray[i].originalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&")} تومان</h6>
                    <h4 class="Course-Price">` +
              originCourseArray[i].offerPrice
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
      }
      if (originCourseArray[i].percent == 100) {
        if (ProductGrid.childElementCount < 8) {
          ProductGrid.insertAdjacentHTML(
            "afterbegin",
            `
    
    <div class="Product-Card">
                  <div class="Card-header">
                  <a href="#">
                  <img
                    src="` +
          originCourseArray[i].imgUrl +
          `"
                    alt=""
                  />
                  </a>
                    <span class="free-lable">${originCourseArray[i].percent}%</span>
                  </div>
                  <div class="Card-Body">
                    <div class="Category-Box" id="` +
              originCourseArray[i].id +
              `">
                    </div>
                    <h4 class="course-Name">
                      <a href="">` +
              originCourseArray[i].name +
              `</a>
                    </h4>
                    <p class="course-Desc">
                      ` +
              originCourseArray[i].desc +
              `
                    </p>
                    <div class="Course-Info">
                      <div class="Teacher-Info">
                      <a href="">
                      <i class="fa fa-user"></i>
                      <span>` +
              originCourseArray[i].teacher +
              `</span>
              </a>
                        <i class="fa fa-clock-o"></i>
                        <span>` +
              originCourseArray[i].time +
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
              originCourseArray[i].originalPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
              ` تومان</h6>
                    <h4>رایگان!</h4>
                    </div>
                  </div>
                </div>
    
    `
          );
          ProductSliderOrigin.insertAdjacentHTML(
            "afterbegin",
            `
    
    <div class="Product-Card">
                  <div class="Card-header">
                  <a href="#">
                  <img
                    src="` +
          originCourseArray[i].imgUrl +
          `"
                    alt=""
                  />
                  </a>
                    <span class="free-lable">${originCourseArray[i].percent}%</span>
                  </div>
                  <div class="Card-Body">
                    <div class="Category-Box Category-Box2" id="` +
              originCourseArray[i].id +
              `">
                    </div>
                    <h4 class="course-Name">
                      <a href="">` +
              originCourseArray[i].name +
              `</a>
                    </h4>
                    <p class="course-Desc">
                      ` +
              originCourseArray[i].desc +
              `
                    </p>
                    <div class="Course-Info">
                      <div class="Teacher-Info">
                      <a href="">
                      <i class="fa fa-user"></i>
                      <span>` +
              originCourseArray[i].teacher +
              `</span>
              </a>
                        <i class="fa fa-clock-o"></i>
                        <span>` +
              originCourseArray[i].time +
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
              originCourseArray[i].originalPrice
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
          let categoryContainer2 = document.querySelector(".Category-Box2");
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
              categoryContainer2.insertAdjacentHTML(
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
      }
      // });
    }
  } else {
    courseArray.forEach(function (course) {
      let splitedCategory = course.category.split(", ");
      if (course.percent == 0) {
        if (ProductGrid.childElementCount < 8) {
          ProductGrid.insertAdjacentHTML(
            "afterbegin",
            `

<div class="Product-Card">
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
          ProductSliderOrigin.insertAdjacentHTML(
            "afterbegin",
            `

<div class="Product-Card">
              <div class="Card-header">
                <img
                  src="` +
              course.imgUrl +
              `"
                  alt=""
                />
              </div>
              <div class="Card-Body">
                <div class="Category-Box Category-Box2" id="` +
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
          let categoryContainer2 = document.querySelector(".Category-Box2");
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
              categoryContainer2.insertAdjacentHTML(
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
      }
      if (course.percent > 0 && course.percent < 100) {
        if (ProductGrid.childElementCount < 8) {
          ProductGrid.insertAdjacentHTML(
            "afterbegin",
            `

<div class="Product-Card">
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
          ProductSliderOrigin.insertAdjacentHTML(
            "afterbegin",
            `

<div class="Product-Card">
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
      }
      if (course.percent == 100) {
        if (ProductGrid.childElementCount < 8) {
          ProductGrid.insertAdjacentHTML(
            "afterbegin",
            `

<div class="Product-Card">
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
          ProductSliderOrigin.insertAdjacentHTML(
            "afterbegin",
            `

<div class="Product-Card">
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
                <div class="Category-Box Category-Box2" id="` +
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
          let categoryContainer2 = document.querySelector(".Category-Box2");
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
              categoryContainer2.insertAdjacentHTML(
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
      }
    });
  }
}

///////////////////////////////////////////////////////////////////////////
// اضافه کردن دوره های رایگان به صفحه اصلی
let freeProductGrid = document.querySelector(".free-Product-Grid");
let originFreeCourseArray=[]
let freeCourse = courseArray.filter(function (course) {
  return course.percent == 100;
});
if (freeCourse.length > 8) {
  // alert(freeCourse.length)
  // freeCourse.reverse();
  for (let j = 0; j < 8; j++) {
    originFreeCourseArray.unshift(freeCourse[j])
  }
  for (let j = 0; j < 8; j++) {
    // console.log(a);
    freeProductGrid.insertAdjacentHTML(
      "afterbegin",
      `

<div class="Product-Card">
        <div class="Card-header">
          <a href="#">
          <img
            src="` +
        originFreeCourseArray[j].imgUrl +
        `"
            alt=""
          />
          </a>
          <span class="free-lable">${originFreeCourseArray[j].percent}%</span>
        </div>
        <div class="Card-Body">
          <div class="Category-Box" id="` +
        originFreeCourseArray[j].id +
        `">
          </div>
          <h4 class="course-Name">
            <a href="">` +
        originFreeCourseArray[j].name +
        `</a>
          </h4>
          <div class="Course-Info">
            <div class="Teacher-Info">
            <a href="">
            <i class="fa fa-user"></i>
            <span>` +
        originFreeCourseArray[j].teacher +
        `</span>
    </a>
              <i class="fa fa-clock-o"></i>
              <span>` +
        originFreeCourseArray[j].time +
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
        originFreeCourseArray[j].originalPrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",$&") +
        ` تومان</h6>
          <h4>رایگان!</h4>
          </div>
        </div>
      </div>

`
    );
  }
} else {
  freeCourse.forEach(function (course) {
    // freeProductGrid.innerHTML=''
    if (freeProductGrid.childElementCount < 8) {
      freeProductGrid.insertAdjacentHTML(
        "afterbegin",
        `

<div class="Product-Card">
        <div class="Card-header">
          <a href="#">
          <img
            src="` +
          course.imgUrl +
          `"
            alt=""
          />
          </a>
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
    }
    //   let categoryContainer = document.querySelector(".Category-Box");
    //   splitedCategory.forEach(function (cat) {
    //     if (cat != "") {
    //       categoryContainer.insertAdjacentHTML(
    //         "beforeend",
    //         `
    // <span>` +
    //           cat +
    //           `</span>
    // `
    //       );
    //     }
    //   });
  });
}