const button = document.getElementById("btn")
const img = document.getElementById("img")
const temp = document.getElementById("temp")
const humindly = document.getElementById("humindly")
const wind = document.getElementById("wind")
const input = document.getElementById("input")
const locationName = document.getElementById("location-name")
const succes = document.getElementById('succes')
const errorT = document.getElementById('error')


function validate(input){
    if(!input.value || !input.value.trim()){
        input.focus();
        input.value = "";
        alert("Input bosh");
        return false
    }
    return true
}
 const key = "02cddfd6a93eebab321fa6775bc5a605";

 async function cityName(city){
     const api = "https://api.openweathermap.org/data/2.5/weather?q="
     const black = await fetch(api + city + `&units=metric&appid=${key}`)

     const data = black.json()

     return data
 }

 function elements(data){
    
    wind.innerText = `${data.wind.speed}` +'km/s';
    locationName.innerText = `${data.name}`;
    humindly.innerText = `${data.main.humidity}` +'%';
    temp.innerText = `${data.main.temp}` +"°C"
}

function working(){
    if(validate(input)){

        cityName(input.value)
            .then((data)=>{
             elements(data)
             succes.setAttribute('class', 'display')
             error.setAttribute('class', 'display-none')
            })
             .catch(() => {
                alert("xatolik")
                succes.setAttribute('class', 'display-none')
                errorT.setAttribute('class', 'display')
                //  console.log(error)
                })
            input.value =""
        }
}

button && button.addEventListener("click",working)


document.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        working();
    }
})