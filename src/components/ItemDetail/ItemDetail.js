import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
// Import my styles
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const ItemDetail = ({data}) => {
    const {name, price, thumbnail, stock} = data;
    const [quantitySelected, setQuantitySelected] = useState(0);

    return(
        <div className='row width-container'>
            <div className="col s6">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={`/assets/${thumbnail}`} alt="Producto 1" /></SwiperSlide>
                    <SwiperSlide><img src={`/assets/${thumbnail}`} alt="Producto 1" /></SwiperSlide>
                </Swiper>
            </div>

            <div className="col s6">
                <div className="card">
                    <div className="card-content left-align">
                        <div className="card-title"><h3>{name}</h3></div>

                        <div className="card-price red darken-4"><h5>$ {price}</h5></div>

                        <div className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

                        {
                            quantitySelected > 0
                            ? 
                            <div className="card-action">
                                <Link to="/Cart"><button className="btn waves-effect waves-light">Terminar compra</button></Link>
                            </div> 
                            : 
                            <ItemCount stock={stock} quantitySelected={setQuantitySelected} data={data}></ItemCount>
                        }
                        
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ItemDetail;