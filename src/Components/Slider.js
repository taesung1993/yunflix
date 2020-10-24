import React from "react";
import styled from "styled-components";
import Item from "Components/Item";

const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(160px, 1fr);
    grid-gap: 25px;
    overflow: hidden;
    margin: 0 20px;
`;
const BtnSec = styled.section`
    min-height: 100%;
    display: flex;
    align-items:center;
`;

const Button = styled.span`
    display: block;
    width: 50px;
    height: 25px;
    background-color: #fff;
    color: rgba(45, 52, 54,1.0);
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    line-height: 2;
    cursor: pointer;
    -ms-user-select: none; 
    -moz-user-select: -moz-none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    user-select:none;
    &:hover{
        transform: scale(1.2, 1.2);
    }
`;

const Slider = ({movies, type}) => {
    const moveScroll = (e) => {
        const text = e.currentTarget.textContent;
        let moviesTag = null;
        let scroll = null;
        let newScroll = null;
        if(text === "PRE"){
            moviesTag = e.currentTarget.parentNode.nextSibling;
            scroll = moviesTag.scrollLeft;
            newScroll = scroll < 0 ? 0 : scroll-300;
        }
        else{
            moviesTag = e.currentTarget.parentNode.previousSibling;
            const endSize = moviesTag.scrollWidth;
            scroll = moviesTag.scrollLeft;
            newScroll = scroll >= endSize ? endSize : scroll+300;
        }

        moviesTag.scrollTo(newScroll, 0);        
    }
    return (
    <>
    <BtnSec><Button onClick={moveScroll}>PRE</Button></BtnSec>
        <Movies>
        {movies && movies.map(({original_title, id, release_date, poster_path, vote_average, name, first_air_date}) => <Item key={id} type={type} id={id} title={original_title || name} date={release_date || first_air_date} poster={poster_path} average={vote_average}/>)}
        </Movies>
    <BtnSec><Button onClick={moveScroll} right={1}>NEXT</Button></BtnSec>
    </>
    );
}

export default Slider;