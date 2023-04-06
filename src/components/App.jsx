import { useError } from "hooks";
import { useIsLoading } from "hooks";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {
  const isLoading = useIsLoading() ;
  const error = useError();

  error && console.error(error);

  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {error && <p>{error.massage }</p>}
        {isLoading ? <p>Loading...</p> :  <ContactList />}
      </Section>
    </div>
  );
};