// CHEK IF USER CLICKED THE "HAS CAR" CHECKBOS
const checkboxCheck = ()=>{

    const checkbox = document.getElementById('has-car');
    const carOptions = document.querySelectorAll('.form__car-control div');

   

    checkbox.addEventListener('click', ()=>{

       
       carOptions.forEach(carOption =>{
        if(checkbox.checked === true){
            carOption.classList.add('visible');
        }else{
            carOption.classList.remove('visible');
        }
       })
       
    })
   
    
}

// CHECKS FOR INAPROPIATE DATA AND LIGHTS UP THE FORM

const checkForm = () =>{
    const form = document.getElementById('form');

    const textInputs = document.querySelectorAll('input[type=text]');
    // const plateNr = document.getElementById('plate-nr');

    
    
    
    // When User clicks the submit button
    form.addEventListener('submit', (evt)=>{

        //not the best way but...
        
        const plate = textInputs[textInputs.length -1].defaultValue = "no";
        
        textInputs.forEach(input=>{
            if(!(checkRequired(input) && checkLength(input,2))){
                evt.preventDefault();
            }
           
        })
        

    })

    function checkRequired(input){
        if(input.value.trim() === '' || input.value == null){
            
            showErrorMsg(input, 'is required');
            return false;
        }else{
            showSuccess(input);
            return true
        }
    }

    function checkLength(input, min){
        if((input.value.length < min) && (input.value.trim().length <= 1) ){
            showErrorMsg(input, `must have at least ${min} characters`);
            return false; 
        }else{
            showSuccess(input);
            return true;
        }
    }
    function getFieldName(input){
        return input.id.toUpperCase();
    }


    // SHOW ERROR MSG
    function showErrorMsg(input, msg){
        const formControl = input.parentElement;
        
        formControl.classList.add('error');

        const small = formControl.querySelector('small');
        small.innerText= `${getFieldName(input)} ${msg}`;
        rmvSuccess(formControl);
    }

    function showSuccess(input){
        const formControl = input.parentElement;
        formControl.classList.add('sucess');
        rmvErrorMsg(formControl);
    }

    // REMOVE BORDERS
    function rmvErrorMsg(formControl){
        formControl.classList.remove('error');
    }

    function rmvSuccess(formControl){
        formControl.classList.remove('sucess');
    }



    /*
     TODO:
     Implement confirm if form has some data but user clicks on cancel button 
    */

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



const main = ()=>{
    checkboxCheck();
    checkForm();
};


main();