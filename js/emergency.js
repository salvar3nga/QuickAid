// Check if button next has been clicked
const nextBtn = () =>{
    
    const form = document.getElementById('form');

    form.addEventListener('submit', (evt) =>{
        evt.preventDefault();

        alert("The next page is currently beeing implemented!")
        
    })

}  






const main = () =>{
    nextBtn();
};

main();