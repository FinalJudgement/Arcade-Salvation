const imgDisplay = document.querySelector("#img-display > img");
const imgSlider = document.querySelector("#img-slider");
const arrowLeft = document.querySelector(".dir-left");
const arrowRight = document.querySelector(".dir-right");
const form = document.querySelector("form");
const freshMail = document.querySelector(".fresh-mail");
const newEmail = document.querySelector("#email");
const vidContainer = document.querySelector("#videoContainer");
let vidNum = 1;

const load = () => {
  let galleryIndex = 1;
  imgDisplay.src = "assets/ASIMG1.jpg";
  for (let i = 1; i <= 34; i++) {
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

    imgSlider.scrollTo((galleryIndex - 1) * 185, 0);

    // console.log(galleryIndex);
  });
  arrowRight.addEventListener("click", () => {
    if (galleryIndex < 34) {
      galleryIndex++;
      imgDisplay.src = `assets/ASIMG${galleryIndex}.jpg`;
    }
    imgSlider.children[galleryIndex - 2].style.border = "3px solid transparent";
    imgSlider.children[galleryIndex - 1].style.border = "3px solid yellow";

    imgSlider.scrollTo((galleryIndex - 1) * 185, 0);

    // console.log(galleryIndex);
  });
};

const loadFirstVideo = () => {
  const vid = document.createElement("video");
  vid.src = `./assets/videos/video-${vidNum}.mp4`;
  vid.setAttribute("controls", "controls");
  vidContainer.appendChild(vid);
};

const loadNextVideo = () => {
  const exsistingVideo = vidContainer.querySelector("video");
  let back = document.querySelector("#back-vid");
  let next = document.querySelector("#next-vid");
  if (vidNum === 1) {
    back.style.visibility = "hidden";
  } else if (vidNum === 11) {
    next.style.visibility = "hidden";
  } else {
    back.style.visibility = "visible";
    next.style.visibility = "visible";
  }
  vidContainer.removeChild(exsistingVideo);
  const vid = document.createElement("video");
  vid.src = `./assets/videos/video-${vidNum}.mp4`;
  vid.setAttribute("controls", "controls");
  vid.style.visibility = "hidden";
  vidContainer.appendChild(vid);
};

const goNext = () => {
  if (vidNum < 11) {
    vidNum++;
  }
  loadNextVideo();
  setTimeout(() => {
    const newVideo = vidContainer.querySelector("video");
    newVideo.style.visibility = "visible";
  }, 100);
};

const goLast = () => {
  if (vidNum > 1) {
    vidNum--;
  }
  loadNextVideo();
  setTimeout(() => {
    const newVideo = vidContainer.querySelector("video");
    newVideo.style.visibility = "visible";
  }, 100);
};

const customEmail = () => {
  form.addEventListener("change", () => {
    let result = freshMail.value;
    let email = `Inquiry at Arcade Salvation from customer ${newEmail.value}`;
    freshMail.value = email;
  });
};
