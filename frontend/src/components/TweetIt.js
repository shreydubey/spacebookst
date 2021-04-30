import React from 'react';

const Tweet = () => {
   
    const Twitter = require('twitter');
    let T = new Twitter({
        consumer_key: process.env.REACT_APP_CK,
        consumer_secret: process.env.REACT_APP_CS,
        access_token: process.env.REACT_APP_AT,
        access_token_secret: process.env.REACT_APP_ATS
    });
    
    //  tweet 'hello world!'
    let tweet = { status: 'Hello World! #FirstTweet' };
    const tweeted = (err, data, response) => {
        if(err){
            console.log("Something went wrong !!! Unable to post Tweet");
            console.log(err);
        }
        else{
            console.log("Tweet posted !!!");
        }
    }
    T.post('statuses/update', tweet, tweeted);
    
    return(
        <div></div>
    );
}


export default Tweet;
