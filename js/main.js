(() => {
  const options = document.querySelector("#options");

  options.addEventListener("click", (event) => {
    const selectedOption = event.target;
    const selectedOptionId = parseInt(event.target.getAttribute("data-card"));
    const card3 = document.querySelector("#card-3");
    const card2 = document.querySelector("#card-2");
    const card1 = document.querySelector("#card-1");

    const selectOption = (selectedOption) => {
      let lastSelected = document.querySelector(".active-option");
      lastSelected.classList.remove("active-option");
      return selectedOption.classList.add("active-option");
    }

    const resetPlace = (item) => {
      return item.classList.remove("middle", "right", "left");
    }

    const placeLeft = (card) => {
      resetPlace(card);
      return card.classList.add("left");
    }

    const placeRight = (card) => {
      resetPlace(card);
      return card.classList.add("right");
    }

    const placeMiddle = (card) => {
      resetPlace(card);
      return card.classList.add("middle");
    }

    selectOption(selectedOption);

    if (selectedOptionId === 3) {
      placeMiddle(card3);
      placeLeft(card2);
      placeRight(card1);
    }

    if (selectedOptionId === 2) {
      placeMiddle(card2);
      placeLeft(card1);
      placeRight(card3);
    }

    if (selectedOptionId === 1) {
      placeMiddle(card1);
      placeLeft(card3);
      placeRight(card2);
    }
  });

})();
