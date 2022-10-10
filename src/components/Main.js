import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">
    
    <h1>React useContext Hook</h1>
  
    <p><h2>React Context</h2>
React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
</p>
<br></br>
   <h2>The Problem</h2>
   State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
<br></br>

<h3>EXAMPLE</h3>
<p><pre>{`import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{'Hello $ {user}!'}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{'Hello $ {user} again!'}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
`}</pre>
</p>

<h3>The Solution</h3>
The solution is to create context.

<h3>Create Context</h3>
To create context, you must Import createContext and initialize it:
<br></br>

<p><pre>{`import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext() 
`}</pre></p>

<p>Next we'll use the Context Provider to wrap the tree of components that need the state Context.</p>
<h3>Context Provider</h3>
<p>Wrap child components in the Context Provider and supply the state value.</p>
<p><pre>{`
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{'Hello $ {user}!'}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
 `}</pre>Now, all components in this tree will have access to the user Context.</p> 

<br></br>
<h3>Use the useContext Hook</h3>
<p>In order to use the Context in a child component, we need to access it using the useContext Hook.

First, include the useContext in the import statement:</p>
<p><pre>{`
import { useState, createContext, useContext } from "react";
`}</pre></p>
<br></br>
<p><pre>{`
function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{'Hello $ {user} again!'}</h2>
    </>
  );
}`}</pre></p>
<h2>Full Example</h2>
<p>Here is the full example using React Context:</p>
<p><pre>{`
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{'Hello $ {user}!'}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{'Hello $ {user} again!'}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);`}</pre></p>
  </div>
    <Sidebar />
    </div>
    )
};


export default Main;
