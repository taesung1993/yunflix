import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import {useLocation} from "react-router-dom";
import { MovieContext } from "Context";
import {showApi, movieApi} from "Api";
import Loader from "Components/Loader";
import Result from "Components/Result";
import Navi from "Components/Navi";

const Container = styled.div`
    min-height: 90vh;
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



const Search = (props) => {
    const {state, dispatch} = useContext(MovieContext);
    const {search} = useLocation();
    const regex = new RegExp(`keyword=|&type=|&page=`, "g");
    const [_, keyword, type, page] = search.split(regex);
    const [newLoad, setLoad] = useState(true);

    useEffect(() => {
        const getResults = async() => {
            try{
                const pageNum = page || 1;
                const {data} = type === "movie" ? await movieApi.search(keyword, pageNum) : 
                await showApi.search(keyword, pageNum);
                dispatch({type: "SUCCESS", data});
                setLoad(false);
            }catch(error){
                dispatch({type:"ERROR", error: error.message});
            }
        }
        dispatch({type: "LOADING"});
        getResults();   
    }, [type, page]);

    return (
        <>
            <Helmet><title>SEARCH | YUNFLIX</title></Helmet>
            {   (newLoad || state.loading) ? <Loader /> :
                <>
                <Container>
                    <Title>Search Results for {keyword} in {type}</Title>
                    <Result data={state.data} type={type}/>
                    {state.data.total_pages > 1 &&  <Navi totalPage={state.data.total_pages} keyword={keyword} type={type} page={page}/>}
                </Container>
                
                </>
            }
        </>
    );
}

export default Search;