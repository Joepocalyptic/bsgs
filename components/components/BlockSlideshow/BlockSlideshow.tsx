import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

type SlideshowProps = {
    title: string,
    images: {
        image: string
    }[],
    imageDuration: number
}

export default class BlockSlideshow extends React.Component<SlideshowProps, {}> {
    render() {
        return (
            <section className="relative">
                <Carousel className="relative h-[50vw] max-h-[30rem]"
                          autoPlay={true}
                          interval={this.props.imageDuration*1000}
                          stopOnHover={false}
                          showThumbs={false}
                          showStatus={false}
                          showArrows={false}
                          renderIndicator={(onClickHandler, isSelected, index, label) => {
                              if (isSelected) {
                                  return (
                                      <li
                                          className="bg-yellow rounded-full border-2 border-blue-normal h-4 w-4 mx-2 inline-block"
                                          aria-label={`Selected: ${label} ${index + 1}`}
                                          title={`Selected: ${label} ${index + 1}`}
                                      />
                                  );
                              }
                              return (
                                  <li
                                      onClick={onClickHandler}
                                      onKeyDown={onClickHandler}
                                      value={index}
                                      key={index}
                                      role="button"
                                      className="bg-white rounded-full border-2 border-blue-normal h-4 w-4 mx-2 inline-block"
                                      tabIndex={0}
                                      title={`${label} ${index + 1}`}
                                      aria-label={`${label} ${index + 1}`}
                                  />
                              );
                          }}
                          infiniteLoop={true}>
                    {this.props.images?.map((image: any, index: number) => (
                        <div className="h-[50vw] max-h-[30rem]">
                            <img className="h-full object-cover select-none filter brightness-[70%]" src={image.image} alt=""/>
                        </div>
                    ))}
                </Carousel>
                <div className="hidden lg:grid absolute px-4 top-0 left-0 h-full w-full place-items-center">
                    <h1 className="text-white font-heading uppercase text-7xl text-center">{this.props.title}</h1>
                </div>
            </section>
        )
    }

}