import {Div} from './styledForm'
export const Form = () => {
    return(
<>
<Div id='contacto'> 
  <h1>&bull; Contános tu proyecto &bull;</h1>
  <div className="underline">
  </div>
  

  <form action="#" method="post" id="contact_form">
    <div className="name">
      <label for="name"></label>
      <input type="text" placeholder="Mi nombre es: " name="name" id="name_input" required />
    </div>
    <div className="email">
      <label for="email"></label>
      <input type="email" placeholder="Mi e-mail es: " name="email" id="email_input" required />
    </div>
    <div className="telephone">
      <label for="name"></label>
      <input type="text" placeholder="Mi teléfono es: " name="telephone" id="telephone_input" required /> 
    </div>
    <div className="subject">
      <label for="subject"></label>
      <select placeholder="Subject line" name="subject" id="subject_input" required>
        <option disabled hidden selected>Los contacto porque...</option>
        <option>Tengo un proyecto</option>
        <option>Tengo una pregunta</option>
        <option>Les escribo porque los quiero mucho</option>
      </select>
    </div>
    <div className="message">
      <label for="message"></label>
      <textarea nameName="message" placeholder="Escribe algo..." id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div className="submit">
      <input type="submit" value="Enviar" id="form_button" />
    </div>
    
  </form>
</Div>
</>
)}