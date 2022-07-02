// arrays //[]
// objects // {}
let petSalon ={
    //attributes
    name: "The Fashion Pet",
    address: "Ave University 768", 
    hours:{
        open:"9:00 AM",
        close:"6:00 PM"
    },
    owner: "Kevin Fonteyne",
    pets:[
        {
            name: "Zeus",
            breed: "Pit Mixed",
            age: "6yrs",
            gender: "Male",
            service: "Grooming",
            ownerName: "Kevin Fonteyne",
            contactPhone: "555-555-5555"
        },
        {
            name: "Buddy",
            breed: "Golden Retriever",
            age: "10yrs",
            gender: "Male",
            service: "Nails",
            ownerName: "Steve Fontello",
            contactPhone: "555-555-5555"
        },
        {
            name: "Sheila",
            breed: "Shitzu",
            age: "3yrs",
            gender: "Female",
            service: "Grooming",
            ownerName: "Danielle",
            contactPhone: "555-555-5555"
        }
    ]
}
//array
for(let i = 0; i <petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name);
}

alert(`Number of pets: ${petSalon.pets.length}`);

let id = 0;
function registerPet(){
    let petName=document.getElementById('petName').value;
    if(petName === ""){
        alert("Please enter a pet name");
    }else{
        displayPet(petName);
        document.getElementById('petName').value="";

    }
}    
function displayPet(petName){
    id++;
    document.getElementById('pet-list').innerHTML+=`
    <li id="${id}">
    <div>${petName}</div>`;
}
function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}
//calling the function
