const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const marsWeather="https://api.maas2.apollorion.com"
const roverArray = ["Curiosity","Opportunity","Spirit"]
let rover= roverArray[0]
let solDateMars= 200
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
const homePageBtn=document.querySelector('#toHome')
homePageBtn.addEventListener("click", goToHome)
let roverImg0 =document.querySelector('#img0')
roverImg0.addEventListener("click", imgClickedMars0)
let roverImg1 =document.querySelector('#img1')
roverImg1.addEventListener("click", imgClickedMars0)
let roverImg2 =document.querySelector('#img2')
roverImg2.addEventListener("click", imgClickedMars0)
let marsImg0 = false
let storage0=""
let storage1=""
let storage2=""







function imgClickedMars0(){
    
    localStorage.setItem("clickedPhoto", JSON.stringify(storage0))
    window.location.href='clickedImg.html'
}

function goToHome(){
    window.location.href="index.html"
}


function changeSolFun(){
    solDateMars = solInput.value;
    rImg0=0
    rImg1=1
    rImg2=2
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

            if (rover===roverArray[0]){
                document.getElementById("imgOfRover").src= "./marsRoverImgs/curiosity.jpg";
                document.getElementById("roverPatch").src="./marsRoverImgs/curiosityLogo.png"
            }


            if (rover===roverArray[1]){
                document.getElementById("imgOfRover").src= "./marsRoverImgs/Opportunity.jpg";
                document.getElementById("roverPatch").src="./marsRoverImgs/OpportunityLogo.png"
            }
            
            if (rover===roverArray[2]){
                document.getElementById("imgOfRover").src= "./marsRoverImgs/spirit.jpg";
                document.getElementById("roverPatch").src="./marsRoverImgs/spiritLogo.png"
            }

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
           storage0 = dataRover.photos[rImg0].img_src
            storage1=dataRover.photos[rImg1].img_src
          storage2=dataRover.photos[rImg2].img_src


            })})}

