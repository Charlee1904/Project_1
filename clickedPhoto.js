function clickedImg(){
    document.getElementById("clickedImg").src= JSON.parse(localStorage.getItem("clickedPhoto"))
}