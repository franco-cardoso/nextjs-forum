const Spinner = ({width, height}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={width} height={height}>
        <radialGradient id="a" cx={0.66} cy={0.313} fx={0.66} fy={0.313} gradientTransform="scale(1.5)">
            <stop offset={0} stopColor="#A4A4A4" />
            <stop offset={0.3} stopColor="#A4A4A4" stopOpacity={0.9} />
            <stop offset={0.6} stopColor="#A4A4A4" stopOpacity={0.6} />
            <stop offset={0.8} stopColor="#A4A4A4" stopOpacity={0.3} />
            <stop offset={1} stopColor="#A4A4A4" stopOpacity={0} />
        </radialGradient>
        <circle
            cx={100}
            cy={100}
            r={70}
            fill="none"
            stroke="url(#a)"
            strokeDasharray="200 1000"
            strokeLinecap="round"
            strokeWidth={14}
            transform-origin="center"
        >
            <animateTransform
                attributeName="transform"
                calcMode="spline"
                dur={2}
                keySplines="0 0 1 1"
                keyTimes="0;1"
                repeatCount="indefinite"
                type="rotate"
                values="360;0"
            />
        </circle>
        <circle
            cx={100}
            cy={100}
            r={70}
            fill="none"
            stroke="#A4A4A4"
            strokeLinecap="round"
            strokeWidth={14}
            opacity={0.2}
            transform-origin="center"
        />
    </svg>
);
export default Spinner;
