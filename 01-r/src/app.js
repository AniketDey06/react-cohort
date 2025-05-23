import React from "https://esm.sh/react@19.1.0/"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const LaptopCom = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h3",{}, props.name),
            React.createElement("p",{}, props.price),
        ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement(
                "h1",
                {},
                "laptop components"
            ),
            React.createElement(LaptopCom, {
                name: "SSD",
                price: 5000
            }),
            React.createElement(LaptopCom, {
                name: "RAM",
                price: 5000
            }),
            React.createElement(LaptopCom, {
                name: "HDD",
                price: 5000
            }),
        ]
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App))