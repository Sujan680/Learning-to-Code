import { useEffect, useState } from 'react';
import './style.css';

function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(false);
    const [toggle, setToggle] = useState(false)

    const handleCountIncrease = () => {
        setCount(count + 1)
    }

    const handleCountDecrease = () => {
        setCount(count - 1);
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        setTimeout(() => {
            if (count === 10) {
                setText(true);
            }
        }, 1000)
    }, [count])
    return (
        <>
            <h2>This is a counter</h2>
            <div className="counter">
                <button onClick={handleCountIncrease}>Count</button>
                <h3>{count}</h3>
                <button onClick={handleCountDecrease}>Decrease</button>
            </div>

            {text ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae tempora voluptatem obcaecati impedit illum placeat, voluptatum et voluptates nesciunt dolor tempore porro aut, totam repudiandae maxime blanditiis dolorem debitis ad? Cumque beatae est minus quis reprehenderit exercitationem perferendis, excepturi voluptas labore quaerat enim ad quo a quas esse optio fugit ab accusamus neque. Praesentium earum beatae, adipisci accusantium mollitia iure sapiente repellat iusto deserunt, ab tempore unde. Labore maiores atque consequatur, cupiditate unde est aperiam! Velit, hic vel porro provident voluptatum fuga sapiente soluta. Natus odio consequuntur ab quidem. Dolor adipisci qui exercitationem eos nisi quidem dolorem consequuntur consequatur.</p> : null}

            <div className="content">

               <div className="about">
                <h3>About me</h3>
                <button onClick={handleToggle}>
                    Show/Hide
                </button>
               </div>

                {toggle ? <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolorem odit ut nisi ducimus porro debitis cum perferendis, provident ad tenetur sit sequi amet, ipsam iste cupiditate reprehenderit. Ea, voluptatem.</p> : null}
            </div>


        </>
    )
}

export default Counter