import React from 'react';

const UpdateProduct = () => {
    return (
        <div>

        </div>
    );
};

export default UpdateProduct;

/* 
    const handleUpdate = (event) => {
        event.preventDefault();
        console.log("hello");
        const name = event.target.name.value;
        const image = event.target.image.value;
        const details = event.target.details.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;

        fetch(`http://localhost:5000/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, image, details, price, quantity, supplier }),
        })
            .then((res) => res.json())
            .then((data) => setIsReload(!isReload));
    };

    return (
        <div>
                <span className="w-100 mx-auto">Please Provide the Informations</span>
                <div className=" color-4D4C7D">
                    <form className="container " onSubmit={handleUpdate}>
                        <div className="input-group mb-1 mt-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product name"
                                aria-label="name"
                                name="name"
                            />
                        </div>
                        <div className="input-group mb-1 mt-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Image URL"
                                aria-label="image"
                                name="image"
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                className="form-control"
                                aria-label="With textarea"
                                placeholder="Details"
                                name="details"
                            ></textarea>
                        </div>
                        <div className="input-group mb-1 mt-1">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Price"
                                aria-label="Price"
                                name="price"
                            />
                        </div>
                        <div className="input-group mb-1 mt-1">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Quantity"
                                aria-label="Quantity"
                                name="quantity"
                            />
                        </div>
                        <div className="input-group mb-1 mt-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Supplier"
                                aria-label="Supplier"
                                name="supplier"
                            />
                        </div>

                        <div className="mt-4">
                            <input type="submit" value="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
 */
