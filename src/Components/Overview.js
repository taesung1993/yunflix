import React from "react";
import styled from "styled-components";
import Slider from "Components/Slider";
import Noimg from "./Noimg";

const Header = styled.div`
    display: flex;
    padding-top: 30px;
    position: relative;
    z-index: 4;
`;
const Poster = styled.div`
    width: 170px;
    height: 262px;
    border-radius: 20px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    margin-right: 20px;

    &:after{
        content: "";
        background-image: inherit;
        background-size: inherit;
        background-repeat: inherit;
        background-position: inherit;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        z-index: -1;
        bottom: -15px;
        filter: blur(20px);
    }
`;

const Outline = styled.div`
    flex: 1;
    min-height: 2.2rem;
    font-size: 2.2rem;
    font-weight: 600;
`;
const Title = styled.h3`
    margin: ${(props) => props.tagTitle && "50px 0"};
    font-size: ${(props) => props.tagTitle && "1.8rem"};
    font-weight: ${(props) => props.tagTitle && 600};
    letter-spacing: ${(props) => props.tagTitle && "3px"};
    text-shadow: ${(props) => props.tagTitle && "1px 2px 2px rgba(178, 190, 195,0.67)"};
    border-bottom: ${(props) => props.tagTitle && "1px solid #636e72"};
    padding-bottom: ${(props) => props.tagTitle && "10px"};
`;

const SubInfoBar = styled.div`
    margin: 10px 0;
`;

const Score = styled.span`
    font-size: 1.5rem;
    font-weight: 400;
    padding: 2px 5px;
    background-color: rgba(0, 168, 255,1.0);
    border-radius: 20px;
    border-bottom-left-radius: 0;
    margin-right: 10px;
`;
const Star = styled.i`
    color: rgba(251, 197, 49,1.0);
    margin-right: 5px;
`;

const Genre = styled.span`
    font-size: 1.5rem;
    font-weight: 400;
    padding: 2px 5px;
    background-color: rgba(0, 168, 255,1.0);
    border-radius: 20px;
    border-bottom-left-radius: 0;
    &:not(:last-child){
        margin-right: 10px;
    }
`;

const Story = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    opacity: 0.9;
`;

const Date = styled.div`
    display: block;
    font-size: 1.5rem;
    opacity: 0.5;
    margin-top: 12px;
`;

const Icon = styled.i`
    margin-right: 5px;
`;

const VideoBtn = styled.span`
    position: absolute;
    bottom: 0;
    padding: 10px 15px;
    font-size: 1.5rem;
    line-height: 100%;
    background-color: rgba(255, 121, 121, 0.5);
    border-radius: 20px;
    vertical-align:middle;
    cursor: pointer;
    user-select: none;
    &:hover{
        background-color: rgba(255, 121, 121, 1);
    }
`;

const VideoContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    &.hidden{
        display: none;
    }
`;
const Video = styled.iframe`
    width: 600px;
    height: 450px;
`;

const Close = styled.span`
    position: absolute;
    top: 10%;
    right: 2%;
    font-size: 3.5rem;
    cursor: pointer;
`;

const Similars = styled.div`
    display: flex;
    padding-bottom: 50px;
`;

const NoSimilars = styled.div`
    justify-content: center;
`;

const Message = styled.span`
    font-size: 2.3rem;
    letter-spacing: 5px;
    opacity: 0.5;
`;

const Overview = ({data, type, video, similars}) => {
    const {original_name:showTitle, original_title: movieTitle, poster_path:poster, overview, 
        vote_average:score, genres, release_date:movieDate, first_air_date:showDate, runtime:movieTime,
        episode_run_time:showTime} = data;

    const openVideo = (e) => {
        if(!video){
            alert("Sorry, No Video Link :(");
            return;
        }
        const videoContainer = document.getElementById(`${movieTitle||showTitle}${video.key}`);
        const iframe = videoContainer.childNodes[1];
        iframe.src = `${iframe.src}?autoplay=1&enablejsapi=1`;
        videoContainer.classList.remove("hidden");
    }

    const closeVideo = (e) => {
        const videoContainer = document.getElementById(`${movieTitle||showTitle}${video.key}`);
        const iframe = videoContainer.childNodes[1];
        iframe.src = iframe.src.split("?")[0];
        videoContainer.classList.add("hidden");
    }
    
    return(
        <>
            {video && <VideoContainer id={`${movieTitle||showTitle}${video.key}`} className="hidden">
                        <Close onClick={closeVideo}><i className="far fa-times-circle"></i></Close>
                        <Video src={`https://www.youtube.com/embed/${video.key}`} allow="autoplay"></Video>
            </VideoContainer>}
            <Header>
                {poster ? 
                <Poster url={poster && `https://image.tmdb.org/t/p/w300${poster}`}/>
                :
                <Noimg/>
                }
                <Outline>
                    <Title>{movieTitle||showTitle}</Title>
                    <SubInfoBar>
                        <Score><Star className="fas fa-star"/>{score && score.toFixed(2)}</Score>
                        {genres && genres.map((genre,idx) => <Genre key={idx}>{genre.name}</Genre>)}
                    <Date>Releated {movieDate || showDate} | {movieTime || showTime[0]} Min</Date>
                    </SubInfoBar>
                    <Story>{overview}</Story>
                    <VideoBtn onClick={openVideo}><Icon className="fas fa-play-circle"></Icon>{video ? "Watch Preview" : "No Link"}</VideoBtn>
                </Outline>
            </Header>
            <Title tagTitle={1}>Similar Movies 20</Title>
            <Similars>
                    {similars.length ? <Slider movies={similars} type={type} /> : <NoSimilars><Message>No Data</Message></NoSimilars>}
            </Similars>
        </>
    );
}

export default Overview;