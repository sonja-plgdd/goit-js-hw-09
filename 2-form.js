import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector(".feedback-form");document.querySelector("input");document.querySelector("textarea");const a={email:"",message:""},l="feedback-form-state";r.addEventListener("input",m);function m(t){const e=t.currentTarget.elements;a.email=e.email.value.trim(),a.message=e.message.value.trim(),localStorage.setItem(l,JSON.stringify(a))}r.addEventListener("submit",o);function o(t){t.preventDefault();const e=t.currentTarget.elements;(e.email.value.trim()==""||e.message.value.trim()=="")&&alert`Fill please all fields`,console.log(JSON.parse(localStorage.getItem(l))),localStorage.removeItem(l),r.reset()}
//# sourceMappingURL=2-form.js.map
