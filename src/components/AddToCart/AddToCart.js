function AddToCart({ qty, handleAddToCart, handleIncrement, handleDecrement}) {
    return (
        <div>
            {/* AddToCart  - {inputV}  */}
            {/* <button>Add to cart</button> */}


            {qty === 0 ? (
                <button onClick={handleAddToCart}>Add to Cart</button>
            ) : (
                <div>
                    <button onClick={handleDecrement}>-</button>
                    {qty}
                    <button onClick={handleIncrement}>+</button>
                </div>
            )}
        </div>
 )
}

export default AddToCart;