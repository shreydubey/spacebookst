import React from 'react';
import styled  from 'styled-components';
import {motion} from 'framer-motion';
//import axios
import axios from 'axios';
import {year_2021} from '../api';
//import react-chartjs-2
import {Bar} from 'react-chartjs-2';

//garbage code



const Stats = () => {
    const statsData = [];
    const getStatsData = () => {
    const countries_code = ['IN','CN','US','RU','JP','GF','KZ'];
    /*
    for(let i=11;i<21;i++){
        let oneYearData = [];
        countries_code.forEach(async (country) => {
            //console.log(country);
            let outputData = await axios.get(`${year_otherthan_2021(i,country)}&key=${process.env.REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY}`);
            //oneYearData.push(country,outputData.data.total);
            let element= {};
            element[country]= outputData.data.total;
            oneYearData.push(element);
            await new Promise(r => setInterval(r, 1000));
        });
        statsData.push(oneYearData);
        //oneYearData = [];
    }
    */
    //const year2021 = [];
    let element= {};
    countries_code.forEach(async (country) => {
        let outputData2021 = await axios.get(`${year_2021(country)}&key=${process.env.REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY}`)
        element[country]= outputData2021.data.total;
        //year2021.push(country, outputData2021.data.total);
        new Promise(r => setInterval(r, 1000));
    });
    //statsData.push(year2021);
    statsData.push(element)
    //console.log(statsData);
    console.log(element);
    //console.log(statsData[0]);
    //setInterval(function(){alert("Hello")},3000);
}
    //calling function getStatsData
    //getStatsData();
    setTimeout(getStatsData,10000);
    //create stats dashboard
    
    const data = {
        labels: ["2011","2012","2013","2014","2015",
                "2016","2017","2018","2019","2020","2021"],
        datasets: [
            {
                label: "Arianespace",
                backgroundColor: "#000000",
                data: [7,10,7,11,12,11,11,11,9,7,0]
            },
            {
                label: "China",
                backgroundColor: "#191919",
                data: [18,19,15,16,20,22,18,39,34,39,7]
            },   
           {
                label: "India",
                backgroundColor: "#323232",
                data: [3,2,3,4,5,7,5,7,6,2,1]
           },
           {
                label: "Japan",
                backgroundColor: "#4c4c4c",
                data: [3,2,3,4,4,4,7,6,2,4,0]
           }, 
           {
                label: "Kazakhstan",
                backgroundColor: "#666666",
                data: [23,21,23,20,17,11,13,9,13,7,3]
           }, 
           {
                label: "Russia",
                backgroundColor: "#7f7f7f",
                data: [7,3,9,11,8,6,6,8,9,8,2]
           }, 
           {
                label: "United States",
                backgroundColor: "#999999",
                data: [17,13,19,23,19,22,29,33,25,40,15]
           },
          
        ]
      };
      

    //options
    const optionsApplied = {
        scales: {
            yAxes: [{ stacked: true }],
            xAxes: [
            {
                stacked: true,
                ticks: { maxRotation: 90, minRotation: 90 },
            }
            ]
        }
    };
    
    return(
        <Charts>
            <h4> Launch Record For Various Countries </h4>
            <div className='histogram'>
            <Bar
                data={data}
                options= {optionsApplied}
                width={100}
                height={40}
            />
            </div>
            {/*<TweetIt />*/}
        </Charts> 
    );
}

//styled
const Charts = styled(motion.div)`
    max-height: 85vh;
    padding: 0rem 3rem;
    h4{
        padding: .75rem;
        text-align: center;
        font-size: 1.20rem;
    }
    @media (max-width: 1000px){
            padding-top: 5rem;
            h4{
                padding: 2rem;
            } 
        }
`

export default Stats;
