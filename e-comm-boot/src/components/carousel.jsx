import product from "../Data/product"
import AliceCarousel from 'react-alice-carousel'
import Button from 'react-bootstrap/Button';

export default function Banner() {
    const images = product.map((data,idx) => {
        return (
            <div key={idx} className="d-flex justify-content-between container padd">
                <div className='d-flex flex-column justify-content-center'>
                    <h1>{data.title}</h1>
                    <div>
                        <Button variant='warning' size="xxl">Shop now</Button>
                        <Button variant='outline-secondary' size='xxl'>View more</Button>
                    </div>
                </div>
                <div className='position-relative'>
                    <img className='img-fluid p-1' src={data.img} alt="" id='bannerImg' />
                    <div className='rounded-circle position-absolute marg text-light price'>
                        only <br /> {data.price}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <style type='text/css'>
                {`
        .padd {
            padding-left: 174px;
            padding-right: 174px;
        }
        h1 {
            font-size: 3rem;
            color: #1B5A7D;
            font-weight: 600;
            width:11rem;
        }
    .btn-warning {
      background-color: #EDA415;
      color: white;
    }
    .btn-outline-secondary {
        color: #316887;
        border: 1px solid #316887;
    }

    .btn-xxl {
      padding: 1.15rem 2rem;
      font-size: 1rem;
      border-radius: 20px;
      margin: 0.4rem;
    }
    .price {
        padding: 1.58rem 2.25rem;
        background-color: #EDA415;
    }
    .marg {
        left: 15.125rem;
        bottom: 3.2rem
    }
    #bannerImg{
        width: 331px;
        height: 356px;
    }
    `}
            </style>
            <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls="true">
                {images}
            </AliceCarousel>
        </>
    )

}