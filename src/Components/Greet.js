import React from "react";

/* function Greet() {
  return <h1>Hello Ashwin</h1>;
}

export default Greet;
*/

/* export const MyComponent1 = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  ); //Arrow function instead of normal function
  //{} wraps the content in React and makes it a React component, React can contaion only one wrapper at a time, This is resolved using a div tag
};
 */

/* const Greet = ({ name, heroName }) => {
  //1.Destructuring in the Parameter
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet; */

const Greet = (props) => {
  const { name, heroName } = props;
  //2.Destructuring inside an arrow function
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
