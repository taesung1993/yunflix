import React, {useState, useEffect} from "react";
import {Link, Redirect, useLocation, useHistory} from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    position: relative;
`;

const Logo = styled(Link)`
    display: block;
    font-family: 'Bebas Neue', cursive;
    font-size: 4rem;
    text-shadow: 1px 2px 3px rgba(178, 190, 195,0.7), 0px 1px 4px #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 5%;
`;

const Left = styled.span`
    display: inline-block;
    transform: translateY(5px) skew(0deg, -2deg);
`;

const Right = styled.span`
    display: inline-block;
    transform: translateY(5px) skew(0deg, 2deg);
`;

const Form = styled.form``;
const Button = styled.button`
    background-color: transparent;
    font-size: 1.6rem;
    color: white;
    border: none;
    opacity: 0.2;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
    &:focus{
        outline: none;
    }
`;

const Select = styled.select`
    border: 1px solid solid rgba(255, 255, 255, 0.2);
    background-color: transparent;
    color: white;
`;

const Option = styled.option`
    color: black;
    background-color: transparent;
`;
const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 1.5rem;
    padding: 5px 10px;
    &:focus{
        outline: none;
        border-color: white;
    }
`;

const Nav = styled.nav`
    margin: 0 auto;
`;
const Ul = styled.ul``;
const SLink = styled(Link)`
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: ${props => props.order ? 0 : "40px"};
    transition: opacity 0.2s linear;
    opacity: ${props => props.current === "true" ? 1 : 0.5};
`;

const Header = (props) => {
    const [searched, setSerached] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [selected, setSelected] = useState("movie");
    const {pathname:path} = useLocation();

    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    const selection = (e) => {
        setSelected(e.currentTarget.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(keyword);
        setSerached(true);
    }

    useEffect(() => {
        setSerached(false);
        setKeyword("");
    }, [searched]);
    
    return (
        <Container>
            {searched && <Redirect push to={{pathname:"/search", search:`?keyword=${keyword}&type=${selected.toLowerCase()}`}}/>}
            <Logo to="/">
                <Left>yun</Left>
                <Right>flix</Right>
            </Logo>
            <Nav>
                <Ul>
                    <SLink to="/" current={(path === "/").toString()}>HOME</SLink>
                    <SLink to="/movie" current={(path === "/movie").toString()}>MOVIES</SLink>
                    <SLink to="/show" order="last" current={(path === "/show").toString()}>TV SHOWS</SLink>
                </Ul>
            </Nav>
            <Form onSubmit={onSubmit}>
                <Select onChange={selection}>
                    <Option value="MOVIE">MOVIE</Option>
                    <Option value="SHOW">SHOW</Option>
                </Select>
                <Button><i className="fas fa-search"></i></Button>
                <Input placeholder="Search" value={keyword} onChange={onChange}/>
            </Form>
        </Container>
    );
}

export default Header;