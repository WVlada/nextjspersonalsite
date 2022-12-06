
export default function Star() {

    return (
        <div className=" absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 xl:w-32 " >
            <div className="w-full z-50 overflow ">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path id="star1" d="M69.084 44.471L57.378 42.77a1.297 1.297 0 0 1-.978-.711l-5.235-10.607c-.476-.965-1.853-.965-2.329 0L43.6 42.059a1.301 1.301 0 0 1-.978.711l-11.706 1.701c-1.065.155-1.491 1.464-.72 2.215l8.471 8.257a1.3 1.3 0 0 1 .374 1.15l-2 11.659c-.182 1.061.932 1.87 1.885 1.369l10.47-5.504c.378-.199.83-.199 1.209 0l10.47 5.504c.953.501 2.067-.308 1.885-1.369l-2-11.659a1.299 1.299 0 0 1 .374-1.15l8.471-8.257c.77-.751.344-2.061-.721-2.215z" fill="#f8b26a" />
                    <path id="star2" d="M90.997 54.98L84.251 54a.75.75 0 0 1-.564-.409l-3.017-6.113a.748.748 0 0 0-1.342 0l-3.017 6.113a.747.747 0 0 1-.564.409l-6.746.98a.749.749 0 0 0-.415 1.277l4.881 4.758c.176.172.257.42.215.662l-1.152 6.718a.748.748 0 0 0 1.086.789l6.033-3.172a.747.747 0 0 1 .697 0l6.033 3.172a.748.748 0 0 0 1.086-.789l-1.152-6.718a.746.746 0 0 1 .215-.662l4.881-4.758a.747.747 0 0 0-.412-1.277z" fill="#f5e169" />
                    <path id="star3" d="M30.997 54.98L24.251 54a.75.75 0 0 1-.564-.409l-3.017-6.113a.748.748 0 0 0-1.342 0l-3.017 6.113a.747.747 0 0 1-.564.409l-6.746.98a.749.749 0 0 0-.415 1.277l4.881 4.758c.176.172.257.42.215.662l-1.152 6.718a.748.748 0 0 0 1.086.789l6.033-3.172a.747.747 0 0 1 .697 0l6.033 3.172a.748.748 0 0 0 1.086-.789l-1.152-6.718a.746.746 0 0 1 .215-.662l4.881-4.758a.747.747 0 0 0-.412-1.277z" fill="#f5e169" />
                </svg>
            </div>

            <style jsx>{
                `
            #star1 {
                animation: fadeInFromNone 2s ease-out infinite;
                transform-origin: center;
            }
            
            @-webkit-keyframes fadeInFromNone {
                0% {
                    opacity: 0;
                    transform: translate(0px, -50px) scale(0.1) rotate(0deg) ;
                    ;
                }
                50% {
                     opacity: 1;
                     transform: translate(0px, 0px) scale(1.5) rotate(360deg) ;
                }
            
                100% {
                   transform: translate(0px, 0px) scale(1) rotate(360deg) ;
                   
                }
            }
            #star2 {
                animation: fadeInFromNone2 1.5s ease-out infinite;
                transform-origin: center;
            }
            
            @-webkit-keyframes fadeInFromNone2 {
                0% {
                    opacity: 0;
                    transform:  scale(0.1)  ;
                }
                30% {
                     opacity: 1;
                     transform:  scale(1.3)
                }
            
                100% {
                   transform:  scale(1)  ;
                   
                }
            }
            #star3 {
                animation: fadeInFromNone3 3s ease-out infinite;
                transform-origin: center;
            }
            
            @-webkit-keyframes fadeInFromNone3 {
                0% {
                    opacity: 0;
                    transform: translate(0px, -50px) scale(0.1)  ;
                    ;
                }
                30% {
                    transform:  scale(1.3)  ;
                     opacity: 1;
                }
            
                100% {
                   transform: translate(0px, 0px) scale(1.0)  ;
                   
                }
            }
            `}

            </style>
        </div>
    );
}
