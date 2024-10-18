import logo from './logo.svg';
import './App.css';
import CounterEffect from './effects/CounterEffect';
import QuoteFetcher from './effects/QuoteFetcher';
import SocialNetwork from './effects/SocialNetwork';
import QuoteFetcherLoader from './effects/QuoteFetcherLoader';
import Counter from './state/adding-state-component-level/Counter';
import Form from './state/adding-state-component-level/Form';
import MyCheckbox from './state/adding-state-component-level/MyCheckbox';
import MyInput from './state/adding-state-component-level/MyInput';
import FavoriteColor from './state/adding-state-component-level/FavoriteColor';
import UpdateCounter from './state/update-state-from-prev-state/UpdateCounter';
import MyForm from './state/update-state-object-arrays/MyForm';
import Toggler from './state/adding-state-component-level/Toggler';
import ToggleCounter from './state/adding-state-component-level/ToggleCounter';
import React, { useState, useEffect } from "react";
import { generateId, getNewExpirationTime } from "./effects/passing-thoughts/utilities";
import AddThoughtForm from "./effects/passing-thoughts/AddThoughtForm";
import Thought from "./effects/passing-thoughts/AddThoughtForm";

function App() {

  const hookName = 'state'; // 'effect'/ 'context'/ 'state'

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  if(hookName === 'state') {
    document.title = 'State Hook';
    return (
      <div className="App">
       <div className='state'>
        <h1>State</h1>
        <Counter /> <br/>
        <MyInput /> <br/>
        <MyCheckbox /> <br/>
        <Form /> <br/>
        <Toggler /> <br/>
        <ToggleCounter /> <br/>
        <FavoriteColor /> <br/>
        <UpdateCounter/> <br/>
        <MyForm /> 
       </div> 
      </div>
    ) 
  } else if(hookName === 'effect') {
    document.title = 'Effect Hook';
    return (
      <div className="App">
       <div className='effect'>
        <h1>Effect</h1>
          <CounterEffect /><br/>
          <QuoteFetcher /><br/>
          <QuoteFetcherLoader /><br/>
          <SocialNetwork /><br/>
       </div>
      </div>
    );
  } else if(hookName === 'context') {
    document.title = 'Context Hook';
    return (
      <div className="App">
       <div className='context'>
        <h1>Context</h1>
       </div>
      </div>
    );
  } else { // passing-thoughts : effect hook project
    
    const addThought = (thought) => {
      setThoughts((thoughts) => [thought, ...thoughts]);
    };
  
    const removeThought = (thoughtId) => {
      setThoughts((thought) =>
        thoughts.filter((thought) => thought.id !== thoughtId)
      );
    };
  
    return (
      <div className="App">
        <header>
          <h1>Passing Thoughts</h1>
        </header>
        <main>
          <AddThoughtForm addThought={addThought} />
          <ul className="thoughts">
            {thoughts.map((thought) => (
              <Thought
                key={thought.id}
                thought={thought}
                removeThought={removeThought}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
