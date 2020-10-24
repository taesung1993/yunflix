import React from "react";
import styled from "styled-components";

const Component = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
`;

const Circle = styled.div`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
`;


const Noimg = () => {
    return (
    <>
        <Component><Circle>NO IMAGE</Circle></Component>
    </>
    );
}

export default Noimg;