const elFeatureList = document.querySelector(".feature");
const elNewList = document.querySelector(".new");
const elDocumentaryList = document.querySelector(".documentary");
const elOffcanvas = document.querySelector(".offcanvas-list");
const elFindList = document.querySelector(".find-list")

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
showIt(elRatedMovies, 1);
showIt(elNewMovies, 2);
showIt(elDocumentary, 3);

function showIt(elArr, num) {
  elArr.forEach((el, index) => {
    if(index < 10){
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
            <span class="collection__heart" onclick="wishlist('${el.imdbId}')">
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

      if(num == 1){
        elFeatureList.appendChild(elItem);
      } else if(num == 2){
        elNewList.appendChild(elItem);
      } else if(num == 3){
        elDocumentaryList.appendChild(elItem);
      } else if(num == 4){
        elFindList.appendChild(elItem);
      }
    } 
  });
}


const elLength = elFeatureList.querySelectorAll("li");
const elLengthTwo = elNewList.querySelectorAll("li");
const elLengthThree = elDocumentaryList.querySelectorAll("li");

let idx = 0;

let elPrev = document.querySelectorAll(".prev-btn");
let elNext = document.querySelectorAll(".next-btn");

function changeImage(index) {
  if(index == 0){
    if(idx > elLength.length - 4){
      idx = 0;
    } else if(idx < 0){
      idx = elLength.length - 4;
    }
    elFeatureList.style.transform = `translate(${-idx * 25}%)`;
  } else if(index == 1){
    if(idx > elLengthTwo.length - 4){
      idx = 0;
    } else if(idx < 0){
      idx = elLengthTwo.length - 4;
    }
    elNewList.style.transform = `translate(${-idx * 25}%)`;
  } else if(index == 2){
    if(idx > elLengthThree.length - 4){
      idx = 0;
    } else if(idx < 0){
      idx = elLengthThree.length - 4;
    }
    elDocumentaryList.style.transform = `translate(${-idx * 25}%)`;
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

let hearts = document.querySelectorAll(".collection__heart");

hearts.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.style.color = "red";
  });
});

function wishlist(smth){
  movies.forEach((el) => {
    if(smth == el.imdbId){
      let elItem = document.createElement("li");
      elItem.className = "collection__item col-3";
      elItem.innerHTML = `
        <div class="collection__item-padding">
        <div class="collection__img-holder">
          <img class="featured-img" src="${el.youtubePosterMax}"
          alt="movie">
          <div class="collection__heart-holder">
            <span class="collection__heart me-auto">
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
      
      elOffcanvas.appendChild(elItem);
    }
  });
}

const elSearchList = document.querySelector(".search-list");
const elForm = document.querySelector(".search-form");
let elInput = document.querySelector("#search");

let searchResults = [];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  elSearchList.innerHTML = "";

  let elX = document.createElement("li");
  elX.className = "w-100";
  elX.innerHTML = `
    <button class="x-btn">
      <i class='bx bx-x-circle'></i>    
    </button>
  `;
  elSearchList.appendChild(elX);

  let c = 0;
  let elText = elInput.value.toLowerCase();
  movies.forEach((el) => {
    let movieName = el.title.toLowerCase();
    if(movieName.indexOf(elText) != -1 && c < 10){
      let elItem = document.createElement("li");
      elItem.className = "collection__item col-3";
      elItem.innerHTML = `
        <div class="collection__item-padding">
        <div class="collection__img-holder">
          <img class="featured-img" src="${el.youtubePosterMax}"
          alt="movie">
          <div class="collection__heart-holder">
            <span class="collection__type" data-bs-toggle="modal" data-bs-target="#staticBackdrop${c}">
              MORE 
            </span>
            <div class="modal fade" id="staticBackdrop${c}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
            <span class="collection__heart" onclick="wishlist('${el.imdbId}')">
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

      elSearchList.style.top = `${100}px`;
      elSearchList.appendChild(elItem);
      c++;
    }
  });
});

const elExtendedForm = document.querySelector(".extended-search");
const elExtendedSearch = document.querySelector("#movie-name");
const elCategory = document.querySelector(".category-input");
const elStartYear = document.querySelector("#start-year");
const elEndYear = document.querySelector("#end-year");
const elClickBtn = document.querySelector(".click-me");
const elDatalist = document.querySelector("#date");

elExtendedForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let extendedSearch = elExtendedSearch.value.toLowerCase();
  let category = elCategory.value;
  let startYear = elStartYear.value;
  let endYear = elEndYear.value;

  let newCollection = [];
  
  movies.forEach((el, index) => {
    elFindList.innerHTML = "";
    let elTitle = el.title.toLowerCase();
    if(elTitle.indexOf(extendedSearch) != -1 && el.year >= startYear && el.year <= endYear){
      el.categories.forEach((item) => {
        if(category == item){
          newCollection.push(el);
        }
      })
    }
  });
  showIt(newCollection, 4);
});

let filterPlease = [];
movies.forEach((el) => {
  el.categories.forEach((item) => {
    filterPlease.push(item);
  });
})

let arrTwo = filterPlease;
let topArr = [];

arrTwo.forEach((item) => {
  if(arrTwo != "") topArr.push(arrTwo[0]);
  arrTwo = arrTwo.filter((el) => {
    return arrTwo[0] != el;
  })
})

topArr.forEach((el) => {
  let elOption = document.createElement("option");
  elOption.innerText = el;
  elDatalist.appendChild(elOption);
})






