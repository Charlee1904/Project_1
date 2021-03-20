const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const todaysImageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const marsPageBtn = document.querySelector("#goToMarsPage")
marsPageBtn.addEventListener("click", marsPageFun)
const goToDate =document.querySelector("#goToDate")
goToDate.addEventListener("click", dateFunction)
const datePicker = document.querySelector("#from-datepicker")
// let userDate=""
let userDate = 'date=' + "2021-02-01" + '&';
const userDateUrl='https://api.nasa.gov/planetary/apod?&api_key=' + key +"&start_date="+datePicker.value+"&end_date="+datePicker.value
// const userDateUrl="https://api.nasa.gov/planetary/apod?api_key=MQH032jvhkJ3MB9MEone9bGtLI1fG79WCoChk16l&start_date=2010-11-28&end_date=2010-11-28"

const pickedDate = document.getElementById("from-datepicker");
pickedDate.addEventListener('change', (event) => {
    if(pickedDate.value != "") {
        let date = moment(pickedDate.value).format("YYYY-MM-DD");
        imageDate = 'date=' + date + '&';
        console.log(date);
    }
});



function dateFunction(){
    datePicker.value;
    console.log(datePicker.value) 
    fetch(userDateUrl)
        .then(function(responceInfo){
            responceInfo.json()
            .then(function(data){
                console.log(data)
                document.getElementById("potdImg").src=data.url
                document.getElementById("titlePic").innerHTML = data.title;
                document.getElementById("copyrightPic").innerHTML = data.copyright;
                 document.getElementById("explanationPic").innerHTML = data.explanation;

                
            })
        })
}




function homePage(){
    fetch(todaysImageURL)
        .then(function(responce){
            responce.json()
            .then(function(data){
                console.log(data)
                if(data.media_type=== "video"){
                   myVideo.src= data.url
                }
                else if(data.media_type==="image"){
                document.getElementById("potdImg").src=data.url
                document.getElementById("titlePic").innerHTML = data.title;
                document.getElementById("copyrightPic").innerHTML = data.copyright;
                 document.getElementById("explanationPic").innerHTML = data.explanation;
            }})
        })}



        function marsPageFun(){
            window.location.href = "marsPage.html"
            console.log('test')



        } 