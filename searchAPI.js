const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const test='https://mooncalc.org/#/lat,lon,zoom/date/time/objectlevel/maptype'
const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const playVidButton= document.querySelector("#potdVid");
const myVideo=document.getElementById("potdVid")

// const img2='https://api.nasa.gov/planetary/apod?start_date=2021-03-01&end_date=2021-03-15&api_key='+ key

fetch(imageURL)
    .then(function(responce){
        responce.json()
        .then(function(data){
            console.log(data)
            if(data.media_type=== "video"){
               myVideo.src= data.url
            }
            else if(data.media_type==="image"){
            document.getElementById("potdImg").src=data.url}
        })
    })

 

const marsWeather="https://api.maas2.apollorion.com"
const roverArray = ["Curiosity","Opportunity","Spirit"]
let rover= roverArray[0]
const earthImg='https://api.nasa.gov/EPIC/api/natural/images?api_key='+ key
// const changeBtn=document.querySelector('#changeRover')
// changeBtn.addEventListener("click", changeRovers())

function chaneRovers(){
    console.log("test")
    let currentNumber=""
    let number =Math.round((Math.random()*3)+1);
    console.log("Cu"+currentNumber)
    console.log(number)
    if (number>2){
        number = 0
    }
    if (currentNumber===number){
        console.log('same')
        chaneRovers()
        return
    }
    else if(currentNumber!=number){
        console.log('not same')
        
        currentNumber=number
    }
    rover = roverArray[number]
    document.getElementById("rover").textContent=rover
    marsInfo()
}

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
                    document.getElementById("maxTemp").textContent = "Max Temperature " + dataWeather.max_temp + "C"
                    document.getElementById("minTemp").textContent = "Min Temperature "+dataWeather.min_temp +"C"
                    document.getElementById("sunRise").textContent = "Sunrise "+dataWeather.sunrise
                    document.getElementById("sunSet").textContent = "Sunset " +dataWeather.sunset
                    console.log(dataWeather)
                })
            })
            
            const roverImg='https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?sol=1000&page=1&api_key='+key
    fetch(roverImg)
    .then(function(responceRover){
        responceRover.json()
        .then(function(dataRover){
            console.log(dataRover)
            document.getElementById("img0").src=dataRover.photos[0].img_src;
            document.getElementById("img1").src=dataRover.photos[1].img_src;
            document.getElementById("img2").src=dataRover.photos[2].img_src;
            })})}

// fetch(earthImg)
//   .then(function(responceTerra){
//      responceTerra.json()
//       .then(function(dataTerra){
//          console.log(dataTerra)
//                    })})
            
   

