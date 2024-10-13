import { getImg } from "./api/imgService";
import { createCardsMarkup } from './templates/cards'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const fetchUsersBtn = document.querySelector("input[type=submit]");
const imgs = document.querySelector(".images-div");

fetchUsersBtn.addEventListener("click", handleSearch);


function handleSearch(evt) {
    evt.preventDefault();
    let searchInput = document.querySelector('input[name="search"]');
    let notFoundTextEl = document.querySelector('not-found-el');
    let searchValue = searchInput.value.trim();
    

    if (searchValue <= 0 ) {
        iziToast.show({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        color: "red",
    });
    return;
  }

    getImg(searchValue)
        .then(data => {
    console.log(data.hits);
      if (data.total === 0) {
        imgs.innerHTML = '';
        notFoundTextEl.innerHTML = `Results for query <span>${searchValue}</span> not found!`;
        return;
      }

      createCardsMarkup(data.hits);
    })
    .catch(console.error);

    searchInput.value = "";
}




