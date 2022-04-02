import { FC } from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';

import { SearchBar, BreadCrumb } from './components';
import './App.styles.scss'
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose
))

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <SearchBar />
        <main className='app__main'>
          <BreadCrumb />
        </main>
      </div>
    </Provider>

  )
}

export default App
