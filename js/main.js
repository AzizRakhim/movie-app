// DISPLAYING THREE CATEGORISED SLIDES

const elFeatureList = document.querySelector(".feature");
const elNewList = document.querySelector(".new");
const elDocumentaryList = document.querySelector(".documentary");
const elOffcanvas = document.querySelector(".offcanvas-list");
const elFindList = document.querySelector(".find-list");
let elRemoveArr = [];

let elRatedMovies = [];
let elNewMovies = [];
let elDocumentary = [];

let tenCount = 0;
let tenCountTwo = 0;
let tenCountThree = 0;

movies.forEach((el) => {
  let elRate = 8.8;

  if (el.imdbRating >= elRate && tenCount < 10) {
    elRatedMovies.push(el);
    tenCount++;
  };
  if (el.year == 2018 && tenCountTwo < 10) {
    elNewMovies.push(el);
    tenCountTwo++;
  };
  if (el.categories == "Documentary" && tenCountThree < 10) {
    elDocumentary.push(el);
    tenCountThree++;
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
                <a target="_blank" href="https://www.imdb.com/title/${el.imdbId}/">
                  <img src="images/imbd.svg" alt="imdb">
                </a>
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
                ${el.categories}
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
      } else if(num == 5){
        elOffcanvas.appendChild(elItem);
        let elHeartColored = elItem.querySelector(".collection__heart");
        elHeartColored.classList.add("red");
      } else if(num == 6){
        elSearchList.appendChild(elItem);
      }
    } 
  });
}

// WORKING WITH THE SLIDERS

let elLength = elFeatureList.querySelectorAll("li");
let elLengthTwo = elNewList.querySelectorAll("li");
let elLengthThree = elDocumentaryList.querySelectorAll("li");

let idx = 0;
let idxTwo = 0;
let idxThree = 0;

let elFeatureArr = [];
let elNewArr = [];
let elDocumentaryArr = [];

elLength.forEach((el) => {
  elFeatureArr.push(el);
});

elLengthTwo.forEach((el) => {
  elNewArr.push(el);
});

elLengthThree.forEach((el) => {
  elDocumentaryArr.push(el);
}); 

let elPrev = document.querySelectorAll(".prev-btn");
let elNext = document.querySelectorAll(".next-btn");

elNext.forEach((el, index) => {
  el.addEventListener("click", () => {
    changeImage(index);
  });
});

elPrev.forEach((el, index) => {
  el.addEventListener("click", () => {
    prevImg(index);
  });
});

function changeImage(index) {
  if(index == 0){
    elFeatureArr[elFeatureArr.length] = elFeatureArr[idx];
    idx++;
    elLength = elFeatureArr;
    displayIt(elLength, 1);
  } else if(index == 1){
    elNewArr[elNewArr.length] = elNewArr[idxTwo];
    idxTwo++;
    elLengthTwo = elNewArr;
    displayIt(elLengthTwo, 2);
  } else if(index == 2){
    elDocumentaryArr[elDocumentaryArr.length] = elDocumentaryArr[idxThree];
    idxThree++;
    elLengthThree = elDocumentaryArr;
    displayIt(elLengthThree, 3);
  }
}

function prevImg(index) {
  if(index == 0){
    let elCorrect = [];
    elCorrect.push(elLength[elLength.length - 1]);

    for(let i = 0; i < elLength.length - 1; i++){
      elCorrect.push(elLength[i]);
    }
    elLength = elCorrect;
    displayIt(elLength, 1);
  } else if(index == 1){
    let elCorrect = [];
    elCorrect.push(elLengthTwo[elLengthTwo.length - 1]);

    for(let i = 0; i < elLengthTwo.length - 1; i++){
      elCorrect.push(elLengthTwo[i]);
    }
    elLengthTwo = elCorrect;
    displayIt(elLengthTwo, 2);
  } else if(index == 2){
    let elCorrect = [];
    elCorrect.push(elLengthThree[elLengthThree.length - 1]);

    for(let i = 0; i < elLengthThree.length - 1; i++){
      elCorrect.push(elLengthThree[i]);
    }
    elLengthThree = elCorrect;
    displayIt(elLengthThree, 3);
  }
}

function displayIt(elArr, num){
  elArr.forEach((el) => {
    if(num == 1){
      elFeatureList.appendChild(el);
    } else if(num == 2){
      elNewList.appendChild(el);
    } else{
      elDocumentaryList.appendChild(el);
    }
  });
}

// WORKING WITH THE WISHLIST

let hearts = document.querySelectorAll(".collection__heart");
hearts.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("red");
  });
});

let elONeTime = [];

function wishlist(smth){
  movies.forEach((el) => {
    if(smth == el.imdbId){
      elONeTime.push(el);
    }
  });
  oneTimePlease(elONeTime);
};

function oneTimePlease(itCame){
  itCame.forEach((el) => {
    let arrThree = itCame;
    let topArrTwo = [];
  
    arrThree.forEach((item) => {
      if(arrThree != "") topArrTwo.push(arrThree[0]);
      arrThree = arrThree.filter((el) => {
        return arrThree[0] != el;
      })
    })
  
    elOffcanvas.innerHTML = "";
    showIt(topArrTwo, 5);
  });
}

// WORKING WITH THE HERO SEARCH

const elSearchList = document.querySelector(".search-list");
const elForm = document.querySelector(".search-form");
let elInput = document.querySelector("#search");

let searchResults = [];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  elSearchList.innerHTML = "";

  let c = 0;
  let elSearchItArr = [];
  let elText = elInput.value.toLowerCase();
  movies.forEach((el) => {
    let movieName = el.title.toLowerCase();
    if(movieName.indexOf(elText) != -1 && c < 10){
      elSearchItArr.push(el);
      elSearchList.style.top = `${100}px`;
      c++;
    }
  });
  showIt(elSearchItArr, 6);
});

// WORKING WITH THE FILTERED SEARCH

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
      let pleaseCount = 0;
      el.categories.forEach((item) => {
        if(category == "All" && pleaseCount == 0){
          newCollection.push(el);
          pleaseCount++;
        } else if(category == item){
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
});