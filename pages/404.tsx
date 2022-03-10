import React from "react";
import {Link} from "@components/Link/Link";

export default function Custom404() {
    return <>
        <style jsx global>{`
          body {
            @apply overflow-hidden
          }
        `}</style>
        <div className="h-[29.374rem] grid items-center text-white text-center">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-7xl font-heading">404</h1>
                <small className="text-lg ">Page not found.</small>
                <Link href="/" className="text-lg  underline">
                    Back to home
                </Link>
            </div>
        </div>
    </>
}