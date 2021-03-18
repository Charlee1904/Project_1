const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const test='https://mooncalc.org/#/lat,lon,zoom/date/time/objectlevel/maptype'
const marsWeather="https://api.maas2.apollorion.com"
const roverArray = ["Curiosity","Opportunity","Spirit"]
let rover= roverArray[0]
const earthImg='https://api.nasa.gov/EPIC/api/natural/images?api_key='+ key
let page=1
const nextPage = document.querySelector("#pageIncrease")
nextPage.addEventListener("click", pageNext)
const backPage =document.querySelector("#pageDecrease")
backPage.addEventListener("click", returnPage)
// const changeBtn=document.querySelector('#changeRover')
// changeBtn.addEventListener("click", changeRovers())

function marsPageFun(){
    window.location.href=".marsPage.html"
}

 function pageNext(){
     page +=1
     console.log(page)
     marsInfo()
 }

 function returnPage(){
     page -=1
     console.log(page)
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
    if (rover===roverArray[1]&&rover===roverArray[1]){
        console.log("aaa")
        nextPage.style.display="none"
        backPage.style.display="none"
    }

    if (rover===roverArray[0]){
        nextPage.style.display="block"
        backPage.style.display="block"
    }


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
            
   

