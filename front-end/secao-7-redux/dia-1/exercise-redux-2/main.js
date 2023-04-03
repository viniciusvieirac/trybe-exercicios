import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');
const statusElement = document.getElementById('status');
const body = document.querySelector('body');

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'theme':
    return {
      ...state,
      theme: state.theme === 'dark' ? 'light' : 'dark',
    };
  case 'status':
    return {
      status: state.status === 'offline' ? 'online' : 'offline',
    };

  default:
    return state;
  }
};

const store = createStore(reducer);

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'theme' });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'status' });
});

store.subscribe(() => {
  const state = store.getState();

  const { theme, status } = state;

  if (theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  }

  if (theme === 'dark') {
    themeButton.innerText = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }

  if (status === 'offline') {
    statusButton.innerText = 'Ficar Offline';
    statusElement.innerText = 'Online';
  }

  if (status === 'online') {
    statusButton.innerText = 'Ficar Online';
    statusElement.innerText = 'Offline';
  }
});
