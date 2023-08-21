# Event Propogation : Delegation - Bubbling - Capturing

1. What is Event Delegation?

: Attaching Event Listener to the parent element instead of Children element, but to perform that event based on the children element. While we are rendering many elements on our DOM with the same type of data and expects same kind of behaviour from their event, there we can attach one event to the parent instead of attaching a lot of events in terms of one event per children.

2. Event Bubbling : some events that doesn't bubble : how to stop it

: if the parents and childrens have some common areas, and on the parent and childrens have their respective event listeners and you clicked on the deeply nested children and then that click will bubble and every event from depply nested children to the top most parent, every event listener will be triggered. this way of event travelling from down to top elements is called Event Bubbling. 
: Load, focus, blur, scroll these aren't bubbled.
: Event.stopPropogation() is the code which stops the bubbling from happening

3. Event Capture : how to do it

: Capture is the exactly different than Bubbling. when event triggers happens from Parent to children, it is called Event Capture
: an object ({capture : true}) when passed as a third argument to the eventListener then it triggers event capturing.

4. Current target vs target
: The target property refers to the element that triggered the event. This is the most deeply nested element that caused the event to be dispatched. For example, if a user clicks on a text inside a button, the target would be the text element.
: The currentTarget property, on the other hand, refers to the element to which the event listener is attached. This is always the element that the event handler has been attached to, as opposed to the target, which may be a descendant of this element.