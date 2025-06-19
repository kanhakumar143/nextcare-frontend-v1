"use client";

import SingleAppointmentDetails from "./SingleAppointmentDetails";

const AppointmentDetails = [
  {
    drName: "Dr. Sneha Reddy",
    drDesignation: "Dermatologist",
    dataAndTime: "25-6-2025 | 2:00 PM",
    drAddress: "Banjara Hills",
    paymentStatus: false,
  },
  {
    drName: "Dr. Aman Khanna",
    drDesignation: "Orthopedic Surgeon",
    dataAndTime: "30-6-2025 | 11:00 AM",
    drAddress: "Koramangala",
    paymentStatus: true,
  },
  {
    drName: "Dr. Meera Joshi",
    drDesignation: "Pediatrician",
    dataAndTime: "22-6-2025 | 9:00 AM",
    drAddress: "Powai",
    paymentStatus: true,
  },
  {
    drName: "Dr. Rakesh Kumar",
    drDesignation: "Cardiologist",
    dataAndTime: "28-6-2025 | 4:15 PM",
    drAddress: "Salt Lake",
    paymentStatus: false,
  },
  {
    drName: "Dr. Aisha Khan",
    drDesignation: "ENT Specialist",
    dataAndTime: "21-6-2025 | 3:45 PM",
    drAddress: "Vasant Vihar",
    paymentStatus: true,
  },
];


const Appointments = () => {

  return (
    <div className="mt-20 relative">
      <div className="md:px-20 mb-5">
        <h3 className="font-bold text-3xl">My Consultations</h3>
      </div>
      <div className="md:px-30">
        {AppointmentDetails.map((data, index) => {
            return <SingleAppointmentDetails dataAndTime={data.dataAndTime} drAddress={data.drAddress} drName={data.drName} drDesignation={data.drDesignation} paymentStatus={data.paymentStatus} key={index}/>
        })}
      </div>
    </div>
  );
};

export default Appointments;
