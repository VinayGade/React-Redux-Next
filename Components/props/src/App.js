import logo from './logo.svg';
import './App.css';
import { comments } from "./CommentData";
import { Card } from "./Card";

function App() {
  return ( 
    <div>
        {
          comments.map((comment) => <Card commentObject={comment} />)
        }
    </div> 
  );
}

export default App;
