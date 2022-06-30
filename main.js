let favcountry = "korea"
let favcountry2 = "japan"
let favcountry3 = "china"
let userfav = prompt("Please enter your country to visit","Any country")
userfav = userfav.toLowerCase()
if (userfav == favcountry || userfav == favcountry2 || userfav == favcountry3) {
    alert("THEN YOU SHOULD GO right now")
} else {
    alert(userfav + " that country is great, but please try SK,JP,CN")
} 

function myFunction() 
{
    let test1 = Math.floor(Math.random() *3 ) 
    
    if (test1 == 0) {
        document.getElementById("demo").innerHTML = ("Korea")
    } else if (test1 == 1) {
    document.getElementById("demo").innerHTML = ("Japan")
    } else {
    document.getElementById("demo").innerHTML = ("China")
    }

}

function myFunction2()
{
    document.getElementById("demo2").innerHTML = ("Because they are fun countries!")
}
