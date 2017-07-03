import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['clean', 'Do the dishes', 'Laundry', 'Cook', 'Sleep'];

class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li><button>X</button>{this.props.item}</li>
    )
  }
}
class TodoList extends React.Component {
     constructor(props) {
       super(props)
     }

// alright, so when using map, we have three ways
// 1. this.props.task.map(function(item) {
//   return <Todo item={item} />
//})

// 2. this.props.task.map(item => <Todo item={item} />);
// notice that i didn't wrap item with () and i did not use {}
// this works because it's just one each, if i have two or more parameters, then
// i will need to use (), i.e. (item, index)
// as for the curly braces {}, if i have just one statement, that statement
// is returned implicitly, i.e. <Todo item={item} />

// 3. this.props.task.map(item => {
//     return <Todo item={item} />
//})

// if i were to use curly braces, javascript expects more than one statement
// if that is the case, javascript does not know which one to return, and hence
// we need to use the return statement to tell javascript which statement
// you want it to return, or else it will be an array of undefined values

//ok thanks so much jay!

// no worries!! it's my pleasure :D


     render() {
       return (
         <ul>
           {this.props.task.map((item) =>{
             return <Todo item={item}/>
           })}
         </ul>
       )
     }
   }



ReactDOM.render(<TodoList task={dummyData}/>,
      document.getElementById('root'));
