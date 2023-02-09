import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
const Lenta = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const movie = await axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1`,
            method: 'get'
        })
        console.log('movies', movie);
        if (movie != null) {
            setMovies(movie.data.results);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [])
    return (
        <div>
            <div className='container-fluid'>
                <div className='row text-center bg-dark text-light'>
                    <div className='col-2 my-2'>
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                    </div>
                    <div className='col-1 my-2 '>Фильмы</div>
                    <div className='col-1 my-2 '>Сериалы</div>
                    <div className='col-1 my-2 '>Люди</div>
                    <div className='col-1 my-2 '>еще</div>
                    <div className='col-2 my-2'></div>
                    <div className='col-1 my-2 '><b>+</b></div>
                    <div className='col-1 my-2 '>RU</div>
                    <div className='col-2 my-2'>Присоединиться к TMDB</div>
                </div>
                <div className='row' style={{ backgroundImage: "url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/o8zk3QmHYMSC7UiJgFk81OFF1sc.jpg)", height: "150px" }}>
                    <div className='col-12 text-light'>
                        <h1>
                            Добропожаловать
                            <br />
                        </h1>
                        <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                    </div>
                    <div className='col-12'>
                        <input placeholder='найти фильмь, сериал...' className='form-control' />
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12'>
                            <h2>
                                В тренде
                            </h2>
                            <div className='row'>
                                {movies.length > 0 ?
                                    <>
                                        {movies.map((item) =>
                                            <div className='col-2 px-3'>
                                                <img src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + item.backdrop_path} width="100%" />
                                                <a href={'/movie/'+item.id}><b>{item.title}</b></a>
                                                <br />
                                                <i>{moment(item.release_date, "YYYYMMDD").fromNow()}</i>
                                            </div>
                                        )
                                        }
                                    </>
                                    :
                                    <></>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lenta;