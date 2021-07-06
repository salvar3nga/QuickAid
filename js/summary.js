const displaySummaryInformation = ()=>{

    //displays the information on the summary page
    const emergency = {
        city: document.getElementById('city'),
        address: document.getElementById('address'),
        nrOfPeople: document.getElementById('nr-people')
    }

    const volunteer = {
        name: document.getElementById('name'),
        surename: document.getElementById('surename'),
        telephone: document.getElementById('tel')
    };

    //Display Emergency Details
    emergency.city.textContent = sessionStorage.getItem('city');
    emergency.address.textContent = sessionStorage.getItem('address');
    emergency.nrOfPeople.textContent = sessionStorage.getItem('people');


    // Display chosen Volunteer Details
    volunteer.name.textContent = sessionStorage.getItem('v-name');
    volunteer.surename.textContent = sessionStorage.getItem('v-surename');
    volunteer.telephone.textContent = sessionStorage.getItem('v-nr');
};


const main = ()=>{
    displaySummaryInformation();
}

main();