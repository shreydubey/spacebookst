//Get current date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return `0${month}`;
    }
    else{
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10){
        return `0${day}`;
    }
    else{
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//console.log(currentDate);

//Get previous month date
/*
const getPreviousMonthDate = () => {
    const previousYear = new Date().getFullYear();
    const previousMonth = new Date().getMonth() + 1;
    const previousDay = getCurrentDay();
    if (previousMonth === 1){
        return  `${previousYear -1}-12-${previousDay}`;
    }
    else if (previousMonth < 11){
        return  `${previousYear}-0${previousMonth - 1}-${previousDay}`;
        
    }
    else {
        return  `${previousYear}-${previousMonth - 1}-${previousDay}`;
    }
}

const previousMonthDate = getPreviousMonthDate();
//console.log(previousMonthDate);
*/

let previousMonthDate = new Date();
previousMonthDate.setDate(previousMonthDate.getDate() - 60);
const previousMonthDateString = previousMonthDate.toISOString().split('T')[0];
console.log(previousMonthDateString);

//tomorrow date
const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
const tomorrowDate = tomorrow.toJSON().toString().slice(0,10);
console.log(tomorrowDate);

// get current datetime
//const nowDateTime = new Date();
//console.log(nowDateTime);

//URLs without key

//Launches
//Upcoming launches
export const upcoming_launch_url = () => `https://fdo.rocketlaunch.live/json/launches?`;
//Recent launches
export const recent_launch_reversing_required_url = () => `https://fdo.rocketlaunch.live/json/launches?before_date=${tomorrowDate}&after_date=${previousMonthDateString}`;
//LaunchDetail
export const launch_detail_url = (launchId) => `https://fdo.rocketlaunch.live/json/launches?id=${launchId}`;  
//Searched item 
export const searched_url1 = (text) => `https://fdo.rocketlaunch.live/json/launches?before_date=${tomorrowDate}&search=${text}`; 
export const searched_url2 = (text) => `https://fdo.rocketlaunch.live/json/launches?after_date=${currentDate}&search=${text}`;


//Stats
//for year 2021
export const year_2021 = (country_code) => `https://fdo.rocketlaunch.live/json/launches?before_date=${currentDate}&after_date=2020-12-31&country_code=${country_code}`;
//for year other years
export const year_otherthan_2021 = (for_year, country_code) => `https://fdo.rocketlaunch.live/json/launches?before_date=20${for_year + 1}-01-01&after_date=20${for_year - 1}-12-31&country_code=${country_code}`;