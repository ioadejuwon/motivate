'use strict';
const quotes = [
    'My life is my message. - Mahatma Gandhi',
    'Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying. If you love life, donâ€™t waste time, for time is what life is made up of. - Bruce Lee',
    'Life is what happens when youâ€™re busy making other plans. -John Lennon',
    'It is better to be hated for what you are than to be loved for what you are not. -Andre Gide',
    'Dost thou love life? Then do not squander time, for that is the stuff life is made of. -Benjamin Franklin',
];
function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function loadQuotes(){
    setInterval(()=>newQuote() ,3000) ; 
}
const icons = {
    "codes": [
        {
            "class": "wi-tornado",
            "number": "0",
            "description": "tornado"
        },
        {
            "class": "wi-hurricane",
            "number": "1",
            "description": "tropical storm"
        },
        {
            "class": "wi-hurricane",
            "number": "2",
            "description": "hurricane"
        },
        {
            "class": "wi-thunderstorm",
            "number": "3",
            "description": "severe thunderstorms"
        },
        {
            "class": "wi-thunderstorm",
            "number": "4",
            "description": "thunderstorms"
        },
        {
            "class": "wi-rain-mix",
            "number": "5",
            "description": "mixed rain and snow"
        },
        {
            "class": "wi-sleet",
            "number": "6",
            "description": "mixed rain and sleet"
        },
        {
            "class": "wi-rain-mix",
            "number": "7",
            "description": "mixed snow and sleet"
        },
        {
            "class": "wi-snow-wind",
            "number": "8",
            "description": "freezing drizzle"
        },
        {
            "class": "wi-sprinkle",
            "number": "9",
            "description": "drizzle"
        },
        {
            "class": "wi-rain-wind",
            "number": "10",
            "description": "freezing rain"
        },
        {
            "class": "wi-showers",
            "number": "11",
            "description": "showers"
        },
        {
            "class": "wi-rain",
            "number": "12",
            "description": "showers"
        },
        {
            "class": "wi-snow",
            "number": "13",
            "description": "snow flurries"
        },
        {
            "class": "wi-rain-mix",
            "number": "14",
            "description": "light snow showers"
        },
        {
            "class": "wi-snow-wind",
            "number": "15",
            "description": "blowing snow"
        },
        {
            "class": "wi-snow",
            "number": "16",
            "description": "snow"
        },
        {
            "class": "wi-hail",
            "number": "17",
            "description": "hail"
        },
        {
            "class": "wi-sleet",
            "number": "18",
            "description": "sleet"
        },
        {
            "class": "wi-dust",
            "number": "19",
            "description": "dust"
        },
        {
            "class": "wi-fog",
            "number": "20",
            "description": "foggy"
        },
        {
            "class": "wi-day-haze",
            "number": "21",
            "description": "haze"
        },
        {
            "class": "wi-smoke",
            "number": "22",
            "description": "smoky"
        },
        {
            "class": "wi-strong-wind",
            "number": "23",
            "description": "blustery"
        },
        {
            "class": "wi-windy",
            "number": "24",
            "description": "windy"
        },
        {
            "class": "wi-snowflake-cold",
            "number": "25",
            "description": "cold"
        },
        {
            "class": "wi-cloudy",
            "number": "26",
            "description": "cloudy"
        },
        {
            "class": "wi-night-cloudy",
            "number": "27",
            "description": "mostly cloudy (night)"
        },
        {
            "class": "wi-day-cloudy",
            "number": "28",
            "description": "mostly cloudy (day)"
        },
        {
            "class": "wi-night-partly-cloudy",
            "number": "29",
            "description": "partly cloudy (night)"
        },
        {
            "class": "wi-day-cloudy",
            "number": "30",
            "description": "partly cloudy (day)"
        },
        {
            "class": "wi-night-clear",
            "number": "31",
            "description": "clear (night)"
        },
        {
            "class": "wi-day-sunny",
            "number": "32",
            "description": "sunny"
        },
        {
            "class": "wi-night-cloudy",
            "number": "33",
            "description": "fair (night)"
        },
        {
            "class": "wi-day-sunny-overcast",
            "number": "34",
            "description": "fair (day)"
        },
        {
            "class": "wi-hail",
            "number": "35",
            "description": "mixed rain and hail"
        },
        {
            "class": "wi-hot",
            "number": "36",
            "description": "hot"
        },
        {
            "class": "wi-day-thunderstorm",
            "number": "37",
            "description": "isolated thunderstorms"
        },
        {
            "class": "wi-day-thunderstorm",
            "number": "38",
            "description": "scattered thunderstorms"
        },
        {
            "class": "wi-rain",
            "number": "39",
            "description": "scattered thunderstorms"
        },
        {
            "class": "wi-rain",
            "number": "40",
            "description": "scattered showers"
        },
        {
            "class": "wi-snow",
            "number": "41",
            "description": "heavy snow"
        },
        {
            "class": "wi-rain-mix",
            "number": "42",
            "description": "scattered snow showers"
        },
        {
            "class": "wi-snow",
            "number": "43",
            "description": "heavy snow"
        },
        {
            "class": "wi-day-cloudy",
            "number": "44",
            "description": "partly cloudy"
        },
        {
            "class": "wi-storm-showers",
            "number": "45",
            "description": "thundershowers"
        },
        {
            "class": "wi-rain-mix",
            "number": "46",
            "description": "snow showers"
        },
        {
            "class": "wi-storm-showers",
            "number": "47",
            "description": "isolated thundershowers"
        },
        {
            "class": "wi-horizon",
            "number": "3200",
            "description": "not available"
        }
    ]
};
function MaintainUserState(){
    
    if(window.localStorage.username){
        document.getElementById('namefield').style.display = 'none' ; //Hide the Input field
        document.getElementById('btnProceed').style.display = "none" ; // Hide the Button
        document.getElementById('plantext').innerText =  window.localStorage.plan ; //Assign session value to element
        document.getElementById('username').innerText = window.localStorage.username ; //Assign session value of username to text field
        console.log(window.localStorage.username) ;
    }
}

