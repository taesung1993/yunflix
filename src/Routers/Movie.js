import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import {MovieContext} from "Context";
import {movieApi} from "Api";
import Loader from "Components/Loader";
import Slider from "Components/Slider";

const Container = styled.div`
    min-height: 90vh;
    padding-bottom: 50px;
`;

const Title = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-shadow: 1px 2px 2px rgba(178, 190, 195,0.67);
    padding-bottom: 10px;
    border-bottom: 1px solid #636e72;
    margin-bottom: 20px;
    margin-top: 30px;
`;

const Movies = styled.div`
    display: grid;
    grid-template-columns: 5% 90% 5%;
`;

const Movie = (props) => {
    const {state, dispatch} = useContext(MovieContext);
    useEffect(() => {
        const updateState = async() => {
            try{
                const {data:{results:topRated}} = await movieApi.topRated();
                const {data:{results:nowPlaying}} = await movieApi.nowPlaying();
                const {data:{results:popular}} = await movieApi.popular();
                dispatch({type:"SUCCESS", data: {topRated, nowPlaying, popular}});   
            }
            catch(error){
                dispatch({type:"ERROR", error: error.message});
            }
        } 
        dispatch({type: "LOADING"});
        updateState();
    }, []);
    return(
        <>
            <Helmet><title>MOVIES | YUNFLIX</title></Helmet>
            <Container>
                {state.loading ? <Loader/> : 
                <>
                <Title>NOW PLAYING 20</Title>
                <Movies>
                    <Slider movies={state.data && state.data.nowPlaying} type="movie"/>
                </Movies>
                <Title>POPULAR 20</Title>
                <Movies order="not First">
                    <Slider movies={state.data && state.data.popular} type="movie"/>
                </Movies>
                <Title>TOP RATED 20</Title>
                <Movies order="not First">
                    <Slider movies={state.data && state.data.topRated} type="movie"/>
                </Movies>
                </>}
            </Container>
        </>
    );
}

export default Movie;