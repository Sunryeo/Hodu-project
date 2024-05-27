// 상단 스크롤
function scrollTopFixed() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 모달창
const modalOpenButton = document.getElementById("modal-open-btn");
const modalCloseButton = document.getElementById("modal-close-btn");
const modal = document.getElementById("modal-container");

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

modalOpenButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);

// cataas version
/**
 * const button = document.getElementById("show-more-btn");
const container = document.getElementById("img-container");
button.addEventListener("click", () => {
  const newUl = document.createElement("ul");
  newUl.setAttribute("class", "img-frame-2");

  for (let i = 0; i < 3; i++) {
    const tagList = [
      "funny",
      "cute",
      "orange",
      "jellybean",
      "sleepy",
      "tired",
      "outside",
      "grass",
      "hovercat",
      "hug",
      "huge",
      "programmer",
      "proud",
      "psychedelic",
      "puffy",
    ];
    const randomInt = Math.floor(Math.random() * tagList.length);
    const newLi = document.createElement("li");

    const newImage = document.createElement("img");
    const requestUrl = "https://cataas.com/cat";
    const requestQuery = `?tag=${tagList[randomInt]}&width=378&height=378`;
    newImage.src = requestUrl + requestQuery;
    newImage.alt = "";
    newImage.setAttribute("class", "list-image");

    newLi.appendChild(newImage);
    newUl.appendChild(newLi);
    container.appendChild(newUl);
  }
});
 */

// picsum fetch version
const button = document.getElementById("show-more-btn");
const container = document.getElementById("img-container");
button.addEventListener("click", () => {
  const newUl = document.createElement("ul");
  newUl.setAttribute("class", "img-frame-2");
  const randomInt = Math.floor(Math.random() * 10);

  fetch(`https://picsum.photos/v2/list?page=${randomInt}&limit=3`)
    .then((res) => {
      res = res.json();
      return res;
    })
    .then((data) => {
      for (let i = 0; i < 3; i++) {
        const newLi = document.createElement("li");

        const newImage = document.createElement("img");
        newImage.src = data[i].download_url;
        newImage.alt = "";
        newImage.setAttribute("class", "list-image");

        newLi.appendChild(newImage);
        newUl.appendChild(newLi);
      }
      container.appendChild(newUl);
    })
    .catch((e) => {
      throw e;
    });
});

// 지도
const mapContainer = document.getElementById("map"),
  mapOption = {
    center: new kakao.maps.LatLng(33.442552, 126.571519),
    level: 3,
  };
const map = new kakao.maps.Map(mapContainer, mapOption);
