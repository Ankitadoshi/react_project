
###   -----INITIAL RENDERING----

## Parent constructor: 
can define state since its called once initially


## componentWillMount: 
render has not happened but we have the initial state and initial props so we can chhange the state here. why? sometimes based on thhe props we need to change the state. Also since the componenet is not rendered, it will not render again. componentWillMount is called only once. 
If we want to do something wothh global events we can do it here.(changes to window or document objects). 
This is the only hook that executes on server rendering
There is one very simple reason why it is not possible to make your Ajax calls in componentWillMount . From the official react docs:

_...setting state in this method will not trigger a re-rendering_



## render:
Every component should have render method.
It basically takes the state and props and renders the component.
should not call setState in render. if we do it , another render gets called. Render is the hook that is called everytime we change a state or a prop.
while render, it will go thhrough eachh child componenets lifecycle starting withh constructor befor the parent render finishes

## componentDidMount:
After render, this method gets called. Only runs once during thhe lifecycle.
We can make an AJAX call here. We can also handle subscriptions here but we need to make sure that they are unsubscribed while we do componenetDidUnmount. as in case if the render fails, there wont be any ajax calls going. Also we can always do a setstate as soon as we recive the data from backend whichh will trigger a render again so it would solve the problem.

You never know how long an Ajax request might take. There are many reasons why your Ajax calls might take longer than you think. Your users might be on mobile with slow internet, your sever might be temporarily slow, etc. That means there will most likely always be a flicker before the Ajax call is loaded. So even if you could make your Ajax call in componentWillMount to load the Ajax before the component mounts, your users would still experience flicker.

Your components that loads Ajax needs to be able to handle empty data. You might for example show a spinner or some encouraging text when the Ajax loads.


### -----WAYS TO RERENDER----

when you change a state or a prop it should rerender or we can do forceUpdate() which will rerender it forcefully.

## componentWillReceiveProps:
Will be triggered when child recieves new state or props. We will have access to new state and props. we can do setState here only if the change is not triggered by a setState.
Dont try to change any props here.

## shouldComponenetUpdate:
Contains two arguments: nextProps and nextState.
Its more of a decision where you can specify if the compoenent should rerender or not. If we return true from this, compoenent rerenders, if we return false, it stops the rerender of the compoenent.
In case of forceUpdate(), this method will not get called since there is no need to make a decision.

## componentWillUpdate
contains two arguments: nextProps and nextState.
similar to componenetWillMount, it will be called before render(). Basically if we want to set some variables based on state and props we can do it here, dispatching events or starting animations
The componentWillUpdate() is a chance for us to handle configuration changes and prepare for the next render. If we want to access the old props or state, we can call this.props or this.state. We can then compare them to the new values and make changes/calculations as required.
We should not setState here as there will be another compoenentWillUpdate and it will go into infinite loop


## componentDidUpdate
the componentDidUpdate() is the Update version of componentDidMount().
When componentDidUpdate() is called, two arguments are passed: prevProps and prevState. This is the inverse of componentWillUpdate(). The passed values are what the values were, and this.props and this.state are the current values.
The most common uses of componentDidUpdate() is managing 3rd party UI elements and interacting with the Native UI. When using 3rd Party libraries, like our Chart example, we need to update the UI library with new data.

We can also query the Native UI and get sizing, CSS styling, etc. This may require us to update our internal state or props for our children. If this is the case we can call this.setState() or forceUpdate() here, but this opens a lot of potential issues because it forces a new render pass.
One of the worst things to do is do an unchecked setState(). If we set state here, by default, our shouldComponentUpdate() returns true, so if we used the above code we would fall into an infinite render loop. We would render, then call did update which sets state, triggering another render.

## componentWillUnmount:
Just like the rest of our life cycle phases, the Death/Unmount phase has a method hook for us. This method allows us to do some cleanup before we are removed from the UI stack. Typically we want to reverse any setup we did in either componentWillMount() or componentDidMount().
we would want to unregister any global/system/library events, destroy 3rd party UI library elements, etc. If we don't take the time to remove events we can create memory leaks in our system or leave bad references laying around.
React starts with the Element being removed, for example A.0, and calls componentWillUnmount() on it. Then React goes to the first child (A.0.0) and does the same, working its way down to the last child. Once all the calls have been made, React will remove the Components from the UI and ready them for Garbage Collection.
