import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <h2>
        All reservations must be made over the phone. We may be very busy at
        this time of year, therefore all customers must provide credit card
        information as last minute cancellations can result in a $25.00 fee.
      </h2>
      <h3>
        For all inquiries, call <a href="tel:+14169295229">+1 (416) 929-4229</a>{" "}
      </h3>
      <form action="">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
      </form>
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
