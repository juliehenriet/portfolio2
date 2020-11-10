const loader = document.getElementById("loader-wrapper");
const owl = document.getElementById("owl");
const main_article = document.getElementById("main-article");

main_article.style.display = "none";



//     //-------------------je veux que mon texte s'écrit tout seul dans un petit laps de temps -----------//
//     //--------------------------je créer mon texte et je l'ajoute à mon loader-------------------------//


const p = document.createElement('p');
p.classList.add('loading-text');
loader.appendChild(p);
let count = 0;
// p.innerText = 'Loading ...';
const p_text = "loading ...";

const counter = document.createElement('p');
counter.classList.add('count');
loader.appendChild(counter);
//------------------p_text retourne un tableau--------------//

const words = p_text.split('');

//------------------on parcours le tableau pour avoir chaque lettre--------------//

function writte() {
   
    setInterval(() => {
        if (words.length > 0) {
            p.innerText += words.shift();
        }

        let opacity = 0;

        if (opacity <= 1) {
            opacity +=0.1;
            owl.style.opacity = opacity;
        }
    }, 70);

    setInterval(() => {
        
        if (count <= 99) {
            ++count;
            console.log(count)
            counter.innerText = count + "%";
           
        }

    
    }, 20);

}
writte();
//------------------netotyer le set interval--------------//
