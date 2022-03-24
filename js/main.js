const elFeatureList = document.querySelector(".feature");
const elNewList = document.querySelector(".new");
const elDocumentaryList = document.querySelector(".documentary");
let elRatedMovies = [];
let elNewMovies = [];
let elDocumentary = [];

movies.forEach((el) => {
  let elRate = 8.8;
  if (el.imdbRating >= elRate) {
    elRatedMovies.push(el);
  };
  if (el.year == 2018) {
    elNewMovies.push(el);
  };
  if (el.categories == "Documentary") {
    elDocumentary.push(el);
  }
});

let i = 0;
rateIt(elRatedMovies);
newIt(elNewMovies);
documentaryIt(elDocumentary);

function rateIt(elArr) {
  elArr.forEach((el, index) => {
    let elItem = document.createElement("li");
    elItem.className = "collection__item col-3";
    elItem.innerHTML = `
      <div class="collection__item-padding">
      <div class="collection__img-holder">
        <img class="featured-img" src="${el.youtubePosterMax}"
        alt="movie">
        <div class="collection__heart-holder">
          <span class="collection__type" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
            MORE 
          </span>
          <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${el.title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex">
                  <div class="i-frame-part col-6">
                    <iframe width="100%" height="408" src="https://www.youtube.com/embed/${el.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="desc-part col-6 ps-3">
                    ${el.summary}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="collection__heart">
            <i class='bx bxs-heart'></i>
          </span>
        </div>
      </div>
      <div class="collection__info">
        <div class="collection__year">
          ${el.language},
          <span class="collection__year-num">
            ${el.year}
          </span>
        </div>
        <h2 class="collection__title">
          ${el.title}
        </h2>
        <div class="collection__rate-holder">
          <div class="collection__imdb d-flex justify-content-between align-items-center">
            <div class="collection__imdb-container d-flex align-items-center">
              <img src="images/imbd.svg" alt="imdb">
              <span class="collection__imdb-rate">
                86.0 / 100
              </span>
            </div>
            <div class="collection__rate d-flex align-items-center">
              <img src="images/tomato.svg" alt="tomato">
                <span class="collection__rate-num">
                  ${el.imdbRating}
                </span>
                </div>
              </div>
            </div>
            <div class="collection__category">
              ${el.categories.join(", ")}
            </div>
          </div>
        </div>  
    `;

    i++;
    elFeatureList.appendChild(elItem);
  });
}

function newIt(elArr) {
  elArr.forEach((el, index) => {
    let elItem = document.createElement("li");
    elItem.className = "collection__item col-3";
    elItem.innerHTML = `
      <div class="collection__item-padding">
      <div class="collection__img-holder">
        <img class="featured-img" src="${el.youtubePosterMax}"
        alt="movie">
        <div class="collection__heart-holder">
          <span class="collection__type" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
            MORE
          </span>
          <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${el.title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex">
                  <div class="i-frame-part col-6">
                    <iframe width="100%" height="408" src="https://www.youtube.com/embed/${el.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="desc-part col-6 ps-3">
                    ${el.summary}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="collection__heart">
            <i class='bx bxs-heart'></i>
          </span>
        </div>
      </div>
      <div class="collection__info">
        <div class="collection__year">
          ${el.language},
          <span class="collection__year-num">
            ${el.year}
          </span>
        </div>
        <h2 class="collection__title">
          ${el.title}
        </h2>
        <div class="collection__rate-holder">
          <div class="collection__imdb d-flex justify-content-between align-items-center">
            <div class="collection__imdb-container d-flex align-items-center">
              <img src="images/imbd.svg" alt="imdb">
              <span class="collection__imdb-rate">
                86.0 / 100
              </span>
            </div>
            <div class="collection__rate d-flex align-items-center">
              <img src="images/tomato.svg" alt="tomato">
                <span class="collection__rate-num">
                  ${el.imdbRating}
                </span>
                </div>
              </div>
            </div>
            <div class="collection__category">
              ${el.categories.join(", ")}
            </div>
          </div>
        </div>  
    `;

    i++;
    elNewList.appendChild(elItem);
  });
}

function documentaryIt(elArr) {
  elArr.forEach((el, index) => {
    let elItem = document.createElement("li");
    elItem.className = "collection__item col-3";
    elItem.innerHTML = `
      <div class="collection__item-padding">
      <div class="collection__img-holder">
        <img class="featured-img" src="${el.youtubePosterMax}"
        alt="movie">
        <div class="collection__heart-holder">
          <span class="collection__type" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
            MORE
          </span>
          <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${el.title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex">
                  <div class="i-frame-part col-6">
                    <iframe width="100%" height="408" src="https://www.youtube.com/embed/${el.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="desc-part col-6 ps-3">
                    ${el.summary}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="collection__heart">
            <i class='bx bxs-heart'></i>
          </span>
        </div>
      </div>
      <div class="collection__info">
        <div class="collection__year">
          ${el.language},
          <span class="collection__year-num">
            ${el.year}
          </span>
        </div>
        <h2 class="collection__title">
          ${el.title}
        </h2>
        <div class="collection__rate-holder">
          <div class="collection__imdb d-flex justify-content-between align-items-center">
            <div class="collection__imdb-container d-flex align-items-center">
              <img src="images/imbd.svg" alt="imdb">
              <span class="collection__imdb-rate">
                86.0 / 100
              </span>
            </div>
            <div class="collection__rate d-flex align-items-center">
              <img src="images/tomato.svg" alt="tomato">
                <span class="collection__rate-num">
                  ${el.imdbRating}
                </span>
                </div>
              </div>
            </div>
            <div class="collection__category position-relative">
              ${el.categories.join(", ")}
            </div>
          </div>
        </div>  
    `;

    i++;
    elDocumentaryList.appendChild(elItem);
  });
}

const elLength = elFeatureList.querySelectorAll("li");
const elLengthTwo = elNewList.querySelectorAll("li");
const elLengthThree = elDocumentaryList.querySelectorAll("li");
console.log(elLengthThree);

let idx = 0;

let elPrev = document.querySelectorAll(".prev-btn");
let elNext = document.querySelectorAll(".next-btn");

function changeImage(index) {
  if(index == 0){
    if(idx > elLength.length - 1){
      idx = 0;
    } else if(idx < 0){
      idx = elLength.length - 1;
    }
    elFeatureList.style.transform = `translate(${-idx * 275}px)`;
  } else if(index == 1){
    if(idx > elLengthTwo.length - 1){
      idx = 0;
    } else if(idx < 0){
      idx = elLengthTwo.length - 1;
    }
    elNewList.style.transform = `translate(${-idx * 275}px)`;
  } else if(index == 2){
    if(idx > elLengthThree.length - 1){
      idx = 0;
    } else if(idx < 0){
      idx = elLengthThree.length - 1;
    }
    elDocumentaryList.style.transform = `translate(${-idx * 275}px)`;
  }
}

elNext.forEach((el, index) => {
  el.addEventListener("click", function change() {
    idx++;
  
    changeImage(index);
  });
});

elPrev.forEach((el, index) => {
  el.addEventListener("click", function change() {
    idx--;
  
    changeImage(index);
  });
});

