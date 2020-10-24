import React from "react";
import styled from "styled-components";
import Person from "Components/Person";

const Credits = styled.div`
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
    align-items: center;
`;

const Button = styled.span`
    display: block;
    width: 50px;
    height: 25px;
    position: ${(props) => props.right && "absolute"};
    right: ${(props) => props.right && 0};
    background-color: #fff;
    color: rgba(45, 52, 54,1.0);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2;
    text-align: center;
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

const Credit = ({cast, crew, type}) => {
    const moveScroll = (e) => {
        const text = e.currentTarget.textContent;
        let creditTag = null;
        let scroll = null;
        let newScroll = null;
        if(text === "PRE"){
            creditTag = e.currentTarget.parentNode.nextSibling;
            scroll = creditTag.scrollLeft;
            newScroll = scroll < 0 ? 0 : scroll-300;
        }
        else{
            creditTag = e.currentTarget.parentNode.previousSibling;
            const endSize = creditTag.scrollWidth;
            scroll = creditTag.scrollLeft;
            newScroll = scroll >= endSize ? endSize : scroll+300;
        }

        creditTag.scrollTo(newScroll, 0);        
    }
    return (
    <>
    <BtnSec><Button onClick={moveScroll}>PRE</Button></BtnSec>
        {type === "cast" ? 
                <Credits className="credit">
                {cast && cast.map(({character, cast_id, name, profile_path}, idx) => <Person key={idx} type={type} id={cast_id} name={name} profile={profile_path} role={character}/>)}
                </Credits> :
                <Credits>
                    {crew && crew.map(({credit_id, job, name, profile_path}, idx) => <Person key={idx} type={type} id={credit_id} name={name} profile={profile_path} role={job}/>)}
                </Credits>
        }
    <BtnSec><Button onClick={moveScroll} right={1}>NEXT</Button></BtnSec>
    </>
    );
}

export default Credit;