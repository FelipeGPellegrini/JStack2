import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles";

import { Link } from "react-router-dom";

import arrow from "../../assets/images/icons/Arrow.svg"
import edit from "../../assets/images/icons/Edit.svg"
import trash from "../../assets/images/icons/Trash.svg"
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Felipe Pellegrini</strong>
              <small>instagram</small>
            </div>
            <span>lipegomespellegrini10@gmail.com</span>
            <span>(21) 98765-4321</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  )
};

fetch('http://localhost:3001/contacts')
  .then(async (response) => {
    const json = await response.json();
    console.log('response', response)
    json.forEach((contact) => {
      console.log(contact.name)
    })
  })
  .catch((error) => {
    console.log('erro', error)
  })
