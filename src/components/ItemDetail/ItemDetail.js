import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
// Import my styles
import './ItemDetail.scss'

const ItemDetail = ({dataProducts}) => {

    const {id, category, name, stock, price, thumbnail} = dataProducts;

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

                        <button className="btn waves-effect waves-light">Comprar</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ItemDetail;