import React from "react";

import {HiMenu} from "@react-icons/all-files/hi/HiMenu"
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight"
import {HiChevronDown} from "@react-icons/all-files/hi/HiChevronDown"
import {HiPlus} from "@react-icons/all-files/hi/HiPlus"
import {HiHome} from "@react-icons/all-files/hi/HiHome"
import {Link} from "@components/Link/Link"
import {BuilderContent} from "@builder.io/react/lite"
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";

type HeaderState = {
    expanded: boolean,
    submenusExpanded: number[]
}

class BSGSHeader extends React.Component<WithRouterProps, HeaderState> {
    state = {
        expanded: false,
        submenusExpanded: [] as number[]
    }

    toggleExpanded = () => this.setState((state) => ({
        expanded: !state.expanded
    }))

    componentDidMount() {
        this.props.router.events.on('routeChangeStart', () => {
            this.setState({
                expanded: false
            })
        })
    }


    toggleExpandedSubmenu = (index: number) => {
        let newSubmenu = this.state.submenusExpanded

        if (newSubmenu.includes(index)) {
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
            <header className="bg-blue-light uppercase whitespace-nowrap
                               lg:h-24 w-full text-white border-b-2 border-yellow shadow-2xl">
                {/* Mobile header */}
                <nav
                    className={"block lg:hidden pt-2 text-2xl container px-4 mx-auto" + (this.state.expanded ? "" : " pb-2")}>
                    <div className="flex items-center gap-4">
                        <button onClick={() => this.toggleExpanded()}
                                className="w-16 h-16 bg-blue-normal text-5xl grid place-items-center rounded-2xl shadow-lg">
                            <HiMenu/>
                        </button>
                        <span className="block flex-1 lg:hidden text-center whitespace-normal">BSGS</span>
                        <Link href="/home">
                            <img className="w-16" src="/img/bsgs_logo.webp" alt="BSGS Logo"/>
                        </Link>
                    </div>
                    <div className={"flex-col pt-2 hidden" + (this.state.expanded ? "flex" : "")}>
                        <Link href="/home" className="border-t-2 font-heading border-yellow flex gap-4 py-4">
                            <HiHome className="font-heading w-16 grid place-items-center"/>
                            Home
                        </Link>
                        <BuilderContent modelName="navigation">
                            {(data) => (
                                <>
                                    {data?.navigationLinks?.map((item: any, index: number) => (
                                        <React.Fragment key={index}>
                                            {(() => {
                                                return item.singleLink === "" ? (
                                                    <>
                                                        <button onClick={() => this.toggleExpandedSubmenu(index)}
                                                                className={"rounded-2xl w-full flex gap-4 py-4 uppercase transition-all font-heading duration-400 ease-in-out" +
                                                                    (this.state.submenusExpanded.includes(index) ? " bg-blue-normal shadow-lg" : "")}>
                                                            <HiPlus
                                                                className={"w-16 place-items-center transition-colors duration-400 font-heading ease-in-out" +
                                                                    (this.state.submenusExpanded.includes(index) ? " text-yellow" : "")}/>
                                                            {item.displayName}
                                                        </button>
                                                        {(() => {
                                                            if (this.state.submenusExpanded.includes(index)) {
                                                                return <>
                                                                    {item.multipleLinks.map((link: any, index_: number) => (
                                                                        <Link href={link.url} key={index_}
                                                                              className="p-4 font-heading flex gap-4">
                                                                            <HiChevronRight
                                                                                className="w-16 grid place-items-center"/>
                                                                            {link.displayName}
                                                                        </Link>
                                                                    ))}

                                                                </>
                                                            }
                                                        })()}
                                                    </>
                                                ) : (
                                                    <Link href={item.singleLink} className="flex font-heading gap-4 py-4">
                                                        <HiChevronRight
                                                            className="w-16 grid place-items-center text-3xl"/>
                                                        {item.displayName}
                                                    </Link>
                                                )
                                            })()}
                                        </React.Fragment>
                                    ))}
                                </>
                            )}
                        </BuilderContent>
                    </div>
                </nav>

                {/* Desktop header */}
                <nav className="hidden lg:flex h-full container mx-auto text-2xl px-4">
                    <div className="flex-1">
                        <BuilderContent modelName="navigation">
                            {(data) => (
                                <div
                                    className="pt-2 flex gap-16 h-24 flex-row-reverse justify-between xl:justify-start">
                                    {data?.navigationLinks?.filter((item: any) => item.rightSide === false).map((item: any, index: number) => (
                                        <React.Fragment key={index}>
                                            {(() => {
                                                return item.singleLink === "" ? (
                                                    <>
                                                        <div
                                                            className="group relative cursor-pointer flex font-heading items-center">
                                                            {item.displayName}
                                                            <HiChevronDown
                                                                className="group-hover:text-yellow transition-colors duration-300 ease-in-out absolute left-1/2 right-1/2 transform -translate-x-1/2 bottom-1"/>
                                                            <ul
                                                                className="rounded-b-2xl border-x-2 border-b-2 border-yellow shadow-lg text-xl text-center overflow-hidden bg-blue-normal flex flex-col items-center overflow-hidden z-[10]
                                                                       absolute left-1/2 right-1/2 transform -translate-x-1/2 top-[5.4rem] min-w-[12rem] leading-[0] group-hover:leading-normal opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                                                {item.multipleLinks.map((link: any, index_: number) => (
                                                                    <li key={index_}
                                                                        className="w-full hover:bg-blue-dark transition-colors duration-300 ease-in-out">
                                                                        <Link href={link.url} className="group-hover:py-2 block font-heading h-full w-full">
                                                                            {link.displayName}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link href={item.singleLink}
                                                          className="cursor-pointer flex font-heading items-center">
                                                        {item.displayName}
                                                    </Link>
                                                )
                                            })()}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </BuilderContent>
                    </div>

                    <Link href="/home" className="z-[2] py-2 mx-16 w-40">
                        <img className="w-full z-[2]" src="/img/bsgs_logo_border.webp" alt="BSGS Logo"/>
                    </Link>

                    <div className="flex-1">
                        <BuilderContent modelName="navigation">
                            {(data) => (
                                <div className="pt-2 flex gap-16 h-24 justify-between xl:justify-start">
                                    {data?.navigationLinks?.filter((item: any) => item.rightSide === true).map((item: any, index: number) => (
                                        <React.Fragment key={index}>
                                            {(() => {
                                                return item.singleLink === "" ? (
                                                    <>
                                                        <div
                                                            className="group relative cursor-pointer font-heading flex items-center">
                                                            {item.displayName}
                                                            <HiChevronDown
                                                                className="group-hover:text-yellow transition-colors duration-300 ease-in-out absolute left-1/2 right-1/2 transform -translate-x-1/2 bottom-1"/>
                                                            <ul
                                                                className="rounded-b-2xl border-x-2 border-b-2 border-yellow shadow-lg text-xl text-center overflow-hidden bg-blue-normal flex flex-col items-center overflow-hidden z-[10]
                                                                       absolute left-1/2 right-1/2 transform -translate-x-1/2 top-[5.4rem] min-w-[12rem] leading-[0] group-hover:leading-normal opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                                                {item.multipleLinks.map((link: any, index_: number) => (
                                                                    <li key={index_}
                                                                        className="w-full hover:bg-blue-dark transition-colors duration-300 ease-in-out">
                                                                        <Link href={link.url} className="group-hover:py-2 font-heading block h-full w-full">
                                                                            {link.displayName}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link href={item.singleLink}
                                                          className="cursor-pointer flex font-heading items-center">
                                                        {item.displayName}
                                                    </Link>
                                                )
                                            })()}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </BuilderContent>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(BSGSHeader)