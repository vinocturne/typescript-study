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
    //interface 내부에 설정한 속성들은 필수(required)로써, 선언해주지 않으면 오류가 생긴다.
    bgColor: string;
    //?: 를 통해 선택적으로 사용할 수 있도록 넣어줄 수 있다.
    //borderColor: string | undefined 도 가능하지만 ?를 사용하는 것이 더 편하고 명확하다.
    borderColor?: string;
    text?: string;
}

function Circle({ bgColor, borderColor, text="default text" }: CircleProps) {
    //CircleProps에서 borderColor를 선택적으로 받지만 Container에서는 필수적으로 해당 값을 받는다고 설정했기 때문에
    //기본값을 정해주어야 한다. 기본값은 (?? 해당 값)의 형태로 집어넣을 수 있다. undefined의 경우 기본값이 들어간다.
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}
const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name: "nico", age:12});