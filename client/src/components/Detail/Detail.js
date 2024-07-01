import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {API_KEY, API_URL, IMAGE_BASE_URL} from '../Config';
import MainImage from "../LandingPage/Section/MainImage";
import MovieInfo from './MovieInfo';
import {Button, Divider, Row} from "antd";
import GridCard from "../common/GridCard";
import AntCard from "../common/AntCard";
import ImagesList from "./ImagesList";

const Detail = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  // console.log('movieId : ', movieId);

  // [state]
  const [Movie, setMovie] = useState({});
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  const [CrewToggle, setCrewToggle] = useState(false);
  const [Crews, setCrews] = useState([]);

  useEffect(() => {
    // console.log('페이지가 로드되면 실행');

    // 특정 영화 정보 URL
    const endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;
    // console.log(endpointInfo);

    // 출연진 url
    const endpointCast = `${API_URL}${movieId}/credits?api_key=${API_KEY}`;
    // console.log(endpointCast);

    // 특정 영화 정보 아이디로 요청
    fetch(endpointInfo)
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        setMovie(res);
    })

    // 출연진 요청
    fetch(endpointCast)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setCasts(res.cast);
        setCrews(res.crew);
    })
  }, []);

  // button Handler
  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };

  const toggleCrewView = () => {
    setCrewToggle(!CrewToggle);
  }
  return (
    <>
      {/* Header */}
      {
        Movie &&
        <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
                   title={Movie.title}
                   overview={Movie.overview}
        />
      }

      {/* 영화 목록 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Button onClick={() => navigate(-1)}>영화 목록</Button>
      </div>

      {/* Body */}
      <div style={{ width: '85%', margin: '50px auto' }}>
        <MovieInfo movie={Movie} />

        <br />
        {/* Actors Grid */}
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <Button type={!ActorToggle ? 'dashed':'primary'}
                  onClick={toggleActorView}
                  style={{marginRight: '25px'}}>배우 목록</Button>
          <Button type={!CrewToggle ? 'dashed':'primary'}
                  onClick={toggleCrewView}>제작진 목록</Button>
        </div>

        {
          ActorToggle &&
          <>
            <Divider style={{ borderBlockColor: '#aaa' }}>배우 목록</Divider>
            <ImagesList target={Casts} />
          </>
        }
        {
          CrewToggle &&
          <>
            <Divider style={{ borderBlockColor: '#aaa' }}>제작진 목록</Divider>
            <ImagesList target={Crews} />
          </>
        }
      </div>
    </>
  );
};

export default Detail;