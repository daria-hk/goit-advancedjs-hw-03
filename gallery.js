/* empty css                      */import{S as m,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="46483987-c8443b8397d1fa46fa83b5f89";function h(i){const t=new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${t.toString()}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let n;function g(i){const t=i.map(({tags:l,webformatURL:e,largeImageURL:r,likes:s,views:c,comments:u,downloads:f})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${r}">
            <img class="gallery-img" src="${e}" alt="${l}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${s}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${c}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${u}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${f}</li>
                </ul>
            </div>
        </a>
      </li>`).join(""),o=document.querySelector("ul.images-div");o.innerHTML=t,n?n.refresh():n=new m(".images-div a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector("input[type=submit]"),y=document.querySelector(".images-div");p.addEventListener("click",b);function b(i){i.preventDefault();let t=document.querySelector('input[name="search"]'),o=document.querySelector(".not-found-el"),l=t.value.trim();if(l<=0){a.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}h(l).then(e=>{if(console.log(e.hits),e.total===0){y.innerHTML="",o.innerHTML=`Results for query <span>${l}</span> not found!`,a.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}g(e.hits)}).catch(console.error),t.value=""}
//# sourceMappingURL=gallery.js.map
