import React, { useReducer } from "react";
import Booking from "./Booking";

const Main = () => {

  const seedrandom = function(seed){
    var m = 2*34-31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s=s * a % m)/m;
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let random = seedrandom(date.getDate());
    for (let i=17; i<=23; i++){
      if(random() < 0.5){
        result.ppush(i + ':00');
      }
      if(random() > 0.5){
        result.push(i + ':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true;
  }

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date){
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();
  function submitForm (formData){
    if(submitAPI(formData)){
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Routes path='/' element ={<Header/>}/>
        <Routes path='/booking' element ={<Booking availableTimes = {state} dispatch = {dispatch} submitForm={submitForm}/>}/>
        <Routes path='/' element ={<Header/>}/>

      </Routes>
    </main>
  );
};

export default Main;