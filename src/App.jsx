import './App.css';
import { useEffect, useState } from 'react';
// import Filter from './components/Filter';
import {apiUrl,filterData} from './data' ;
import { toast } from 'react-toastify';
import ShowError from './components/ShowError';

import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';




function App() {


  
  const [courses,setCourses] = useState([]);
  const [loading ,setLoading] = useState(true);

  const [category,setCategory] = useState(filterData[0].title);

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
    <div  className='min-h-screen flex flex-col bg-[#4a4e69]'>
      
      <div >
        <Navbar/>
      </div>

      <div className='bg-[#4a4e69]'>
        <div>
          <Filter filterData={filterData} setCategory={setCategory} category={category} />
        </div>


        <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap  items-center min-h-[50vh]' >
            {
              loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
            }
          </div>
        

      </div>
    </div>
  );
}

export default App;
