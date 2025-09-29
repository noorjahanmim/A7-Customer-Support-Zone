# What is JSX, and why is it used?
JSX, which stands for JavaScript XML, is a syntax extension for JavaScript primarily used with React to describe the structure of user interfaces. It allows developers to write HTML-like code directly within their JavaScript files. 

# What is the difference between State and Props?
In React, Props are data passed from a parent component to a child component and are immutable (cannot be changed by the child). State is internal, mutable data managed within a component, allowing the component to update and re-render its UI when the data changes.

# What is the useState hook, and how does it work?
The useState hook in React is a function that lets functional components manage local state by providing a state variable and a function to update it. When called, useState returns a two-element array containing the current state value and the setter function. The setter function is used to update the state, which triggers a re-render of the component to reflect the new data in the UI

# How can you share state between components in React?
Sharing state between components in React can be achieved through several methods, depending on the relationship between the components and the complexity of the state:
Props → Share state between parent and child.
Lift state up → Share state between siblings (move it to their common parent).
Context → Share state deeply without prop drilling.
State libraries (Redux, Zustand, Recoil, etc.) → For complex/global state.

# How is event handling done in React?  
Event handling in React is performed using a synthetic event system that provides a cross-browser consistent way to manage user interactions with UI elements.
CamelCase event names (e.g., onClick, not onclick).
Pass a function, not a string (e.g., {handleClick}, not "handleClick()").
React uses a synthetic event system (wrapper around native events for cross-browser compatibility).
