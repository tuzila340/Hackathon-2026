document.querySelectorAll(".card_button").forEach(function(button) {
    button.addEventListener("click", function() {
        const cardWrapper = this.closest('.card_container');

        const card = cardWrapper.querySelector(".card_front");
        const background = cardWrapper.querySelector(".card_background");

        if (card) {
            card.style.transform = "rotateY(180deg)";
        }
        if (background) {
            background.style.transform = "rotateY(360deg)";
        }
    });
});

document.querySelectorAll(".card_close_button").forEach(function(button) {
    button.addEventListener("click", function() {
        const cardWrapper = this.closest('.card_container');

        const card = cardWrapper.querySelector(".card_front");
        const background = cardWrapper.querySelector(".card_background");

        if (card) {
            card.style.transform = "rotateY(360deg)";
        }
        if (background) {
            background.style.transform = "rotateY(180deg)";
        }
    });
});