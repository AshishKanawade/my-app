import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';

export default function App() {
  // console.log("Hi");
  // const names =["Ashish", "Atharva", "Nikhil", "Gaurav", "Sam"];
  const users = [
    {
      name: "Ashish",
      pic: "data:image/jpeg;base64,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",
    },
    {
      name: "Atharva",
      pic: "data:image/jpeg;base64,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",
    },
    {
      name: "Nikhil",
      pic: "data:image/jpeg;base64,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",
    },
    {
      name: "Gaurav",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX-CIEliwCQf3b_V8qSLCaTVx-9Lnq76JHQ&usqp=CAU",
    },
    {
      name: "Sam",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXqQt1AvNLUWt3Jh-ORA6KDBCgqEs2v5Nwg&usqp=CAU",
    },
  ];


  return (
    <div className="App">
      {/* <Msg name="Ashish"/>
      <Msg name="Atharva"/>
      <Msg name="Nikhil"/>
      <Msg name="Gaurav"/> */}

      {/* {names.map((nm) => (
        <Msg 
          name={nm}
          pic={}
        />
      ))} */}

      {users.map((ur) => (
        <Msg name={ur.name} pic={ur.pic} />
      ))}
    </div>
  );
}


function Msg({ name, pic }) {
  // const name = "Ashish";
  return (
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1 className="user-name">🙋‍♂️, {name}!!! 🤣</h1>
    </div>
  );
}

// Changes