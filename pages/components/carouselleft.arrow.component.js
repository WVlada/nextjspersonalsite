import { useEffect } from "react";

export default function CarouselLeftArrow() {
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
                //paths[i].style.fill = 'transparent'

            }
            setTimeout(() => {
                for (let i = 0; i < paths.length; i++) {
                    paths[i].addEventListener("transitionend", () => {
                    });
                    paths[i].style.transition =
                        "stroke-dashoffset 2000ms cubic-bezier(0.4, 0, 0.2, 1), fill 5000ms ease";
                    paths[i].style.strokeDashoffset = 0;
                    //paths[i].style.fill = '#ffffff4a'


                }
            }, 100)
        }

        let observer = new IntersectionObserver(function (entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            if (entries[0].isIntersecting === true) {
                let svg = document.querySelector("#leftArrowSvg")
                drawSelf(svg)
            }
            else {
                let svg = document.querySelector("#leftArrowSvg")
                clearSelf(svg)
            }
        }, { threshold: [0] });

        observer.observe(document.querySelector("#leftArrowSvg"));
    }, [])

    return (
        <div className="cursor-pointer">
            <svg
            className="w-[30px] md:w-[50px] drop-shadow-lg"
                viewBox="0 0 52.916665 52.916666"
                version="1.1"
                id="leftArrowSvg"
            >
                <g aria-label="W">

                    <path
                        style={{ fill: 'none', stroke: '#ffffff', strokeOpacity: 1, strokeWidth: 3 }}
                        d="m 46.302083,6.6145833 c 0,0 -10.178979,-1.9536067 -11.90625,-1.3229166 C 25.597767,8.5041659 7.9375,22.489583 7.9375,26.458333 c 0,3.96875 17.559611,18.189323 26.458333,21.166667 1.786992,0.597894 11.90625,-1.322917 11.90625,-1.322917"
                    /></g>
            </svg>

        </div>
    );
}
