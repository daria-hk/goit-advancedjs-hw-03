/* empty css                      */import{S as f,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d="46483987-c8443b8397d1fa46fa83b5f89";function h(o){const r=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r.toString()}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}let n;function p(o){const r=o.map(({tags:i,webformatURL:e,largeImageURL:t,likes:s,views:a,comments:c,downloads:u})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${t}">
            <img class="gallery-img" src="${e}" alt="${i}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${s}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${a}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${c}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${u}</li>
                </ul>
            </div>
        </a>
      </li>`).join(""),l=document.querySelector("ul.images-div");l.innerHTML=r,n?n.refresh():n=new f(".images-div a",{captionsData:"alt",captionDelay:250})}const g=document.querySelector("input[type=submit]"),y=document.querySelector(".images-div");g.addEventListener("click",b);function b(o){o.preventDefault();let r=document.querySelector('input[name="search"]'),l=document.querySelector("not-found-el"),i=r.value.trim();if(i<=0){m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}h(i).then(e=>{if(console.log(e.hits),e.total===0){y.innerHTML="",l.innerHTML=`Results for query <span>${i}</span> not found!`;return}p(e.hits)}).catch(console.error),r.value=""}
//# sourceMappingURL=gallery.js.map
