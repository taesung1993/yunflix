import React from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import Credits from "Components/Credits";

const CreditBox = styled.div`
    display: grid;
    grid-template-columns: 5% 90% 5%;
    padding-bottom: 50px;
`;

const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-shadow: 1px 2px 2px rgba(178, 190, 195,0.67);
    padding-bottom: 10px;
    border-bottom: 1px solid #636e72;
    margin-bottom: 20px;
    margin-top: 30px;
    text-transform: uppercase;
`;

const Message = styled.span`
    font-size: 2.3rem;
    letter-spacing: 5px;
    opacity: 0.5;
`;

const Personate = ({personate}) => {
    const {cast, crew} = personate;
    console.log(useLocation());
    return(
        <>
        <Title>CASTS</Title>
            {
            cast.length ? 
            <CreditBox>
                <Credits cast={cast} type="cast"/>
            </CreditBox>
            :
            <Message />
            }
        <Title>CREWS</Title>
            {
            crew.length ?    
            <CreditBox>
                <Credits crew={crew} type="crew"/>
            </CreditBox>
            :
            <Message />
            }
        </>
    );
}

export default Personate;