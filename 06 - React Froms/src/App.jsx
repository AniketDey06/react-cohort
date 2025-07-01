import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    // console.log("submit", data);
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("submit", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="">First Name</label>
        <input type="text" 
        className={errors.firstName ? 'input-error' : "" }
        {
          ...register
            (
              'firstName',
              {
                required: true,
                minLength: {value:3, message: 'minLength atleast 3'},
                maxLength: {value:6, message: 'maxLength atleast 6'}
              }
            )
        } />
        {errors.firstName && <p className={errors.firstName ? 'err-msg' : "" }>{errors.firstName.message}</p> }
      </div>

      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" className={errors.firstName ? 'input-error' : "" } {...register('lastName')} />
      </div>

      <div>
        <label htmlFor="">Age</label>
        <input type="text" className={errors.firstName ? 'input-error' : "" } {...register('age')} />
      </div>
      <input type="submit" value={isSubmitting ? "Submiting" : "Submit" } disabled={isSubmitting} />
    </form>
  )
}

export default App
