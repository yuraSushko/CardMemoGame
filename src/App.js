import './App.css';
import Login from "./Login";
import Timer from "./Timer";
import { CardNumProvider } from "./CardNumContext";
import Cards from "./Cards";

function App() {
    return (

        <CardNumProvider>
            <div className="App">


                <Login/>
                <Cards/>
                { <Timer/>}

            </div>
        </CardNumProvider>
    );
}

export default App;
