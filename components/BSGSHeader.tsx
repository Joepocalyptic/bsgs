import React from "react";

import {HiMenu} from "@react-icons/all-files/hi/HiMenu"
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight"
import {HiChevronDown} from "@react-icons/all-files/hi/HiChevronDown"
import {HiPlus} from "@react-icons/all-files/hi/HiPlus"
import { HiHome } from "@react-icons/all-files/hi/HiHome"
import {Link} from "@components/Link/Link";
import { BuilderContent } from "@builder.io/react";

type HeaderProps = {
    navigation: any
}

type HeaderState = {
    expanded: boolean,
    submenusExpanded: number[]
}

export default class BSGSHeader extends React.Component<HeaderProps, HeaderState> {
    state = {
        expanded: false,
        submenusExpanded: [] as number[]
    }

    toggleExpanded = () => {
        this.setState((state) => ({
            expanded: !state.expanded
        }))
    }

    toggleExpandedSubmenu = (index: number) => {
        let newSubmenu = this.state.submenusExpanded
        
        if(newSubmenu.includes(index)) {
            delete newSubmenu[newSubmenu.indexOf(index)]
        } else {
            newSubmenu.push(index)
        }

        this.setState(() => ({
            submenusExpanded: newSubmenu
        }))
    }

    render() {
        return (
            <header className="px-4 bg-blue-light font-heading text-3xl uppercase
                               lg:h-24 w-full text-white border-b-2 border-yellow shadow-xl">
                {/* Mobile header */}
                <nav className={"block lg:hidden pt-2" + (this.state.expanded ? "" : " pb-2")}>
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
                    <div className={"flex-col pt-2 hidden" + (this.state.expanded ? "flex" : "")}>
                            <Link href="/home" className="border-t-2 border-white flex gap-4 py-4">
                                <HiHome className="w-16 grid place-items-center text-3xl" />
                                Home
                            </Link>
                            <BuilderContent modelName="navigation">
                                {(data, loading) => (
                                    <>
                                        {data?.navigationLinks?.map((item: any, index: number) => (
                                            <>
                                                {(() => {
                                                    return item.singleLink === "" ? (
                                                        <>
                                                            <button onClick={() => this.toggleExpandedSubmenu(index)} key={index} className={"rounded-2xl w-full flex gap-4 py-4 uppercase transition-colors duration-400 ease-in-out" +
                                                            (this.state.submenusExpanded.includes(index) ? " bg-blue-normal" : "")}>
                                                                <HiPlus className={"w-16 place-items-center text-3xl transition-colors duration-400 ease-in-out" +
                                                                    (this.state.submenusExpanded.includes(index) ? " text-yellow" : "")} />
                                                                {item.displayName}
                                                            </button>
                                                            {(() => {
                                                                if(this.state.submenusExpanded.includes(index)) {
                                                                    return <>
                                                                        <Link href="/home" className="pl-16 flex gap-4 py-4">
                                                                            <HiChevronRight className="w-16 grid place-items-center text-3xl" />
                                                                            {item.displayName}
                                                                        </Link>
                                                                    </>
                                                                }
                                                            })()}
                                                        </>
                                                    ) : (
                                                        <Link href={item.singleLink} key={index} className="flex gap-4 py-4">
                                                            <HiChevronRight className="w-16 grid place-items-center text-3xl" />
                                                            {item.displayName}
                                                        </Link>
                                                    )
                                                })()}
                                            </>
                                        ))}
                                    </>
                                )}
                            </BuilderContent>
                        </div>
                </nav>

                {/* Desktop header */}
                <nav className="hidden lg:flex h-full">
                    <div className="pt-2 flex-1 flex gap-16 flex-row-reverse">
                        <div className="group relative cursor-pointer flex items-center">
                            About
                            <HiChevronDown className="group-hover:text-yellow transition-colors duration-100 ease-in-out absolute left-1/2 right-1/2 transform -translate-x-1/2 bottom-1"/>
                            <div
                                className="rounded-b-2xl border-x-2 border-b-2 border-yellow shadow-lg text-2xl text-center overflow-hidden bg-blue-normal flex flex-col items-center overflow-hidden
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
                        <img className="w-full z-[2]" src="/img/bsgs_logo_border.png" alt="BSGS Logo"/>
                    </Link>

                    <div className="flex-1">

                    </div>
                </nav>
            </header>
        )
    }
}
