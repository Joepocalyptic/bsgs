import React from "react";
import {calculateColor} from "@lib/utils";

type FormTextAreaProps = {
    darkBackground: boolean
    label: string
    required: boolean
    placeholder: string
    id: string
    className?: string
}

export default class FormTextArea extends React.Component<FormTextAreaProps, any> {
    render() {
        return <div className={"flex flex-col gap-2 " + this.props.className}>
            <label htmlFor={this.props.id}
                   className="font-heading text-center uppercase text-2xl">
                {this.props.label + (this.props.required ? " *" : "")}
            </label>
            <textarea placeholder={this.props.placeholder}
                      id={this.props.id}
                      required={this.props.required}
                      name={this.props.id}
                      className={"p-4 rounded-lg shadow-lg overflow-hidden min-h-[10rem]"
                          + calculateColor(this.props.darkBackground)}
            />
        </div>
    }
}