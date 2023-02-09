import axios from 'axios';
const Popular = () =>{
    return(
        <div>
            <div className='container-fluid'>
                <div className='row text-center bg-dark text-light'>
                    <div className='col-2 my-2'>
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'/>
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
                <div className='row'>
                    <div className='col-12 my-3'>
                        <h4>Популярные фильмы</h4>
                    </div>
                    <div className='col-2'>
                        <button className='form-control'><b>Сортировать</b></button>
                        <button className='form-control my-2'><b>Фтльтры</b></button>
                        <button className='form-control'><b>Где посмотреть</b></button>
                    </div>
                    <div className='col-2'>
                        <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/wSphEs4KKbewWC01NBtmCJnlZ7y.jpg'/>
                        <b>Avatar</b>
                        <br/>
                        <i>09January20025</i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popular;