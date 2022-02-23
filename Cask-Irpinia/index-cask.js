/* splash page accept */

/*let over = document.getElementById('over');
let under = document.getElementById('under');

over.addEventListener('click', function(){
    localStorage.setItem('acceptance', "true");
})

under.addEventListener('click', function(){
    alert("Devi avere piu' di 18 anni per accedere")
    window.location.href='https://www.google.com'
});
*/
/* index page scroll */



let menuScroll = () => {
    let scroll = window.scrollY;
    let whiteMenu = document.getElementById('white-menu');
    let yellowMenu = document.getElementById('yellow-menu');
    let blueMenu = document.getElementById('blue-menu');
    let secondLogo= document.getElementById('second-logo');
    let secondMenu = document.getElementById('second-menu');
    let thirdLogo= document.getElementById('third-logo');
    let thirdMenu = document.getElementById('third-menu');

    if (scroll < 700){
        whiteMenu.style.display = 'flex';
        yellowMenu.style.display = 'none';
        blueMenu.style.display = 'none';

        secondLogo.classList.remove('active');
        secondMenu.classList.remove('active');

        thirdLogo.classList.remove('active');
        thirdMenu.classList.remove('active');

    };

    if (scroll > 700 && scroll < 1649){
        whiteMenu.style.display = 'none';
        yellowMenu.style.display = 'flex';
        blueMenu.style.display = 'none';

        secondLogo.classList.add('active');
        secondMenu.classList.add('active');

        thirdLogo.classList.remove('active');
        thirdMenu.classList.remove('active');

                
    };

    if (scroll > 1649 && scroll < 2639){
        whiteMenu.style.display = 'none';
        yellowMenu.style.display = 'none';
        blueMenu.style.display = 'flex';

        secondLogo.classList.remove('active');
        secondMenu.classList.remove('active');

        thirdLogo.classList.add('active');
        thirdMenu.classList.add('active');

    };

    if (scroll > 2639 && scroll < 3692){

        whiteMenu.style.display = 'none';
        yellowMenu.style.display = 'flex';
        blueMenu.style.display = 'none';

        secondLogo.classList.add('active');
        secondMenu.classList.add('active');

        thirdLogo.classList.remove('active');
        thirdMenu.classList.remove('active');


    };

    if (scroll > 3692 && scroll < 4587){

        whiteMenu.style.display = 'none';
        yellowMenu.style.display = 'none';
        blueMenu.style.display = 'flex';

        secondLogo.classList.remove('active');
        secondMenu.classList.remove('active');

        thirdLogo.classList.add('active');
        thirdMenu.classList.add('active');


    };

    if (scroll > 4587){
        whiteMenu.style.display = 'none';
        yellowMenu.style.display = 'none';
        blueMenu.style.display = 'none';
        thirdLogo.classList.remove('active');
    };

};

let newsletterScroll = () =>{
    let scroll = window.scrollY;
    let newsletter = document.getElementById('news-letter');

    newsletter.style.top = (-700 + scroll) + 'px';

    console.log(scroll)

    if(scroll > 3800){
        newsletter.classList.add('inactive');

    };

    if(scroll < 3800){
        newsletter.classList.remove('inactive');

    };

}
window.addEventListener('scroll', menuScroll);
window.addEventListener('scroll', newsletterScroll);

