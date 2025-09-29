// import React, { use } from 'react';
import { FaRegCalendar } from "react-icons/fa";

const Tickets = ({ ticketsdata, handleTask, }) => {
    // const ticketsdata = use(ticketsPromise)
    // onList2(tickets);
    return (
        <div className='w-full  '>
            <h2 className='font-semibold text-2xl text-[#34485A] ml-3 md:ml-0 sm:text-center'>Customer Tickets</h2>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-[10]'>
                    {ticketsdata.map((ticket) => (
                        <div key={ticket.id}
                            onClick={() => handleTask(ticket)} className=' rounded-sm shadow-sm p-4 md:p-5'>
                            <div className='flex justify-between items-center'>
                                <h3 className='font-medium text-[#001931] text-base md:text-lg mr-2'>{ticket.title}</h3>
                                <div className={`flex items-center gap-0.5 md:gap-1 md:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold w-fit
                                    ${ticket.status === "Open"
                                        ? "bg-green-100 text-green-700"
                                        : ticket.status === "In-Progress"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : ""
                                    }`}>

                                    <span
                                        className={`inline-block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full mr-2 ${ticket.status === "Open"
                                            ? "bg-green-600"
                                            : ticket.status === "In-Progress"
                                                ? "bg-yellow-500"
                                                : ""
                                            }`}
                                    ></span>
                                    <span className={` font-semibold ${ticket.status == 'Open' ? 'text-green-700 bg-green-100 ' :
                                        ticket.status == 'In-Progress' ? 'text-yellow-400 bg-yellow-100 ' : 'text-green-600 '
                                        }`}>{ticket.status}</span>
                                </div>
                            </div>
                            <p className='text-sm mt-1 mb-3 font-normal text-[#627382]'>{ticket.description}</p>

                            <div className='flex flex-col sm:flex-row justify-between text-xs md:text-sm '>
                                <div className='text-[#627382] flex-col sm:flex-row mt-2 flex sm:gap-4 gap-0'>
                                    <span>#{ticket.id}</span>
                                    <span className={` font-semibold ${ticket.priority == 'HIGH PRIORITY' ? 'text-red-500 ' :
                                        ticket.priority == 'MEDIUM PRIORITY' ? 'text-yellow-400 ' : 'text-green-600 '
                                        }`}>{ticket.priority}</span></div>
                                <div className='text-[#627382] flex flex-col sm:flex-row mt-1 sm:mt-0 gap-1 sm:gap-6 sm:items-center sm:ml-auto'>
                                    <span className=''>{ticket.customer}</span>
                                    <span className='flex gap-1 items-center'>
                                        <FaRegCalendar />{ticket.createdAt}</span>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Tickets;