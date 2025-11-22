const e=document.querySelectorAll(".gallery__images__item");let l=0;console.log(125),e.forEach(((c,t)=>{c.addEventListener("click",(()=>{e[l].classList.remove("active"),l=(t+1)%e.length,e[l].classList.add("active"),console.log("-")}))}));
//# sourceMappingURL=index.4cb08bd6.js.map
