## PURE COMPONENTS:

A React component can be considered pure if it renders the same output for the same state and props. For class components like this, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components.
It does not call render function if there is no change in state value even when setState is called.

Pure components have some performance improvements and render optimizations since React implements the shouldComponentUpdate()method for them with a shallow comparison for props and state.
Functional components are very useful in React, especially when you want to isolate state management from the component. Which is why they are often called stateless components.
However, functional components cannot leverage on the performance improvements and render optimizations that come with React.PureComponent since they are not classes by definition.
In fact, if you have a functional component, and you want React to treat it as a pure component, you will have to convert the functional component to a class component that extends React.PureComponent.