import { Form,redirect, useNavigation } from "react-router-dom"; 
import axios from "axios";
import {toast} from 'react-toastify'




{/* Endpoint*/}
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'


{/* (action function) retrieves the form data (user input) from the request object {request}   */}
{/* (parsing) - line 15 converts the formData object into a JS object (formData)*/}
export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);


{/*Error Handling (try catch block)*/}
  try {

  {/* API endpoint POST request (URL and data) */}
  const response = await axios.post(newsletterUrl, data);
  
  {/* (toast) displays the success message (response.data) */}
  toast.success(response.data.msg)

  {/* redirects user to homepage after submitting form*/}
  return redirect('/')

  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

{/*When using Form Data API, make sure that the (name) attribute is the same as the actual 'value' attribute.  */}
{/* The form itself has the attribute method="POST", which indicates that the data will be sent to the server using the POST method.*/}
const Newsletter = () => {
  {/*useNavigation hook to check if the form is submitting*/}
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'; 
  
  
  return (
    <Form className='form' method="POST">
      <h4 style={{textAlign:'center' , marginBottom: '2rem'}}>Subscribe To Our Newsletter</h4>
      {/*name*/}
      <div className='from-form-row'>
        <label htmlFor='name' className='form-label'> Name </label>
        <input type='text' className='form-input' id='name' name='name' required/>
      </div>
      {/*lastName*/}
      <div className='from-form-row'>
        <label htmlFor='lastName' className='form-label'> LastName </label>
        <input type='text' className='form-input' id='lastName' name='lastName' required/>
      </div> 
      {/*email*/}
      <div className='from-form-row'>
        <label htmlFor='email' className='form-label'> Email </label>
        <input type='text' className='form-input' id='email' name="email" defaultValue='test@test.com'/>
      </div>
      <button type="submit" className='btn btn-block' style={{marginTop: '0.5rem'}} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  );
};
export default Newsletter