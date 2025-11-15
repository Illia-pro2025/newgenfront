const e=document.querySelectorAll(".gallery__images__item active");let t=0;e.forEach(((c,l)=>{c.addEventListener("click",(()=>{e[t].classList.remove("active"),t=(l+1)%e.length,e[t].classList.add("active"),console.log("-")}))}));
//# sourceMappingURL=index.f12d4448.js.map
