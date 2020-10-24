import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Noimg from "Components/Noimg";

const imgUrl = "https://image.tmdb.org/t/p/w300";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
    padding-bottom: 50px;
`;

const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 150%;
`;
const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const Title = styled.span`
    display: inline-block;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    text-shadow: 0px 1px 1px rgba(178, 190, 195, 0.6);
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.5;
    text-overflow: ellipsis;
`;
const Date = styled.span`
    display: block;
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

const SLink = styled(Link)``;

const Section = styled.section`
    width: 100%;
    overflow:hidden;
    position: relative;
    &:hover ${AvrWrap}{
        opacity: 1;
    }
`;

const Item = ({id, title, poster, date, average, type}) => {
    return(
        <Section id={id}>
            <SLink to={`/${type.toLowerCase()}/${id}`}>
                <ImgBox>
                    {poster ? <Img src={`${imgUrl}${poster}`}/> : <Noimg/>}
                </ImgBox>
                <Title>{title}</Title>
                <Date>Released {date}</Date>
                <AvrWrap>
                    <Avr id={`${id}Aver`}><Icon className="fas fa-star"></Icon>{average}</Avr>
                </AvrWrap>
            </SLink>
        </Section>
    )
}

const Result = ({data, type}) => {
    const {results} = data;
    return(
        <Container>
            {
                type === "movie" ?
                results.map(({id, original_title, poster_path, release_date, vote_average}) => <Item key={id} type={type} id={id} title={original_title} poster={poster_path} date={release_date} average={vote_average}/>)
                :
                results.map(({id, original_name, poster_path, first_air_date, vote_average}) => <Item key={id} type={type} id={id} title={original_name} poster={poster_path} date={first_air_date} average={vote_average}/>)
            }
        </Container>
    );
}

export default Result;