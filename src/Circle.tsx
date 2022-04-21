import styled from "styled-components";

//interface는 object를 설명하는 역할을 한다.
//object가 어떤 식으로 보일지 설정.
interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 20px;
`

interface CircleProps {
    bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}
const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name: "nico", age:12});