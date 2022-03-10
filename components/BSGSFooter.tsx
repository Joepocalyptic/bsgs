import React from "react";
import {Link} from "./Link/Link";
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {HiPhone} from "@react-icons/all-files/hi/HiPhone";
import {HiMail} from "@react-icons/all-files/hi/HiMail";
import {BuilderContent} from "@builder.io/react/lite";

export default class BSGSFooter extends React.Component<any, any> {
    render() {
        return (
            <footer className="text-white border-t-2 border-yellow bg-blue-light text-center">
                <BuilderContent modelName="footer">
                    {(data) => (
                        <div
                            className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mx-auto px-4 py-8 font-content container mx-auto">
                            <div
                                className="flex flex-col items-center lg:order-2 lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-xl">
                                <Link href="/home">
                                    <img className="w-24" src="/img/bsgs_logo_border.webp" alt="BSGS Logo"/>
                                </Link>
                                <h4 className="font-heading text-2xl uppercase">
                                    Bay State Girls Softball
                                </h4>
                                <div dangerouslySetInnerHTML={{__html: data?.address}}/>
                            </div>
                            <div className="h-0.5 bg-yellow lg:w-0.5 lg:order-2 lg:h-auto"/>
                            <div
                                className="flex flex-col items-center lg:order-first lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-xl">
                                <h4 className="font-heading text-2xl uppercase">Contact Us</h4>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <Link href={`mailto:${data?.email}`}
                                              className="group underline-offset-4 hover:underline inline-flex items-center gap-2">
                                            <HiMail className="text-3xl group-hover:text-yellow transition ease-in-out"/>
                                            {data?.email}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`tel:${data?.phoneNumber.match(/\d+/g).join('')}`}
                                              className="group underline-offset-4 hover:underline inline-flex items-center gap-2">
                                            <HiPhone className="text-3xl group-hover:text-yellow transition ease-in-out"/>
                                            {data?.phoneNumber}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="h-0.5 bg-yellow lg:w-0.5 lg:h-auto"/>
                            <div
                                className="flex flex-col items-center lg:order-last lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-xl">
                                <h4 className="font-heading text-2xl uppercase">Quick Links</h4>
                                <ul className="text-left">
                                    {data?.quickLinks.map((item: any, index: number) => (
                                        <li key={index}>
                                            <Link href={item.url}
                                                  className="group underline-offset-4 hover:underline inline-flex items-center gap-0.5">
                                                <HiChevronRight
                                                    className="group-hover:text-yellow transition ease-in-out"/>
                                                {item.displayName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-heading text-2xl uppercase">Socials</p>
                                <ul className="text-left">
                                    <li>
                                        <Link href={data?.socials.facebook || "#"} target="_blank"
                                              className="group underline-offset-4 hover:underline inline-flex items-center gap-2">
                                            <FaFacebook className="group-hover:text-yellow transition ease-in-out"/>
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={data?.socials.instagram || "#"} target="_blank"
                                              className="group underline-offset-4 hover:underline inline-flex items-center gap-2">
                                            <FaInstagram className="group-hover:text-yellow transition ease-in-out"/>
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={data?.socials.twitter || "#"} target="_blank"
                                              className="group underline-offset-4 hover:underline inline-flex items-center gap-2">
                                            <FaTwitter className="group-hover:text-yellow transition ease-in-out"/>
                                            Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </BuilderContent>
                <div className="bg-black font-content text-center">
                    <div
                        className="flex flex-col p-4 gap-4 text-sm lg:flex-row-reverse lg:justify-between lg:text-lg container mx-auto">
                        <p>&copy; Copyright {new Date().getFullYear()} Bay State Girls Softball</p>
                        <Link href="https://www.dimanregional.org/domain/1202" target="_blank">Developed by Diman PW |
                            Class B of 2024</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
