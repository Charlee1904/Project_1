const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const test='https://mooncalc.org/#/lat,lon,zoom/date/time/objectlevel/maptype'
const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const playVidButton= document.querySelector("#potdVid");
const myVideo=document.getElementById("potdVid")
// const img2='https://api.nasa.gov/planetary/apod?start_date=2021-03-01&end_date=2021-03-15&api_key='+ key
const marsWeather="https://api.maas2.apollorion.com"
const roverImg='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key='+key
const earthImg='https://api.nasa.gov/EPIC/api/natural/images?api_key='+ key

function homePage(){
fetch(imageURL)
    .then(function(responceImage){
        responceImage.json()
        .then(function(dataImage){
            console.log(dataImage)
            if(dataImage.media_type=== "video"){
                myVideo.style.display="block";
               myVideo.src= dataImage.url;
               
            }
            else if(dataImage.media_type==="image"){
            document.getElementById("potdImg").src=dataImage.url}
        })
    })}
function marsInfo(){
 fetch(marsWeather)
     .then(function(responceWeather){
         console.log(responceWeather)
         responceWeather.json()
         .then(function(dataWeather){
            document.getElementById("maxTemp").textContent += " " + dataWeather.max_temp + "C"
          document.getElementById("minTemp").textContent += " "+dataWeather.min_temp +"C"
            document.getElementById("sunRise").textContent += " "+dataWeather.sunrise
            document.getElementById("sunSet").textContent += " " +dataWeather.sunset
           console.log(dataWeather)
         })
     })
 
fetch(roverImg)
     .then(function(responceRover){
        responceRover.json()
            .then(function(dataRover){
                console.log(dataRover)
            })})}

// fetch(earthImg)
//   .then(function(responceTerra){
//      responceTerra.json()
//       .then(function(dataTerra){
//          console.log(dataTerra)
//                    })})
            
   