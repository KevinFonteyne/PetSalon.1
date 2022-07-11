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
    pets:[]
}

//counter
let c=0;

//constructor function
//---------Parameters/ local variables------>
function Pet(name, age, gender, breed, ownerName, contactPhone, service){
    //attributes = parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
    this.id=c++;
}

//creating the functions
function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}
function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`There are ${petSalon.pets.length} pets`;
}

function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.age=="" || aPet.gender=="" || aPet.breed=="" || aPet.phone=="" || aPet.owner=="" || aPet.service=="" || aPet.comment==""){
        valid=false;
    }
    return valid;
}

function register(){
    //get info from the inputs
    let petName=document.getElementById("txtPetName").value;
    let petAge=document.getElementById("numPetAge").value;
    let petGender=document.getElementById("txtPetGender").value;
    let petBreed=document.getElementById("txtPetBreed").value;
    let petOwner=document.getElementById("txtPetOwner").value;
    let petPhone=document.getElementById("txtPetPhone").value;
    let petService=document.getElementById("txtPetService").value;
    let petComment=document.getElementById("txtComment").value;
    console.log(petName,petAge,petGender,petBreed,petService,petOwner,petPhone);
    //create the object
    let newPet = new Pet(petName, petAge, petGender, petBreed, petOwner, petPhone, petService, petComment);
    if(isValid(newPet)){
    console.log(newPet);
    //push the object
    petSalon.pets.push(newPet);
    //displayCardPets();
    displayPetsTable();
    console.log(petSalon.pets);
    //displayNumberOfPets();
    clearInputs();
    }else{
        alert("Please enter valid information");
    }
}

function search(){
    //get info from the inputs
    let searchString=document.getElementById("txtSearch").value;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(searchString.toLowerCase()==pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("selected");
        }else{
            document.getElementById(pet.id).classList.remove("selected");
        }
    }
}
        
function clearInputs(){
    document.getElementById("txtPetName").value="";
    document.getElementById("numPetAge").value="";
    document.getElementById("txtPetGender").value="";
    document.getElementById("txtPetBreed").value="";
    document.getElementById("txtPetPhone").value="";
    document.getElementById("txtPetOwner").value="";
    document.getElementById("txtPetService").value="";
    document.getElementById("txtComment").value="";
}

function deletePet(petID){
    document.getElementById(petID).remove();
    //travel the array
    let petIndex;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
    //compare the id og the pet
        if(pet.id == petID){
            petIndex=i;//get the pet index
        }
    }    
    petSalon.pets.splice(petIndex,1);//remove from the array
    //displayNumberOfPets();//update the displayNumberOfPets()
}

function init(){
    //creating objects
    // let scrappy = new Pet("Scrappy", 15,"Male","Dane","Shaggy","666-666-6666", "Grooming");
    // let speedy = new Pet("Speedy", 35,"Male","Mouse","Shaggy","666-666-6666", "Grooming");
    // let scooby = new Pet("Scooby",50,"Male","Dane","Shaggy","666-666-6666", "Grooming");
    // petSalon.pets.push(scrappy,speedy,scooby);
    // console.log(petSalon.pets);
    //calling the function
    //displayNumberOfPets();
    displayInfo();
    displayPetsTable();
    //hook events
}

window.onload = init;

//array
for(let i = 0; i<petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name);
}

//alert(`Number of pets: ${petSalon.pets.length}`);


//creating the function

// let id = 0;
// function registerPet(){
//     let petName=document.getElementById('petName').value;
//     if(petName === ""){
//         alert("Please enter a pet name");
//     }else{
//         displayPet(petName);
//         document.getElementById('petName').value="";

//     }
// }    
// function displayPet(petName){
//     id++;
//     document.getElementById('pet-list').innerHTML+=`
//     <li id="${id}">
//     <div>${petName}</div>`;
