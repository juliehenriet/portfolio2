const loader = document.getElementById("loader-wrapper");
const owl = document.getElementById("owl");
const main_article = document.getElementById("main-article");

main_article.style.display = "none";



function loader_setTime() {

    const p = document.createElement('p');
    loader.appendChild(p);
    p.innerText = "Loading ..."
    
    if (owl.style.opacity <= 1) {
        setTimeout(() => {
            owl.style.opacity = 1;
        }, 500);
    }
}
loader_setTime();