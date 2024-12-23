
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
// import Filter from './components/Filter';
import {apiUrl,filterData} from './data' ;
import Cards from './components/Cards';


import Filter from './components/Filter';
import { toast } from 'react-toastify';




function App() {


  
  const [courses,setCourses] = useState(null);

  useEffect( () => {

    async function fetchData() {
        try {

            const res = await fetch(apiUrl);
            const op = await res.json();

            //saving the data
            // console.log("heu " + op);
            setCourses(op.data);
        } catch (error) {
          
          toast.error("Error Occuring");
          console.log("Not Fetching!");
        }



    }
    fetchData();

  },[])
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const op = await res.json();
  
  //       // Saving the data
  //       console.log("Fetched Data:", op);
  //       setCourses(op.data);

  //     } catch (error) {
  //       toast.error("Error Occurring");
  //       console.log("Error Fetching Data:", error);
  //     }
  //   }
  
  //   fetchData();
  // }, []); // Empty array ensures this runs only once
  

  return (
    <div>

      <Navbar/>

      <Filter filterData={filterData} />

      <Cards courses={courses} ></Cards>

    </div>
  );
}

export default App;
