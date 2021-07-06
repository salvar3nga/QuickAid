const tableFilter = () => {

    //Retrieve the city name from the local Storage 
    const city = sessionStorage.getItem('city')

    
    updateDisplay(city, sessionStorage.getItem('address'));
    execute(city);

    function execute (city) {

        //select all rows
        const rows = document.querySelectorAll(".table-row");

        rows.forEach(row => {
            row.style.display = "none";

            //get all the tds in a row
            const tds = row.getElementsByTagName("td");
            
            for (let i = 0; i < tds.length; i++) {

                let td = tds[i];
                if (td) {
                    if (td.innerText.toLowerCase().indexOf(city.toLowerCase()) > -1) {
                        row.style.display = "";
                    }
                }

            }

        });

       
    }

    

    function updateDisplay(city_value, street_value){
        const city = document.getElementById('emergency-city');
        const street = document.getElementById('emergency-street');

        //updates the city with a capitalized first letter
        city.textContent = city_value[0].toUpperCase() + city_value.slice(1);
        street.textContent = street_value;
       
    }



}

// checks if a row has been clicked and redirects to the designated href 
const rowClick = ()=>{

    const clickable = document.querySelectorAll("tr[data-href]");

    if(clickable === null || clickable === undefined) return;

    clickable.forEach(tr=>{
        tr.addEventListener('click', ()=>{
            window.location.href = tr.dataset.href;


            //Could be done better but for testing purposes this will do
            sessionStorage.setItem('v-name', tr.cells[0].innerText ) 
            sessionStorage.setItem('v-surename', tr.cells[1].innerText ) 
            sessionStorage.setItem('v-nr', tr.cells[4].innerText ) 
        });
    });
   
}

const appl = ()=>{
    rowClick();
    tableFilter();

};

appl();