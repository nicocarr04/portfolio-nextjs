"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './contact.css';

function Contact() {
  // Regex pour les validations
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const stringRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const router = useRouter();

  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Erreur de validation
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    type !== 'checkbox' && validateField(name, value);
    setState(previousState => ({ ...previousState, [name]: type === 'checkbox' ? checked : value }));
  }

  // Valider chaque champ avec des conditions donnees
  function validateField(field, value) {
    switch (field) {
      case 'name':
      case 'message':
        if (!stringRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide` }));
        else setErrors(prev => ({ ...prev, [field]: '' }));
        break;
      case 'email':
        if (!emailRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide` }));
        else setErrors(prev => ({ ...prev, [field]: '' }));
        break;
      default:
        break;
    }
  }

  // Verifier si un champ a une erreur pour l'afficher
  function fieldHasError(field) {
    if (errors[field] && errors[field] !== '') return true;
    return false;
  }

  // Verifier si toute la forme est valide
  function isFormValid() {
    if (stringRegex.test(state.name) && stringRegex.test(state.message) && emailRegex.test(state.email)) return true;
    else {
      Object.keys(state).forEach(field => {
        if (field !== 'checkbox') validateField(field, state[field]);
      });
      return false;
    }
  }

  // Fonction pour sauvegarder dans la base de donnee.
  function submit(event) {
    event.preventDefault();

    if (isFormValid()) {
      router.push('/');
    }
  }

  return (
    <div className="wrapper">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} className={`${fieldHasError('name') && "is-invalid"}`} type="text" id="name" name="name" />
            <div className={fieldHasError('name') ? "invalid-feedback" : ""}>{errors.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} className={`${fieldHasError('email') && "is-invalid"}`} type="email" id="email" name="email" />
            <div className={fieldHasError('email') ? "invalid-feedback" : ""}>{errors.email}</div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea onChange={handleChange} className={`${fieldHasError('message') && "is-invalid"}`} id="message" name="message" rows="5"></textarea>
            <div className={fieldHasError('message') ? "invalid-feedback" : ""}>{errors.message}</div>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;