
function UserC() {
    let favcountry = "korea";
    let favcountry2 = "japan";
    let favcountry3 = "china";
    let input = prompt("Please enter your country to visit", "Any country");
    input = input.toLowerCase();
    if (input == favcountry || input == favcountry2 || input == favcountry3) {
        alert("THEN YOU SHOULD GO right now");
    } else {
        alert(input + " that country is great, but please try SK,JP,CN");
    };

}
UserC();
function RandomCoun() {
    let test1 = Math.floor(Math.random() * 3);
    if (test1 == 0) {
        document.getElementById("demo").innerHTML = ("Korea");
    } else if (test1 == 1) {
        document.getElementById("demo").innerHTML = ("Japan");
    } else {
        document.getElementById("demo").innerHTML = ("China");
    };

}
function showPic() {
    const userNum = prompt("How many cat pictures do you want")
    if(userNum <= 7) 
    {
        for (let i = 0; i < userNum; i++) {
            document.write("<img src='https://placekitten.com/640/360'></img>")

        }
    }else{
alert("testx")
    }
   


    };



function ReasonGo() {
    document.getElementById("demo2").innerHTML = "Because they are fun countries!";
}

