import React from 'react';
import Style from './contact.module.css';
import Image from '../../assets/images/contact-img.jpg'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
            formData.append("access_key", "bd2fa799-3e85-4b75-8b16-cb7981dacc52");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
        alert(data.message)
        //   setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


    return (
        <div id='contact' className={`${Style.contact} contact my-5 py-5`}>
            <div className={`${Style.container} container`}>
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center py-2">
                        <div className={`${Style.getInTouch} p-4 d-flex flex-column align-items-center justify-content-center`} >
                            <h3 className='text-start'><b>Get in Touch</b></h3>
                            <p className='py-4'>
                                I’m eager to hear from you! If you’ve got a project in mind, want to collaborate, or simply want to say hi, don’t hesitate to get in touch. I’m always excited to explore new ideas and opportunities with you.
                            </p>
                            <p className='text-start'>
                                Let’s team up and create something amazing!
                            </p>
                            <div className="">
                                <img src={Image} alt="devImage" className={Style.contactImage} />
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${Style.contactForm} col-12 col-lg-6 py-2`}>
                        <h1 className={Style.contactTitle}>Let's Talk</h1>
                        <form  onSubmit={onSubmit} className={Style.form} action="#">
                            <div className="row">
                                <div className="col-12">
                                    <div className={Style.inputData}>
                                        <input type="text" name='name' required />
                                        <div className={Style.underline}></div>
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={Style.inputData}>
                                        <input type="email" name='email' required />
                                        <div className={Style.underline}></div>
                                        <label>Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className={Style.inputData}>
                                        <input type="text" name='subject' required />
                                        <div className={Style.underline}></div>
                                        <label>Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className={`${Style.textAreaInputData} ${Style.textarea}`}>
                                        <textarea name='message' required></textarea>
                                        <div className={Style.textAreaUnderline}></div>
                                        <label>Write your message</label>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3 mx-3'>
                                <button type="submit" className={Style.contactBtn}>Submit now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