function GreetingDisplay(){
    
    const myDate = new Date();
    let hrs = myDate.getHours();
    let greet;
    
    if (hrs < 12)
    greet = 'Good Morning,';
    else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon,';
    else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening,';
    
    document.getElementById('Greetings').innerHTML =  greet + '';
}

function saveUser(){
        let username = document.getElementById('namefield').value ;
        window.localStorage.username = username ;
        document.getElementById('username').innerText = username ;
        document.getElementById('namefield').value = '' ;
        document.getElementById("namefield").id = "planForToday";
        //document.getElementById('btnProceed').style.display = "none" ;
        document.getElementById('btnProceed').removeEventListener('click',()=>{}) ;
    }
    
    function savePlan() { 
        let planForToday = document.getElementById('planForToday').value ; 
        window.localStorage.plan = planForToday ;
        document.getElementById('plantext').text =  window.localStorage.plan ; //Assign session value to element
        
        document.getElementById('planForToday').innerText = '' ; // Clear text field 
        document.getElementById('planForToday').style.display = 'none' ; //Hide the Input field
        document.getElementById('btnProceed').style.display = "none" ; // Hide the Button 
        document.getElementById("planForToday").id = "username";
        document.getElementById('btnProceed').removeEventListener('click',()=>{}) ;
    }
    
    if(document.getElementById('namefield')){
        document.getElementById('btnProceed').addEventListener('click',()=>{
           
            console.log('i got here ');
            saveUser();
        });
    }
    if(document.getElementById('planForToday')){
        document.getElementById('btnProceed').addEventListener('click',()=>{
            savePlan();
            console.log('i got here 2 ');
        })
    }
    
    
    function loadweather(){
        //const userLocation = navigator.geolocation.getCurrentPosition(displayPosition);
        const userLocation = '1398823' ;
        weather(userLocation ,'weather');
    }
    function displayPosition(data){
        console.log(data);
        let locationData = {} ;
        locationData = data ;
        // console.log(locationData.position);
        
    }
    function setTime() {
        const d = new Date();
        let n = d.getHours();
        let t = d.getMinutes();
        
        document.getElementById("hours").innerHTML = n;
        document.getElementById("time").innerHTML = t;
        document.getElementById("time").style.marginTop = '50%';
        
    }
    function blinkTimer(){
        document.getElementById("ticker").style.color = 'transparent';
    }
    function blinkTimerShow(){
        document.getElementById("ticker").style.color = '#fff';
    }
    function updateTime(){
        setInterval(()=>{ setTime(); blinkTimer() },1000);
        setInterval(()=>{ setTime(); blinkTimerShow() },2000);
    }
    
    function setDateAndTime() {
        let time = new Date()
        
        
        document.getElementById("date").innerHTML = time.toDateString();
    }
    
    loadweather();
    GreetingDisplay();
    MaintainUserState();
    loadQuotes();
    
    setTime();
    updateTime();
    setDateAndTime();