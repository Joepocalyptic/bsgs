import React from "react";
import {Link} from "./Link/Link";
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {HiPhone} from "@react-icons/all-files/hi/HiPhone";
import {HiMail} from "@react-icons/all-files/hi/HiMail";
import {BuilderContent} from "@builder.io/react";

export default class BSGSFooter extends React.Component<{}, {}> {
    render() {
        return (
            <footer className="text-white border-t-2 border-yellow bg-blue-light text-center">
                <BuilderContent modelName="footer">
                    {(data, loading) => (
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mx-auto p-4 font-content container mx-auto">
                            <div className="flex flex-col items-center lg:order-2 lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-lg">
                                <Link href="/home">
                                    <img className="w-24" src="/img/bsgs_logo_border.png" alt="BSGS Logo" />
                                </Link>
                                <h4 className="font-heading text-2xl uppercase">
                                    Bay State Girls Softball
                                </h4>
                                <div dangerouslySetInnerHTML={{__html: data?.address}} />
                            </div>
                            <div className="h-0.5 bg-yellow lg:w-0.5 lg:order-2 lg:h-auto" />
                            <div className="flex flex-col items-center lg:order-first lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-lg">
                                <h4 className="font-heading text-2xl uppercase">Contact Us</h4>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <Link href={`mailto:${data?.email}`} className="inline-flex items-center gap-2">
                                            <HiMail className="text-3xl text-yellow" />
                                            {data?.email}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`tel:${data?.phoneNumber.match(/\d+/g).join('')}`} className="inline-flex items-center gap-2">
                                            <HiPhone className="text-3xl text-yellow" />
                                            {data?.phoneNumber}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="h-0.5 bg-yellow lg:w-0.5 lg:h-auto"/>
                            <div className="flex flex-col items-center lg:order-last lg:justify-center lg:w-1/4 gap-4 bg-blue-normal rounded-2xl p-4 shadow-lg">
                                <h4 className="font-heading text-2xl uppercase">Quick Links</h4>
                                <ul className="text-left">
                                    {data?.quickLinks.map((item: any, index: number) => (
                                        <li key={index}>
                                            <Link href={item.url} className="inline-flex items-center gap-0.5">
                                                <HiChevronRight/>
                                                {item.displayText}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-heading text-2xl uppercase">Socials</p>
                                <ul className="text-left">
                                    <li>
                                        <Link href={data?.socials?.facebook || ""} target="_blank" className="inline-flex items-center gap-2">
                                            <FaFacebook/>
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={data?.socials?.instagram || ""} target="_blank" className="inline-flex items-center gap-2">
                                            <FaInstagram/>
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={data?.socials.twitter || ""} target="_blank" className="inline-flex items-center gap-2">
                                            <FaTwitter/>
                                            Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </BuilderContent>
                <div className="bg-blue-dark font-content text-center">
                    <div className="flex flex-col p-4 gap-4 text-sm  lg:flex-row-reverse lg:justify-between lg:text-lg container mx-auto">
                        <p>&copy; Copyright {new Date().getFullYear()} Bay State Girls Softball</p>
                        <Link href="https://www.dimanregional.org/domain/1202" target="_blank">Developed by Diman PW | Class B of 2024</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
