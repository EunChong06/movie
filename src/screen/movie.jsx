import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [details, setDetails] = useState(null);
    const [videos, setVideos] = useState([]);
    const params = useParams();
    const id = params.id;
    const fetchDetails = async () => {
        const detail = await axios({
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU`,

        })
        console.log('details', detail);
        if (detail != null) {
            setDetails(detail.data);
        }
    }
    const videoDetails = async () => {
        const video = await axios({
            url:`https://api.themoviedb.org/3/movie/${id}/videos?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU`
        })
        console.log('video',video);
        if (video !=null){
            setVideos(video.data.results);
        }
    }
    useEffect(() => {
        fetchDetails();
        videoDetails();
    }, [])
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
                <div className="row text-center">
                    <div className="col-6">Обзор</div>
                    <div className="col-6">Медиа</div>
                    <div className="col-6 mt-2">Фандом</div>
                    <div className="col-6 mt-w">Поделиться</div>
                </div>
                {details != null ?
                    <div className="row" style={{ backgroundImage: "url(https://www.themoviedb.org/t/p/w533_and_h300_bestv2" + details.poster_path+")", height: "530px", backgroundSize: "cover" }}>


                        <div className="col-md-3 mt-5 ">
                            {details != null ?
                                <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + details.backdrop_path} style={{ borderRadius: "5px" }} width={"100%"} height={300}></img>
                                : <></>
                            }
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-8 mt-5 text-light">
                            {details != null ?
                                <>
                                    <h4>
                                    {details.title}
                                    </h4>
                                    {details.taglines}
                                    <br/>
                                    {details.overview}
                                    <br/>
                                    {details.release_date}
                                    <br/>
                                    {details.genres.map((item)=>
                                    <p>{item.name}</p>
                                    
                                    )}
                                </>
                                : <></>
                            }
                        </div>
                    </div>
                    : <></>
                }
                <div className="row mt-5">
                {videos.length > 0 ?
                <>
                {videos.map((item)=>
                <div className="col-md-4">
                <iframe src={"https://youtube.com/embed/"+item.key} width="100%" height={300}></iframe>
                </div>
                )}
                </>
                :
                <></>
                }
                </div>
            </div>
        </div>
    )
}
export default Movie;