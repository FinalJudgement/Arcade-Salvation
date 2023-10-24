const imgDisplay = document.querySelector("#img-display > img");
const imgSlider = document.querySelector("#img-slider");
const arrowLeft = document.querySelector(".dir-left");
const arrowRight = document.querySelector(".dir-right");
const form = document.querySelector("form");
const freshMail = document.querySelector(".fresh-mail");
const newEmail = document.querySelector("#email");

const load = () => {
  let galleryIndex = 1;
  imgDisplay.src = "assets/ASIMG1.jpg";
  for (let i = 1; i <= 9; i++) {
    let createImg = document.createElement("img");
    createImg.src = `assets/ASIMG${i}.jpg`;
    createImg.addEventListener("click", (e) => {
      imgDisplay.src = createImg.src;
      imgSlider.children[galleryIndex - 1].style.border =
        "3px solid transparent";
      galleryIndex = createImg.value;
      imgSlider.children[galleryIndex - 1].style.border = "3px solid yellow";
    });
    createImg.style.border = "3px solid transparent";
    createImg.value = i;
    imgSlider.appendChild(createImg);
  }
  imgSlider.children[galleryIndex - 1].style.border = "3px solid yellow";
  arrowLeft.addEventListener("click", () => {
    if (galleryIndex > 1) {
      galleryIndex--;
      imgDisplay.src = `assets/ASIMG${galleryIndex}.jpg`;
    }
    imgSlider.children[galleryIndex].style.border = "3px solid transparent";
    imgSlider.children[galleryIndex - 1].style.border = "3px solid yellow";

    imgSlider.scrollTo((galleryIndex - 1) * 70, 0);

    // console.log(galleryIndex);
  });
  arrowRight.addEventListener("click", () => {
    if (galleryIndex < 9) {
      galleryIndex++;
      imgDisplay.src = `assets/ASIMG${galleryIndex}.jpg`;
    }
    imgSlider.children[galleryIndex - 2].style.border = "3px solid transparent";
    imgSlider.children[galleryIndex - 1].style.border = "3px solid yellow";

    imgSlider.scrollTo((galleryIndex - 1) * 70, 0);

    // console.log(galleryIndex);
  });
};

const customEmail = () => {
  form.addEventListener("change", () => {
    let result = freshMail.value;
    let email = `Inquiry at Arcade Salvation from customer ${newEmail.value}`;
    freshMail.value = email;
  });
};
