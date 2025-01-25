export const JavaScriptLogicalSecond = `

const obj={
    1:"a",
    2:"b",
    "2":"b",
    [1]:"b"
}
console.log(obj) //{ '1': 'b', '2': 'b' }

`;