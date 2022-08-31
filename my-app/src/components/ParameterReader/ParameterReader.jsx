import React from "react";
import { useParams } from "react-router-dom";

const ParameterReader = () => {
    const { myNumber, myOtherNumber } = useParams();
    const myNumArray=[]
    for(let i=0;i<Math.abs(myNumber - myOtherNumber); i++){
        myNumArray.push(i+parseInt(myNumber));
    }

    return <div>{myNumArray.map(n=>`${n} -`)}</div>;
};
export default ParameterReader;