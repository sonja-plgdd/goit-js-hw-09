import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const o=document.querySelector(".feedback-form"),l=document.querySelector("input"),r=document.querySelector("textarea"),e={email:"",message:""},a="feedback-form-state";window.addEventListener("load",n);function n(){const t=localStorage.getItem(a);if(t){const m=JSON.parse(t);e.email=m.email||"",e.message=m.message||"",l.value=e.email,r.value=e.message}}o.addEventListener("input",s);function s(t){e.email=l.value.trim(),e.message=r.value.trim(),localStorage.setItem(a,JSON.stringify(e))}o.addEventListener("submit",i);function i(t){if(t.preventDefault(),l.value.trim()==""||r.value.trim()==""){alert("Fill please all fields");return}console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),o.reset()}
//# sourceMappingURL=2-form.js.map
