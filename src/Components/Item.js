import React from "react";
import styled from "styled-components";
import Noimg from "./Noimg";

const imgUrl = "https://image.tmdb.org/t/p/w300";

const SLink = styled.a``;
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
const Title = styled.span`
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    white-space: nowrap;
    text-shadow: 0px 1px 1px rgba(178, 190, 195, 0.6);
    overflow: hidden; 
    line-height: 1.5;
    text-overflow: ellipsis;
    margin: 10px 0;
`;
const Date = styled.span`
    display: block;
    font-size: 1.2rem;
    opacity: 0.5;
`;

const AvrWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.12);
    z-index: 6;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
`;

const Avr = styled.span`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 5px 10px;
    border-radius: 10px;
    color: rgba(45, 52, 54,1.0);
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.3rem;
    opacity: 1;
    z-index: 10;
`;

const Icon = styled.i`
    color: rgba(116, 185, 255,1.0);
    margin-right: 5px;
`;

const Section = styled.section`
    width: 100%;    
    position: relative;
    &:hover ${AvrWrap}{
        opacity: 1;
    }
`;

const Item = ({id, title, date, poster, average, type}) => {
    return(
        <Section id={`${type}${id}`}>
            <SLink href={`/${type}/${id}`}>
                <ImgBox>
                    {poster ? <Poster src={`${imgUrl}/${poster}`}></Poster> : <Noimg/>}
                </ImgBox>
                <Title>{title}</Title>
                <Date>Released {date}</Date>
                <AvrWrap>
                    <Avr id={`${id}Aver`}><Icon className="fas fa-star"></Icon>{average}</Avr>
                </AvrWrap>
                </SLink>
        </Section>
        );
}

export default Item;