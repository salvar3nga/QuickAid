// Check if button next has been clicked
const nextBtn = () =>{
    
    const form = document.getElementById('form');

    const textInputs = document.querySelectorAll('input[type=text]');
    const nrOfPeople = document.querySelector('input[type=number]');
    const emergencyDescription = document.querySelector('textarea');

    form.addEventListener('submit', (evt) =>{
        

        textInputs.forEach(text=>{
            if(text.value.trim() < 2 || text.value == null){
                evt.preventDefault();
                return;
            }else{
                //Store the values locally!
                createStorage(text.id, text.value);
            }       

        });



        createStorage(nrOfPeople.id, nrOfPeople.value)
        
        //create storage ig user used the description box
        if(emergencyDescription.value.trim() !== ""){
            createStorage(emergencyDescription.id, emergencyDescription.value);
        }
          
        
        
        

    });


    //CREATES LOCAL STORAGE TO STORE THE VALUES THE USER PROVIDED

    function createStorage(key, value){
        //! SESSION STORAGE is being created. NOT Local Storage!!
        sessionStorage.setItem(key, value);
    }

    function deleteAllStorage(){
        sessionStorage.clear();
    }
} 

const checkCancelBtn = () =>{
    
    const cancelButton = form.querySelector('.btn-cancel');
    cancelButton.addEventListener('click', ()=>{

        const inputs = document.querySelectorAll('input');
        let run = true;

        let answer;

        //check if any input has some value! If so prompt the user!
        for(let i=0; i<inputs.length; i++){
            
            
            if(inputs[i].value !== "" && run){
                if(inputs[i].type === "checkbox") continue;
                answer = confirm("Are you sure you want to cancel? All progress will be lost!");
                if(answer){
                    window.location.href = "./dashboard.html";
                }
                run = false;
                return;
            }

            //otherwise if everything is empty do not prompt
            if(i==(inputs.length -1) && (answer == undefined)){
                window.location.href = "./dashboard.html"
            }
        }

      
      
        
         
     })
}






const main = () =>{
    nextBtn();
    checkCancelBtn();
};

main();