import React from "react";
import {HiXCircle} from "@react-icons/all-files/hi/HiXCircle";
import Modal from "react-modal";
import {Cart} from "@chec/commerce.js/types/cart";
import StoreLineItems from "@components/store/StoreLineItems";
import {Product} from "@chec/commerce.js/types/product";
import {calculateColor} from "@lib/utils";
import StoreCheckoutButton from "@components/store/StoreCheckoutButton";

export type StoreCartModalProps = {
    modalIsOpen: boolean
    closeModal: (event: React.MouseEvent | React.KeyboardEvent) => void,
    selectProduct: (product: Product) => void
    cart: Cart,
    setCart: (cart: Cart) => void
}

export default class StoreCartModal extends React.Component<StoreCartModalProps> {
    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.closeModal}
                closeTimeoutMS={200}
                className="absolute h-[100vh] inset-0 lg:w-1/3 outline-none lg:left-auto lg:right-0 lg:rounded-l-2xl text-white bg-blue-normal/90 backdrop-blur-md overflow-hidden"
                overlayClassName="z-[20] fixed inset-0 bg-black/75"
                contentLabel={"Your Cart"}
            >
                <div className="flex flex-1 flex-col gap-8">
                    <div
                        className="relative bg-blue-light px-4 lg:px-8 h-24 border-b-2 border-yellow grid place-items-center">
                        <h2 className="text-4xl font-heading uppercase text-center">
                            Your Cart
                        </h2>
                        <button className="text-4xl top-0 top-1/2 -translate-y-[50%] right-8 absolute text-white"
                                onClick={this.props.closeModal}>
                            <HiXCircle/>
                        </button>
                    </div>
                    <div className="px-4 lg:px-8">
                        {this.props.cart.line_items?.length === 0 ?
                            <h3 className="text-2xl text-heading text-center">Your cart is empty!</h3> :
                            <div className="flex h-full flex-col gap-8">
                                <StoreLineItems cart={this.props.cart} setCart={this.props.setCart}
                                                selectProduct={this.props.selectProduct}/>
                                <div className={"rounded-lg shadow-lg flex-1 px-4 lg:px-8 py-8 flex gap-8 flex-col lg:flex-row" + calculateColor(true)}>
                                    <div className="flex-1">
                                        <h3 className="font-heading uppercase text-xl flex gap-4">Subtotal: <span className="font-heading">
                                        {this.props.cart.subtotal?.formatted_with_symbol}</span>
                                        </h3>
                                        <h3 className="font-heading uppercase text-xl flex gap-4">Total Items: <span className="font-heading">
                                        {this.props.cart.total_items}</span>
                                        </h3>
                                    </div>
                                    <div className="flex-1">
                                        <StoreCheckoutButton url={this.props.cart.hosted_checkout_url} />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Modal>
        )
    }
}
