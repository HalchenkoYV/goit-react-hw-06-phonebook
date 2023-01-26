// import './Contacts.module.css';
import React from 'react';
import { useSelector } from "react-redux";
import { getContacs, getFilter } from "../../redux/selectors/selectors";
import { filterContacts } from "../../redux/filterSlice/filterSlice";
import { deleteNumber } from "../../redux/addContactSlice/addContactSlice";
import { useDispatch } from "react-redux";


function Contacts() {
    const contacts = useSelector(getContacs);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();


    function visibleContacts(contacts, filter) {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter),
        );
    };
    const listContacts = visibleContacts(contacts, filter);

    const handleFilterChange = e => dispatch(filterContacts(e.target.value.toLocaleLowerCase()));
    const handleDelete = id => dispatch(deleteNumber(id));
    return (
        <div>
            <label>Find contacts by name
                <input
                    type="text"
                    name="filter"
                    onChange={handleFilterChange}
                />
            </label>
            <ul>
                { listContacts.map(contact => {
                    const { name, id , number} = contact;
                    return (<li key={id}>
                        <p>{name}: {number}</p>
                        <button  onClick={() => handleDelete(id)}>Delete</button>
                    </li>)
                    })
                }
            </ul>
        </div>
    )
};

export default Contacts;