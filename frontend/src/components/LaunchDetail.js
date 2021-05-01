import React, { useState } from 'react'
//import { useEffect } from 'react'
//import Modal from './Modal'
//style and animation
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { Form, Col, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useSelector} from 'react-redux';
//import { launch_detail_url } from '../api';
import {useHistory} from "react-router-dom";
//import {useParams} from 'react-router';
//image
//import isro from '../img/isro_logo.jpg';
//import spacex from '../img/spacex_logo.jpg';
//icons
import resultIcon from '../img/icons/resultIcon.png';
//import bookmarkIcon from '../img/icons/bookmarkIcon.png';
//import dateIcon from '../img/icons/dateIcon.png';
import locationIcon from '../img/icons/locationIcon.png';
import providerIcon from '../img/icons/providerIcon.png';
import vechileIcon from '../img/icons/vechileIcon.png';
import weatherIcon from '../img/icons/weatherIcon.png';
import youtubeIcon from '../img/icons/youtubeIcon.png';
// react player 
import ReactPlayer from 'react-player/youtube';
//import '../bootstrap.min.css'

//import { Container } from '../Container';


const LaunchDetail = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 

    const history = useHistory();
    //exit detail handler
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/home');
        }
    }

    //get detail of clicked launch from redux
    const {clicked_launch_detail,isLoading} = useSelector((state) => state.clicked_launch_detail);
    //console.log(clicked_launch_detail);

    const  launchResult = clicked_launch_detail.result;
    let launchResultText = '' ;
    switch(launchResult){
        case -1:
            launchResultText = "Not Set";
            break;
        case 0:
            launchResultText = "Failure";
            break;
        case 1:
            launchResultText = "Success";
            break;
        case 2:
            launchResultText = "Partial Failure";
            break;
        case 3:
            launchResultText = "In-Flight Abort (Crewed)";
            break;
        default :
            break;
    }
    
    let weatherSummary = 'Unavailable';
    if(clicked_launch_detail.weather_summary !== null){
        weatherSummary = clicked_launch_detail.weather_summary;
    }

    
    let baseVideoURL = "https://www.youtube.com/watch?v=";
    let videoURL = "";
    let mediaAvailability = 'On launch day, check back here to watch the live stream! (if available)';
    if(clicked_launch_detail.media.length > 0){
        mediaAvailability = 'Available'; 
        if(clicked_launch_detail.media[0].youtube_vidid !== ""){
            videoURL = baseVideoURL + clicked_launch_detail.media[0].youtube_vidid ;
        }
        else if (clicked_launch_detail.media.length > 1){
            videoURL = baseVideoURL + clicked_launch_detail.media[1].youtube_vidid ;
        }
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(name);
        history.push("/home");
        
    }

    
 
    return(
    <>
    {!isLoading && ( 
      <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail>
              <Stats>
                  <div className="rating">
                      <h3>{clicked_launch_detail.name}</h3>
                      <p>LaunchDate</p>
                      <h4>{clicked_launch_detail.date_str}</h4>
                  </div>
                  <Info>
                      <img src={resultIcon} className='icon' alt="resultIcon"/>
                      <div className="launchResult">
                          <p>LaunchResult</p>
                          <h4>{launchResultText}</h4>
                      </div>
                  </Info>
              </Stats>
              <div className="media">
                  <img src={require(`../img/${clicked_launch_detail.provider.slug}_logo.jpg`).default} alt="Provider Name"/>
              </div>
              
              <Gallery>
                  <Card>
                      <img src={providerIcon} className='iconbig' alt="provider"/>
                      <div className="text">
                          <p>Provider</p>
                          <h5>{clicked_launch_detail.provider.name}</h5>
                      </div>
                  </Card>
                  <Card>
                      <img src={vechileIcon} className='iconbig' alt="vechile"/>
                      <div className="text">
                          <p>Vehicle</p>
                          <h5>{clicked_launch_detail.vehicle.name}</h5>
                      </div>
                  </Card>
                  <Card>
                      <img src={locationIcon} className='iconbig' alt="launchpad"/>
                      <div className="text">
                          <p>LaunchPad</p>
                          <h5>{clicked_launch_detail.pad.name}</h5>
                          <h5>{clicked_launch_detail.pad.location.name}</h5>
                          <h5>{clicked_launch_detail.pad.location.statename} {clicked_launch_detail.pad.location.country}</h5>
                      </div>
                  </Card>
                  <Card>
                       <img src={weatherIcon} className='iconbig' alt="weather"/>
                       <div className="text">
                           <p>Weather Summary</p>
                           <h5>{weatherSummary}</h5>
                          
                      </div>
                  </Card>
              </Gallery>
              <Description>
                  <p>{clicked_launch_detail.launch_description}</p>
              </Description>
              <Player>
                  <div>
                      <div className='media'>
                          <img src={youtubeIcon} className='iconbig' alt="media"/>
                          <p>Media</p>
                      </div>
                      <h4>{mediaAvailability}</h4>
                  </div>
                  {mediaAvailability === 'Available' && (
                      <ReactPlayer url={videoURL} controls={true} width='100%' height='450px' style={{borderColor : 'black'}} />
                 )}       
              </Player>
             
              
              <Popup
                  trigger={<Button className="button"> Bookmark </Button>}
                  modal
                  nested
              >
              {close => (
              <div className="modal">
                  <Button className="close" onClick={close}>
                  &times;
                  </Button>
                 <div className="header"> Notify Me !!</div>
                     <div className="content">
                     <Form>
                         <FormGroup row>
                             <Label for="email" sm={2}>
                             Email
                             </Label>
                             <Col sm={10}>
                             <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required

                             />

                             </Col>

                         </FormGroup>
                         <FormGroup row>
                             <Label for="name" sm={2}>
                             Name
                             </Label>
                             <Col sm={10}>
                             <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                             />
                             </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 12, offset: 2 }}>
            <Button onClick={SubmitHandler} style={{marginLeft:'21.5%',marginTop:'2%', paddingLeft:'5%',paddingRight:'5%'}}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
            </div>   
                
            </div>
            )}
           </Popup>



          </Detail>  
      </CardShadow>
      )}
    </>
    );
};

