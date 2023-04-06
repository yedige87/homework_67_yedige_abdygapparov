const fetchCharacter = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const characterId = urlParams.get("id");
  fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then((res) => res.json())
    .then((data) => {
      renderCharacter(data);
    });
};

const renderCharacter = (character) => {
  const container = document.getElementById("container");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = character.image;

  const info = document.createElement("div");
  info.classList.add("info");

  Object.entries(character).forEach(([field, value]) => {
    if (typeof value !== "object") {
      const fieldGroup = document.createElement("div");
      fieldGroup.classList.add("fieldGroup");
      const fieldDiv = document.createElement("div");
      fieldDiv.classList.add("fieldDiv");
      fieldDiv.innerText = field + ":";
      const valueDiv = document.createElement("div");
      valueDiv.classList.add("valueDiv");
      valueDiv.innerText = value;
      fieldGroup.appendChild(fieldDiv);
      fieldGroup.appendChild(valueDiv);

      info.appendChild(fieldGroup);
    }
  });

  card.appendChild(img);
  card.appendChild(info);
  container.appendChild(card);
};

fetchCharacter();
