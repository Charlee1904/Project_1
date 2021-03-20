const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const todaysImageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const marsPageBtn = document.querySelector("#goToMarsPage")
marsPageBtn.addEventListener("click", marsPageFun)
const datePicker = document.querySelector("#from-datepicker")
// const goToDate =document.querySelector("#goToDate")
// goToDate.addEventListener("click", dateFunction)
// let userDate=""
let userDate = '';
let userDateUrl='https://api.nasa.gov/planetary/apod?&start_date='+userDate +"end_date="+userDate +'api_key='+key
const playVidButton= document.querySelector("#potdVid");
const myVideo=document.getElementById("potdVid")

const pickedDate = document.getElementById("from-datepicker");
pickedDate.addEventListener('change', (event) => {
    if(pickedDate.value != "") {
       
        userDate =pickedDate.value;
        // imageDate = 'date=' + date + '&';
        console.log(userDate);
        console.log(userDateUrl)
        userDateUrl='https://api.nasa.gov/planetary/apod?&start_date='+userDate +"&end_date="+userDate +'&api_key='+key
        let date = moment().format("YYYY-MM-DD");
            if(date<userDate){
                return
            }

        fetch(userDateUrl)
        .then(function(responceInfo){
            responceInfo.json()
            .then(function(dataInfo)
        {
            console.log(dataInfo)
            console.log(dataInfo[0])

            console.log(date)
            if(dataInfo[0].media_type=== "video"){
                console.log(dataInfo[0].url)
               let vidURL= JSON.stringify(dataInfo[0].url)
               myVideo.src=vidURL
             }
            document.getElementById("potdImg").src=dataInfo[0].url
            document.getElementById("titlePic").innerHTML = dataInfo[0].title;
            document.getElementById("copyrightPic").innerHTML = dataInfo[0].copyright;
             document.getElementById("explanationPic").innerHTML = dataInfo[0].explanation;
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