import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";


//noch nicht fertig....
export default function App(children, func) {
    const [todo, setTodo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                    console.log(data)
                    setIsLoaded(true);
                    setTodo(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);

                });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {todo.map(item => (
                    <li key={item.id}>
                       title: {item.title}
                       <br/>completed: {item.complete}
                        <br/>
                        <br/>
                    </li>
                ))}
            </ul>
        );

    }
}



