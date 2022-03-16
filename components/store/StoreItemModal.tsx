import React from "react";
import {Product} from "@chec/commerce.js/types/product"
import Image from "next/image"
import {HiXCircle} from "@react-icons/all-files/hi/HiXCircle";
import Modal from "react-modal";
import StoreAddButton from "@components/store/StoreAddButton";
import {Cart} from "@chec/commerce.js/types/cart";

export type StoreItemModalProps = {
    currentProduct: Product | undefined
    modalIsOpen: boolean
    closeModal: (event: React.MouseEvent | React.KeyboardEvent) => void
    cart: Cart,
    setCart: (cart: Cart) => void
}


export default class StoreItemModal extends React.Component<StoreItemModalProps> {
    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.closeModal}
                closeTimeoutMS={200}
                className="rounded-2xl shadow-xl outline-none bg-blue-normal text-white container border-yellow border-2 relative"
                overlayClassName="grid place-items-center z-[20] fixed top-0 left-0 right-0 p-4 bottom-0 bg-black/75"
                contentLabel={this.props.currentProduct?.name ?? "Modal"}
            >
                <button className="text-4xl absolute -right-1 lg:-right-8 -top-12 lg:-top-8"
                        onClick={this.props.closeModal}>
                    <HiXCircle/>
                </button>
                <div className="flex-col lg:flex-row flex gap-8 lg:gap-24 px-4 lg:px-8 py-8">
                    <div className="flex flex-1 flex-col gap-4">
                        <h2 className="uppercase flex items-center gap-4">
                            <span className="text-4xl font-heading">{this.props.currentProduct?.name}</span>
                            <span className="text-4xl font-heading">/</span>
                            <span className="font-heading text-2xl">{this.props.currentProduct?.price.formatted_with_symbol}</span>
                        </h2>
                        <div className="cms-content text-lg leading-8 break-words flex flex-col gap-4 font-content"
                             dangerouslySetInnerHTML={{__html: this.props.currentProduct?.description ?? ""}}/>
                        <StoreAddButton
                            productID={this.props.currentProduct?.id}
                            darkBackground={true}
                            center={false}
                            cart={this.props.cart}
                            setCart={this.props.setCart}
                        />
                    </div>
                    <div className="flex w-full lg:w-1/3 flex-col self-center gap-4 max-h-[30rem] lg:max-h-[20rem]">
                        <Image
                            src={this.props.currentProduct?.image!!.url!!}
                            alt={this.props.currentProduct?.name}
                            height={this.props.currentProduct?.image?.image_dimensions.height}
                            width={this.props.currentProduct?.image?.image_dimensions.width}
                            layout="responsive"
                            className="object-cover rounded-lg shadow-lg h-24 self-center"
                            sizes="(min-width: 0px) 100vw, (min-width: 1024px) 33vw, (min-width: 1600px) 25vw"/>
                    </div>
                </div>
            </Modal>
        )
    }
}
