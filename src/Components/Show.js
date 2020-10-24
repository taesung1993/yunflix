import React from "react";
import Helmet from "react-helmet";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Overview from "Components/Overview";
import Personate from "Components/Personate";
import Review from "Components/Review";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
    z-index: -1;
`;

const Container = styled.div`
    height: 90vh;
    position: relative;
`;

const Nav = styled.nav`
    position: fixed;
    top: 50%;
    right: 20px;
    writing-mode: tb-rl;
    transform: translateY(-50%);
    z-index: 10;
`;
const SLink = styled(Link)`
    font-size: 1.8rem;
    font-weight: 500;
    opacity: ${(props) => props.selected ? 1 : 0.3};
    &:not(:last-child){
        margin-bottom: 25px;
    }
`;

const Show = ({id, data, type}) => {
    const {pathname} = useLocation();
    const regex = new RegExp(`/show/${id}`, "g");
    const selected = pathname.replace(regex, "");
    console.log(selected, type);
    return(
        <>
        {data && 
        <>
            <Helmet><title>{`${data.data.original_name}`} | YUNFLIX</title></Helmet>
           {data.data.backdrop_path && <Background bg={`https://image.tmdb.org/t/p/original${data.data.backdrop_path}`}></Background> } 
            <Container>
                <>
                    {
                        selected === "" ? <Overview data={data.data} similars={data.similars} video={data.video} type={type}/> :
                        selected === "/personate" ? <Personate personate={data.personate}/> :
                        <Review reviews = {data.reviews}/>
                    }
                </>
                <Nav>
                    <SLink to={`/show/${id}`} selected={selected === "" ? 1 : 0}>OVERVIEW</SLink>
                    <SLink to={`/show/${id}/personate`} selected={selected === "/personate" ? 1 : 0}>PERSONATE</SLink>
                    <SLink to={`/show/${id}/review`} selected={selected==="/review" ? 1 : 0}>REVIEW</SLink>
                </Nav>
            </Container>  
        </>}
        </>
    );
}

export default Show;