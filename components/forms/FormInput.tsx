import React from "react";
import {calculateColor} from "@lib/utils";

type FormInputProps = {
    darkBackground: boolean
    type: string
    label: string
    required: boolean
    placeholder: string
    id: string
    className?: string
}

export default class FormInput extends React.Component<FormInputProps, any> {
    render() {
        return <div className={"flex flex-col gap-2 " + this.props.className}>
            <label htmlFor={this.props.id}
                   className="font-heading text-center uppercase text-2xl">
                {this.props.label + (this.props.required ? " *" : "")}
            </label>
            <input type={this.props.type}
                   required={this.props.required}
                   placeholder={this.props.placeholder}
                   id={this.props.id}
                   name={this.props.id}
                   className={"p-4 rounded-lg shadow-lg"
                       + calculateColor(this.props.darkBackground)}
            />
        </div>
    }
}