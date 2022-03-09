import React, {MouseEventHandler} from "react";
import {calculateColor} from "@lib/utils";
import {HiArrowRight} from "@react-icons/all-files/hi/HiArrowRight";

type FormSubmitProps = {
    darkBackground: boolean
    text: string
    className?: string
    action: MouseEventHandler<HTMLButtonElement>
}

export default class FormSubmit extends React.Component<FormSubmitProps> {
    render() {
        return <button onClick={this.props.action}
                  className={
                      "mx-auto self-start flex gap-2 transition-all ease-in-out hover:gap-4 relative " +
                      "overflow-hidden font-heading text-white uppercase text-3xl rounded-2xl py-2 px-8 " +
                      "shadow-lg rounded-lg"
                      + calculateColor(this.props.darkBackground)
                  }
        >
            {this.props.text}
            <HiArrowRight/>
        </button>
    }
}