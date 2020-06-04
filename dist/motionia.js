(function() {var y = document.createElement("script");y.src= "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";document.head.prepend(y);var z = document.createElement("style");z.innerHTML = ` .fadeIn{-webkit-animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1) both}@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}.rollIn{-webkit-animation:roll-in-top .6s ease-out both;animation:roll-in-top .6s ease-out both}@-webkit-keyframes roll-in-top{0%{-webkit-transform:translateY(-800px) rotate(-540deg);transform:translateY(-800px) rotate(-540deg);opacity:0}100%{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);opacity:1}}@keyframes roll-in-top{0%{-webkit-transform:translateY(-800px) rotate(-540deg);transform:translateY(-800px) rotate(-540deg);opacity:0}100%{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);opacity:1}}.scaleIn{-webkit-animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.slitIn{-webkit-animation:slit-in-vertical .45s ease-out both;animation:slit-in-vertical .45s ease-out both}@-webkit-keyframes slit-in-vertical{0%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)}}@keyframes slit-in-vertical{0%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)}}.flipIn{-webkit-animation:flip-in-hor-bottom .5s cubic-bezier(.25,.46,.45,.94) both;animation:flip-in-hor-bottom .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes flip-in-hor-bottom{0%{-webkit-transform:rotateX(80deg);transform:rotateX(80deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes flip-in-hor-bottom{0%{-webkit-transform:rotateX(80deg);transform:rotateX(80deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}.rotateIn{-webkit-animation:rotate-in-center .6s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-center .6s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}.swirlIn{-webkit-animation:swirl-in-fwd .6s ease-out both;animation:swirl-in-fwd .6s ease-out both}@-webkit-keyframes swirl-in-fwd{0%{-webkit-transform:rotate(-540deg) scale(0);transform:rotate(-540deg) scale(0);opacity:0}100%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);opacity:1}}@keyframes swirl-in-fwd{0%{-webkit-transform:rotate(-540deg) scale(0);transform:rotate(-540deg) scale(0);opacity:0}100%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);opacity:1}}.presIn{-webkit-animation:rotate-in-2-cw .5s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-2-cw .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}.parosIn{-webkit-animation:slit-in-horizontal .45s ease-out both;animation:slit-in-horizontal .45s ease-out both}@-webkit-keyframes slit-in-horizontal{0%{-webkit-transform:translateZ(-800px) rotateX(90deg);transform:translateZ(-800px) rotateX(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateX(87deg);transform:translateZ(-160px) rotateX(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)}}@keyframes slit-in-horizontal{0%{-webkit-transform:translateZ(-800px) rotateX(90deg);transform:translateZ(-800px) rotateX(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateX(87deg);transform:translateZ(-160px) rotateX(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)}}.bounceIn{-webkit-animation:bounce-in-top 1.1s both;animation:bounce-in-top 1.1s both}@-webkit-keyframes bounce-in-top{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{-webkit-transform:translateY(-65px);transform:translateY(-65px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{-webkit-transform:translateY(-28px);transform:translateY(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{-webkit-transform:translateY(-8px);transform:translateY(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes bounce-in-top{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{-webkit-transform:translateY(-65px);transform:translateY(-65px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{-webkit-transform:translateY(-28px);transform:translateY(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{-webkit-transform:translateY(-8px);transform:translateY(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.presentIn{-webkit-animation:slide-in-elliptic-top-fwd .7s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-elliptic-top-fwd .7s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}@keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}.swingIn{-webkit-animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both}@-webkit-keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:top;transform-origin:top;opacity:1}}.tiltIn{-webkit-animation:tilt-in-top-1 .6s cubic-bezier(.25,.46,.45,.94) both;animation:tilt-in-top-1 .6s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes tilt-in-top-1{0%{-webkit-transform:rotateY(30deg) translateY(-300px) skewY(-30deg);transform:rotateY(30deg) translateY(-300px) skewY(-30deg);opacity:0}100%{-webkit-transform:rotateY(0) translateY(0) skewY(0);transform:rotateY(0) translateY(0) skewY(0);opacity:1}}@keyframes tilt-in-top-1{0%{-webkit-transform:rotateY(30deg) translateY(-300px) skewY(-30deg);transform:rotateY(30deg) translateY(-300px) skewY(-30deg);opacity:0}100%{-webkit-transform:rotateY(0) translateY(0) skewY(0);transform:rotateY(0) translateY(0) skewY(0);opacity:1}}.flickerIn{-webkit-animation:flicker-in-1 2s linear both;animation:flicker-in-1 2s linear both}@-webkit-keyframes flicker-in-1{0%{opacity:0}10%{opacity:0}10.1%{opacity:1}10.2%{opacity:0}20%{opacity:0}20.1%{opacity:1}20.6%{opacity:0}30%{opacity:0}30.1%{opacity:1}30.5%{opacity:1}30.6%{opacity:0}45%{opacity:0}45.1%{opacity:1}50%{opacity:1}55%{opacity:1}55.1%{opacity:0}57%{opacity:0}57.1%{opacity:1}60%{opacity:1}60.1%{opacity:0}65%{opacity:0}65.1%{opacity:1}75%{opacity:1}75.1%{opacity:0}77%{opacity:0}77.1%{opacity:1}85%{opacity:1}85.1%{opacity:0}86%{opacity:0}86.1%{opacity:1}100%{opacity:1}}@keyframes flicker-in-1{0%{opacity:0}10%{opacity:0}10.1%{opacity:1}10.2%{opacity:0}20%{opacity:0}20.1%{opacity:1}20.6%{opacity:0}30%{opacity:0}30.1%{opacity:1}30.5%{opacity:1}30.6%{opacity:0}45%{opacity:0}45.1%{opacity:1}50%{opacity:1}55%{opacity:1}55.1%{opacity:0}57%{opacity:0}57.1%{opacity:1}60%{opacity:1}60.1%{opacity:0}65%{opacity:0}65.1%{opacity:1}75%{opacity:1}75.1%{opacity:0}77%{opacity:0}77.1%{opacity:1}85%{opacity:1}85.1%{opacity:0}86%{opacity:0}86.1%{opacity:1}100%{opacity:1}}.scaleOut{-webkit-animation:scale-out-center .5s cubic-bezier(.55,.085,.68,.53) both;animation:scale-out-center .5s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}@keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}.flipOut{-webkit-animation:flip-out-hor-top .45s cubic-bezier(.55,.085,.68,.53) both;animation:flip-out-hor-top .45s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes flip-out-hor-top{0%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}100%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);opacity:0}}@keyframes flip-out-hor-top{0%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}100%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);opacity:0}}.rotateOut{-webkit-animation:rotate-out-center .6s cubic-bezier(.55,.085,.68,.53) both;animation:rotate-out-center .6s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes rotate-out-center{0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}}@keyframes rotate-out-center{0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}}.bounceOut{-webkit-animation:bounce-out-top 1.5s both;animation:bounce-out-top 1.5s both}@-webkit-keyframes bounce-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}5%{-webkit-transform:translateY(-30px);transform:translateY(-30px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}15%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{-webkit-transform:translateY(-38px);transform:translateY(-38px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}52%{-webkit-transform:translateY(-75px);transform:translateY(-75px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}70%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}85%{opacity:1}100%{-webkit-transform:translateY(-800px);transform:translateY(-800px);opacity:0}}@keyframes bounce-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}5%{-webkit-transform:translateY(-30px);transform:translateY(-30px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}15%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{-webkit-transform:translateY(-38px);transform:translateY(-38px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}52%{-webkit-transform:translateY(-75px);transform:translateY(-75px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}70%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}85%{opacity:1}100%{-webkit-transform:translateY(-800px);transform:translateY(-800px);opacity:0}}.slitOut{-webkit-animation:slit-out-vertical .5s ease-in both;animation:slit-out-vertical .5s ease-in both}@-webkit-keyframes slit-out-vertical{0%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0);opacity:1}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}}@keyframes slit-out-vertical{0%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0);opacity:1}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}}.fadeout{-webkit-animation:fade-out 1s ease-out both;animation:fade-out 1s ease-out both}@-webkit-keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}.rollOut{-webkit-animation:roll-out-left .6s ease-in both;animation:roll-out-left .6s ease-in both}@-webkit-keyframes roll-out-left{0%{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0);opacity:1}100%{-webkit-transform:translateX(-1000px) rotate(-540deg);transform:translateX(-1000px) rotate(-540deg);opacity:0}}@keyframes roll-out-left{0%{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0);opacity:1}100%{-webkit-transform:translateX(-1000px) rotate(-540deg);transform:translateX(-1000px) rotate(-540deg);opacity:0}}.slideOut{-webkit-animation:slide-out-top .5s cubic-bezier(.55,.085,.68,.53) both;animation:slide-out-top .5s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}@keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}.slideIn{-webkit-animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}.slideInZ{animation:slide-in-bck-center .7s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-in-bck-center{0%{transform:translateZ(600px);opacity:0}100%{transform:translateZ(0);opacity:1}}.puffIn{animation:puff-in-center .7s cubic-bezier(.47,0,.745,.715) both}@keyframes puff-in-center{0%{transform:scale(2);filter:blur(4px);opacity:0}100%{transform:scale(1);filter:blur(0);opacity:1}}.slideInBlur{animation:slide-in-blurred-top .6s cubic-bezier(.23,1,.32,1) both}@keyframes slide-in-blurred-top{0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0;filter:blur(40px);opacity:0}100%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}.rollInBlur{animation:roll-in-blurred-top .6s cubic-bezier(.23,1,.32,1) both}@keyframes roll-in-blurred-top{0%{transform:translateY(-800px) rotate(-720deg);filter:blur(50px);opacity:0}100%{transform:translateY(0) rotate(0);filter:blur(0);opacity:1}}.slideOutZ{animation:slide-out-bck-center .5s cubic-bezier(.55,.085,.68,.53) both}@keyframes slide-out-bck-center{0%{transform:translateZ(0);opacity:1}100%{transform:translateZ(-1100px);opacity:0}}.swirlOutZ{animation:swirl-out-bck .6s ease-in both}@keyframes swirl-out-bck{0%{transform:rotate(0) scale(1);opacity:1}100%{transform:rotate(-540deg) scale(0);opacity:0}}.rollOutBlur{animation:roll-out-blurred-top .6s cubic-bezier(.755,.05,.855,.06) both}@keyframes roll-out-blurred-left{0%{transform:translateX(0) rotate(0);filter:blur(0);opacity:1}100%{transform:translateX(-1000px) rotate(-720deg);filter:blur(50px);opacity:0}}.slideOutBlur{animation:slide-out-blurred-top .45s cubic-bezier(.755,.05,.855,.06) both}@keyframes slide-out-blurred-top{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 0;filter:blur(0);opacity:1}100%{transform:translateY(-1000px) scaleY(2) scaleX(.2);transform-origin:50% 0;filter:blur(40px);opacity:0}}.flickerOut{animation:flicker-out-1 2s linear both}@keyframes flicker-out-1{0%{opacity:1}13.9%{opacity:1}14%{opacity:0;box-shadow:none}14.9%{opacity:0;box-shadow:none}15%{opacity:1}22.9%{opacity:1}23%{opacity:0;box-shadow:none}24.9%{opacity:0;box-shadow:none}25%{opacity:1}34.9%{opacity:1}35%{opacity:0;box-shadow:none}39.9%{opacity:0;box-shadow:none}40%{opacity:1}42.9%{opacity:1}43%{opacity:0;box-shadow:none}44.9%{opacity:0;box-shadow:none}45%{opacity:1}50%{opacity:1}54.9%{opacity:1}55%{opacity:0;box-shadow:none}69.4%{opacity:0;box-shadow:none}69.5%{opacity:1}69.9%{opacity:1}70%{opacity:0;box-shadow:none}79.4%{opacity:0;box-shadow:none}79.9%{opacity:1}80%{opacity:0;box-shadow:none}89.8%{opacity:0;box-shadow:none}89.9%{opacity:1;box-shadow:none}90%{opacity:0;box-shadow:none}100%{opacity:0}}@keyframes puff-out-center{0%{transform:scale(1);filter:blur(0);opacity:1}100%{transform:scale(2);filter:blur(4px);opacity:0}}.puffOut{animation:puff-out-center 1s cubic-bezier(.165,.84,.44,1) both}.presentOut{animation:slide-out-elliptic-top-bck .7s ease-in both}@keyframes slide-out-elliptic-top-bck{0%{transform:translateY(0) rotateX(0) scale(1);transform-origin:50% 1400px;opacity:1}100%{transform:translateY(-600px) rotateX(-30deg) scale(0);transform-origin:50% 100%;opacity:1}}.swingOut{animation:swing-out-top-bck .45s cubic-bezier(.6,-.28,.735,.045) both}@keyframes swing-out-top-bck{0%{transform:rotateX(0);transform-origin:top;opacity:1}100%{transform:rotateX(-100deg);transform-origin:top;opacity:0}}.slideOutBlur{animation:slide-out-blurred-top .45s cubic-bezier(.755,.05,.855,.06) both}@keyframes slide-out-blurred-top{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 0;filter:blur(0);opacity:1}100%{transform:translateY(-1000px) scaleY(2) scaleX(.2);transform-origin:50% 0;filter:blur(40px);opacity:0}}.explodeOut{animation:slide-out-fwd-center .7s cubic-bezier(.55,.085,.68,.53) both}@keyframes slide-out-fwd-center{0%{transform:translateZ(1);opacity:1}100%{transform:translateZ(600px);opacity:0}}.presOut{animation:rotate-out-2-cw .6s cubic-bezier(.25,.46,.45,.94) both}@keyframes rotate-out-2-cw{0%{transform:rotate(0);opacity:1}100%{transform:rotate(45deg);opacity:0}}.rippleIn{animation:ping .8s ease-in-out infinite both}@keyframes ping{0%{transform:scale(.2);opacity:.8}80%{transform:scale(1.2);opacity:0}100%{transform:scale(2.2);opacity:0}}.blinkMax{animation:blink-2 .9s both}@keyframes blink-2{0%{opacity:1}50%{opacity:.2}100%{opacity:1}}.blinkMin{animation:blink-1 .6s both}@keyframes blink-1{0%,100%,50%{opacity:1}25%,75%{opacity:0}}.jellyMin{animation:jello-horizontal .9s both}@keyframes jello-horizontal{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}}.wobbleMin{animation:wobble-hor-bottom .8s both}@keyframes wobble-hor-bottom{0%,100%{transform:translateX(0);transform-origin:50% 50%}15%{transform:translateX(-30px) rotate(-6deg)}30%{transform:translateX(15px) rotate(6deg)}45%{transform:translateX(-15px) rotate(-3.6deg)}60%{transform:translateX(9px) rotate(2.4deg)}75%{transform:translateX(-6px) rotate(-1.2deg)}}.jellyMax{animation:jello-vertical .9s both}@keyframes jello-vertical{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}100%{transform:scale3d(1,1,1)}}@-webkit-keyframes vibrate-3{0%{-webkit-transform:translate(0);transform:translate(0)}10%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}20%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}30%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}50%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}70%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}80%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}90%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}@keyframes vibrate-3{0%{-webkit-transform:translate(0);transform:translate(0)}10%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}20%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}30%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}50%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}70%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}80%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}90%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}.vibrateMax{-webkit-animation:vibrate-3 .5s linear infinite both;animation:vibrate-3 .5s linear infinite both}.vibrateMin{-webkit-animation:vibrate-1 .3s linear infinite both;animation:vibrate-1 .3s linear infinite both}@-webkit-keyframes vibrate-1{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}80%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}@keyframes vibrate-1{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}80%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}.wobbleMax{-webkit-animation:wobble-hor-top .8s both;animation:wobble-hor-top .8s both}@-webkit-keyframes wobble-hor-top{0%,100%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}15%{-webkit-transform:translateX(-30px) rotate(6deg);transform:translateX(-30px) rotate(6deg)}30%{-webkit-transform:translateX(15px) rotate(-6deg);transform:translateX(15px) rotate(-6deg)}45%{-webkit-transform:translateX(-15px) rotate(3.6deg);transform:translateX(-15px) rotate(3.6deg)}60%{-webkit-transform:translateX(9px) rotate(-2.4deg);transform:translateX(9px) rotate(-2.4deg)}75%{-webkit-transform:translateX(-6px) rotate(1.2deg);transform:translateX(-6px) rotate(1.2deg)}}@keyframes wobble-hor-top{0%,100%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}15%{-webkit-transform:translateX(-30px) rotate(6deg);transform:translateX(-30px) rotate(6deg)}30%{-webkit-transform:translateX(15px) rotate(-6deg);transform:translateX(15px) rotate(-6deg)}45%{-webkit-transform:translateX(-15px) rotate(3.6deg);transform:translateX(-15px) rotate(3.6deg)}60%{-webkit-transform:translateX(9px) rotate(-2.4deg);transform:translateX(9px) rotate(-2.4deg)}75%{-webkit-transform:translateX(-6px) rotate(1.2deg);transform:translateX(-6px) rotate(1.2deg)}}.shakeMax{animation:shake-vertical .8s cubic-bezier(.455,.03,.515,.955) both}@keyframes shake-vertical{0%,100%{transform:translateY(0)}10%,30%,50%,70%{transform:translateY(-8px)}20%,40%,60%{transform:translateY(8px)}80%{transform:translateY(6.4px)}90%{transform:translateY(-6.4px)}}.shakeMin{animation:shake-horizontal .8s cubic-bezier(.455,.03,.515,.955) both}@keyframes shake-horizontal{0%,100%{transform:translateX(0)}10%,30%,50%,70%{transform:translateX(-10px)}20%,40%,60%{transform:translateX(10px)}80%{transform:translateX(8px)}90%{transform:translateX(-8px)}}.bounceMin{animation:bounce-bottom .9s both}@keyframes bounce-bottom{0%{transform:translateY(45px);animation-timing-function:ease-in;opacity:1}24%{opacity:1}40%{transform:translateY(24px);animation-timing-function:ease-in}65%{transform:translateY(12px);animation-timing-function:ease-in}82%{transform:translateY(6px);animation-timing-function:ease-in}93%{transform:translateY(4px);animation-timing-function:ease-in}25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}}.bounceMax{animation:bounce-top .9s both}@keyframes bounce-top{0%{transform:translateY(-45px);animation-timing-function:ease-in;opacity:1}24%{opacity:1}40%{transform:translateY(-24px);animation-timing-function:ease-in}65%{transform:translateY(-12px);animation-timing-function:ease-in}82%{transform:translateY(-6px);animation-timing-function:ease-in}93%{transform:translateY(-4px);animation-timing-function:ease-in}25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}}.blurOut{animation:text-blur-out 1.2s cubic-bezier(.55,.085,.68,.53) both}@keyframes text-blur-out{0%{filter:blur(.01)}100%{filter:blur(12px) opacity(0)}}@keyframes rotate-scale-up{0%{transform:scale(1) rotateZ(0)}50%{transform:scale(2) rotateZ(180deg)}100%{transform:scale(1) rotateZ(360deg)}}.rotateScaleOut{animation:rotate-scale-up .65s linear both}.flipScaleIn{animation:flip-scale-down-hor .5s linear both}@keyframes flip-scale-down-hor{0%{transform:scale(1) rotateX(0)}50%{transform:scale(.4) rotateX(90deg)}100%{transform:scale(1) rotateX(180deg)}}.flipScaleOut{animation:flip-scale-up-hor .5s linear both}@keyframes flip-scale-up-hor{0%{transform:scale(1) rotateX(0)}50%{transform:scale(2.5) rotateX(-90deg)}100%{transform:scale(1) rotateX(-180deg)}}.rotateScaleIn{animation:rotate-scale-down .65s linear both}@keyframes flip-scale-up-hor{0%{transform:scale(1) rotateX(0)}50%{transform:scale(2.5) rotateX(-90deg)}100%{transform:scale(1) rotateX(-180deg)}}.shadowIn{animation:shadow-drop-2-center .4s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-fwd-center{0%{transform:translateZ(0)}100%{transform:translateZ(160px)}}.popIn{animation:shadow-pop-tr .3s cubic-bezier(.47,0,.745,.715) both}.expandIn{animation:tracking-in-expand .7s cubic-bezier(.215,.61,.355,1) both}@keyframes tracking-in-expand{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}100%{opacity:1}}.popZ{animation:text-pop-up-top .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes text-pop-up-top{0%{transform:translateY(0);transform-origin:50% 50%;text-shadow:none}100%{transform:translateY(-50px);transform-origin:50% 50%;text-shadow:0 1px 0 #ccc,0 2px 0 #ccc,0 3px 0 #ccc,0 4px 0 #ccc,0 5px 0 #ccc,0 6px 0 #ccc,0 7px 0 #ccc,0 8px 0 #ccc,0 9px 0 #ccc,0 50px 30px rgba(0,0,0,.3)}}.blurOut{animation:text-blur-out 1.2s cubic-bezier(.55,.085,.68,.53) both}@keyframes text-blur-out{0%{filter:blur(.01)}100%{filter:blur(12px) opacity(0)}}.focusInExpand{animation:focus-in-expand .8s cubic-bezier(.25,.46,.45,.94) both}@keyframes focus-in-expand{0%{letter-spacing:-.5em;filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}.focusIn{animation:text-focus-in 1s cubic-bezier(.55,.085,.68,.53) both}@keyframes text-focus-in{0%{filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}.doorLeft{animation:slide-rotate-ver-left .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-rotate-ver-left{0%{transform:translateX(0) rotateY(0)}100%{transform:translateX(-150px) rotateY(90deg)}}.doorRight{animation:slide-rotate-ver-right .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-rotate-ver-right{0%{transform:translateX(0) rotateY(0)}100%{transform:translateX(150px) rotateY(-90deg)}}.doorDown{animation:slide-rotate-hor-bottom .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-rotate-hor-bottom{0%{transform:translateY(0) rotateX(0)}100%{transform:translateY(150px) rotateX(90deg)}}.doorUp{animation:slide-rotate-hor-top .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-rotate-hor-top{0%{transform:translateY(0) rotateX(0)}100%{transform:translateY(-150px) rotateX(-90deg)}}.swingRight{animation:swing-right-fwd .4s cubic-bezier(.25,.46,.45,.94) both}@keyframes swing-right-fwd{0%{transform:rotateY(0);transform-origin:right}100%{transform:rotateY(180deg);transform-origin:right}}.swingLeft{animation:swing-left-fwd .4s cubic-bezier(.25,.46,.45,.94) both}@keyframes swing-left-fwd{0%{transform:rotateY(0);transform-origin:left bottom}100%{transform:rotateY(-180deg);transform-origin:left bottom}}.swingDown{animation:swing-bottom-fwd .4s cubic-bezier(.25,.46,.45,.94) both}@keyframes swing-bottom-fwd{0%{transform:rotateX(0);transform-origin:bottom}100%{transform:rotateX(-180deg);transform-origin:bottom}}.bgDown{animation:bg-pan-bottom 8s both}@keyframes bg-pan-bottom{0%{background-position:50% 0}100%{background-position:50% 100%}}.bgUp{animation:bg-pan-top 8s both}@keyframes bg-pan-top{0%{background-position:50% 100%}100%{background-position:50% 0}}.bgRight{animation:bg-pan-right 8s both}@keyframes bg-pan-right{0%{background-position:0 50%}100%{background-position:100% 50%}}.bgLeft{animation:bg-pan-left 8s both}@keyframes bg-pan-left{0%{background-position:100% 50%}100%{background-position:0 50%}}
     `;document.head.append(z);
     
      })();

