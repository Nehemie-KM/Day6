document.addEventListener("DOMContentLoaded", function() {
function displayAgentInfo (secret){ 

    if ( typeof secret.age === "number" && typeof  secret.firstname === "string" && 
        typeof secret.lastname === "string" && typeof secret.code === "string") { 

            let foni = `My name is  ${secret.lastname},${secret.firstname}! I'm the agent ${secret.code} and I'm ${secret.age} years old.`

            const par = document.querySelector('#container p');
            par.textContent = foni
        }
        else { 
            return console.log("erreur")
        }
       
        }
        let secret = { 
            age : 57,
            code: "007",
            firstname: "James",
            lastname: "Bond"
}
displayAgentInfo(secret)
})