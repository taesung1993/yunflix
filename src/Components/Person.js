import React from "react";
import styled from "styled-components";
import Noimg from "./Noimg";

const imgUrl = "https://image.tmdb.org/t/p/w300";

const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    overflow:hidden;
    padding-bottom: 150%;
`;

const Poster = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const Role = styled.span`
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    white-space: nowrap;
    text-shadow: 0px 1px 1px rgba(178, 190, 195, 0.6);
    overflow: hidden; 
    text-overflow: ellipsis;
    margin: 10px 0;
`;

const Name = styled.span`
    display: block;
    opacity: 0.6;
`;

const Section = styled.section`
    width: 100%;    
    position: relative;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;

const Person = ({id, name, gender, profile, role, type}) => {
    return(
        <Section id={`${type}${id}`}>
            <ImgBox>
                {
                    profile ? <Poster src={`${imgUrl}/${profile}`}/> : <Noimg/>
                }
            </ImgBox>
            <Role>{role}</Role>
            <Name>{name}</Name>
        </Section>
        );
}

export default Person;