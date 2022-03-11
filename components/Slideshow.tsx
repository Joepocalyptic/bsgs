import React from "react";
import {calculateColor} from "@lib/utils";
import {HiChevronLeft} from "@react-icons/all-files/hi/HiChevronLeft";
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight";

import {Swiper, SwiperSlide, useSwiper} from "swiper/react";

import { Mousewheel } from "swiper"

import "swiper/css"

export type SlideshowBlock = {
    title: string,
    image?: string,
    blurb: string,
}

type SlideshowProps = {
    aos: string
    darkBackground: boolean,
    blocks: SlideshowBlock[]
}

function SlidePrevButton() {
    const swiper = useSwiper()

    return (
        <button className="text-7xl text-white pointer-events-auto" onClick={() => swiper.slidePrev()}>
            <HiChevronLeft className="transition ease-in-out hover:text-yellow"/>
        </button>
    )
}

function SlideNextButton() {
    const swiper = useSwiper()

    return (
        <button className="text-7xl text-white pointer-events-auto" onClick={() => swiper.slideNext()}>
            <HiChevronRight className="transition ease-in-out hover:text-yellow"/>
        </button>
    )
}

type SlideshowCardProps = {
    block: SlideshowBlock
    index: number
    darkBackground: boolean
}

const SlideshowCard = ({block, index, darkBackground}: SlideshowCardProps) => {
    const swiper = useSwiper()

    return <div
        role="button"
        className={"relative text-white flex rounded-2xl py-8 px-4 lg:px-8 " +
            "overflow-hidden flex flex-col gap-4 items-center"
            + calculateColor(darkBackground, true)}
        onClick={() => swiper.slideTo(index)}>

        <h3 className="text-3xl text-center font-heading uppercase">{block.title}</h3>
        {block.image && <img src={`${block.image}?width=320`} alt={block.title}
             className="rounded-lg max-w-[5rem] lg:max-w-[5rem] max-h-[10rem]"/>}
        <div className="cms-content leading-8 break-words flex flex-col gap-4 text-center"
             dangerouslySetInnerHTML={{__html: block.blurb}}/>

        <div className="absolute left-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"/>
        <div className="absolute right-0 top-0 bg-yellow w-0.5 lg:w-1 h-full"/>
    </div>
}

const Slideshow = ({darkBackground, blocks}: SlideshowProps) => {
    return <Swiper
        mousewheel={true}
        modules={[Mousewheel]}
        slidesPerView={2}
        spaceBetween={32}
        className="contained-swiper w-full"
        centeredSlides={true}
        centerInsufficientSlides={true}
        initialSlide={1}
    >
        <div slot="container-start"
             className="hidden lg:flex absolute left-0 top-[50%] justify-start -translate-y-1/2 left-[50%] -translate-x-1/2 container z-[2] pointer-events-none">
            <SlidePrevButton/>
        </div>
        <div slot="container-end"
             className="hidden lg:flex absolute left-0 top-[50%] justify-end -translate-y-1/2 left-[50%] -translate-x-1/2 container z-[2] pointer-events-none">
            <SlideNextButton/>
        </div>
        {blocks.map((block, index) => (
            <SwiperSlide key={index}>
                <SlideshowCard
                    darkBackground={darkBackground}
                    block={block}
                    index={index}
                />
            </SwiperSlide>
        ))}
    </Swiper>
}

export default Slideshow