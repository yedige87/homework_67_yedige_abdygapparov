const fetchCards = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      renderCards(data.results);
    });
};

const renderCards = (data) => {
  const cards = document.getElementById("cards");

  data.forEach((item, i) => {
    if (i < 18) {
      const card = document.createElement("a");
      card.href = `character.html?id=${item.id}`;
      card.classList.add("card");

      const characterName = document.createElement("div");
      characterName.classList.add("cardName");
      characterName.innerText = item.name;

      const img = document.createElement("img");
      img.src = item.image;
      img.classList.add("img");

      card.appendChild(img);
      card.appendChild(characterName);

      cards.appendChild(card);
    }
  });
};

fetchCards();
