import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const [startDate, setStartDate] = useState("");
  const [booked, setBooked] = useState(false);

  const startOfDay = new Date();
  startOfDay.setHours(19, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 0, 0, 0);

  const handleChangeDate = (date) => {
    setStartDate(date);
  };

  const handleClickDate = () => {
    setBooked(true);
  };

  const bookAgain = () => {
    setStartDate("");
    setBooked(false);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <h2>
        Experience elegance and culinary excellence at The Pleasant Hill. We are
        here to answer your questions and welcome your reservations.
      </h2>
      <p>Address: 989 Blaster Boulevard, Toronto</p>
      <p>Phone: (647) 237 - 9185</p>
      <p>Email: info@pleasanthilldining.com</p>
      <h3>
        Reservations: For table reservations, please call us or book online.
      </h3>
      <h3>Opening Hours:</h3>
      <p>Dinner: 07:00 PM - 11:00 PM (Mon-Sun)</p>

      {!booked && (
        <div>
          <input type="text" />
          <DatePicker
            placeholderText="Make a reservation"
            selected={startDate}
            onChange={handleChangeDate}
            minDate={startDate}
            minTime={startOfDay}
            maxTime={endOfDay}
            showTimeSelect
            dateFormat="Pp"
          />
          <button onClick={handleClickDate} className="book">
            Book Reservation
          </button>
        </div>
      )}
      {booked && (
        <div>
          <h4>
            Your reservation has been booked for,{" "}
            {startDate.toLocaleDateString()} at {startDate.toLocaleTimeString()}
          </h4>
          <button onClick={bookAgain} className="book">
            Book Again
          </button>
        </div>
      )}
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
