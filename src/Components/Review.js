import React from "react"
import styled from "styled-components";

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

const ReviewList = styled.ul``;
const Review = styled.li`
    padding-bottom: 20px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 50px;
`;
const Author = styled.span`
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 10px;
`;
const Content = styled.p`
    font-size: 1.3rem;
    opacity: 0.7;
    line-height: 1.2;
`; 

const Message = styled.div`
    font-size: 1.6rem;
    opacity: 0.7;
`;


const Reviews = ({reviews}) => {
    return(
        <>
            <Title>REVIEWS</Title>
            {reviews.length ? 
            <ReviewList>
               {reviews.map(({id, author, content}) => 
               <Review key = {id}>
                   <Author>{author}</Author>
                   <Content>{content}</Content>
               </Review>)}
            </ReviewList>
            :
            <Message>NO REVIEWS</Message> 
        }
        </>
    );
}

export default Reviews;