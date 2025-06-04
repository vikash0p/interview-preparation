import {JavaScriptLogicalInterface} from '../../types/types'
import { JavaScriptLogicalThird } from "./JavaScriptLogical/JavascriptLogicalThird"
import { JavaScriptLogicalSecond } from "./JavaScriptLogical/JavaScriptLogicalSecond"
import { JavaScriptLogicalFirst } from "./JavaScriptLogical/JavaScriptLogicalFirst"
export const JavaScriptLogicalData : JavaScriptLogicalInterface[] =[
    {
        id: "1",
        title: "Logical operators  Beginner",
        content: JavaScriptLogicalFirst,
        link: "logical-operators-Beginner"
    },
    {
        id: "2",
        title: "Logical operation advanced",
        content: JavaScriptLogicalSecond,
        link: "logical-operators-advanced",
    },
    {
        id: "3",
        title: "Logical function Operators ",
        content: JavaScriptLogicalThird,
        link: "logical-function-Operators"
    }
]