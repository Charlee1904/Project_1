const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'

const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const playVidButton= document.querySelector("#potdVid");
const myVideo=document.getElementById("potdVid")
const marsWeather="https://api.maas2.apollorion.com"
const roverArray = ["Curiosity","Opportunity","Spirit"]
let rover= roverArray[0]
// const earthImg='https://api.nasa.gov/EPIC/api/natural/images?api_key='+ key
let solDateMars= 1
let page=1
const nextPage = document.querySelector("#pageIncrease")
nextPage.addEventListener("click", pageNext)
const backPage =document.querySelector("#pageDecrease")
backPage.addEventListener("click", returnPage)
let rImg0=0
let rImg1=1
let rImg2=2
let roverNumber = 0
const solInput=document.querySelector('#userSolDates')
const changeSol=document.querySelector("#changeSol")
changeSol.addEventListener("click", changeSolFun)


function changeSolFun(){
    solDateMars = solInput.value;
    marsInfo()
}

 function pageNext(){
    rImg0+=2
    rImg1+=2
    rImg2+=2
    console.log("pn",rImg0,rImg1,rImg2)
    if (rImg2>25){
        page = 2
        rImg0=0
        rImg1=1
        rImg2=2
        marsInfo()
        return

    }
    marsInfo()
 }

 function returnPage(){
     rImg0-=2
     rImg1-=2
     rImg2-=2
     console.log("rn",rImg0,rImg1,rImg2)
     if (rImg0<0){
        rImg0=0
        rImg1=1
        rImg2=2
        
        return
     }
     marsInfo()
 }




function chaneRovers(){
   rImg0=0
   rImg1=1
   rImg2=2
    page =1
    
    roverNumber ++
    console.log(roverNumber)
    if (roverNumber===3){
        roverNumber = 0
        rover = roverArray[roverNumber]
    document.getElementById("rover").textContent=rover
    marsInfo()
    return
    }
    rover = roverArray[roverNumber]
    document.getElementById("rover").textContent=rover
    marsInfo()
}

 function marsInfo(){
    document.getElementById("invalidSolDate").style.display="none"


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
            console.log(solDateMars)
            const roverImg='https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?sol='+solDateMars+'&page='+page+'&api_key='+key
            console.log(roverImg)
    fetch(roverImg)
    .then(function(responceRover){
        responceRover.json()
        .then(function(dataRover){
            console.log(dataRover)
            
            if(dataRover.photos[rImg0]===undefined){
                document.getElementById("invalidSolDate").style.display="block"
            }
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
            
   

