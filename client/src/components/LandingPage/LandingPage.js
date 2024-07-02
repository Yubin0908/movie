import React, {useEffect, useState} from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../Config';
import MainImage from "./Section/MainImage";
import {Button, Row} from "antd";
import {useNavigate} from "react-router-dom";
import AntCard from "../common/AntCard";
import axios from "axios";

function LandingPage () {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  function fetchMovies(page) {
    const endPoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;


    // fetch(endPoint)
    //   .then(res => res.json())
    //   .then(res => {
    //     // console.log(res);
    //     // console.log(res.results);
    //     setMainMovieImage(res.results[0]);
    //     setCurrentPage(res.page);
    //     setMovies([...Movies, ...res.results]);
    //   });

    // fetch --> axios 변경
    axios(endPoint)
      .then(res => {
        setMovies([...Movies, ...res.data.results]);
        setMainMovieImage(res.data.results[0]);
        setCurrentPage(res.data.page);
      })
  }

  /* 최초 렌더링 되는 시점에만 실행되는 함수 */
   useEffect(() => {
    const page = 1;
    fetchMovies(page);
  }, []);

  // const loadMoreItems = () => {
  //   fetchMovies(2);
  // };
  const loadMoreItems = () => {
    fetchMovies(CurrentPage + 1);
  };

  return (
    <>
      <div>
        {/*<Link to='/items'>items 이동</Link> &nbsp;*/}
        {/*<a href="/items">[a Tag]itmes로 이동</a>*/}
      </div>
      <div style={{width: '100%'}}>
        {
          MainMovieImage &&
          <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
                     title={MainMovieImage.title}
                     overview={MainMovieImage.overview}
          />
        }
        <div style={{width: '85%', margin: '1rem auto'}}>
          <h2>새로나온 영화</h2>
          <div style={{float: 'right', marginTop: '-45px'}}>
            <Button onClick={() => navigate(1)}>다음</Button>
          </div>
          <hr/>
          {/* Movie Grid Card */}
          <Row gutter={[10, 10]}>
            {
              Movies.map(movie => {
                return (
                  <React.Fragment key={movie.id}>
                    <AntCard landingPage
                             path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                             title={movie.title} id={movie.id}
                    />
                  </React.Fragment>
                );
              })
            }
            {/*<GridCard path={`${IMAGE_BASE_URL}w400${Movies[0].poster_path}`}*/}
            {/*          title={Movies[0].title}*/}
            {/*/>*/}
          </Row>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
        <button onClick={loadMoreItems}> 더보기</button>
      </div>
    </>
  );
}

export default LandingPage;