import './App.css';
import { useEffect, useState } from 'react';
// import Filter from './components/Filter';
import {apiUrl,filterData} from './data' ;
import { toast } from 'react-toastify';

import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';




function App() {


  
  const [courses,setCourses] = useState([]);
  const [loading ,setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);
    try {

        let res = await fetch(apiUrl);
        let op = await res.json();

        //saving the data
        console.log("heu " + op);
        console.log("Data is ; ",op.data);
        setCourses(op.data);
    } catch (error) {
      
      toast.error("Error Occuring");
      console.log("Not Fetching!");
    }
    setLoading(false);

  }
  useEffect( () => {
    fetchData();

  },[])
 
  

  return (
    <div  className='min-h-screen flex flex-col'>
      
      <div >
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  );
}

export default App;
