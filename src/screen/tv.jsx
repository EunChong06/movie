import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
const Tv = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const movie = await axios({
            url: `https://api.themoviedb.org/3/tv/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=en-US&page=1`,
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
                        <a href='/'><img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' /></a>
                    </div>
                    <div className='col-1 my-2 '><a href="/popular">Фильмы</a></div>
                    <div className='col-1 my-2 '><a href="/tv">Сериалы</a></div>
                    <div className='col-1 my-2 '>Люди</div>
                    <div className='col-1 my-2 '>еще</div>
                    <div className='col-2 my-2'></div>
                    <div className='col-1 my-2 '><b>+</b></div>
                    <div className='col-1 my-2 '>RU</div>
                    <div className='col-2 my-2'>Присоединиться к TMDB</div>
                </div>
                <div className='row'>
                    <div className='col-12 my-3'>
                        <h4>Популярные TV</h4>
                    </div>
                    <div className='col-2'>
                        <button className='form-control'><b>Сортировать</b></button>
                        <button className='form-control my-2'><b>Фтльтры</b></button>
                        <button className='form-control'><b>Где посмотреть</b></button>
                    </div>
                    {movies.length > 0 ?
                        <>
                            {movies.map((item) =>
                                <div className='col-2 px-3'>
                                    <img src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + item.backdrop_path} width="100%" />
                                    <a href={'/serials/' + item.id}><b>{item.name}</b></a>
                                    <br />
                                    <i>{moment(item.first_air_date, "YYYYMMDD").fromNow()}</i>
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
    )
}
export default Tv;