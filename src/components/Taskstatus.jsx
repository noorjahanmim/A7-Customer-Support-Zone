import React from 'react';

const Taskstatus = ({ tasks, taskComplete, resolvedTasks }) => {
    return (
        <div className='grid grid-cols-1 gap-4 w-full '>
            <div className=' space-y-5 p-5 md:p-0'>
                <h2 className='font-semibold text-2xl text-[#34485A]'>Task Status</h2>
                {tasks.length === 0 ? (
                    <p className='font-normal text-[#627382] text-lg shadow-md'>Select a ticket to add to Task Status</p>
                ) : (
                    <ul className='space-y-2'>
                        {tasks.map((task) => (
                            <li key={task.id} className='p-3 bg-white rounded-md shadow-sm flex flex-col justify-between items-center w-full '>
                                <span className='mb-2'>{task.title}</span>
                                <button
                                    className="bg-green-600 text-white  px-2 rounded w-full text-base py-2 "
                                    onClick={() => taskComplete(task.id)}
                                >
                                    Complete
                                </button>
                            </li>
                        ))}
                    </ul>
                )
                }

            </div>

            <div className=' space-y-5 p-5 md:p-0'>
                <h2 className='font-semibold text-2xl text-[#34485A]'>Resolved Task</h2>
                {resolvedTasks.length === 0 ? (
                    <p className='font-normal text-[#627382] text-lg shadow-md'>No resolved tasks yet.</p>
                ) : (
                    <ul className='space-y-3'>
                        {resolvedTasks.map((task) => (
                        <li key={task.id} className='p-3 bg-white rounded-md shadow-sm flex justify-between items-center w-full'>
                            <span>{task.title}</span>
                        </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>

    );
};

export default Taskstatus;