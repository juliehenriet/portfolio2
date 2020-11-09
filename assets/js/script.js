const loader = document.getElementById("loader-wrapper");
const owl = document.getElementById("owl");
const main_article = document.getElementById("main-article");

main_article.style.display = "none";



// function loader_setTime() {


//     const p = document.createElement('p');
//     p.classList.add('loading-text')
//     loader.appendChild(p);

//     p.innerText = 'Loading ...'
//     const p_text = document.querySelectorAll('loading-text');
//     //------------------p retourne un tableau ------------//

//     if (owl.style.opacity <= 1) {
//         setTimeout(() => {
//             owl.style.opacity = 1;
//         }, 500);

//         setInterval(() => {

//             for (let a = 0; a <= p_text.length; a++) {
//                 // console.log(p_text.length)
//             }

//         }, 100);

//     }


// }
// loader_setTime();


//     //-------------------je veux que mon texte s'écrit tout seul dans un petit laps de temps -----------//
//     //--------------------------je créer mon texte et je l'ajoute à mon loader-------------------------//

const p = document.createElement('p');
p.classList.add('loading-text');
loader.appendChild(p);
// p.innerText = 'Loading ...';
const p_text = "loading...";

//------------------p_text retourne un tableau--------------//

const words = p_text.split('');

//------------------on parcours le tableau pour avoir chaque lettre--------------//

function writte() {


    setInterval(()=>{
        if(words.length>0){
            p.innerText += words.shift();
        }
    },70);
  

}
writte();
//------------------netotyer le set interval--------------//
