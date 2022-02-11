import React from "react";

export default class BSGSHeader extends React.Component<{}, {}> {
    render() {
        return (
            <header className="px-4 py-4 bg-blue-light flex flex-col
                               lg:h-24 lg:flex-row w-full text-white">

                {/* Mobile header */}
                <div className="block lg:hidden flex items-center">
                    <img className="w-16" src="/bsgs_logo.png" alt="" />
                    <h1 className="font-heading text-3xl uppercase ml-4 block lg:hidden">Bay State Girls Softball</h1>
                </div>

                {/* Desktop header */}
                <div className="hidden lg:block">

                </div>
                <div className="flex-1 hidden lg:flex">
                </div>
                <div className="flex-1 hidden lg:flex">

                </div>
            </header>
        )
    }
}
