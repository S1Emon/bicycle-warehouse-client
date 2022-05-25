import React from "react";

import Modal from "react-modal";
import { toast } from "react-toastify";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");


export default function UpdateModal({ id, setIsUpdate, isUpdate }) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

        // subtitle.style.color = "#B20000";
    }

    function closeModal() {
        setIsOpen(false);
    }


    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const details = event.target.details.value;
        const image = event.target.image.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;

        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, details, image, price, quantity, supplier }),
        })
            .then((res) => res.json())
            .then((data) => {
                setIsUpdate(data)
                toast(data.success);
                toast("Product Updated")
            });
    };

    return (
        <div>
            <button onClick={openModal} className="btn btn-outline-primary w-100">
                Update Now
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className="btn btn-sm btn-warning">
                    X
                </button>
                <div>Please Provide those Information</div>
                <div className=" p-3 color-4D4C7D">
                    <form className="container " onSubmit={handleUpdate}>
                        <div className="input-group mb-1 mt-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                                aria-label="Name"
                                name="name"
                            />
                        </div>
                        <div className="input-group mb-1 mt-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Image URL"
                                aria-label="Image URL"
                                name="image"
                            />
                        </div>
                        <div className="input-group mb-1 mt-1">
                            <textarea
                                className="form-control"
                                placeholder="Details"
                                aria-label="With textarea"
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
                        <div className="mt-2">
                            <input type="submit" value="submit" className="btn btn-primary text-decoration-none" />
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}


