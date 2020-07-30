import React, { Component, useReducer } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { MyComponent1 } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import StyleSheet from "./Components/StyleSheet";
import InLine from "./Components/InLine";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";
import FragmentDemo from "./Components/FragmentDemo";
import Table from "./Components/Table";
import PureComp from "./Components/PureComp";
import ParentComp from "./Components/ParentComp";
import RefsDemo from "./Components/RefsDemo";
import FocusInput from "./Components/FocusInput";
import FRParentInput from "./Components/FRParentInput";
import PortalDemo from "./Components/PortalDemo";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import ClickCounter2 from "./Components/ClickCounter2";
import HoverCounter2 from "./Components/HoverCounter2";
import User from "./Components/User";
import Counter2 from "./Components/Counter2";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/userContext";
import PostList from "./react-http-components/PostList";
import PostForm from "./react-http-components/PostForm";

/* React Hooks */
import ClassCounter from "./Hook-components/ClassCounter";
import HookCounter from "./Hook-components/HookCounter";
import HookCounter2 from "./Hook-components/HookCounter2";
import HookCounter3 from "./Hook-components/HookCounter3";
import HookCounter4 from "./Hook-components/HookCounter4";
import ClassCounter1 from "./Hook-components/ClassCounter1";
import HookCounter5 from "./Hook-components/HookCounter5";
import ClassMouse from "./Hook-components/ClassMouse";
import HookMouse from "./Hook-components/HookMouse";
import MouseContainer from "./Hook-components/MouseContainer";
import IntervalClassCounter from "./Hook-components/IntervalClassCounter";
import IntervalHookCounter from "./Hook-components/IntervalHookCounter";
import DataFetching from "./Hook-components/DataFetching";
import ComponentC1 from "./Hook-components/ComponentC1";
import Counter1 from "./Hook-components/Counter1";
import Counter3 from "./Hook-components/Counter3";
import Counter4 from "./Hook-components/Counter4";
import Component1 from "./Hook-components/Component1";
import Component2 from "./Hook-components/Component2";
import Component3 from "./Hook-components/Component3";
import DataFetching1 from "./Hook-components/DataFetching1";
import DataFetchin2 from "./Hook-components/DataFetching2";
import ParentComponent1 from "./Hook-components/ParentComponent1";
import MemoCounter from "./Hook-components/MemoCounter";
import RefFocusInput from "./Hook-components/RefFocusInput";
import ClassTimer from "./Hook-components/ClassTimer";
import RefTimer from "./Hook-components/RefTimer";
import DocTitleOne from "./Hook-components/DocTitleOne";
import DocTitleTwo from "./Hook-components/DocTitleTwo";
import CounterA from "./Hook-components/CounterA";
import CounterB from "./Hook-components/CounterB";
import UserForm from "./Hook-components/UserForm";

/* React - Redux */
import CakeContainer from "./redux-components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./redux-components/HooksCakeContainer";
import IceCreamContainer from "./redux-components/IceCreamContainer";
import NewCakeContainer from "./redux-components/NewCakeContainer";
import ItemContainer from "./redux-components/ItemContainer";
import UserContainer from "./redux-components/UserContainer";

export const UserContext = React.createContext(); // used for useContext
export const LocationContext = React.createContext(); // used for useContext
export const CountContext = React.createContext();
/* // for useReducer with useContext example
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1; //newState
    case "decrement":
      return state - 1; //newState
    case "reset":
      return initialState; //newState
    default:
      return state; //newState
  }
}; */

class App extends Component {
  //function App() { // for useReducer with useContext example
  //Stateful Class Component
  //App / Root Component
  // reusing of component is seen in using welcome tag twice

  // const [count, dispatch] = useReducer(reducer, initialState); // for useReducer with useContext example
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <UserContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
/* All the below codes should be within the div tag inside App class's return statement */
/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
 */

/* <MyComponent1 name="Akshay" heroName="Superman">
          <p>This is children props</p>
        </MyComponent1>
        <MyComponent1 name="Disha" heroName="Wonder-Woman">
          <button>Action</button>
        </MyComponent1>
        <Welcome name="Akshay" heroName="Superman" />
        <Welcome name="Disha" heroName="Wonder-Woman" />
        <Hello />
 */
/* <Message /> 
   <Counter />
*/
/* <Greet name="Ashwin" heroName="Iron-Man" />
   <Welcome name="Akshay" heroName="Superman" /> */
/*  <FunctionClick />
    <ClassClick /> */
/* <EventBind /> */
/* <ParentComponent /> */
/* <UserGreeting /> */
/* <NameList /> */
/* <StyleSheet primary={true} />
        <InLine />
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */
/*  <Form /> */
/* <LifeCycleA /> */
/* <FragmentDemo />
        <Table /> */
/* <ParentComp /> */
/* <RefsDemo /> */
/* <FocusInput /> */
/* <FRParentInput /> */
/* <PortalDemo /> */
/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */
/* <ClickCounter name="Ashwin" />
        This won't display name in Webpage as it is passed to HOC and not to ClickCounter
        <ClickCounter /> 
        <HoverCounter /> */
/* <User render={(isLoggenIn) => (isLoggenIn ? "Ashwin" : "Guest")} />
        {// Using render as a prop is a convention, we can use some other name as well }
        <Counter2
          render={(count, incrementCount) => (
            <ClickCounter2
              count={count}
              incrementCount={incrementCount}
            ></ClickCounter2>
          )}
        />
        <Counter2
          render={(count, incrementCount) => (
            <HoverCounter2
              count={count}
              incrementCount={incrementCount}
            ></HoverCounter2>
          )}
        />
        <Counter2>
          {// Passing function instead of render prop }
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        </Counter2> */
/* // Step 2: Providing a context value to the root component, this value can be consumed in any Descendant components
        <UserProvider value="Ashwin">
        <ComponentC />
      </UserProvider> */

//HTTP REQUEST
/* <PostList />
   <PostForm /> */

//HOOKS
/* <ClassCounter />
        <HookCounter /> */
/* <HookCounter2 /> */
/* <HookCounter3 /> */
/*  <HookCounter4 /> */
/* <ClassCounter1 />
        <HookCounter5 /> */
/* <ClassMouse />
        <HookMouse /> */
/* <MouseContainer /> */
/* <IntervalClassCounter />
        <IntervalHookCounter /> */
/* <DataFetching /> */
/* <UserContext.Provider value={"Ashwin"}>
          <LocationContext.Provider value={"Magalu"}>
            <ComponentC1 />
          </LocationContext.Provider>
        </UserContext.Provider> */
/* <Counter1 /> */
/* <Counter3 /> */
/* <Counter4 /> */
/* <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    </CountContext.Provider>
  ); */
/* <DataFetching1 /> */
/* <DataFetchin2 /> */
/* <ParentComponent1 /> */
/* <MemoCounter /> */
/* <RefFocusInput />
        <ClassTimer />
        <RefTimer /> */
/* <DocTitleOne />
        <DocTitleTwo /> */
/* <CounterA />
        <CounterB /> */
/* <UserForm /> */
/* <Provider store={store}>
        <div className="App">
          <CakeContainer />
        </div>
      </Provider> */
/* <Provider store={store}>
        <div className="App">
          <HooksCakeContainer />
        </div>
      </Provider> */
/* <Provider store={store}>
        <div className="App">
          <CakeContainer />
          <IceCreamContainer />
        </div>
      </Provider> */
/* <NewCakeContainer /> */
/* <ItemContainer cake />
          <ItemContainer /> */
/* <UserContainer /> */
