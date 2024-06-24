const ref = {
    list: document.querySelector("#language"),
    box: document.querySelector(".language-box"),
    option: document.querySelectorAll(".language-option"),
    imgFl: document.querySelector(".language-image"),
    label: document.querySelector(".language-label"),
  };
  const { list, box, option, imgFl, label } = ref;
  
  const obj = {
    UA: {
        //header
        home:"Головна",
        about:"Про нас",
        curriculum:"Навчальна програма",
        ourTeam:"Наш колектив",
        reviews:"Відгуки",
        schoolName:"Школа комп'ютерноЇ майстерності",   
        extracurricular:"Позашкільний навчальний заклад для дітей віком від 8 до 14 років.",
        frontEnd:"Front-end розробник, веб-розробник, веб-верстальник - це професії, на яких можуть працювати наші випускники та стануть успішними.",
        forming:"Формуємо успішних у світі, що змінюється!",
        course:"Вибрати курс",
        callback:"Замовити дзвінок",
        ourschool:"Наша школа",
        aboutBlock:"Працюють тільки професійні викладачі, які мають вищу педагогічну освіту.Поле наших знань лежить в сфері сайтобудування, а саме FRONT-END розробки, яка на даний момент розвивається найшвидше.Це гарантовано дає можливість нашим учням отримати престижну та високооплачувану професію.Успіх в навчанні залежить не тільки від викладачів, а й від учнів, від їх здібностей, бажання, сумлінності та базових знань. Тому, перш ніж записатись в нашу школу, учні запрошуються на БЕЗКОШТОВНИЙ пробний урок, для того, щоб побачити та відчути на собі роботу нашого колективу.",
        more:"Дізнатись більше",

        //footer
        ouraddress: "Наші адреса",
        socials: "Ми в соц.мережах",
        address_if: "м. Івано-Франківськ, вул. Північний бульвар 5б",
        address_kriviy_rih: "м. Кривий Ріг, вул. Співдружності 92а",
        address_zaporizhzhia: "м. Запоріжжя, вул. Шкільна 56",
    },
    EN: {
        //header
        home:"Home",
        about:"About",
        curriculum:"Curriculum",
        ourTeam:"Our Team",
        reviews:"Reviews",
        schoolName:"School of Computer Skills",
        extracurricular:"Extracurricular educational institution for children aged 8 to 14 years.",
        frontEnd:"Front-end developer, web developer, web designer - these are professions in which our graduates can work and become successful.",
        forming:"We form successful people in a changing world!",
        course:"Choose a course",
        callback:"Order a call",
        ourschool:"Our school",
        aboutBlock:"Only professional teachers with a higher pedagogical education work.The field of our knowledge lies in the field of website development, namely FRONT-END development, which is currently developing the fastest.This is guaranteed to give our students the opportunity to get a prestigious and highly paid profession.Success in education depends not only on teachers, but also on students, on their abilities, desire, conscientiousness and basic knowledge. Therefore, before enrolling in our school, students are invited to a FREE trial lesson in order to see and experience the work of our team.",
        more:"Explore more",

        //footer
        ouraddress:"Our Address",
        socials: "We are on social media",
        address_if: "Ivano-Frankivsk, Pivnichnyi Boulevard 5b",
        address_kriviy_rih: "Kryvyi Rih, Spivdruzhnist 92a",
        address_zaporizhzhia: "Zaporizhzhia, Shkilna 56",
    },
  };
  
  list.addEventListener("click", () => {
    list.classList.toggle("open");
  });
  
  option.forEach((el) =>
  
    el.addEventListener("click", function (e) {
  
      if (!list.classList.contains("open")) return;
  
      list.classList.contains("open");
      let data = e.currentTarget.dataset.language.split(",");
      label.textContent = data[0];
  
      imgFl.setAttribute("src", `${data[1]}`);
  
      changeLanguage(label.textContent);
    })
  );
  function changeLanguage(lang) {
    document.querySelectorAll("[data-translate-key]").forEach((element) => {
      const key = element.getAttribute("data-translate-key");
      element.textContent = obj[lang][key];
    });
  }
  