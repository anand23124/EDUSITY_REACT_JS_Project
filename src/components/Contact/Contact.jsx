import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

    const[result, setResult] = React.useState("");

    const onSubmit = async (event) => 
    {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0150420f-3db7-463a-8721-f3fe9dbfeebb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Query Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className='contact'>
        <div className="contact_col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Distinctio obcaecati voluptatibus tenetur atque, 
                 Dolorum quod atque eaque. Dolores, odit eum.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />+2 1234 5678 9090</li>
                <li><img src={location_icon} alt="" />77, Canal walkways,London <br /> MA 0213 , UK</li>
            </ul>
        </div>
        <div className="contact_col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required />
                <label htmlFor="">Write Your message here</label>
                <textarea name="message" id="" rows='6' placeholder='Enter Your message' required></textarea>
                <button type="submit" className='btn dark_btn'>Submit now <img src={white_arrow} alt="" className='arrow'/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact