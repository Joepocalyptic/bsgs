import React from "react";
import {Sponsor} from "@components/components/BlockSponsorsSlideshow/BlockSponsorsSlideshow";
import {
    ScrollMenu,
    VisibilityContext,
    getItemsPos,
    slidingWindow
} from "react-horizontal-scrolling-menu";
import {LeftArrow, RightArrow} from "@components/components/BlockSponsorsSlideshow/sub/Arrows";
import {calculateColor} from "@lib/utils";
import {BorderType} from "@components/Content";

type SponsorsMenuProps = {
    darkBackground: boolean,
    sponsors: Sponsor[]
}

type SponsorsMenuState = {
    currentSponsor: Sponsor
}

type SponsorCardProps = {
    sponsor: Sponsor
    itemId: string
    onClick: Function
    darkBackground: boolean
}

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const SponsorCard = ({sponsor, itemId, onClick, darkBackground}: SponsorCardProps) => {
    const visibility = React.useContext(VisibilityContext)

    const visible = visibility.isItemVisible(itemId)

    return <button
        className={"relative text-white w-[35vw] lg:w-[30vw] rounded-2xl py-8 px-4 lg:px-8 " +
            "overflow-hidden flex flex-col gap-4 items-center"
            + calculateColor(darkBackground, true)}
        onClick={() => onClick(visibility)}>
        <h3 className="text-3xl font-heading uppercase">{sponsor.name}</h3>
        <img src={"https://www.joeypereira.dev/img/logo-classic.png"} alt={sponsor.name}
             className="rounded-lg max-w-[5rem] lg:max-w-[15rem] max-h-[20rem]"/>
        <div
            className="absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"/>
        <div
            className="absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"/>
    </button>
}

const SponsorsMenu = ({darkBackground, sponsors}: SponsorsMenuProps) => {
    const {dragStart, dragStop, dragMove, dragging} = useDrag()

    const handleDrag = ({scrollContainer}: scrollVisibilityApiType) => (ev: React.MouseEvent) =>
        dragMove(ev, (posDiff) => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollLeft += posDiff;
            }
        })

    const [selected, setSelected] = React.useState<string>("");

    const handleItemClick = (itemId: string) => ({getItemById, scrollToItem}: scrollVisibilityApiType) => {
        if (dragging) return false
        setSelected(selected !== itemId ? itemId : "");
        // NOTE: for center items
        scrollToItem(getItemById(itemId), "smooth", "center", "nearest");
    };

    return <div onMouseLeave={dragStop}>
        <ScrollMenu
            LeftArrow={<LeftArrow darkBackground={darkBackground} />}
            RightArrow={<RightArrow darkBackground={darkBackground} />}
            onMouseDown={() => dragStart}
            onMouseUp={({
                            getItemById,
                            scrollToItem,
                            visibleItems
                        }: scrollVisibilityApiType) => () => {
                // NOTE: for center items
                dragStop()
                const {center} = getItemsPos(visibleItems)
                scrollToItem(getItemById(center), "smooth", "center")
            }}
            options={{throttle: 0}} // NOTE: for center items
            onMouseMove={handleDrag}
            wrapperClassName="gap-8"
            scrollContainerClassName="gap-8 rounded-2xl"
        >
            {sponsors.map(sponsor => (
                <SponsorCard
                    darkBackground={darkBackground}
                    sponsor={sponsor}
                    onClick={handleItemClick(sponsors.indexOf(sponsor).toString())}
                    itemId={sponsors.indexOf(sponsor).toString()}
                    key={sponsors.indexOf(sponsor).toString()}
                />
            ))}
        </ScrollMenu>
    </div>
}

function useDrag() {
    const [clicked, setClicked] = React.useState(false);
    const [dragging, setDragging] = React.useState(false);

    const position = React.useRef(0);

    const dragStart = React.useCallback((ev: React.MouseEvent) => {
        position.current = ev.clientX;
        setClicked(true);
    }, []);

    const dragStop = React.useCallback(
        () =>
            // NOTE: need some delay so item under cursor won't be clicked
            window.requestAnimationFrame(() => {
                setDragging(false);
                setClicked(false);
            }),
        []
    );

    const dragMove = (ev: React.MouseEvent, cb: (posDif: number) => void) => {
        const newDiff = position.current - ev.clientX;

        const movedEnough = Math.abs(newDiff) > 5;

        if (clicked && movedEnough) {
            setDragging(true);
        }

        if (dragging && movedEnough) {
            position.current = ev.clientX;
            cb(newDiff);
        }
    };

    return {
        dragStart,
        dragStop,
        dragMove,
        dragging,
        position,
        setDragging
    };
}


export default SponsorsMenu