import Button from 'react-bootstrap/Button';

import product from '../Data/product';


export default function Banner() {
    const e = product[0];
    // const mainBanner = product.map(e => {
    //     console.log(e.id);
    //     <div className="d-flex justify-content-between container padd">
    //         <div className='d-flex flex-column justify-content-center'>
    //             <h1>{e.title}</h1>
    //             <div>
    //                 <Button variant='warning' size="xxl">Shop now</Button>
    //                 <Button variant='outline-dark' size='xxl'>View more</Button>
    //             </div>
    //         </div>
    //         <div className='position-relative'>
    //             <img className='img-fluid p-1' src={e.img} alt="" />
    //             <div className='rounded-circle position-absolute marg text-light'>
    //                 only <br /> {e.price}
    //             </div>
    //         </div>
    //     </div>
    // })

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
    .btn-outline-dark {
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
    `}
            </style>
            <div className="d-flex justify-content-between container padd">
                <div className='d-flex flex-column justify-content-center'>
                    <h1>{e.title}</h1>
                    <div>
                        <Button variant='warning' size="xxl">Shop now</Button>
                        <Button variant='outline-dark' size='xxl'>View more</Button>
                    </div>
                </div>
                <div className='position-relative'>
                    <img className='img-fluid p-1' src={e.img} alt="" />
                    <div className='rounded-circle price position-absolute marg text-light'>
                        only <br /> {e.price}
                    </div>
                </div>
            </div>
        </>
    )
}