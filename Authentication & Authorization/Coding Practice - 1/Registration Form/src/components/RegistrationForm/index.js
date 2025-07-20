// import {Component} from 'react'

// import './index.css'

// class RegistrationForm extends Component {
//   render() {
//     return (
//       <div className="main-bg-container">
//         <h1 className="main-heading">Registration</h1>
//         <div className="sub-bg-container">
//           <form>
//             <label htmlFor="first-name" className="label-element-text">
//               FIRST NAME
//             </label>
//             <br />
//             <input
//               placeholder="First name"
//               type="text"
//               id="first-name"
//               className="label-input-element"
//             />
//             <br />
//             <br />
//             <label htmlFor="last-name" className="label-element-text">
//               LAST NAME
//             </label>
//             <br />
//             <input
//               placeholder="Last name"
//               type="text"
//               id="last-name"
//               className="label-input-element"
//             />
//             <br />
//             <div className="button-container">
//               <button type="submit" className="form-button">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
// export default RegistrationForm
import {useState} from 'react'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleBlurFirstName = () => {
    if (firstName.trim() === '') {
      setFirstNameError(true)
    } else {
      setFirstNameError(false)
    }
  }

  const handleBlurLastName = () => {
    if (lastName.trim() === '') {
      setLastNameError(true)
    } else {
      setLastNameError(false)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    const isFirstEmpty = firstName.trim() === ''
    const isLastEmpty = lastName.trim() === ''

    setFirstNameError(isFirstEmpty)
    setLastNameError(isLastEmpty)

    if (!isFirstEmpty && !isLastEmpty) {
      setIsSubmitted(true)
      setFirstName('')
      setLastName('')
    }
  }

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          onBlur={handleBlurFirstName}
          className={firstNameError ? 'input error' : 'input'}
        />
        {firstNameError && <p className="error-text">Required</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          onBlur={handleBlurLastName}
          className={lastNameError ? 'input error' : 'input'}
        />
        {lastNameError && <p className="error-text">Required</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )

  return (
    <div className="form-container">
      <h1>Registration</h1>
      {isSubmitted ? (
        <div className="success-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
          />
          <p>Submitted Successfully</p>
          <button onClick={() => setIsSubmitted(false)} type="button">
            Submit Another Response
          </button>
        </div>
      ) : (
        renderForm()
      )}
    </div>
  )
}

export default RegistrationForm
