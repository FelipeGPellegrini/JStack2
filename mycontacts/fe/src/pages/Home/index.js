import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles";

import arrow from "../../assets/images/icons/Arrow.svg"
import edit from "../../assets/images/icons/Edit.svg"
import trash from "../../assets/images/icons/Trash.svg"

export default function Home() {
  return <Container>
    <InputSearchContainer>
      <input type="text" placeholder="Pesquise pelo nome..." />
    </InputSearchContainer>
    <Header>
      <strong>3 contatos</strong>
      <a href="/">Novo contato</a>
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
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
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
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
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
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </ListContainer>
  </Container>;
};