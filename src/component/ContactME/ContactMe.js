import React , { useRef } from 'react'
import "./ContactMe.css"
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";



function ContactMe() {
  const form = useRef();

  const Sumbithandler=(e)=>{
e.preventDefault()
emailjs.sendForm('service_fkpr3um', 'template_ywp9ny1', form.current, 'xr6fQrv7EoBnpznkm')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
e.target.reset()
toast.success("message sent");

  }
  return (
    <div id="Contact-me" className='contact-section' >
         <div className="contact-inner d-flex flex-column">
        <h1 className="contact-heading" data-aos="fade-in">Contact me</h1>
        <span className="contact-sub text-capitalize" data-aos="fade-out">let's keep in touch</span>
   </div>
   <form ref={form} className='d-flex  flex-column' onSubmit={Sumbithandler} style={{width:"50%" ,marginInline:"auto" , marginTop:"50px"}} data-aos="fade-in">
   <div class="form-group">
    <label for="exampleInputname" className='text-white'>Name</label>
    <input type="text" class="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter name" name="name" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" className='text-white'>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" required />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1" className='text-white'>enter message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter message"  name="message" rows="3" required></textarea>
  </div>
  <input type="submit" className='btn submit-btn ' value="Submit" />
  </form>
    </div>
  )
}

export default ContactMe