import { useEffect, useState } from "react";

// Props drilling
const Dashboard = ({name}) => {
    const [num, setNum] = useState(0);
    const [square, setSquare] = useState(0);
    const [apiData, setApiData] = useState({});
    const [count, setCount] = useState(0);

    // API calling
    async function getApiResponse(){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        return data;
    }

    // UseEffect hook with no dependency
    useEffect(() => {
        getApiResponse().then(data => setApiData(data));
        const counter = setInterval(() => {
            setCount(prev => prev === 10? 0: prev+1);
        }, 1000);

        return () => clearInterval(counter);
    }, [])

    // UseEffect hook with depenedency
    useEffect(() => {
        console.log(typeof name);
    }, [name]);

    // Change handler for Text
    const handleNumChange = (event) => {
        setNum(event.target.value);
    }

    // Click handler for button
    const handleSquare = (event) => {
        setSquare(num * num);
    }

    return(<div>
        {/* JS - String formatting */}
        <p>{`Welcome ${name}`}</p>
        <p>{apiData.title}</p>
        <span>Input Details:</span>
        <input type="text" onChange={handleNumChange} value={num}/>
        <p>----------</p>
        <button onClick={handleSquare}>Get Square</button>
        <p>Result: {square}</p>

        <p>Counter application</p>
        <p>{count}</p>
    </div>);
}

export default Dashboard;