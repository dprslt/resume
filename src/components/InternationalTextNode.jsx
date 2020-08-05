import {useContext} from "react";
import {IntContext} from "../App";


/**
 * This component will have the same role as a Text node in React Native, wrap text.
 * It will be used for Internationalization and text formating (markdonw, ...)
 * @param text
 * @return {*}
 * @constructor
 */
const IntTextNode = ({text}) => {
    const context = useContext(IntContext)
    const lang = context.lang
    if(typeof text === 'string') {
        return text;
    }
    return text[lang] || text['fr'];
}

export default IntTextNode
