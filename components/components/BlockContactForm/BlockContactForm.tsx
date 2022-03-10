import React, {ChangeEvent} from "react"
import {calculateColor} from "@lib/utils"
import FormInput from "@components/forms/FormInput"
import FormTextArea from "@components/forms/FormTextArea"
import FormSubmit from "@components/forms/FormSubmit"
import {IWithGoogleReCaptchaProps, withGoogleReCaptcha} from "react-google-recaptcha-v3";
import {toast, Toaster} from "react-hot-toast";

type FormProps = IWithGoogleReCaptchaProps & {
    darkBackground: boolean
    formcakeKey: string
}

type FormState = {
    data: {
        name: string
        email: string
        phone: string
        subject: string
        message: string
        content: string
    },
    buttonDisabled: boolean
}

class BlockContactForm extends React.Component<FormProps, FormState> {
    state: FormState = {
        data: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            content: ""
        },
        buttonDisabled: false
    }

    validateEmail(){
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return regex.test(this.state.data.email);
    }

    handleVerifyRecaptcha = async () => {
        const {executeRecaptcha} = (this.props as IWithGoogleReCaptchaProps).googleReCaptchaProps


        if (!executeRecaptcha) {
            return false
        }

        const token = await executeRecaptcha('contactform')

        try {
            const response = await fetch("/api/recaptcha", {
                method: "POST",
                body: JSON.stringify({captcha: token}),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {
                return true
            } else {
                throw new Error()
            }
        } catch (error: any) {
            return false
        }
    }

    submitForm = async () => {
        if( this.state.data.name == "" ||
            this.state.data.email == "" ||
            this.state.data.subject == "" ||
            this.state.data.message == "") {
            toast.error("Please fill out all fields!", {
                style: {
                    color: "white",
                    background: "black",
                    borderRadius: ".5rem"
                }
            })
            return
        }

        if(!this.validateEmail()) {
            toast.error("Invalid email!", {
                style: {
                    color: "white",
                    background: "black",
                    borderRadius: ".5rem"
                }
            })
            return
        }

        this.setState({
            buttonDisabled: true
        })

        const success = await this.handleVerifyRecaptcha()

        if(success) {
            toast.success("Your message has been received!", {
                style: {
                    color: "white",
                    background: "black",
                    borderRadius: ".5rem"
                }
            })

            const data = this.state.data
            this.setState({
                data: {
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    content: ""
                }
            })

            await fetch(this.props.formcakeKey, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
        } else {
            toast.error("An error occurred while sending your form!", {
                style: {
                    color: "white",
                    background: "black",
                    borderRadius: ".5rem"
                }
            })
        }
        setTimeout(() => {
            this.setState({
                buttonDisabled: false
            })
        }, 1000)
    }

    updateName(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                name: event.target.value
            }
        }))
    }

    updateEmail(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                email: event.target.value
            }
        }))
    }

    updatePhone(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                phone: event.target.value
            }
        }))
    }

    updateSubject(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                subject: event.target.value
            }
        }))
    }

    updateMessage(event: ChangeEvent<HTMLTextAreaElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                message: event.target.value
            }
        }))
    }

    updateContent(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                content: event.target.value
            }
        }))
    }

    render() {
        return <div className={calculateColor(this.props.darkBackground)}>
            <Toaster position="bottom-right" />
            <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                    <section className={
                        "relative flex flex-1 gap-24 overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                        + calculateColor(this.props.darkBackground, true)
                    }>
                        <div className="w-full flex flex-col gap-8"
                             id="contact-form">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <FormInput id="name" label="Name" placeholder="John Doe"
                                           className="flex-1 min-w-0" type="text" required={true}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.name}
                                           onChange={this.updateName.bind(this)}/>
                                <FormInput id="email" label="Email" placeholder="contact@example.com"
                                           className="flex-1 min-w-0" type="email" required={true}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.email}
                                           onChange={this.updateEmail.bind(this)}/>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8">
                                <FormInput id="phone" label="Phone Number" placeholder="(555) 555-5555"
                                           className="flex-1 min-w-0" type="tel" required={false}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.phone}
                                           onChange={this.updatePhone.bind(this)}/>
                                <FormInput id="subject" label="Subject" placeholder="I have some concerns..."
                                           className="flex-1 min-w-0" type="text" required={true}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.subject}
                                           onChange={this.updateSubject.bind(this)}/>
                            </div>

                            <FormTextArea id="message" label="Message" placeholder="Enter your message here..."
                                          className="flex-1 min-w-0" required={true}
                                          darkBackground={this.props.darkBackground}
                                          value={this.state.data.message}
                                          onChange={this.updateMessage.bind(this)}/>

                            <FormSubmit darkBackground={this.props.darkBackground} text="Submit"
                                        disabled={this.state.buttonDisabled}
                                        action={this.submitForm}/>

                            {/* Honeypot */}
                            <label htmlFor="content" className="hidden">Content</label>
                            <input type="text" name="content" id="content" className="hidden"
                                   value={this.state.data.content}
                                   onChange={this.updateContent.bind(this)}/>

                            <small className="text-center text-xsm  text-gray-500">
                                This form is protected by Google reCAPTCHA v3. The Google <a
                                href="https://policies.google.com/privacy" target="_blank"
                                className="underline decoration-gray-400">
                                Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank"
                                                          className="underline decoration-gray-400">Terms of
                                Service</a> apply.
                            </small>
                        </div>

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

export default withGoogleReCaptcha(BlockContactForm)