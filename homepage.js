const key = 'AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
let imageURL = 'https://api.nasa.gov/planetary/apod?api_key=' + key
let imageDate = '&date=2021-02-01';
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

let recentSearches = JSON.parse(localStorage.getItem("searches")) || [];
let currentSearchDate = "";

function homePage() {
    fetch(imageURL + imageDate)
        .then(function (responce) {
            responce.json()
                .then(function (data) {
                    console.log(data)
                    if (data.media_type === "video") {
                        myVideo.src = data.url
                    }
                    else if (data.media_type === "image") {
                        document.getElementById("potdImg").src = data.url
                    }
                    document.getElementById("titlePic").innerHTML = data.title;
                    document.getElementById("copyrightPic").innerHTML = data.copyright;
                    document.getElementById("explanationPic").innerHTML = data.explanation;

                    // save this search to localStorage recentSeraches.                     
                    if (currentSearchDate != "") {
                        recentSearches.push(currentSearchDate);
                        localStorage.setItem("searches", JSON.stringify(recentSearches));
                    }

                    // also populate upto 5 recent searches from localStorage
                    const oldSearches = document.querySelector("#oldSearch");
                    oldSearches.innerHTML = "";
                    for (i = (recentSearches.length - 1); i >= (recentSearches.length - 5); i--) {
                        if (i < 0) {
                            break;
                        }

                        oldSearches.innerHTML += `<li class="city" data-search-date="${recentSearches[i]}">${recentSearches[i]}</li>`;
                    }

                    // attach click event handler with recent searches
                    let oldSearchElement = document.querySelectorAll(".city");
                    for (i = 0; i < oldSearchElement.length; i++) {
                        oldSearchElement[i].addEventListener("click", function (e) {
                            var newImageDate = '&date=' + e.target.dataset.searchDate;
                            if (imageDate != newImageDate) {
                                console.log(e.target.dataset.searchDate);
                                currentSearchDate = e.target.dataset.searchDate;
                                imageDate = newImageDate;
                                console.log(imageURL + imageDate);
                                homePage();
                            }
                        })
                    }
                })
        })
}

function marsPageFun() {
    window.location.href = "marsPage.html"
    console.log('test')
}

const pickedDate = document.getElementById("from-datepicker");
pickedDate.addEventListener('change', (event) => {
    if (pickedDate.value != "") {
        var formattedPickedDate = moment(pickedDate.value).format("YYYY-MM-DD");                    
        var newImageDate = '&date=' + formattedPickedDate;
        if (imageDate != newImageDate) {
            currentSearchDate = formattedPickedDate;
            imageDate = newImageDate;
            console.log(imageURL + imageDate);
            homePage();
        }
    }
});