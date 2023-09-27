import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Classes from './register.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const text = `Let's get to know you a bit. We are a step closer to the world of FMC Weekend.`;

  return (
    <form className={`${Classes.section} ${Classes.form_class}`}>
      <div className={Classes.container}>
        <p className={Classes.main_title}>Register</p>
        <p className={Classes.top}>{text}</p>
        <input type="text" name="name" required readOnly hidden />
        <input type="email" name="email" value={email} required readOnly hidden />
        <label htmlFor="college" className={Classes.title}>
          <b>University / College Name</b>
        </label>
        <input
          type="text"
          name="college"
          value={
            email.endsWith('@iitbhu.ac.in') || email.endsWith('@itbhu.ac.in')
              ? 'Indian Institute of Technology (BHU) Varanasi'
              : ''
          }
          required
          readOnly
        />
        <label htmlFor="phone" className={Classes.title}>
          <b>Phone Number</b>
        </label>
        <PhoneInput
          inputProps={{
            id: 'phone',
            required: true,
          }}
          inputStyle={{
            width: '100%',
            display: 'inline-block',
            border: '2px solid #000000',
            background: '#f7f7f7',
            borderRadius: '0',
            height: '58px',
            fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            marginBottom: '15px',
          }}
          buttonStyle={{ borderRadius: '0', border: '2px solid black', margin: 'auto' }}
          containerStyle={{ width: '70%' }}
          country={'in'}
          value={value}
          onChange={setValue}
          autoFormat={true}
        />

        {email.endsWith('@iitbhu.ac.in') || email.endsWith('@itbhu.ac.in') ? (
          <>
            <label htmlFor="year" className={Classes.title}>
              <b>Year of Study</b>
            </label>
            <select name="year">
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
            </select>
          </>
        ) : null}
        <label htmlFor="redeem" className={Classes.title}>
          <b>Referral Code</b>
        </label>
        <input type="text" id="redeem" name="redeem" placeholder="XXXXXX" />
        <label htmlFor="insta" className={Classes.title}>
          <b>Instagram Handle</b>
        </label>
        <input type="text" id="insta" name="insta" placeholder="" required />
        <label htmlFor="position" className={Classes.title}>
          <b>Wanna be a?</b>
        </label>
        <select name="position">
          {email.endsWith('@iitbhu.ac.in') || email.endsWith('@itbhu.ac.in') ? (
            <option value="0">Participant</option>
          ) : (
            <>
              <option value="1">Participant</option>
              <option value="2">Campus Ambassador</option>
            </>
          )}
        </select>
        <div className={Classes.button_div}>
          <button className={Classes.submit} type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
