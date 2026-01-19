const handleSubmit=(event)=>{
    event.PreventDefault()
    console.log("Form submitted")
}
 
const form=document.querySelector("form")
form.addEventListener("submit",handleSubmit)