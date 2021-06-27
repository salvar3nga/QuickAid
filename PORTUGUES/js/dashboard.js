const navSlide = () =>{

    const burger = document.querySelector("#burger");
    const nav = document.querySelector("#navbar__links");

    const links = document.querySelectorAll('.navbar__items');

    burger.addEventListener('click', ()=>{
        //TOGGLE Class
        nav.classList.toggle('nav-active');

        //Animate Links

        animateLinks();

        //BURGER ANIMATION

        burger.classList.toggle('toggle');

       
    });

    const mainContentArea = document.querySelector('.main');


    if(mainContentArea === null) return;

    

    
    mainContentArea.addEventListener('click', ()=>{
        
        if(!(burger.classList == 'burger toggle')) return;
        console.log(burger.style);
        nav.classList.remove('nav-active');
        animateLinks();
        burger.classList.remove('toggle');
    })

   

    
    function animateLinks(){
        links.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation =
                `navLinksFade 1s ease forwards ${index/7 + 0.3}s `
            }
           
        });
    }
}




const app = () =>{
   
    navSlide();
   
}

app()
