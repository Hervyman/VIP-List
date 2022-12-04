const bodyDiv = document.getElementById(`div`);

fetch("./vipList.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const render = () => {
      bodyDiv.innerHTML = "";
      data.map(({ name, worth, birth_year, source, country, image }) => {
        const cardDiv = document.createElement(`div`);
        const cardImg = document.createElement(`img`);
        const titleDiv = document.createElement(`div`);
        const cardTitle = document.createElement(`h5`);
        const cardUl = document.createElement(`ul`);
        const worthLi = document.createElement(`li`);
        const birthLi = document.createElement(`li`);
        const sourceLi = document.createElement(`li`);
        const countryLi = document.createElement(`li`);

        cardDiv.classList.add("card", "m-2");
        cardImg.classList.add("card-img-top");
        titleDiv.classList.add("card-body");
        cardTitle.classList.add("card-title");
        cardUl.classList.add("list-group", "list-group-flush");
        worthLi.classList.add("list-group-item");
        birthLi.classList.add("list-group-item");
        sourceLi.classList.add("list-group-item");
        countryLi.classList.add("list-group-item");

        cardDiv.dataset.cardName = name;
        cardImg.src = image;
        cardImg.alt = `picture of ` + name;
        cardTitle.innerHTML = `Name: ` + name;
        worthLi.innerHTML = `Worth: ` + worth;
        birthLi.innerHTML = `Birth year: ` + birth_year;
        sourceLi.innerHTML = `Source of wealth: ` + source;
        countryLi.innerHTML = `Country: ` + country;

        cardUl.appendChild(worthLi);
        cardUl.appendChild(birthLi);
        cardUl.appendChild(sourceLi);
        cardUl.appendChild(countryLi);
        titleDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(titleDiv);
        cardDiv.appendChild(cardUl);
        bodyDiv.appendChild(cardDiv);

        cardDiv.addEventListener(`click`, (e) => {
          let findName =
            e.target.closest(`div[data-card-name]`).dataset.cardName;
          data = data.filter((card) => findName !== card.name);
          render();
        });
      });
    };
    render();
  })
  .catch((err) => console.log(err));
