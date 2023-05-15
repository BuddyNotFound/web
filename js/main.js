window.history.replaceState&&window.history.replaceState(null,null,window.location.href);const textarea=document.querySelector("textarea");textarea&&textarea.addEventListener("keydown",e=>{if("Tab"===e.key){e.preventDefault();let t=textarea.selectionStart,a=textarea.selectionEnd,r=e.target,l=r.value;r.value=l.substring(0,t)+"    "+l.substring(a),textarea.selectionStart=textarea.selectionEnd=t+4}});

const searchBar = document.getElementById("top-nav-search");

searchBar.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    var pathe = 'http://localhost:3000/paste.php?id=';
    alert(pathe + searchBar.value);
    location.href = pathe + searchBar.value;
  }
});