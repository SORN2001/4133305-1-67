"use client";
import { setConfig } from "next/config";
import { init } from "next/dist/compiled/webpack/webpack";
import { FC, useEffect, useState } from "react";

interface Props {
    initHook: number;
}

const Hook:FC<Props> = ({ initHook }) => {
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState();

//     const url = "http://dataapi.moc.go.th/products?keyword=มะพร้าว";
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 setData(data);
//                 console.log(data);
//         });

    useEffect(()=>{
        setCount(initHook);

        const url = "http://dataapi.moc.go.th/products?keyword=มะพร้าว";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
        });
    }, [count]);

    const inc = (cnt: number) => {
        return cnt + 1;
    };

    const dnc = (cnt: number) => {
        return cnt - 1;
    };    

    return(
        <>
            <p>Hook</p>
            <div>{count}</div>
            <button onClick={() => setCount(inc(count))}>Increase</button>
            <button onClick={() => setCount(dnc(count))}>Decrease</button>
        </>
    );
};

Hook.defaultProps = {
    initHook: 0,
};

export default Hook;
