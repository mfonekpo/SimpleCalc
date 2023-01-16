import React, {useEffect, useState} from "react";
// import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";

import {ethers} from "ethers";

const contractAddress = "0xD1a0344942F7c8A7f478b4E66aC479a3Fa0960cE";





const Counter =  () => {
    
    const {contract} = useContract(contractAddress);


    const {data: count} = useContractRead(contract, "counter");
    const {mutateAsync: inCount} = useContractWrite(contract, "increase");
    const {mutateAsync: decCount} = useContractWrite(contract, "decrease");
    const {mutateAsync: dereset} = useContractWrite(contract, "reset");

    const [value, setValue] = useState(0);


    useEffect(() => {
        if(count) setValue(parseInt(count._hex));
  }, [count]);




    const increase = () =>{

            inCount();
    }

    const decrease = () =>{

            decCount();
    }

    const reset = () =>{

        dereset();
    }


    return(
        <React.Fragment>
            <h1>
                {value}
            </h1>
            <button className="btn" onClick={increase}>
                increase
            </button>

            <button className="btn" onClick={reset}>
                reset
            </button>

            <button className="btn" onClick={decrease}>
                decrease
            </button>

            <button id="mybtn" className="connect">
                <ConnectWallet />
            </button>
        </React.Fragment>
    );



};

export default Counter