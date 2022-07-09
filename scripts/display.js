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
                <button class="btn btn-danger">Delete</button>
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
             <tr id=${pet.id}>
                 <td>${pet.name}</td>
                 <td>${pet.age}</td>
                 <td>${pet.gender}</td>
                 <td>${pet.breed}</td>
                 <td>${pet.owner}</td>
                 <td>${pet.phone}</td>
                 <td>${pet.service}</td> 
                 <td>
                    <button class="btn btn-danger" onclick="deletePet(${pet.id});">Delete</button>
                </td>             
            </tr>
        `;       
    }
    //tr+= (tr,th,td)
    //inject the tr into the HTML table
    document.getElementById("pet-table").innerHTML=tr;   
}