function motionia(e,a,n,r,s){var t;switch(e.slice(0,1)){case"#":var b=$("#"+e.substr(1));break;case".":b=$("."+e.substr(1));break;default:b=$(e)}switch(n||(n="100px"),s||(s="transparent"),a){case"fadeIn":t="fadeIn";break;case"rollIn":t="rollIn";break;case"scaleIn":t="scaleIn";break;case"slideIn":t="slideIn";break;case"slitIn":t="slitIn";break;case"swirlIn":t="swirlIn";break;case"flipIn":t="flipIn";break;case"bounceIn":t="bounceIn";break;case"presIn":t="presIn";break;case"presentIn":t="presentIn";break;case"parosIn":t="parosIn";break;case"flickerIn":t="flickerIn";break;case"slideOut":t="slideOut";break;case"fadeOut":t="fadeOut";break;case"slitOut":t="slitOut";break;case"rollOut":t="rollOut";break;case"bounceOut":t="bounceOut";break;case"flickerOut":t="flickerOut";break;case"rotateIn":t="rotateIn";break;case"swirlOut":t="swirlOut";break;case"rotateOut":t="rotateOut";break;case"flipOut":t="flipOut";break;case"swingIn":t="swingIn";break;case"swingOut":t="swingOut";break;case"tiltIn":t="tiltIn";break;case"tiltOut":t="tiltOut";break;case"presIn":t="presIn";break;case"scaleOut":t="scaleOut";break;case"slideInZ":t="slideInZ";break;case"puffIn":t="puffIn";break;case"puffOut":t="puffOut";break;case"slideOutZ":t="slideOutZ";break;case"slideInBlur":t="slideInBlur";break;case"rollInBlur":t="rollInBlur";break;case"swirlOutZ":t="swirlOutZ";break;case"slideOutBlur":t="slideOutBlur";break;case"rollOutBlur":t="rollOutBlur";break;case"flickerOut":t="flickerOut";break;case"presOut":t="presOut";break;case"presentOut":t="presentOut";break;case"rippleIn":t="rippleIn";break;case"explodeOut":t="explodeOut";break;case"blinkMin":t="blinkMin";break;case"blinkMax":t="blinkMax";break;case"jellyMin":t="jellyMin";break;case"jellyMax":t="jellyMax";break;case"shakeMin":t="shakeMin";break;case"shakeMax":t="shakeMax";break;case"wobbleMin":t="wobbleMin";break;case"wobbleMax":t="wobbleMax";break;case"vibrateMin":t="vibrateMin";break;case"vibrateMax":t="vibrateMax";break;case"bounceMin":t="bounceMin";break;case"bounceMax":t="bounceMax";break;case"blurIn":t="blurIn";break;case"blurOut":t="blurOut";break;case"flipScaleOut":t="flipScaleOut";break;case"flipScaleIn":t="flipScaleIn";break;case"rotateScaleIn":t="rotateScaleIn";break;case"rotateScaleOut":t="rotateScaleOut";break;case"popIn":t="popIn";break;case"shadowIn":t="shadowIn";break;case"expandIn":t="expandIn";break;case"popZ":t="popZ";break;case"focusIn":t="focusIn";break;case"focusInExpand":t="focusInExpand";break;case"focusOut":t="blurOut";break;case"doorUp":t="doorUp";break;case"doorDown":t="doorDown";break;case"doorLeft":t="doorLeft";break;case"doorRight":t="doorRight";break;case"swingUp":t="swingUp";break;case"swingDown":t="swingDown";break;case"swingLeft":t="swingLeft";break;case"swingRight":t="swingRight";break;case"bgUp":t="bgUp";break;case"bgDown":t="bgDown";break;case"bgLeft":t="bgLeft";break;case"bgRight":t="bgRight";break;case"slideX":$(b).html("<style> ."+e.substr(1)+"{\n    -webkit-animation: slideX 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n        \n}\n\n\n@-webkit-keyframes slideX {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  100% {\n            transform: translateX("+n+");\n  }\n}     \n                    </style>"),t=e.substr(1);break;case"slideY":$(b).html("<style> ."+e.substr(1)+"{\n    -webkit-animation: slideY 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n        \n}\n\n\n@-webkit-keyframes slideY {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n            transform: translateY("+n+");\n  }\n}     \n                    </style>"),t=e.substr(1);break;case"rotate":$(b).html("<style> ."+e.substr(1)+"{\n      \n    -webkit-animation: rotate  0.6s ease-in-out both;\n            animation: rotate  0.6s ease-in-out both;\n}\n\n\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate("+n+");\n            transform: rotate("+n+");\n  }\n}\n\n                    </style>"),t=e.substr(1);break;case"flip":$(b).html("<style> ."+e.substr(1)+"{\n                  \n    -webkit-animation: flip 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\n            animation: flip 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\n}\n\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n  100% {\n    -webkit-transform: rotateX("+n+");\n            transform: rotateX("+n+");\n  }\n}\n\n </style>"),t=e.substr(1);break;case"swing":$(b).html("<style> ."+e.substr(1)+"{\n                   \n                   \n    -webkit-animation: swing 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n            animation: swing 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\n@-webkit-keyframes swing {\n  0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n  }\n  100% {\n    -webkit-transform: rotateX("+n+");\n            transform: rotateX("+n+");\n    -webkit-transform-origin: top;\n            transform-origin: top;\n  }\n}\n </style>"),t=e.substr(1);break;case"scale":$(b).html("<style> ."+e.substr(1)+"{animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1.000) both}\n                    \n                    \n\n@keyframes scale-up-center{0%{transform:scale(.5)}100%{transform:scale("+n+")}}\n</style>"),t=e.substr(1);break;case"swap":$(b).html("<style> ."+e.substr(1)+"{animation:flip-2-hor-top-1 .5s cubic-bezier(.455,.03,.515,.955) both}\n                    \n@keyframes flip-2-hor-top-1{0%{transform:translateY(0) rotateX(0);transform-origin:50% 0}100%{transform:translateY("+n+") rotateX(-180deg);transform-origin:50% 100%}}\n                    </style>"),t=e.substr(1);break;case"slideZ":$(b).html("<style> ."+e.substr(1)+"\n                    {animation:slide-fwd-center .45s cubic-bezier(.25,.46,.45,.94) both}\n                    \n\n@keyframes slide-fwd-center{0%{transform:translateZ(0)}100%{transform:translateZ(160px)}}\n                    \n                    </style>"),t=e.substr(1);break;case"color":$(b).html("<style> ."+e.substr(1)+" {animation:color 4s linear infinite alternate both}\n                    \n          \n@keyframes color{0%{background:"+n+"}50%{background:"+r+"}100%{background:"+s+"}}\n                    \n                    </style>"),t=e.substr(1);break;default:t="slideIn"}$(b).addClass(t).delay(1e3).queue(function(e){"Out"===t.substr(-3)||$(this).removeClass(t),e()}),b.hasClass(t)&&b.addClass(t)}

