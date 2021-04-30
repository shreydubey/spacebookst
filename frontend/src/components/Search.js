import React,{useState} from 'react';
import ReactTooltip from "react-tooltip";
//import {Link} from 'react-router-dom';
//style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux and routes
import {loadSearchedLaunch} from "../actions/launchAction";
import {useDispatch} from "react-redux";
//import icons
import searchIcon from '../img/icons/searchIcon.png';

const Search = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitSearch = (e) => {
        console.log(textInput);
        e.preventDefault(); 
        dispatch(loadSearchedLaunch(textInput));
        setTextInput("");
    }
    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    }

    return(
        <SearchNav>
            <Logo onClick={clearSearch}>
                <img  data-tip data-for="clearSearch" src={searchIcon} alt="search"/>
                <ReactTooltip id="clearSearch" place="top" effect="solid">
                    Clear Search Result
                </ReactTooltip>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type='submit'>Search</button>
            </form>
        </SearchNav>
    );
}

//styled
const SearchNav = styled(motion.nav)`
    padding-top: 4rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 1rem;
    text-align: center;
    input{
        width: 40%;
        font-size: 1rem;
        padding: 0.5rem;
        //border: 0.2rem solid black;
        border: none;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
        font-weight: lighter;
    }
    button{
        font-size: 1rem;
        border: none;
        padding: 0.5rem 1.5rem;
        border-radius: 0.2rem;
        cursor: pointer;
        background: black;
        color: white;    
    } 
`
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: .5rem;
    cursor: pointer;
`

export default Search;