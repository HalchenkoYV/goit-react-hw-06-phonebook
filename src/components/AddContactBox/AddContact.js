import './AddContact.module.css';
import { addContacts } from "../../redux/addContactSlice/addContactSlice";
import { useDispatch } from "react-redux";

function AddContactBox() {
    const dispatch = useDispatch();

    const handlSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form.elements.name.value)
        dispatch(addContacts(form.elements.name.value, form.elements.number.value ));
        form.reset();
    };


    return (
        <form onSubmit={handlSubmit} >
            <label>Name
                <input
                    type="text"
                    name="name"
                    defaultValue={'abc'}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>Number
                <input
                    type="tel"
                    name="number"
                    defaultValue={'88888888'}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type='submit' >Add contact</button>
        </form>
   )
};

export default AddContactBox;