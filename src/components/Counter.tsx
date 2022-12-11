import React from 'react';
import { useState } from 'react'
import styles from './Counter.module.css';

export function Counter({}) {
    const [number, setNum] = useState(0);
    const [summ, setSumm] = useState(1);


    return <div className={styles.counter}>
        <p>Текущее значение: {number} <button className={styles.button} onClick={() => setNum(number+summ)}>+</button></p>
        <div>
            <p>Увеличивать каждый раз на {summ} </p>
            <input
                className={styles.input}
                type={"range"}
                onChange={e =>setSumm(Number(e.target.value))}
                min={1} max={10}
                value={summ}
                step={1}
            />
        </div>  
    </div>;
}
