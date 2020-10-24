import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const UNITS = 10;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;
const First = styled(Link)`
    font-size: 1.6rem;
    margin-right: 10px;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`;
const Last = styled(Link)`
    font-size: 1.6rem;
    margin-left:10px;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`;
const Pre = styled(Link)`
    font-size: 1.6rem;
    margin-right: 10px;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`;
const Next = styled(Link)`
    font-size: 1.6rem;
    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`;
const SLink = styled(Link)`
    font-size: 1.6rem;
    opacity: ${(props) => props.select ? 1 : 0.5};
    &:not(:last-child){
        margin-right: 10px;
    }
`;

const Navi = ({totalPage, keyword, type, page}) => {
    const [pages, setPages] = useState(null);
    const [start, setStart] = useState(0);
    const cur = page || 1;
    const total = Array.from({length:totalPage}, (_,idx) => idx+1);
    
    useEffect(() => {     
        const unit = parseInt(cur/UNITS);
        const newStart = cur % UNITS ? unit*UNITS : (unit-1)*UNITS;
        setPages(total.slice(newStart, newStart+UNITS));
        setStart(newStart);
    }, [cur]);

    return(
        <Nav>
            {
                pages && cur > UNITS &&
                <First to={`/search?keyword=${keyword}&type=${type}&page=1`}>
                    First
                </First>
            }
            {
                pages && cur > UNITS &&
                <Pre to={`/search?keyword=${keyword}&type=${type}&page=${start}`}>
                    PRE
                </Pre>
            }
            {pages && pages.map((num) => <SLink key={`page${num}`} to={`/search?keyword=${keyword}&type=${type}&page=${num}`} select={cur*1 === num ? 1 : 0}>{num}</SLink>)}
            {
                pages && total.length > UNITS && <Next to={`/search?keyword=${keyword}&type=${type}&page=${start+UNITS+1}`}>NEXT</Next>
            }
            {
                pages && total.length > UNITS && <Last to={`/search?keyword=${keyword}&type=${type}&page=${total.length}`}>LAST</Last>
            }
        </Nav>
    );
}

export default Navi;