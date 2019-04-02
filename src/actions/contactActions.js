import { GET_CONTACT,GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from './types';
import axios from 'axios';

export const getContact = id => async dispatch => {
  const res = await axios.get(`//jsonplaceholder.typicode.com/users/${id}`)
  dispatch({
    type: GET_CONTACT, 
    payload: res.data
  })
}
export const getContacts = () => async dispatch => {
  const res = await axios.get('//jsonplaceholder.typicode.com/users')
  dispatch ({
    type: GET_CONTACTS,
    payload: res.data
  })
}

export const addContact = contact => async dispatch => {
  const res = await axios.post('//jsonplaceholder.typicode.com/users', contact)
  dispatch ({
    type: ADD_CONTACT,
    payload: res.data
  })
}

export const editContact = contact => async dispatch => {
  const res = await axios.put(`//jsonplaceholder.typicode.com/users/${contact.id}`, contact)
  dispatch ({
    type: EDIT_CONTACT,
    payload: res.data
  })
}

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`//jsonplaceholder.typicode.com/users/${id}`)
    dispatch ({
      type:   DELETE_CONTACT,
      payload: id
    })
  }
  catch(e) {
    dispatch ({
      type:   DELETE_CONTACT,
      payload: id
    })
  }
}