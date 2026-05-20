1.) What is callstack ?
Answer - In javascript call stack is a mechanism an engine to keep track of its place that calls multiple functions.
Since javascript is a single thread language so it can execute only one line at a time, the call stack ensures that functions are executed in an strict manner.

-------------------------------------------------------------------------------------------

2.) How callstack works?
Answer - It works in LIFO (Last in First Out)
a.) Push : When you invoke or call a function it is added to the top of the scope.
b.) Pop : When the function has finished the execution the engine pops out from the top of the scope. If there are no function so the control remain to the global execution scope.

-------------------------------------------------------------------------------------------