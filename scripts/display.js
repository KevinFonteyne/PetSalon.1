function displayCardPets(){

    //travel the array
    let card="";
    for(let i=0; i <petSalon.pets.length; i++){
        let pet=petSalon.pets[i];
        //create the card (HTML)
        card+=`
            <div class="pet">
                <h4>Name: ${pet.name}</h4>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Owner: ${pet.owner}</p>
                <p>Phone: ${pet.phone}</p>
                <p>Service: ${pet.service}</p>
            </div>
        `;

        console.log(card);
    }
    
    
    //inject the card into the HTML (register.html)
    // document.getElementById("pet-card").innerHTML=card;
    
}

function displayPetsTable(){
    //travel the array (for)
    let tr="";
    for(let i=0; i<petSalon.pets.length; i++){
        let pet=petSalon.pets[i];
        //create the table
        tr+=`
            <table id="pet-table">
                <tr>
                    <th>Name: ${pet.name}</th>
                </tr>
                <tr>
                    <td>Age: ${pet.age}</td>
                    <td>Gender: ${pet.gender}</td>
                    <td>Breed: ${pet.breed}</td>
                    <td>Owner: ${pet.owner}</td>
                    <td>Phone: ${pet.phone}</td>
                    <td>Service: ${pet.service}</td>
                </tr>
            </table>
        `;        
    }
    //tr+= (tr,th,td)
    //inject the tr into the HTML table
    document.getElementById("pet-table").innerHTML=tr;   
}