import React from 'react'

const Cart = ({ Cart, subTotal, removeFromCart, clearCart }) => {
    console.log(Cart)
    return (
        <>
            <div className='flex flex-col'>
                {Object.keys(Cart).map(
                    (item) => {
                        let mapCart = Cart[item]
                        return (
                            <div key={item}>
                                <div className='flex'>
                                    <picture>
                                        <img src={mapCart.img_url} alt={mapCart.title} className="w-2/12" />
                                    </picture>
                                    <div>
                                        {item}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    )
}

export default Cart