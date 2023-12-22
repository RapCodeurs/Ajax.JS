const apiUrl = 'https://geo.api.gouv.fr/communes?codePostal='
const zipcode = document.getElementById("zipcode")
const city = document.getElementById("city")
const boutonTester = document.getElementById("tester")

boutonTester.addEventListener("click", (event)=>{

    event.preventDefault() // évite que la page ne recharge
   
    const code = zipcode.value;
    const url = apiUrl+code;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
       
        if (xhr.status === 200) {
           
            const result = JSON.parse(xhr.response);
       
            if(result.length){
           
                result.forEach(function(value, key){
   
                    let myOption = document.createElement("option");
                    myOption.text = value.nom;
                    myOption.value = value.nom;
                    city.appendChild(myOption);
                });
             }
            }else{
                console.log('L\'appel API a échoué');
              }
    };
xhr.send();

})