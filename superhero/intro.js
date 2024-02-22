/* Troy Donner javascript */


//variables

const herourl=https://superheroapi.com/api/1471066966784349:
const herolist =document.getElementById(herolist);

//when page loads
window.addEventListener("load", );
//retrieve hero id
function getherolist(){
   return fetch(herourl).then (Response => Response.json());

}
//add hero to dropdown

function updateherolist(){
        getherolist().then(function(data){
            //hero name
            for(element in data.messages){
             let option = createoption(element);
             herolist.appendChild(option);


        };
//append select list
function createoption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}
