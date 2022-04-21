import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({ bgColor, borderColor}: CircleProps) {
    //타입스크립트에서는 useState의 초기값을 가지고 타입을 추측하여 해당 타입으로만 받을 수 있도록 set을 조정.
    const [ counter, setCounter ] = useState(1)

    // state가 단일 타입이 아닌 다른 타입도 받을 수 있게 하려면 아래와 같이 대괄호 안에 타입들을 정리해주면 된다.
    // const [value, setValue] = useState<number|string>(0); // value에는 string과 number 모두 들어갈 수 있다.
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}
const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name: "nico", age:12});