import logo from './logo.svg';
import './App.css';
import { comments } from "./CommentData";
import { Card } from "./Card";
import { CourseGoal } from "./CourseGoal";

const goals = [
  {
     title : 'Learn React',
     description : 'In-depth'
  },
  {
     title : 'Learn Java 17',
     description : 'Records, Sealed Classes, Switch Expressions' 
  },
  {
     title : 'Daily Exercise',
     description : '45 Min HIIT Full Body workout to burn calories' 
  }
]

const choice = ['CourseGoal', 'CommentData']

const selected = choice[0];

function App() {

  if(selected === 'CourseGoal'){
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        <ul>
          <CourseGoal title={goals[2].title}
          description={goals[2].description}/>
          <CourseGoal title={goals[0].title}
          description={goals[0].description}/>
        </ul>
      </div>
    );
  }else{
    return ( 
      <div>
          {
            comments.map((comment) => <Card commentObject={comment} />)
          }
      </div> 
    );
  }
}

export default App;
