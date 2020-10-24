import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 90vh;
`;

const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Ring = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: transparent;
    animation: ani 2s linear infinite;
    @keyframes ani {
    0%{
        transform: rotate(0deg);
        box-shadow:0px 2px 2px #ff7675;
    }
    50%{
        transform: rotate(180deg);
        box-shadow:0px 2px 2px #ffeaa7;
    }
    100%{
        transform: rotate(360deg);
        box-shadow:0px 2px 2px #55efc4;
    }
`;
const Loading = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 2.0rem;
    font-weight: 600;
    text-shadow: 1px 2px 2px rgba(178, 190, 195, 1.0);
    letter-spacing: 5px;
    line-height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
`;

const Loader = () => {
    return(
        <Container>
            <Center>
                <Loading className="text">LOADING</Loading>
                <Ring className="ring"></Ring>
            </Center>
        </Container>
    );
}

export default Loader;