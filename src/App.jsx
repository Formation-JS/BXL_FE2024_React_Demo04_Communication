import './App.css'
import Counter from './components/Counter/Counter';
import Header from './containers/Header/Header';

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Exemple avec un compteur</h1>
        <Counter />
      </main>
    </>
  )
}

export default App
