1.) What is useEffect ?
Answer - When we want to run something after the component reindeer it is called sideeffect then we use useEffect.

------------------------------------------------------------------------

2.) Logical
 useEffect(() => {
    console.log('Listener added')
    return () => {
      console.log('listener removed');
    }
  })

  In this case first Listener removed will be excuted before listener added 

------------------------------------------------------------------------

3.) What is class based components ?
Anser - Class Based Components was previously used when hooks was not there this was the only way to create a components using lifecycle method. but now most of them prefers funtional components as it covers all the features and in an simple manner.

------------------------------------------------------------------------

4.) Lifecycle Methods ?
Answer - There are 3 lifecycle methods
1.) ComponentDidMount
2.) ComponentDidUpdate
3.) ComponentWillUnmount
It was used to attach an action with the specific functionality

------------------------------------------------------------------------