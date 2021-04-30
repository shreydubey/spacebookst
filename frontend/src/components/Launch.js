import React from 'react';
import {Link} from 'react-router-dom';
//style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';

const Launch = ({name, date, id, image}) => {

    //load detail on click
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    }

    return(
        <StyledLaunch onClick={loadDetailHandler}>
            <Link to={`/home/launch/${id}`}>
            <div className="pack">
            <h3>{name}</h3>
            </div>
            <p>{date}</p>
            <img src={image} alt={name}/>
            </Link>
        </StyledLaunch>
    );
}

//styled
const StyledLaunch = styled(motion.div)`
    .pack{
        min-height: 10vh;
    }
    h3{
        font-size: 12px;
        font-weight: bold;
    }
    p{
        font-size: 12px;
    }    
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        display: block;
        object-fit: cover;
    }
`

export default Launch;