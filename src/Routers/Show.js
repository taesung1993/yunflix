import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Slider from "Components/Slider";
import {MovieContext} from "Context";
import {showApi} from "Api";

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

const Shows = styled.div`
    display: flex;
`;


const Show = () => {
    const {state, dispatch} = useContext(MovieContext);
    useEffect(() => {
        const updateState = async() => {
            try{
                const {data:{results:topRated}} = await showApi.topRated();
                const {data:{results:aringToday}} = await showApi.aringToday();
                const {data:{results:popular}} = await showApi.popular();
                dispatch({type:"SUCCESS", data: {topRated, aringToday, popular}});   
            }
            catch(error){
                dispatch({type:"ERROR", error});
            }
        } 
        dispatch({type: "LOADING"});
        updateState();
    }, []);
    return(
        <>
            <Helmet><title>TV SHOWS | YUNFLIX</title></Helmet>
            <Container>
                {state.loading ? <Loader/> : 
                <>
                <Title>AIRING TODAY 20</Title>
                <Shows>
                    <Slider movies={state.data && state.data.aringToday} type="show"/>
                </Shows>
                <Title>POPULAR 20</Title>
                <Shows order="not First">
                    <Slider movies={state.data && state.data.popular} type="show"/>
                </Shows>
                <Title>TOP RATED 20</Title>
                <Shows order="not First">
                    <Slider movies={state.data && state.data.topRated} type="show"/>
                </Shows>
                </>}
            </Container>
        </>
    );
}

export default Show;