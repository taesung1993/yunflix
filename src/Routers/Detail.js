import React, {useEffect, useContext} from "react";
import {showApi,movieApi} from "Api";
import {useLocation, useParams} from "react-router-dom";
import { MovieContext } from "Context";
import Loader from "Components/Loader";
import Movie from "Components/Movie";
import Show from "Components/Show";

const Detail = () => {
    const {state, dispatch} = useContext(MovieContext);
    const {pathname} = useLocation();
    const type = pathname.match(/movie|show/g, "").join("");
    const {id} = useParams();

    useEffect(() => {
        const getData = async(id) => {
            try{
                const {data} = type === "show" ? await showApi.detail(id) : await movieApi.detail(id);
                const {data:{results:videos}} = type === "show" ? await showApi.getVideos(id) : await movieApi.getVideos(id);
                const {data:{results: similars}} = type === "show" ? await showApi.similars(id) : await movieApi.similars(id);
                const {data:personate} = type === "show" ? await showApi.getCredits(id) : await movieApi.getCredits(id);
                const {data: {results:reviews}} = type === "show" ? await showApi.getReviews(id) : await movieApi.getReviews(id);
                dispatch({type:"SUCCESS", data:{data, video: videos[0], similars, personate, reviews}});
            }
            catch(error){
                dispatch({type:"ERROR", error: error.message});
            }
        };
        dispatch({type:"LOADING"});
        getData(id);
    }, []);

    console.log(state, pathname, pathname.match(/movie|show/g, ""));
    return(
        state.loading === true ? <Loader /> 
            : type === "show" ? <Show data={state.data} type={type} id={id}/> 
            : state.data && <Movie data={state.data} type={type} id={id}/>
    );
};

export default Detail;