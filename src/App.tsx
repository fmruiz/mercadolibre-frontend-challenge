import { FC } from 'react';
import { SearchBar, BreadCrumb, ProductListItem } from './components';
import './App.styles.scss'

const App: FC = () => {
  return (
    <div className='app'>
      <SearchBar />
      <main className='app__main'>
        <BreadCrumb />
        <ProductListItem />
      </main>
    </div>
  )
}

export default App
