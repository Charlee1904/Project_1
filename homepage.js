const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const todaysImageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const marsPageBtn = document.querySelector("#goToMarsPage")
marsPageBtn.addEventListener("click", marsPageFun)
const datePicker = document.querySelector("#from-datepicker")
// const goToDate =document.querySelector("#goToDate")
// goToDate.addEventListener("click", dateFunction)
// let userDate=""
let userDate = 'date=' + "2021-02-01" + '&';
const userDateUrl='https://api.nasa.gov/planetary/apod?&start_date='+userDate +"&end_date="+userDate +'&api_key='+key
// const userDateUrl="https://api.nasa.gov/planetary/apod?api_key=MQH032jvhkJ3MB9MEone9bGtLI1fG79WCoChk16l&start_date=2010-11-28&end_date=2010-11-28"

const pickedDate = document.getElementById("from-datepicker");
pickedDate.addEventListener('change', (event) => {
    if(pickedDate.value != "") {
        userDate = moment(pickedDate.value).format("YYYY-MM-DD");
        // imageDate = 'date=' + date + '&';
        console.log(userDate);
        console.log(userDateUrl)
        fetch(userDateUrl)
        .then(function(responceInfo){
            responceInfo.json()
            .then(function(dataInfo)
        {
            console.log(dataInfo)
            document.getElementById("potdImg").src=dataInfo.url
            document.getElementById("titlePic").innerHTML = dataInfo.title;
            document.getElementById("copyrightPic").innerHTML = dataInfo.copyright;
             document.getElementById("explanationPic").innerHTML = dataInfo.explanation;
        })
        })
    }
});








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