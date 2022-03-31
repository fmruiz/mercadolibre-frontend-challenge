import { FC } from 'react';
import { SearchBar, BreadCrumb } from './components';
import './App.styles.scss'

const App: FC = () => {
  return (
    <div className='app'>
      <SearchBar />
      <main className='app__main'>
        <BreadCrumb />
      </main>
    </div>
  )
}

export default App
