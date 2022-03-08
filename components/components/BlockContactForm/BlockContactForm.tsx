import React from "react";
import {calculateColor} from "@lib/utils";
import FormInput from "@components/forms/FormInput";
import FormTextArea from "@components/forms/FormTextArea";
import FormSubmit from "@components/forms/FormSubmit";

type UnformattedEvent = {
    title: string
    url: string
    image?: string
    date: string
    endDate: string
    blurb: string
}

type FormProps = {
    darkBackground: boolean
    formcakeKey: string
}

export default class BlockContactForm extends React.Component<FormProps> {
    render() {
        return <div className={calculateColor(this.props.darkBackground)}>
            <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                    <section className={
                        "relative flex flex-1 gap-24 overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                        + calculateColor(this.props.darkBackground, true)
                    }>
                        <form className="w-full flex flex-col gap-8"
                              method="POST"
                              id="contact-form"
                              action={this.props.formcakeKey}>
                            <div className="flex flex-col lg:flex-row gap-8">
                                <FormInput id="name" label="Name" placeholder="John Doe"
                                           className="flex-1 min-w-0" type="text" required={true}
                                           darkBackground={this.props.darkBackground} />
                                <FormInput id="email" label="Email" placeholder="contact@example.com"
                                           className="flex-1 min-w-0" type="email" required={true}
                                           darkBackground={this.props.darkBackground} />
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8">
                                <FormInput id="phone" label="Phone Number" placeholder="(555) 555-5555"
                                           className="flex-1 min-w-0" type="tel" required={false}
                                           darkBackground={this.props.darkBackground} />
                                <FormInput id="subject" label="Subject" placeholder="I have some concerns..."
                                           className="flex-1 min-w-0" type="text" required={true}
                                           darkBackground={this.props.darkBackground} />
                            </div>

                            <FormTextArea id="message" label="Message" placeholder="Enter your message here..."
                                       className="flex-1 min-w-0" required={true}
                                       darkBackground={this.props.darkBackground} />

                            <FormSubmit darkBackground={this.props.darkBackground} text="Submit" />

                            <label htmlFor="content" className="hidden">Content</label>
                            <input type="text" name="content" id="content" className="hidden" />
                        </form>

                        <div
                            className={"absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"}/>
                        <div
                            className={"absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full "}/>
                    </section>
                </div>
            </section>
        </div>
    }
}