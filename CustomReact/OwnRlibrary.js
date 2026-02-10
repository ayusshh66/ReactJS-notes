// poor approach 
// function customRendor(reactElement,mainContainer){
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.Children;
//     domElement.setAttribute("href", reactElement.props.href);
//     domElement.setAttribute("target", reactElement.props.target);
//     mainContainer.appendChild(domElement)
// }

// better approach 

function customRendor(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for (const key in reactElement.props) {
        if( key === "children") continue;
        domElement.setAttribute(key, reactElement.props[key]);

        
        
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    Children : "yes its google"
}


const mainContainer = document.querySelector("#root")

customRendor(reactElement,mainContainer)