import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    // Effettuo il montaggio del componente React che voglio testare
    render(<App />)
    // Leggo un testo 'HomePage' nel componente caricato nel virtual dom
    const linkElement = screen.getByText(/HomePage/i);
    // Asserzione | Verifico se è contentuto un testo dentro linkElement
    expect(linkElement).toBeInTheDocument();
  })
})

// Gruppo di test
describe('Renders Users Page', () => {
  // Singolo Test
  it('renders UsersPage react link', () => {
    // Effettuo il montaggio del componente React che voglio testare
    render(<App />);
    // Seleziono un link nella navbar che ha un attributo title con valore 'users'
    const usersLink = screen.getByTitle('users');
    // Effetua un click sul nodo selezionato (click su users nella navbar)
    fireEvent.click(usersLink)
    // Leggo un testo dentro il tag H1 con valore 'Users' nel componente caricato nel virtual dom
    const linkElement = screen.getByRole('heading',  { name: 'Users'})
    // Asserzione | Verifico se è contentuto un testo dentro linkElement
    expect(linkElement).toBeInTheDocument();
  });

  // Singolo Test
  it('Renders all the 10 Users', async () => {
    // Effettuo il montaggio del componente React che voglio testare
    render(<App />);
    // Seleziono un elemento che ha un attributo title con valore 'users'
    const usersLink = screen.getByTitle('users');
    // Effetua un click sul nodo selezionato
    fireEvent.click(usersLink)
    // Leggo un array di elementi con un test-id di nome 'user-element'
    // presenti nel componente caricato nel virtual dom dopo la chiamata ajax
    const allTheUsers = await screen.findAllByTestId('user-element');
    // Asserzione | Verifico se è contentuto un testo dentro linkElement
    expect(allTheUsers).toHaveLength(10);
  })

})

// Gruppo di test
describe('Filter Testing', () => {
  // Singolo Test
  it('Search User Clem...', async () => {
    // Effettuo il montaggio del componente React che voglio testare
    render(<App />);
    // Seleziono un elemento che ha un attributo Placeholder con valore 'Search Users' presente nella pagina Users
    const inputNode = screen.getByPlaceholderText('Search Users');
    // Effetua un evento change sul nodo input selezionato 
    fireEvent.change(inputNode, {target: {value: 'Clem'}})
    // Leggo un array di elementi con un test-id di nome 'user-element'
    // presenti nel componente caricato nel virtual dom dopo la chiamata ajax
    const allTheUsers = await screen.findAllByTestId('user-element');
    // Asserzione | Verifico se è contentuto un testo dentro linkElement
    expect(allTheUsers).toHaveLength(2);
  })
})

