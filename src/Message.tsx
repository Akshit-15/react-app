//PascalCasing for functional component alwyas use capital letter start 
function Message() {
    //JSX - javaScript XML
    const getname = function () { return "Akshit" };
    return <h1>Hello {getname()}</h1>
}

export default Message;