//styled
const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    .icon{
        width: 50%;
        height: 50%;
        object-fit: cover;
    }
    
`

const Detail = styled(motion.div)`
    h2{
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        font-size: 1.5rem;
    }
    h3{
        font-size: 1rem;
        color: #333;
        padding: 1rem  0rem;
    }
    p{
        font-size: .90rem;
        line-height: 200%;
        color: #524f4f;
    }
    a{
        text-decoration: none;
    }
    width: 80%;
    min-height: 100vh;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width:100%;
        padding-top: 2rem ;
        padding-bottom: 3rem ;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    h4{
        padding-bottom: 1rem;
    }   
    img{
        padding-right:.25rem;
    } 
    p{
        //font-size: 14px;
    }
    .launchResult{
        display:flex;
        flex-direction:column;
    }
`

const Gallery = styled(motion.div)`
    min-height: 30vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    grid-column-gap: 1rem;
    grid-row-gap : 1rem;
    img{
        width: 40%;
        padding: 1rem;
        object-fit: cover;
    }

`

const Card = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    .text{
        padding: .5rem;
        p{
            padding-bottom: .5rem;
        }
    }
   `

const Description = styled(motion.div)`
    p{
        padding-bottom: 2rem;
        padding-top: 2rem;
        text-align: justify;
    }
`
const Button = styled(motion.button)`
padding: 0.35rem 1rem;
border: 0.4rem solid black;
margin: 0 0.25rem 0.25rem 0;
border-radius: 0.12em;
box-sizing: border-box;
font-weight: bolder;
color: black;
background-color: white;
text-align:center;
cursor: pointer;
transition: all 0.2s;
&:hover{
color: white;
background-color: black;
border-color: black;
}    

`

const Player = styled(motion.div)`
    padding-bottom: 2.5rem;
    h3{
        padding-bottom: 2rem;
    }
    h4{
        padding-bottom: 1rem;
    }
    img{
        width: 4rem;
        height: 5rem;
        padding: 1rem;
        padding-left: 0rem;
        object-fit: cover;
    }
    .media{
        display: flex;
        justify-content: left;
        p{
            padding-top: 1.75rem;
        }
    }

`

export default LaunchDetail;