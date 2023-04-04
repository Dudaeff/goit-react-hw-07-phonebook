import { useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/selectors";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {error && <p>Sorry... something went wrong.</p>}
        {isLoading ? <p>Loading...</p> :  <ContactList />}
      </Section>
    </div>
  );
};