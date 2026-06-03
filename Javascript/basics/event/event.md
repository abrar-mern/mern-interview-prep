1.) What is event bubbling ?
Answer - Event bubbling is a type of event propogation where the event first trigger to its innermnost targeted element and then sucessively triggers on the ancestors(parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

--------------------------------------------------------------------------------

2.) What is event capturing ?
Answer - Event capturing is the type of event propogation where the event first triggers to the outermost targeted elements and then suicessively to the descendates i.e child of the targeted element with the nested hierarchy till it reaches the innermost DOM element

--------------------------------------------------------------------------------

3.) What is event.stopPropagation ?
Answer - In event stopPropogation it restricts from trvalling upward or downward in event bubbling or event capturing method. This is the best pratice to avoid any performance issue

--------------------------------------------------------------------------------