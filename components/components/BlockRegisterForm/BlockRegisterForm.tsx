import React, {ChangeEvent} from "react"
import {calculateColor} from "@lib/utils"
import FormInput from "@components/forms/FormInput"
import FormTextArea from "@components/forms/FormTextArea"
import FormSubmit from "@components/forms/FormSubmit"
import {IWithGoogleReCaptchaProps, withGoogleReCaptcha} from "react-google-recaptcha-v3"
import {FormProps} from "@components/components/BlockContactForm/BlockContactForm";
import {toast} from "react-hot-toast";

type RegisterFormState = {
    data: {
        childName: string
        childDOB: string
        parentName: string
        parentEmail: string
        address: string
        sisterInLeague: string
        previousTeam: string
        subject: string
    },
    buttonDisabled: boolean
}

class BlockRegisterForm extends React.Component<FormProps, RegisterFormState> {
    state: RegisterFormState = {
        data: {
            childName: "",
            childDOB: "",
            parentName: "",
            parentEmail: "",
            address: "",
            sisterInLeague: "",
            previousTeam: "",
            subject: ""
        },
        buttonDisabled: false
    }

    validateParentEmail(){
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return regex.test(this.state.data.parentEmail);
    }

    handleVerifyRecaptcha = async () => {
        const {executeRecaptcha} = (this.props as IWithGoogleReCaptchaProps).googleReCaptchaProps


        if (!executeRecaptcha) {
            return false
        }

        const token = await executeRecaptcha('registerform')

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
        if( this.state.data.childName == "" ||
            this.state.data.childDOB == "" ||
            this.state.data.parentName == "" ||
            this.state.data.parentEmail == "" ||
            this.state.data.address == ""
        ) {
            toast.error("Please fill out all required fields!", {
                style: {
                    color: "white",
                    background: "black",
                    borderRadius: ".5rem"
                }
            })
            return
        }

        if(!this.validateParentEmail()) {
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
                    childName: "",
                    childDOB: "",
                    parentName: "",
                    parentEmail: "",
                    address: "",
                    sisterInLeague: "",
                    previousTeam: "",
                    subject: ""
                },
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

    updateChildName(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                childName: event.target.value
            }
        }))
    }

    updateChildDOB(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                childDOB: event.target.value
            }
        }))
    }

    updateParentName(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                parentName: event.target.value
            }
        }))
    }

    updateParentEmail(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                parentEmail: event.target.value
            }
        }))
    }

    updateAddress(event: ChangeEvent<HTMLTextAreaElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                address: event.target.value
            }
        }))
    }

    updateSisterInLeague(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                sisterInLeague: event.target.value
            }
        }))
    }

    updatePreviousTeam(event: ChangeEvent<HTMLInputElement>) {
        event.persist()
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                previousTeam: event.target.value
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

    render() {
        return <div className={calculateColor(this.props.darkBackground)}>
            <section className={"container mx-auto px-4 py-8 flex flex-col gap-8"}>
                <div className="flex gap-8 justify-stretch flex-col lg:flex-row">
                    <section className={
                        "relative flex flex-1 gap-24 overflow-hidden text-white py-8 px-4 lg:px-8 shadow-xl rounded-2xl"
                        + calculateColor(this.props.darkBackground, true)
                    }>
                        <div className="w-full flex flex-col gap-8"
                             id="contact-form">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <FormInput id="childName" label="Child's Name" placeholder="John Doe"
                                           className="flex-1 min-w-0" type="text" required={true}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.childName}
                                           onChange={this.updateChildName.bind(this)}/>
                                <FormInput id="childDOB" label="Child's Date of Birth" placeholder="07/24/2002"
                                           className="flex-1 min-w-0" type="date" required={true}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.childDOB}
                                           onChange={this.updateChildDOB.bind(this)}/>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8">
                                <FormInput id="parentName" label="Parent's Name" placeholder="John Doe"
                                           className="flex-1 min-w-0" type="text" required={true}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.parentName}
                                           onChange={this.updateParentName.bind(this)}/>
                                <FormInput id="parentEmail" label="Parent's Email" placeholder="contact@example.com"
                                           className="flex-1 min-w-0" type="email" required={true}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.parentEmail}
                                           onChange={this.updateParentEmail.bind(this)}/>
                            </div>

                            <FormTextArea id="address" label="Address" placeholder="555 Some Rd..."
                                          className="flex-1 min-w-0" required={true}
                                          darkBackground={this.props.darkBackground}
                                          value={this.state.data.address}
                                          onChange={this.updateAddress.bind(this)}/>

                            <div className="flex flex-col lg:flex-row gap-8">
                                <FormInput id="sisterInLeague" label="Sister in league (blank if none)" placeholder="Jane Doe"
                                           className="flex-1 min-w-0" type="text" required={false}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.sisterInLeague}
                                           onChange={this.updateSisterInLeague.bind(this)}/>
                                <FormInput id="previousTeam" label="Previous team (blank if none)" placeholder="Team here..."
                                           className="flex-1 min-w-0" type="text" required={false}
                                           darkBackground={this.props.darkBackground}
                                           value={this.state.data.previousTeam}
                                           onChange={this.updatePreviousTeam.bind(this)}/>
                            </div>

                            <FormSubmit darkBackground={this.props.darkBackground} text="Submit"
                                        disabled={this.state.buttonDisabled}
                                        action={this.submitForm}/>

                            {/* Honeypot */}
                            <label htmlFor="subject" className="hidden">Content</label>
                            <input type="text" name="subject" id="subject" className="hidden"
                                   value={this.state.data.subject}
                                   onChange={this.updateSubject.bind(this)}/>

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

export default withGoogleReCaptcha(BlockRegisterForm)