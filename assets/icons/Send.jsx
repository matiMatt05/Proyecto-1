import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const Send = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
        <Path d="M11.0257 2.99985C6.5113 3.49881 3 7.32556 3 11.9723C3 16.9581 7.04239 20.9998 12.0289 20.9998C16.668 20.9998 20.4898 17.5018 21 12.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <Path d="M20.9995 6.02514L20 6.02261C16.2634 6.01316 14.3951 6.00843 13.0817 6.95251C12.6452 7.26623 12.2622 7.64829 11.9474 8.08397C11 9.395 11 11.2633 11 14.9998M20.9995 6.02514C21.0062 5.86251 20.9481 5.6989 20.8251 5.55318C20.0599 4.64671 18.0711 2.99985 18.0711 2.99985M20.9995 6.02514C20.9934 6.17097 20.9352 6.31601 20.8249 6.44666C20.0596 7.35295 18.0711 8.99985 18.0711 8.99985" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default Send;
