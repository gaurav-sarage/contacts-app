import { useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from 'aws-amplify';

import { Nav, AddContactForm, EditContactForm, ContactCardCollection } from './ui-components'

function App({user, signOut}) {
  const [isAddingContact, setIsAddingContact] = useState(false)
  const [isEditingContact, setIsEditingContact] = useState(false)
  const [contactToUpdate, setContactToUpdate] = useState("")

  const navOverrides = {
    AddContactButton: {
      onClick: () => {setIsAddingContact(true)}
    },
    LogOutButton: {
      onClick: async () => {
        signOut()
        await DataStore.clear()
      }
    },
    UserProfilePic: {
      src: user?.attributes?.profile
    }
  }

  const addContactOverrides = {
    Vector: {
      onClick: () => {setIsAddingContact(false)}
    }
  }
  
  const editContactOverrides = {
    Vector: {
      onClick: () => {setIsEditingContact(false)}
    }
  }

  return (
    <>
      <Nav overrides={navOverrides} width={"100%"} />
      
      {
        isAddingContact && 
          <AddContactForm overrides={addContactOverrides} />
      }
      {
        isEditingContact &&
          <EditContactForm overrides={editContactOverrides} contact={contactToUpdate} />
      }

      <ContactCardCollection isPaginated itemsPerPage={6} 
        overrideItems={({item}) => {
          return {
            overrides: {
              EditContactButton: {
                onClick: () => {
                  setIsEditingContact(true)
                  setContactToUpdate(item)
                }
              }
            }
          }
        }}
      />
    </>
  );
}

export default withAuthenticator(App);
