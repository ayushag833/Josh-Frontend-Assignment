let data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [
      {
        domain: "Front End Development",
        skill1: "Html",
        skill2: "CSS",
        skill3: "Js",
        skill4: "PHP",
        skill5: "WordPress",
        number1: 90,
        number2: 85,
        number3: 80,
        number4: 75,
        number5: 85,
      },
      {
        domain: "Languages",
        skill1: "Hindi",
        skill2: "English",
        number1: 90,
        number2: 85,
      },
      {
        domain: "Back End Development",
        skill1: "NodeJS",
        skill2: "SSR",
        number1: 90,
        number2: 85,
      },
      {
        domain: "Front End Development",
        skill1: "Html",
        skill2: "CSS",
        skill3: "Js",
        skill4: "PHP",
        skill5: "WordPress",
        number1: 90,
        number2: 85,
        number3: 80,
        number4: 75,
        number5: 85,
      },
      {
        domain: "Languages",
        skill1: "Hindi",
        skill2: "English",
        number1: 90,
        number2: 85,
      },
      {
        domain: "Back End Development",
        skill1: "NodeJS",
        skill2: "SSR",
        number1: 90,
        number2: 85,
      },
    ];

export default data;
