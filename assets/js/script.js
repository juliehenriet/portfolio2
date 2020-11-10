const loader = document.getElementById("loader-wrapper");
const owl = document.getElementById("owl");
const main_article = document.getElementById("main-article");
//     //-------------------je veux que mon texte s'écrit tout seul dans un petit laps de temps -----------//
//     //--------------------------je créer mon texte et je l'ajoute à mon loader-------------------------//
const load_div = document.createElement('div');
load_div.classList.add('container_loader');
const p = document.createElement('p');
p.classList.add('loading-text');
loader.appendChild(load_div);
load_div.appendChild(p);
let count = 0;
const p_text = "Loading ...";
const counter = document.createElement('p');
counter.classList.add('count');
load_div.appendChild(counter);

//------------------p_text retourne un tableau--------------//

const words = p_text.split('');

//------------------on parcours le tableau pour avoir chaque lettre--------------//

function writte() {
   
    setInterval(() => {
        if (words.length > 0) {
            p.innerText += words.shift();
        }
            owl.style.opacity = 1;
           

    }, 70);

    setInterval(() => {
        
        if (count <= 99) {
            count++;
            counter.innerText = " " + count + "%";
           
        }

    
    }, 10);

}
writte();

main_article.style.display = "none";