import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";

export function DemoCarousel(){

            return (
                <Carousel autoPlay={true}>
                    <div>
                        <img src="1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="2.webp" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="3.webp" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="4.webp" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            );
        }
   
