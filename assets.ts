import React from 'react';

// Mallet Cursor as a data URI for CSS
export const malletCursor = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'><path d='M88.9,29.4c-4.9-4.9-12.8-4.9-17.7,0L35.5,65.1l-8.8-8.8c-4.9-4.9-12.8-4.9-17.7,0s-4.9,12.8,0,17.7l8.8,8.8L1.1,99.5l16.6-16.6l8.8,8.8c4.9,4.9,12.8,4.9,17.7,0L80,56.4c0,0,0,0,0,0l26.6-26.6c0,0,0,0,0,0C111.4,25,93.8,24.5,88.9,29.4z' fill='%236D4C41'/><rect x='67.5' y='-8.3' transform='matrix(-0.7071 0.7071 -0.7071 -0.7071 123.166 50.9858)' fill='%238D6E63' width='20' height='75'/></svg>`;

export const BackgroundImage: React.FC = () => (
    React.createElement('svg', { viewBox: "0 0 800 450", className: "absolute inset-0 w-full h-full object-cover -z-10", preserveAspectRatio: "xMidYMid slice" },
        React.createElement('defs', null,
            React.createElement('linearGradient', { id: "skyGradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                React.createElement('stop', { offset: "0%", style: { stopColor: '#a0e9ff', stopOpacity: 1 } }),
                React.createElement('stop', { offset: "100%", style: { stopColor: '#e0f7fa', stopOpacity: 1 } })
            ),
            React.createElement('radialGradient', { id: "treeGradient", cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%" },
                React.createElement('stop', { offset: "0%", style: { stopColor: '#4CAF50' } }),
                React.createElement('stop', { offset: "100%", style: { stopColor: '#388E3C' } })
            )
        ),
        React.createElement('rect', { width: "800", height: "450", fill: "url(#skyGradient)" }),
        React.createElement('path', { d: "M-5 350 Q 200 280, 400 360 T 805 350 L 805 455 L -5 455 Z", fill: "#66BB6A" }),
        React.createElement('path', { d: "M-5 380 Q 150 320, 350 390 T 750 380 L 805 455 L -5 455 Z", fill: "#4CAF50" }),
        React.createElement('circle', { cx: "100", cy: "100", r: "30", fill: "white", opacity: "0.9" }),
        React.createElement('circle', { cx: "130", cy: "100", r: "35", fill: "white", opacity: "0.9" }),
        React.createElement('circle', { cx: "160", cy: "100", r: "30", fill: "white", opacity: "0.9" }),
        React.createElement('circle', { cx: "650", cy: "120", r: "40", fill: "white", opacity: "0.9" }),
        React.createElement('circle', { cx: "690", cy: "120", r: "45", fill: "white", opacity: "0.9" }),
        React.createElement('circle', { cx: "730", cy: "120", r: "40", fill: "white", opacity: "0.9" }),
        React.createElement('rect', { x: "50", y: "250", width: "30", height: "150", fill: "#795548" }),
        React.createElement('circle', { cx: "65", cy: "200", r: "60", fill: "url(#treeGradient)" }),
        React.createElement('circle', { cx: "115", cy: "250", r: "60", fill: "url(#treeGradient)" }),
        React.createElement('circle', { cx: "65", cy: "300", r: "60", fill: "url(#treeGradient)" }),
        React.createElement('rect', { x: "720", y: "240", width: "30", height: "160", fill: "#795548" }),
        React.createElement('circle', { cx: "735", cy: "190", r: "55", fill: "url(#treeGradient)" }),
        React.createElement('circle', { cx: "685", cy: "240", r: "55", fill: "url(#treeGradient)" }),
        React.createElement('circle', { cx: "735", cy: "290", r: "55", fill: "url(#treeGradient)" }),
        React.createElement('path', { d: "M 200 0 C 210 50, 190 100, 200 150", stroke: "#8BC34A", strokeWidth: "4", fill: "none", strokeLinecap: "round" }),
        React.createElement('path', { d: "M 550 0 C 540 60, 560 120, 550 180", stroke: "#8BC34A", strokeWidth: "4", fill: "none", strokeLinecap: "round" }),
        React.createElement('path', { d: "M 580 0 C 590 40, 570 80, 580 120", stroke: "#8BC34A", strokeWidth: "3", fill: "none", strokeLinecap: "round" }),
        React.createElement('path', { d: "M120 405 C 140 380, 180 380, 200 405 Z", fill: "#8D6E63" }),
        React.createElement('path', { d: "M290 395 C 310 370, 350 370, 370 395 Z", fill: "#8D6E63" }),
        React.createElement('path', { d: "M510 405 C 530 380, 570 380, 590 405 Z", fill: "#8D6E63" }),
        React.createElement('path', { d: "M200 350 C 220 325, 260 325, 280 350 Z", fill: "#A1887F" }),
        React.createElement('path', { d: "M430 345 C 450 320, 490 320, 510 345 Z", fill: "#A1887F" })
    )
);

export const TitleImage: React.FC = () => (
    React.createElement('svg', { viewBox: "0 0 400 200" },
        React.createElement('style', null, `.title-text { font-family: 'Fredoka One', cursive; fill: url(#titleGradient); stroke: #5d4037; stroke-width: 2px; }`),
        React.createElement('defs', null,
            React.createElement('linearGradient', { id: "titleGradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                React.createElement('stop', { offset: "0%", style: { stopColor: '#FFC107' } }),
                React.createElement('stop', { offset: "100%", style: { stopColor: '#FF8F00' } })
            )
        ),
        React.createElement('text', { x: "200", y: "70", fontSize: "40", className: "title-text", textAnchor: "middle" }, "Whack-a-Math"),
        React.createElement('text', { x: "200", y: "160", fontSize: "50", className: "title-text", textAnchor: "middle" }, "Mole!")
    )
);

// Animal SVGs
export const RedPanda: React.FC = () => (
    React.createElement('svg', { viewBox: "0 0 100 100" },
        React.createElement('g', { transform: "translate(0, 10)" },
            React.createElement('path', { d: "M 20,80 C 20,40 80,40 80,80 Z", fill: "#D84315" }),
            React.createElement('path', { d: "M 30,70 C 25,50 40,45 50,50 C 60,45 75,50 70,70 Z", fill: "#FFF3E0" }),
            React.createElement('circle', { cx: "35", cy: "55", r: "5", fill: "black" }),
            React.createElement('circle', { cx: "65", cy: "55", r: "5", fill: "black" }),
            React.createElement('path', { d: "M 45,65 Q 50,70 55,65", stroke: "black", fill: "none", strokeWidth: "2", strokeLinecap: "round" }),
            React.createElement('path', { d: "M 15,40 A 15 15 0 0 1 30 25 L 35 45 Z", fill: "#D84315" }),
            React.createElement('path', { d: "M 85,40 A 15 15 0 0 0 70 25 L 65 45 Z", fill: "#D84315" }),
            React.createElement('path', { d: "M 20,35 A 10 10 0 0 1 30 25", fill: "#FFF3E0" }),
            React.createElement('path', { d: "M 80,35 A 10 10 0 0 0 70 25", fill: "#FFF3E0" })
        )
    )
);

export const Rabbit: React.FC = () => (
    React.createElement('svg', { viewBox: "0 0 100 100" },
        React.createElement('g', { transform: "translate(0, 10)" },
            React.createElement('path', { d: "M 30,10 C 20,40 25,80 50,80 C 75,80 80,40 70,10", fill: "#E0E0E0" }),
            React.createElement('path', { d: "M 20,80 C 20,40 80,40 80,80 Z", fill: "#EEEEEE" }),
            React.createElement('path', { d: "M 35,60 C 30,50 45,48 50,55 C 55,48 70,50 65,60 Z", fill: "white" }),
            React.createElement('circle', { cx: "40", cy: "55", r: "4", fill: "black" }),
            React.createElement('circle', { cx: "60", cy: "55", r: "4", fill: "black" }),
            React.createElement('path', { d: "M 48,62 Q 50,65 52,62", stroke: "#F48FB1", fill: "none", strokeWidth: "2", strokeLinecap: "round" }),
            React.createElement('path', { d: "M 35,20 C 35,5 45,5 45,20 V 40 C 45,45 35,45 35,40 Z", fill: "#EEEEEE" }),
            React.createElement('path', { d: "M 65,20 C 65,5 55,5 55,20 V 40 C 55,45 65,45 65,40 Z", fill: "#EEEEEE" })
        )
    )
);

export const Koala: React.FC = () => (
    React.createElement('svg', { viewBox: "0 0 100 100" },
        React.createElement('g', { transform: "translate(0, 10)" },
            React.createElement('circle', { cx: "20", cy: "50", r: "20", fill: "#BDBDBD" }),
            React.createElement('circle', { cx: "80", cy: "50", r: "20", fill: "#BDBDBD" }),
            React.createElement('path', { d: "M 20,80 C 20,40 80,40 80,80 Z", fill: "#CFD8DC" }),
            React.createElement('ellipse', { cx: "50", cy: "65", rx: "15", ry: "10", fill: "#37474F" }),
            React.createElement('circle', { cx: "38", cy: "55", r: "5", fill: "black" }),
            React.createElement('circle', { cx: "62", cy: "55", r: "5", fill: "black" }),
            React.createElement('path', { d: "M 48,70 L 52,70", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })
        )
    )
);

export const Hamster: React.FC = () => (
    React.createElement('svg', { viewBox: "0 0 100 100" },
        React.createElement('g', { transform: "translate(0, 10)" },
            React.createElement('path', { d: "M 20,80 C 10,40 90,40 80,80 Z", fill: "#A1887F" }),
            React.createElement('path', { d: "M 25,75 C 20,50 80,50 75,75 Z", fill: "#D7CCC8" }),
            React.createElement('circle', { cx: "30", cy: "50", r: "15", fill: "#D7CCC8" }),
            React.createElement('circle', { cx: "70", cy: "50", r: "15", fill: "#D7CCC8" }),
            React.createElement('circle', { cx: "40", cy: "60", r: "4", fill: "black" }),
            React.createElement('circle', { cx: "60", cy: "60", r: "4", fill: "black" }),
            React.createElement('path', { d: "M 48,68 Q 50,70 52,68", stroke: "#3E2723", fill: "none", strokeWidth: "2", strokeLinecap: "round" }),
            React.createElement('path', { d: "M 25,40 A 10 10 0 0 1 35 30", fill: "#A1887F" }),
            React.createElement('path', { d: "M 75,40 A 10 10 0 0 0 65 30", fill: "#A1887F" })
        )
    )
);