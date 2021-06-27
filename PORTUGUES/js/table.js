const searchTable = () => {

    const searchInput = document.getElementById('search');


    searchInput.addEventListener("keyup", (evt) => {
        //get what the user is searching fot
        const searchValue = evt.target.value.toLowerCase();

        //select all rows
        const rows = document.querySelectorAll(".table-row");

        rows.forEach(row => {
            row.style.display = "none";

            //get all the tds in a row
            const tds = row.getElementsByTagName("td");

            for (let i = 0; i < tds.length; i++) {

                let td = tds[i];
                if (td) {
                    if (td.innerText.toLowerCase().indexOf(searchValue) > -1) {
                        row.style.display = "";
                    }
                }

            }

        });
    })


}

const sortTable = () => {

    const tableHeader = document.querySelectorAll("th");

    tableHeader.forEach(header => {
        header.addEventListener('click', function () {
            sortTable(this.cellIndex);
        })
    })





    function sortTable(n) {
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("table");
        switching = true;

        let direction = "asc";
        let count = 0;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
          // Start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /* Loop through all table rows (except the
          first, which contains table headers): */
          for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            
            // Check if the two rows should switch place:
            if(direction =="asc"){
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
            }else{
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
            }
            
          }
          if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            count++;
          }else{
              if(count == 0 && direction == "asc"){
                  direction = "desc";
                  switching = true;
              }
          }
        }
      }
    }




    const main = () => {
        searchTable();
        sortTable();
        
    }

    main();