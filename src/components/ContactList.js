import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({contacts, getContactId}) => {
  console.log(contacts);

  const deleteConactHandler = (id) => {
    getContactId(id);
  };
  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} clickHander = {deleteConactHandler} key={contact.id}/>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;