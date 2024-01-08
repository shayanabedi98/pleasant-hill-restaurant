import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const [startDate, setStartDate] = useState(new Date());

  const startOfDay = new Date();
  startOfDay.setHours(19, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 0, 0, 0);

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        Experience elegance and culinary excellence at The Pleasant Hill. We are
        here to answer your questions and welcome your reservations. 
        <br />
        Address:
        123 Gourmet Lane,
        <br />
        Phone: (123) 456-7890
        <br />
        Email: contact@pleasanthilldining.com 
        <br />
        Reservations: For table reservations,
        please call us or book online. 
        <br />
        Opening Hours: 
        <br />
        Lunch:
        12:00 PM - 3:00 PM (Tue-Sun) 
        <br />
        Dinner: 6:00 PM - 10:00 PM (Tue-Sun) 
        <br />
        Closed on Mondays.
      </p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={startDate}
        minTime={startOfDay}
        maxTime={endOfDay}
        showTimeSelect
        dateFormat="Pp"
        filterDate={date => !date.getDate() === 1}
      />
      <button>Book Reservation</button>
      <div className="iframe-div">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.6078904512414!2d-79.3904640303319!3d43.65999366841537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b7cf806435%3A0x842c90518fb9fea1!2s109%20College%20St%2C%20Toronto%2C%20ON%20M5G%201L6!5e0!3m2!1sen!2sca!4v1703711320331!5m2!1sen!2sca"
          width="800"
          height="400"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
