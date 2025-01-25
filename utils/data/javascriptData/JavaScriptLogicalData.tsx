import { JavaScriptLogicalFirst } from "./JavaScriptLogical/JavaScriptLogicalFirst"
import { JavaScriptLogicalSecond } from "./JavaScriptLogical/JavaScriptLogicalSecond"
import { JavaScriptLogicalThird } from "./JavaScriptLogical/JavascriptLogicalThird"
import {JavaScriptLogicalInterface} from '../../types/types'


export const JavaScriptLogicalData : JavaScriptLogicalInterface[] =[
    {
        id: "1",
        title: "Logical operators  first",
        content: JavaScriptLogicalFirst,
        link: "logical-operators-first"
    },
    {
        id: "2",
        title: "Logical operation second",
        content: JavaScriptLogicalSecond,
        link: "logical-operators-second"
    },
    {
        id: "3",
        title: "Logical function Operators ",
        content: JavaScriptLogicalThird,
        link: "logical-function-Operators"
    }
]