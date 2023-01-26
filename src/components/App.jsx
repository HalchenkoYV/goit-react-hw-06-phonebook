import './App.css';
import Container from './Container/Cotainer';
import Section from './Section/Section';
import AddContactBox from './AddContactBox/AddContact';
import Contacts from './Contacts/Contacts';


function App (){
  return (
    <Container>
      <Section title='Phonebook'>
        <AddContactBox  />
      </Section>

      <Section title='Contacts'>
        <Contacts  />
      </Section>

    </Container>
  );
};

export default App;