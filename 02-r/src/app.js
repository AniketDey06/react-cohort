
const LaptopCom = ({ name }) => (
    <div>
        <h3>{name}</h3>
    </div>
)

const App = () => (
    <div>
        <h1>Laptop Com</h1>
        <LaptopCom name="SSD"/>
        <LaptopCom name="HDD"/>
    </div>
)

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App/>)