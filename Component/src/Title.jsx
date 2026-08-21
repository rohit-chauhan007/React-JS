// function Title() {
//     return <h1>Learning export or import</h1>//single value h to use default export
// }

// // export default Title; for single value

//The rule of markup in jsx
/*
(1) return a single root element
for return a multiple component,wrap them in a single parent eg - <div>/<></?
(2)close all the tag <img></img> ya <img />
(3)camelCase most of things

*/
//for multiple value 
function Title() {
    return (
        <>
        <h1>multiple vlaue</h1>
        <h1>multiple value</h1>
          <h1>multiple vlaue</h1>
        <h1>multiple value</h1>
        </>
    )
}

//for multiple value use /name export
export {Title};