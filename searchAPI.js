const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'

const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const playVidButton= document.querySelector("#potdVid");
const myVideo=document.getElementById("potdVid")
const marsWeather="https://api.maas2.apollorion.com"
const roverArray = ["Curiosity","Opportunity","Spirit"]
let rover= roverArray[0]
// const earthImg='https://api.nasa.gov/EPIC/api/natural/images?api_key='+ key
let page=1
const nextPage = document.querySelector("#pageIncrease")
nextPage.addEventListener("click", pageNext)
const backPage =document.querySelector("#pageDecrease")
backPage.addEventListener("click", returnPage)
let nArray= false
let rImg0=0
let rImg1=1
let rImg2=2




 function pageNext(){
    rImg0+=2
    rImg1+=2
    rImg2+=2
    marsInfo()
 }

 function returnPage(){
     rImg0-=2
     rImg1-=2
     rImg2-=2
     if (rImg0<0){
        rImg0=0
        rImg1=1
        rImg2=2
        
        return
     }
     marsInfo()
 }




function chaneRovers(){
    let currentNumber=""
    page =1
    let number =Math.round((Math.random()*3)+1);
    // console.log("Cu"+currentNumber)
    // console.log(number)
    if (number>2){
        number = 0
    }
    if (currentNumber===number){
        // console.log('same')
        chaneRovers()
        return
    }
    else if(currentNumber!=number){
        // console.log('not same')
        
        currentNumber=number
    }
    rover = roverArray[number]
    document.getElementById("rover").textContent=rover
    marsInfo()
}

 function marsInfo(){
    


      fetch(marsWeather)
       .then(function(responceWeather){
                responceWeather.json()
                .then(function(dataWeather){
                    document.getElementById("maxTemp").textContent = "Max Temperature " + dataWeather.max_temp + "C"
                    document.getElementById("minTemp").textContent = "Min Temperature "+dataWeather.min_temp +"C"
                    document.getElementById("sunRise").textContent = "Sunrise "+dataWeather.sunrise
                    document.getElementById("sunSet").textContent = "Sunset " +dataWeather.sunset
                    // console.log(dataWeather)
                })
            })
            
            const roverImg='https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?sol=1000&page='+page+'&api_key='+key
            console.log(roverImg)
    fetch(roverImg)
    .then(function(responceRover){
        responceRover.json()
        .then(function(dataRover){
            console.log(dataRover)
            document.getElementById("img0").src=dataRover.photos[rImg0].img_src;
            document.getElementById("img1").src=dataRover.photos[rImg1].img_src;
            document.getElementById("img2").src=dataRover.photos[rImg2].img_src;
            })})}

// fetch(earthImg)
//   .then(function(responceTerra){
//      responceTerra.json()
//       .then(function(dataTerra){
//          console.log(dataTerra)
//                    })})
            
   

