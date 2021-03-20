let date = document.getElementById("picDateChosen");
const apiKey = 'AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'

let imgUrl = 'https://api.nasa.gov/planetary/apod?&api_key=' + apiKey ;

let xmlHttp = new XMLHttpRequest();


// fetch(imgUrl)
//     .then(function(responce){
//         responce.json()
//         .then(function(data){
//             console.log(data)

xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);

        let copyright = data["copyright"];
        let date = data["date"];
        let explanation = data["explanation"];
        let hdurl = data["hdurl"];
        let media_type = data["media_type"];
        let title = data["title"];
        let url = data["url"];
        let imgDate = data["from-datepicker"]

        document.getElementById("potdImg").src = url;
        document.getElementById("titlePic").innerHTML = title;
        document.getElementById("copyrightPic").innerHTML = copyright;
        document.getElementById("explanationPic").innerHTML = explanation;
        document.getElementById("from-datepicker").value = imageDate;
        console.log(imageDate);
        // const datePicked = document.getElementById("from-datepicker");
        // datePicked.addEventListener("dateChange",(e))
    }
}
xmlHttp.open("GET", imgUrl, true);
xmlHttp.send();
