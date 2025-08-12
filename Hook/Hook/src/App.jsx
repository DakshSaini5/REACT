import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("Submitting the data", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name: </label>
        <input
          className={errors.firstName ? 'input-error' : ''}
          {...register('firstName',
            {
              required: true,
              minLength:{ value: 3, message: "Please Enter A valid Name" },
              maxLength:{ value : 20, message: "Name is too long"},
            }
          )} />
        {errors.firstName && <p className='error-msg'>
          {errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label> Middle Name: </label>
        <input
          className={errors.middleName ? 'input-error' : ''}
          {...register('middleName',
            {
              required: true,
                minLength: { value: 3, message: "Please Enter A valid Name" },
                maxLength: { value : 20, message: "Name is Too long"}
            }
          )} />
        {errors.middleName && <p className='error-msg'>
          {errors.middleName.message}</p>}
      </div>
      <br />
      <div>
        <label> Last Name: </label>
        <input
          className={errors.lastName ? 'lsterror' : ''}
          {...register('lastName', 
            {
              pattern: 
              { 
                value: /^[A-Za-z]+$/i,
                message: "dhang se naam do",
              }
            }
          )} />
        {errors.lastName && <p className='error-msg'>
           {errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit"  disabled = {isSubmitting}
      value ={isSubmitting ? "submitting" : "submit"}/>
    </form>
  )
}

export default App
