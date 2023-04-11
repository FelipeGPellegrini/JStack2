import PropTypes from 'prop-types'

import { Form, ButtonContainer } from "./styles"
import FormGroup from "../FormGroup"
import Input from "../Input"
import Select from "../Select"
import Button from "../Button"
import { useState, useRef } from 'react'

export default function ContactForm({ buttonLabel }) {

  const [name, setName] = useState('');

  const emailInput = useRef(null);

  function handleClick() {
    console.log(emailInput.current.value)
  }

  console.log('renderizou')

  return (
    <Form>
      <button type='button' onClick={handleClick}>
        Loga emailInput
      </button>
      <FormGroup >
        <Input value={name} placeholder="Nome" onChange={(event) => setName(event.target.value)} />
      </FormGroup>
      <FormGroup error="O formato do e-mail é inválido">
        <Input defaultValue={"lipegomespellegrini10@gmail.com"} placeholder="E-mail" error ref={emailInput} />
      </FormGroup>
      <FormGroup >
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup >
        <Select>
          <option value="Instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}
