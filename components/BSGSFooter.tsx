import React from "react";
import { Link } from "./Link/Link";

export default class BSGSFooter extends React.Component<{}, {}> {
    render() {
        return (
            <footer className="text-white border-t-2 border-yellow bg-blue-light">
                {/* Mobile footer */}
                <div className="flex flex-col gap-4 lg:hidden py-8 px-4">
                <Link href="/home" className="self-center">
                    <img className="w-24" src="/img/bsgs_logo.png" alt="BSGS Logo"/>
                </Link>
                <div className="font-content text-center text-xl">
                    <p>
                        Bay State Girls Softball<br />
                        P.O. Box 30162<br />
                        Acushnet, Massachusetts 02743
                    </p>
                </div>
                <div className="h-0.5 bg-yellow"></div>
                </div>

            </footer>
        )
    }
}
