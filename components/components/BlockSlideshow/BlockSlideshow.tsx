import React from "react"

import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import {Pagination} from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import {HiChevronLeft} from "@react-icons/all-files/hi/HiChevronLeft";
import {HiChevronRight} from "@react-icons/all-files/hi/HiChevronRight";

type SlideshowProps = {
    title: string,
    images: {
        image: string
    }[],
    imageDuration: number
}

function SlidePrevButton() {
    const swiper = useSwiper()

    return (
        <button className="text-7xl text-white pointer-events-auto" onClick={() => swiper.slidePrev()}>
            <HiChevronLeft className="transition ease-in-out hover:text-yellow" />
        </button>
    )
}

function SlideNextButton() {
    const swiper = useSwiper()

    return (
        <button className="text-7xl text-white pointer-events-auto" onClick={() => swiper.slideNext()}>
            <HiChevronRight className="transition ease-in-out hover:text-yellow" />
        </button>
    )
}

export default class BlockSlideshow extends React.Component<SlideshowProps, {}> {

    render() {
        return (
            <section className="relative h-[50vw] max-h-[30rem]">
                <Swiper
                    className="h-full relative"
                    pagination={{clickable: true}}
                    modules={[Pagination]}
                    loop
                >
                    <div slot="container-start" className="hidden lg:flex absolute left-0 top-[50%] justify-start -translate-y-1/2 left-[50%] -translate-x-1/2 container z-[2] pointer-events-none">
                        <SlidePrevButton />
                    </div>
                    <div slot="container-end" className="hidden lg:flex absolute left-0 top-[50%] justify-end -translate-y-1/2 left-[50%] -translate-x-1/2 container z-[2] pointer-events-none">
                        <SlideNextButton />
                    </div>
                    {this.props.images?.map((image: any, index: number) => (
                        <SwiperSlide key={index}>
                            <img className="w-full h-full object-cover select-none filter brightness-[70%]"
                                 srcSet={`
                                     ${image.image}?width=1920 1920w,
                                     ${image.image}?width=720 720w,
                                     ${image.image}?width=500 500w,
                                     ${image.image}?width=300 300w,
                                     ${image.image}?width=100 100w
                                 `}
                                 alt=""/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h1 className="z-[2] text-white font-heading px-4 uppercase text-4xl sm:text-6xl w-full lg:text-7xl text-center absolute
                               transform -translate-x-1/2 -translate-y-1/2 left-[50%] top-[50%] pointer-events-none">
                    {this.props.title}
                </h1>
            </section>
        )
    }
}