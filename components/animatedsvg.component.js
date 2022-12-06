import { useEffect } from "react";

export default function AnimatedSvg() {
    useEffect(() => {
        function clearSelf(elem) {
            if (elem == null){return}
            let paths = elem.getElementsByTagName('path')
            let curentLength;
            for (let i = 0; i < paths.length; i++) {
                curentLength = paths[i].getTotalLength();
                paths[i].style.transition =
                    "stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1)";
                paths[i].style.strokeDasharray = paths[i].getTotalLength() + " " + paths[i].getTotalLength();
                paths[i].style.strokeDashoffset = paths[i].getTotalLength();
            }
        }
        function drawSelf(elem) {
            let paths = elem.getElementsByTagName('path')
            let curentLength;
            for (let i = 0; i < paths.length; i++) {
                curentLength = paths[i].getTotalLength();
                paths[i].style.strokeDasharray = curentLength + " " + curentLength;
                paths[i].style.strokeDashoffset = curentLength;
                paths[i].style.fill = 'transparent'

            }
            setTimeout(() => {
                for (let i = 0; i < paths.length; i++) {
                    paths[i].addEventListener("transitionend", () => {
                    });
                    paths[i].style.transition =
                        "stroke-dashoffset 2000ms cubic-bezier(0.4, 0, 0.2, 1), fill 5000ms ease";
                    paths[i].style.strokeDashoffset = 0;
                    paths[i].style.fill = '#ffffff4a'


                }
            }, 100)
        }

        let observer = new IntersectionObserver(function (entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            if (entries[0].isIntersecting === true) {
                let svg = document.querySelector("#svgToDraw")
                drawSelf(svg)
            }
            else {
                let svg = document.querySelector("#svgToDraw")
                clearSelf(svg)
            }
        }, { threshold: [0] });

        observer.observe(document.querySelector("#svgToDraw"));
    }, [])

    return (
        <div>
            <svg
                width="100"
                height="100"
                viewBox="0 0 26.458333 26.458333"
                version="1.1"
                id="svgToDraw"
            >
                <g aria-label="W"
                    transform="matrix(0.26458333,0,0,0.26458333,-35.841998,-25.496323)"
                    id="text223"
                    style={{ fontSize: '74.6667px', whiteSpace: 'pre', shapInside: 'url(#rect225)' }}>
                    <path
                        d="m 140.30176,115.28593 c 5.45312,0 10.90625,0 16.35937,0 1.05371,2.67734 -2.82737,2.50194 -1.40645,5.14988 4.90632,14.51775 9.81263,29.0355 14.71895,43.55325 3.08805,-7.98977 6.50763,-15.85835 9.3252,-23.94727 1.59009,-5.73016 2.90999,-12.04763 0.99426,-17.85411 -0.40319,-3.91567 -5.91372,-3.54144 -6.94446,-5.52893 -0.64438,-1.97916 1.40585,-1.26372 2.63154,-1.37282 4.65407,0 9.30814,0 13.96221,0 1.17442,2.82652 -2.99673,2.19981 -1.75712,4.94186 4.99196,14.58709 9.98391,29.17418 14.97587,43.76127 4.07382,-10.5692 8.52148,-21.00092 12.24756,-31.69849 1.10762,-4.0089 2.84312,-8.60803 0.74561,-12.56616 -1.19877,-3.11031 -7.0914,-0.411 -6.61817,-3.72354 -0.14943,-1.48422 2.29855,-0.37103 3.28942,-0.71494 5.93478,0 11.86955,0 17.80433,0 1.06037,3.38203 -3.34453,2.21096 -4.58862,4.77247 -4.66044,6.04817 -6.67402,13.56293 -9.66776,20.48568 -4.91975,12.29937 -9.83949,24.59873 -14.75924,36.8981 -1.26686,-0.15297 -3.20698,0.63693 -3.23961,-1.24452 -4.38888,-12.78828 -8.77776,-25.57657 -13.16664,-38.36485 -6.31395,10.89266 -10.21654,22.90318 -14.95974,34.50807 -0.66967,1.70043 -1.33934,3.40087 -2.00901,5.1013 -1.24375,-0.14101 -3.13657,0.62338 -3.14122,-1.2461 -5.23442,-15.35955 -10.37268,-30.75431 -15.66738,-46.09179 -1.95884,-3.98513 -2.9951,-8.83506 -6.65038,-11.67187 -2.08932,-1.06532 -2.84312,-0.51038 -2.47852,-3.14649 z"
                        style={{ fontSize: '96px', fontFamily: 'Footlight MT Light', textAlign: 'center', fill: 'none', stroke: '#ffffff', strokeOpacity: 1 }}
                        id="path339" />
                </g>
            </svg>
            <p className="italic">portfolio</p>
        </div>
    );
}
