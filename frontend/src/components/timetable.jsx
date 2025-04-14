import React from "react";
import { Link } from "react-router-dom";

const ClassTimetable = () => {
  const timetableData = [
    {
      time: "6.00am - 8.00am",
      days: [
        { meta: "workout", title: "WEIGHT LOOSE", instructor: "RLefew D. Loee" },
        { meta: "fitness", title: "Cardio", instructor: "RLefew D. Loee" },
        { meta: "workout", title: "Yoga", instructor: "Keaf Shen" },
        { meta: "fitness", title: "Fitness", instructor: "Kimberly Stone" },
        null,
        { meta: "motivation", title: "Boxing", instructor: "Rachel Adam" },
        { meta: "workout", title: "Body Building", instructor: "Robert Cage" },
      ],
    },
    {
      time: "10.00am - 12.00am",
      days: [
        null,
        { meta: "fitness", title: "Fitness", instructor: "Kimberly Stone" },
        { meta: "workout", title: "WEIGHT LOOSE", instructor: "RLefew D. Loee" },
        null,
        { meta: "motivation", title: "Cardio", instructor: "RLefew D. Loee" },
        { meta: "workout", title: "Body Building", instructor: "Robert Cage" },
        { meta: "motivation", title: "Karate", instructor: "Donald Grey" },
         
      ],
    },
    {
        time: "4.00pm - 6.00pm",
        days: [
          { meta: "workout", title: "WEIGHT LOOSE", instructor: "RLefew D. Loee" },
          { meta: "fitness", title: "Cardio", instructor: "RLefew D. Loee" },
          null,
          { meta: "workout", title: "Yoga", instructor: "Keaf Shen" },
          { meta: "fitness", title: "Fitness", instructor: "Kimberly Stone" },
          { meta: "motivation", title: "Boxing", instructor: "Rachel Adam" },
          { meta: "workout", title: "Body Building", instructor: "Robert Cage" },
        ],
      },
      {
        time: "6.00pm - 8.00pm",
        days: [
          { meta: "fitness", title: "Fitness", instructor: "Kimberly Stone" },
          null,
          { meta: "workout", title: "WEIGHT LOOSE", instructor: "RLefew D. Loee" },
          
          { meta: "motivation", title: "Cardio", instructor: "RLefew D. Loee" },
          { meta: "workout", title: "Body Building", instructor: "Robert Cage" },
          { meta: "motivation", title: "Karate", instructor: "Donald Grey" },
         
          { meta: "motivation", title: "Karate", instructor: "Donald Grey" },
        ],
      },
    // Add more rows as needed...
  ];

  return (
    <section className="class-timetable-section py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="section-title">
            <span className="text-sm font-medium text-gray-600 uppercase">
              Find Your Time
            </span>
            <h2 className="text-3xl font-bold text-gray-800">Find Your Time</h2>
          </div>
          <div className="table-controls">
            <ul className="flex space-x-4">
              <li className="px-4 py-2 bg-gray-800 text-white rounded-lg cursor-pointer">
                All Events
              </li>
              <li className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg cursor-pointer">
               <Link to="/tips">  Fitness Tips</Link>
              </li>
              <li className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg cursor-pointer">
                <Link to="/motivation">Motivation</Link> 
              </li>
              <li className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg cursor-pointer">
              <Link to="/fullbodyexercises"> Workout</Link>  Workout
              </li>
            </ul>
          </div>
        </div>
        <div className="class-timetable overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-4 text-left"></th>
                <th className="border border-gray-300 p-4 text-left">Monday</th>
                <th className="border border-gray-300 p-4 text-left">Tuesday</th>
                <th className="border border-gray-300 p-4 text-left">Wednesday</th>
                <th className="border border-gray-300 p-4 text-left">Thursday</th>
                <th className="border border-gray-300 p-4 text-left">Friday</th>
                <th className="border border-gray-300 p-4 text-left">Saturday</th>
                <th className="border border-gray-300 p-4 text-left">Sunday</th>
              </tr>
            </thead>
            <tbody>
              {timetableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border border-gray-300 p-4 bg-gray-100 font-semibold">
                    {row.time}
                  </td>
                  {row.days.map((day, dayIndex) => (
                    <td
                      key={dayIndex}
                      className={`border border-gray-300 p-4 ${
                        day
                          ? "bg-gray-50 hover:bg-gray-100"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {day ? (
                        <div className={`ts-meta`}>
                          <h5 className="font-semibold text-gray-800">
                            {day.title}
                          </h5>
                          <span className="text-sm text-gray-600">
                            {day.instructor}
                          </span>
                        </div>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ClassTimetable;
