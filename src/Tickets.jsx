// import React, { use } from 'react';
import { FaRegCalendar } from "react-icons/fa";

const Tickets = ({ ticketsdata, handleTask, }) => {
    // const ticketsdata = use(ticketsPromise)
    // onList2(tickets);
    return (
        <div className='w-full h-[825px] gap-x-8'>
            <h2 className='font-semibold text-2xl text-[#34485A]'>Customer Tickets</h2>
            <div>
                <div className='grid grid-cols-2 gap-6 '>
                    {ticketsdata.map((ticket) => (
                        <div key={ticket.id}
                            onClick={() => handleTask(ticket)} className=' rounded-sm shadow-sm p-5'>
                            <div className='flex justify-between'>
                                <h3 className='font-medium text-[#001931] text-lg'>{ticket.title}</h3>
                                <div className={`flex items-center gap px-3 py-1 rounded-full font-semibold w-fit
                                    ${ticket.status === "Open"
                                        ? "bg-green-100 text-green-700"
                                        : ticket.status === "In-Progress"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : ""
                                    }`}>

                                    <span
                                        className={`inline-block w-4 h-4 rounded-full mr-2 ${ticket.status === "Open"
                                            ? "bg-green-600"
                                            : ticket.status === "In-Progress"
                                                ? "bg-yellow-500"
                                                : ""
                                            }`}
                                    ></span>
                                    <span className={` p-2 rounded-l-2xl font-semibold ${ticket.status == 'Open' ? 'text-green-700 bg-green-100 ' :
                                        ticket.status == 'In-Progress' ? 'text-yellow-400 bg-yellow-100 ' : 'text-green-600 '
                                        }`}>{ticket.status}</span>
                                </div>
                            </div>
                            <p className='text-md font-normal text-[#627382]'>{ticket.description}</p>

                            <div className='flex gap-35 text-sm'>
                                <div className='text-[#627382] mt-2 flex gap-2.5'>
                                    <span>#{ticket.id}</span>
                                    <span className={` font-semibold ${ticket.priority == 'HIGH PRIORITY' ? 'text-red-500 ' :
                                        ticket.priority == 'MEDIUM PRIORITY' ? 'text-yellow-400 ' : 'text-green-600 '
                                        }`}>{ticket.priority}</span></div>
                                <div className='text-[#627382] flex gap-4 mt-2 items-end'>
                                    <span className=''>{ticket.customer}</span>
                                    <span className='flex gap-1'>
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