import React, { useState, useEffect,Suspense } from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Container from "./components/Container"
import Tickets from "./Tickets"
import Taskstatus from "./components/Taskstatus";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



// const fetchData = async () => {
//   const result = await fetch('/tickets.json');
//   return result.json();
// };
async function fetchData() {
  const res = await fetch("/ticketsdata.json");
  return res.json();
}
function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

useEffect(() => {
  fetchData().then(data => setTickets(data));
}, []);

const handleTask = (ticket) => {
  if(!tasks.find(tick => tick.id === ticket.id) && !resolvedTasks.find(tick => tick.id === ticket.id)) {
    setTasks(card => [...card, ticket]);
    toast.info(`${ticket.title} added to Task Status!`);
  }
};

  const taskComplete = (id) => {
    const taskCompleted = tasks.find(task => task.id === id);
    if(taskCompleted){
      setResolvedTasks(card => [...card, taskCompleted]);

setTasks((card) => card.filter(task => task.id !== id));
setTickets((cardTickets) => cardTickets.filter(tickets => tickets.id !== id));
toast.success(`Ticket ${id} Complete!`);
    }
    
  };

  // const ticketsPromise = fetchData()
//   const ticketsdata = fetchData('')
// const handleTicket = (ticket) => {
//   console.log('ticket clicked', ticket)
// };

  return (
    <>
      <Navbar></Navbar>


      


      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
        <div className="relative rounded-md text-white p-7 h-62 bg-gradient-to-br from-[#422AD5] to-purple-400 text-center flex flex-col items-center justify-center">
          <img src="./assets/vector1.png" alt="left" className="absolute left-0 " />
          <img src="./assets/vector2.png" alt="right" className="absolute right-0 " />
          <h2 className="text-2xl">In-Progress</h2>
          <p className="font-semibold text-6xl">{tasks.length}</p>
        </div>
        <div className="relative rounded-md text-white p-7 h-62 bg-gradient-to-br from-[#54CF68] to-[#00827A] text-center flex flex-col items-center justify-center">
          <img src="./assets/vector1.png" alt="left" className="absolute left-0 " />
          <img src="./assets/vector2.png" alt="right" className="absolute right-0 " />
          <h2 className="text-2xl">Resolved</h2>
          <p className="font-semibold text-6xl">{resolvedTasks.length}</p>
        </div>
      </div>
      </Container>
      
      <Container>
        <Suspense>
        <div className="flex gap-20">
          <div className="w-265 h-230">
            <Tickets ticketsdata= {tickets} handleTask={handleTask} ></Tickets>
            </div>
        <div className="">
          <Taskstatus tasks={tasks} taskComplete= {taskComplete} resolvedTasks={resolvedTasks}></Taskstatus>
        </div>
        </div>
      </Suspense>
      </Container>

      

      {/* <div>
        <Tickets  ticketsdata = {ticketsdata} onList = {handleTicket}></Tickets>
      </div> */}

      {/* <Tickets fetchPromise={fetchPromise}></Tickets> */}

      <Footer></Footer>
      <ToastContainer />
    </>
  )
}


export default App
