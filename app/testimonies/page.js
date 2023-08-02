"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTestimony, getTestimony } from "@/store/reducers/testimonyReducer";
import './testimonies.css';

function Testimonies() {
  // Regex pour les validations
  const stringRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  const numeroRegex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

  const dispatch = useDispatch()
  const testimonies = useSelector(state => state.testimony.testimonies)

  const [state, setState] = useState({
    numero: '',
    name: '',
    message: ''
  })

  // Erreur de validation
  const [errors, setErrors] = useState({
    numero: '',
    name: '',
    message: ''
  })

  function handleChange(event) {
    const {name, value, checked, type} = event.target
    type !== 'checkbox' && validateField(name, value)
    setState(previousState => ({ ...previousState, [name]: type === 'checkbox' ? checked : value }))
  }

  // Valider chaque champ avec des conditions donnees
  function validateField(field, value) {
    switch (field) {
        case 'name':
        case 'message':
            if (!stringRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide` }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break
        case 'numero':
            if (!numeroRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide` }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break
        default:
            break
    }
  }

  // Verifier si un champ a une erreur pour l'afficher
  function fieldHasError(field) {
      if (errors[field] && errors[field] !== '') return true
      return false
  }

  // Verifier si toute la forme est valide
  function isFormValid() {
    if (stringRegex.test(state.name) && stringRegex.test(state.message) && numeroRegex.test(state.numero)) return true
    else {
        Object.keys(state).forEach(field => {
            if (field !== 'checkbox') validateField(field, state[field])
        })
        return false
    }
  }

  // Fonction pour sauvegarder dans la base de donnée.
  function submit(event) {
    event.preventDefault()

    if (isFormValid()) {
      dispatch(addTestimony({ ...state, id: testimonies.length + 1 }))
        setState(prev => ({
            ...prev,
            numero: '',
            name: '',
            message: '',
        }))  // Reinitialiser la forme apres la soumission
    }
  }
  
  return (
    <div className="wrapper">
      <div className="testimonial-container">
        <h1>Testimonial Form</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="numero">ID</label>
            <input onChange={handleChange} value={state.numero} className={`${fieldHasError('numero') && "is-invalid"}`} type="text" id="numero" name="numero" />
            <div className={fieldHasError('numero') ? "invalid-feedback" : ""}>{errors.numero}</div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} value={state.name} className={`${fieldHasError('name') && "is-invalid"}`} type="text" id="name" name="name" />
            <div className={fieldHasError('name') ? "invalid-feedback" : ""}>{errors.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea onChange={handleChange} value={state.message} className={`${fieldHasError('message') && "is-invalid"}`} id="message" name="message" rows="5"></textarea>
            <div className={fieldHasError('message') ? "invalid-feedback" : ""}>{errors.message}</div>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className='comment-testimonies'>
        <h1>Comment from the testimonies</h1>
        {testimonies.map(temoigneur => <div className='temoigneur' key={temoigneur.numero}>
            <h2>{temoigneur.name}</h2>
            <p>{temoigneur.message}</p>
        </div>)}
        </div>
      </div>
    </div>
  );
}

export default Testimonies;