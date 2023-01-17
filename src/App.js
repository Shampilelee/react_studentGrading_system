import React, { useState } from 'react';
import './App.css';
import GradeLetter from './Grade_Letter';

function App() {

  // THESE ARE STATE VARIABLES
  
  // Use To Determine Which Element To Display Or Not
  // And When To Display The Element.
  const [showElement, setShowElement] = useState(false);
  
  // Fullname
  const [full_Name, set_Full_Name] = useState('');
  const sync_FullName_Changes = (event) => {
    set_Full_Name(event.target.value);
  }

  // Course
  const [course, set_Course] = useState('');
  const sync_Course_Changes = (event) => {
    set_Course(event.target.value);
  }

  // Assigment
  const [assigment, set_Assigment] = useState('');
  const sync_Assigment_Changes = (event) => {
    set_Assigment(event.target.value);
  }

  // Mid-Semester
  const [midsem, set_Midsem] = useState('');
  const sync_MidSem_Changes = (event) => {
    set_Midsem(event.target.value);
  }

  // End Of Semester Exams
  const [exams, set_Exams] = useState('');
  const sync_Exams_Changes = (event) => {
    set_Exams(event.target.value);
  }

  // Total Grade Marks
  const [tot_Grade, set_TotGrade_Mrks] = useState(0);
  const get_TotGrade_Marks = () => {
    set_TotGrade_Mrks(parseInt(assigment) + parseInt(midsem) +  parseInt(exams));
    return(tot_Grade);
  }


  return (
    
    <>
      <div className='tytform' >
        <h2>Grading System</h2>
        <input type='text' placeholder='Student Full Name' value={full_Name} onChange={sync_FullName_Changes} />
        <input type='text' placeholder='Course' value={course} onChange={sync_Course_Changes} />
        <input type='number' placeholder='Assigment Marks' value={assigment} onChange={sync_Assigment_Changes} />
        <input type='number' placeholder='Mid-Semester Marks' value={midsem} onChange={sync_MidSem_Changes} />
        <input type='number' placeholder='End Of Semester Marks' value={exams} onChange={sync_Exams_Changes} />
        
        <button type='submit' onClick={() => {
            get_TotGrade_Marks()
            setShowElement(!showElement)
          }
          
        }> 
          Grade Now 
        </button>
        
        <h4> {full_Name} </h4>
        <h5> {course} </h5>
        { 
          showElement && <h6> {tot_Grade} </h6> 
        }

        { 
          showElement && <GradeLetter myProp={tot_Grade}/> 
        }
      </div>

    </>
    
  );
  
}

export default App;

