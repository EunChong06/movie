import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
const Lenta = () => {
    const [search, setSearch] = useState();
    const [list, setList] = useState([]);
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
    const Search = async () => {
        const param = {
            title: search
        }
        const data = await axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/search/movie?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&query=${search}&language=ru-RU&page=1&include_adult=false`,
            params: param
        })
        console.log('data', data);
        if (data.status == 200) {
            setList(data.data.results);
        }
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row text-center bg-dark text-light'>
                    <div className='col-md-2 my-2'>
                        <a href='/'><img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' /></a>
                    </div>
                    <div className='col-4 my-2 '><a href="/popular">Фильмы</a></div>
                    <div className='col-4 my-2 '><a href="/tv">Сериалы</a></div>
                    <div className='col-4 my-2 '>Люди</div>
                    <div className='col-4 my-2 '>еще</div>
                    <div className='col-4 my-2 '><b>+</b></div>
                    <div className='col-4 my-2 '>RU</div>
                    <div className='col-12 my-2'>Присоединиться к TMDB</div>
                </div>
                <div className='row' style={{ backgroundImage: "url(https://avatars.mds.yandex.net/i?id=de35505d592ebf874118fb4360957b55c7335c3c-4253964-images-thumbs&n=13)", height: "140px" }}>
                    <div className='col-md-12 text-light text-center'>
                        <b>
                            Добропожаловать
                            <br />
                        </b>
                        <p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p                                                                                                                                                                            >
                    </div>
                    <div className='col-8 mt-5'>
                        <input placeholder='найти фильмь, сериал...' className='form-control' onChange={(e) => setSearch(e.target.value)} onInput={Search} />
                    </div>
                    <div className='col-4 mt-5'>
                        <button className='form-control' onClick={Search}>Поиск</button>
                    </div>
                    <div className='row mt-3'>
                            {list.length > 0 ?
                                <>
                                    {list.map((item) =>
                                        <div className='col-md-12 px-3'>
                                            <a href={'/movie/' + item.id}><b>{item.title}</b></a>
                                            <hr/>
                                        </div>
                                    )
                                    }
                                </>
                                :
                                <>
                                </>
                            }
                            </div>
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <h2>
                                В тренде
                            </h2>
                            <div className='row'>
                                {movies.length > 0 ?
                                    <>
                                        {movies.map((item) =>
                                            <div className='col-6 px-3'>
                                                <img src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + item.backdrop_path} width="100%" />
                                                <small><a href={'/movie/' + item.id}><b>{item.title}</b></a></small>
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