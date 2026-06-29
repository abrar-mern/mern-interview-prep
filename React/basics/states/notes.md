1.) What is UseState ?
Answer - It is a react hook that lets you to add a state variable to your component
Suppose if we want to change the content on user interaction, as react does not repaint the UI so we **use state** so it reindeers the UI again and we can acheived the desire result.

Syntax : -
const [state, setState] = useState(initialState) // Value we want to initialize it with

Note : - Call usestate at the top level of the component to delcare a state variable

--------------------------------------------------------------- 

2.) Can we declare one or more state variable in the same component ?
Answer - Yes, you can declare one or more state variable in the same component

-----------------------------------------------------------------

3.) Scenario based 
Suppose age is 42. The handler setAge (age + 1) three times

function clickHandler(){
    setAge(age + 1) // setAge(42 + 1)
    setAge(age + 1) // setAge(42 + 1)
    setAge(age + 1) // setAge(42 + 1)
}
However after one click the age is 43 rather than 45. This is because the setFunction does not update the age of the state variable so each setAge(age + 1) becomes setAge(43). We pass updater function

-----------------------------------------------------------------

4.) Updating objects and array in state ?
Answeer -If you have a form object dont mutuate it directly
For eg : - 
form.firstName = 'taylor'
Instead replace the whole object by creating a new one
setForm({
    ...form,
    firstName:'taylor'
})

-----------------------------------------------------------------