import React from "react";

import {
    VisibilityContext,
    slidingWindow,
    getItemsPos
} from "react-horizontal-scrolling-menu";
import {HiChevronLeft} from "@react-icons/all-files/hi/HiChevronLeft";
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight";

function Arrow({children, disabled, onClick, darkBackground, left}: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
    darkBackground: boolean
    left: boolean
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={"hover:text-yellow transition ease-in-out flex items-center text-white flex cursor-pointer text-7xl " + (left ? "-ml-5" : "-mr-5")}>
            {children}
        </button>
    );
}

export function LeftArrow({darkBackground}: {darkBackground: boolean}) {
    const {
        items,
        visibleItems,
        getItemById,
        isFirstItemVisible,
        scrollToItem,
        visibleItemsWithoutSeparators,
        initComplete
    } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );
    React.useEffect(() => {
        // NOTE: detect if whole component visible
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

    // NOTE: for center items
    const prevGroupItems = slidingWindow(
        items.toItemsKeys(),
        visibleItems
    ).prev();
    const {center} = getItemsPos(prevGroupItems);
    const scrollPrevCentered = () =>
        scrollToItem(getItemById(center), "smooth", "center");

    return (
        <Arrow left={true} darkBackground={darkBackground} disabled={disabled} onClick={scrollPrevCentered}>
            <HiChevronLeft />
        </Arrow>
    );
}

export function RightArrow({darkBackground}: {darkBackground: boolean}) {
    const {
        getItemById,
        isLastItemVisible,
        items,
        scrollToItem,
        visibleItems,
        visibleItemsWithoutSeparators
    } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !visibleItemsWithoutSeparators.length && isLastItemVisible
    );
    React.useEffect(() => {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);

    // NOTE: for center items
    const nextGroupItems = slidingWindow(
        items.toItemsKeys(),
        visibleItems
    ).next();
    const {center} = getItemsPos(nextGroupItems);
    const scrollNextCentered = () =>
        scrollToItem(getItemById(center), "smooth", "center");

    return (
        <Arrow left={false} darkBackground={darkBackground} disabled={disabled} onClick={scrollNextCentered}>
            <HiChevronRight />
        </Arrow>
    );
}
