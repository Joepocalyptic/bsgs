import React from "react";
import {Link} from "./Link/Link";
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {HiPhone} from "@react-icons/all-files/hi/HiPhone";
import {HiMail} from "@react-icons/all-files/hi/HiMail";

export default class BSGSFooter extends React.Component<{}, {}> {
    render() {
        return (
            <footer className="text-white border-t-2 border-yellow bg-blue-light">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mx-auto p-4 font-content container mx-auto">
                    <div className="flex flex-col items-center lg:order-2 lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-lg">
                        <Link href="/home">
                            <img className="w-24" src="/img/bsgs_logo_border.png" alt="BSGS Logo"/>
                        </Link>
                        <h4 className="font-heading text-2xl uppercase">
                            Bay State Girls Softball
                        </h4>
                        <p className="text-center">
                            P.O. Box 30162<br/>
                            Acushnet, MA<br/>
                            02743
                        </p>
                    </div>
                    <div className="h-0.5 bg-yellow lg:w-0.5 lg:order-2 lg:h-auto"/>
                    <div className="flex flex-col items-center lg:order-first lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-lg">
                        <h4 className="font-heading text-2xl uppercase">Contact Us</h4>
                        <ul className=" flex flex-col gap-4">
                            <li>
                                <Link href="mailto:bsgs@bsgs.org" className="inline-flex items-center gap-2">
                                    <HiMail className="text-3xl text-yellow" />
                                    bsgs@bsgs.org
                                </Link>
                            </li>
                            <li>
                                <Link href="tel:5089981470" className="inline-flex items-center gap-2">
                                    <HiPhone className="text-3xl text-yellow" />
                                    (508) 998-1470
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-0.5 bg-yellow lg:w-0.5 lg:h-auto"/>
                    <div className="flex flex-col items-center lg:order-last lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-lg">
                        <h4 className="font-heading text-2xl uppercase">Quick Links</h4>
                        <ul className="">
                            <li>
                                <Link href="/about-us" className="inline-flex items-center gap-0.5">
                                    <HiChevronRight/>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/sponsors" className="inline-flex items-center gap-0.5">
                                    <HiChevronRight/>
                                    Sponsors
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.usasoftballma.com/" target="_blank" className="inline-flex items-center gap-0.5">
                                    <HiChevronRight/>
                                    USA Softball
                                </Link>
                            </li>
                        </ul>
                        <p className="font-heading text-2xl uppercase">Socials</p>
                        <ul className="-ml-1">
                            <li>
                                <Link href="https://www.facebook.com/Bay-State-Girls-Softball-League-784164971638468/" target="_blank" className="inline-flex items-center gap-2">
                                    <FaFacebook/>
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/baystategirlssoftball/" target="_blank" className="inline-flex items-center gap-2">
                                    <FaInstagram/>
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/BSGS_Softball" target="_blank" className="inline-flex items-center gap-2">
                                    <FaTwitter/>
                                    Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-blue-dark font-content text-center">
                    <div className="flex flex-col p-4 gap-4 text-sm  lg:flex-row-reverse lg:justify-between lg:text-lg container mx-auto">
                        <p>&copy; Copyright {new Date().getFullYear()} Bay State Girls Softball</p>
                        <Link href="https://www.dimanregional.org/domain/1202">Developed by Diman PW | Class B of 2024</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
