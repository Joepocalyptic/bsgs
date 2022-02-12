import React from "react";

import {HiMenu} from "@react-icons/all-files/hi/HiMenu"
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight"
import {HiChevronDown} from "@react-icons/all-files/hi/HiChevronDown"
import {HiPlus} from "@react-icons/all-files/hi/HiPlus"
import {Link} from "@components/Link/Link";

type HeaderProps = {
    navigation: string[]
}

type HeaderState = {
    expanded: boolean
}

export default class BSGSHeader extends React.Component<HeaderProps, HeaderState> {
    state = {
        expanded: false
    }

    toggleExpanded = () => {
        this.setState((state) => ({
            expanded: !state.expanded
        }))
    }

    render() {
        return (
            <header className="px-4 bg-blue-light font-heading text-3xl uppercase
                               lg:h-24 w-full text-white border-b-2 border-yellow shadow-xl">
                {/* Mobile header */}
                <nav className="block lg:hidden py-2">
                    <div className="flex items-center gap-4">
                        <button onClick={() => this.toggleExpanded()}
                                className="w-16 h-16 bg-blue-normal border-2 border-yellow text-5xl grid place-items-center rounded-2xl">
                            <HiMenu/>
                        </button>
                        <span className=" block flex-1 lg:hidden text-center">Bay State Girls Softball</span>
                        <Link href="/home">
                            <img className="w-16" src="/img/bsgs_logo.png" alt="BSGS Logo"/>
                        </Link>
                    </div>
                    {(() => {
                        if (this.state.expanded) return <div className="flex flex-col pt-2">
                            <Link href="/about" className="flex gap-4 py-4">
                                <HiPlus className="w-16 grid place-items-center text-3xl" />
                                About
                            </Link>
                        </div>
                    })()}
                </nav>

                {/* Desktop header */}
                <nav className="hidden lg:flex h-full">
                    <div className="pt-2 flex-1 flex gap-16 flex-row-reverse">
                        <div className="group relative cursor-pointer flex items-center">
                            About
                            <HiChevronDown className="group-hover:text-yellow transition-colors duration-100 ease-in-out absolute left-1/2 right-1/2 transform -translate-x-1/2 bottom-1"/>
                            <div
                                className="border-x-2 border-b-2 border-yellow shadow-lg text-2xl text-center overflow-hidden bg-blue-normal flex flex-col items-center overflow-hidden
                                           absolute left-1/2 right-1/2 transform -translate-x-1/2 top-[5.4rem] z-[1] min-w-[12rem] leading-[0] group-hover:leading-normal opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                <Link href="/home" className="px-4 group-hover:py-2 w-full hover:bg-blue-dark transition-colors duration-300 ease-in-out">
                                    Link One
                                </Link>
                                <Link href="/home" className="px-4 group-hover:py-2 w-full hover:bg-blue-dark transition-colors duration-300 ease-in-out">
                                    Longer Link Two
                                </Link>
                                <Link href="/home" className="px-4 group-hover:py-2 w-full hover:bg-blue-dark transition-colors duration-300 ease-in-out">
                                    Organization
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/home" className="py-2 mx-16 w-40">
                        <img className="w-full" src="/img/bsgs_logo_border.png" alt="BSGS Logo"/>
                    </Link>

                    <div className="flex-1">

                    </div>
                </nav>
            </header>
        )
    }
}
