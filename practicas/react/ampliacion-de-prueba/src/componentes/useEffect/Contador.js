import React, {useState, useEffect}from 'react'
import Image from './image';

function Contador() {
    const [count, setCount] = useState(0);
    let urlUsers = 'https://reqres.in/api/users?page=2'  

    const getUsers = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.data))
    }



useEffect(() => {
  getUsers(urlUsers);
}, [count]);

/*useEffect( ()=> {
    console.log("Este mensaje se va a ejecutar cuando se monte el primer componente")

    return (
      console.log("Este mensaje se va a ejecutar cuando se desmonte el componente")
    );
  } , [count]
)*/

return (
    <div>
      <h2>You clicked {count} times</h2>
    <button onClick={() => setCount(count +1)}>
        Click me
    </button>
    </div>
  );
}

export default Contador