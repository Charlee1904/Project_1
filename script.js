let date = document.getElementById("picDateChosen");
const key = 'AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
let imageDate = 'date=' + "2021-02-01" + '&';
let imageURL = 'https://api.nasa.gov/planetary/apod?&api_key=' + key ;

let xmlHttp = new XMLHttpRequest();


// fetch(imageURL)
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

        document.getElementById("potdImg").src = url;
        document.getElementById("titlePic").innerHTML = title;
        document.getElementById("copyrightPic").innerHTML = copyright;
        document.getElementById("explanationPic").innerHTML = explanation;

        // const datePicked = document.getElementById("from-datepicker");
        // datePicked.addEventListener("dateChange",(e))
    }
}
xmlHttp.open("GET", imageURL, true);
xmlHttp.send();