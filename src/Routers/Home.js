import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const Container = styled.div`
    min-height: 90vh;
    display: flex;
    justify-content:center;
    align-items:center;
`;

const TitleBar = styled.div`
    width: 350px;
`;

const Logo = styled.div`
    display:flex;
    justify-content: center;
    color: #c23616;
    font-family: 'Bebas Neue', cursive;
    font-size: 6rem;
    text-shadow: 1px 2px 3px rgba(194, 54, 22, 0.7);
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const Left = styled.span`
    display: inline-block;
    transform: translateY(4px) skew(0deg, -2deg);
`;

const Right = styled.span`
    display: inline-block;
    transform: translateY(4px) skew(0deg, 2deg);
`;

const Greeting = styled.p`
    margin-top: 10px;
    font-size: 1.2rem;
    line-height: 1.2;
    word-break: break-all;
    padding: 20px 5px;
    opacity: 0.7;
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
const Link = styled.a`
    text-align: center;
    opacity: 0.5;
    &:first-child{
        margin-right: 20px;
    }
    &:hover{
        opacity: 1;
    }
`;

const Circle = styled.span`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    font-size: 2rem;
    text-align: center;
    line-height: 2.5;
    color: black;
`;
const Icon = styled.i``;
const Site = styled.span`
    display: inline-block;
    margin-top: 5px;
`;
const Writer = styled.div`
    text-align: center;
`;

const Home = () => {
    return (
        <>
            <Helmet><title>HOME | YUNFLIX</title></Helmet>
            <Container>
                <TitleBar>
                    <Logo>
                            <Left>yun</Left>
                            <Right>flix</Right>
                    </Logo>
                    <Greeting>
                        Hello, I'm Taesung Yun who made this web. I made this web using
                        React Hooks, not class and Redux.In this Nomad Coder, only class
                        Components were Covered, But I used only React Hooks and added more 
                        functions than these lectures. Anyway, I feel and think that the React
                        Hooks is very cool. Because that serve to reduce the amount of overall code.
                        Especially, the UseReducer and Usecontext is very cooler than Hooks functions.
                        Because they centrally manages the state, I was able to manage them very
                        comfortably. Thus, I could know why Redux sometimes is needed.<br/><br/>

                        It wasn't easy to use React Hook to create this we b again, but I had
                        the reference datas like public document, Nomad Coder.<br/><br/>

                        I am very happy that I have improved my skillys than before.
                        Thank you for reading my feeling, I add github and blog url at bottom.<br/><br/>
                        <Writer>Developer Taesung Yun</Writer>
                    </Greeting>
                    <LinkBox>
                        <Link href="https://github.com/taesung1993/yunflix">
                            <Circle>
                                <Icon className="fab fa-github"></Icon>
                            </Circle>
                            <Site>Github</Site>
                        </Link>
                        <Link href="https://taesung1993.tistory.com/">
                            <Circle>
                                <Icon className="fab fa-tumblr"></Icon>
                            </Circle>
                            <Site>Tistory</Site>
                        </Link>
                    </LinkBox>
                </TitleBar>
            </Container>
        </>
    )
}

export default Home;