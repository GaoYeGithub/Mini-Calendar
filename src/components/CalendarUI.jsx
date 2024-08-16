import React, { useState } from "react";
import ChangeDate from "./ChangeDate";
import "./components.css";

const CalendarUI = () => {
  const [today, setToday] = useState(new Date());

  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.toLocaleString("default", { weekday: "long" });
  const date = today.getDate();

  const seasons = [
    { name: "Winter", start: new Date(year, 11, 21), end: new Date(year, 2, 19) },
    { name: "Spring", start: new Date(year, 2, 20), end: new Date(year, 5, 20) },
    { name: "Summer", start: new Date(year, 5, 21), end: new Date(year, 8, 22) },
    { name: "Fall", start: new Date(year, 8, 23), end: new Date(year, 11, 20) },
  ];

  const holidays = [
    { name: "New Year's Day", date: new Date(year, 0, 1) },
    { name: "Canada Day", date: new Date(year, 6, 1) },
    { name: "Christmas Day", date: new Date(year, 11, 25) },
  ];

  const currentSeason = seasons.find(
    (season) =>
      (today >= season.start && today <= season.end) ||
      (season.start > season.end && (today >= season.start || today <= season.end))
  );

  const upcomingHoliday = holidays.find((holiday) => holiday.date >= today);

  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, today.getMonth(), 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="empty"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(
      <div key={i} className={`day ${i === date ? "today" : ""}`}>
        {i}
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="main">
          <p className="month">{month}</p>
          <p className="day">{day}</p>
          <p className="date">{date}</p>
          <p className="year">{year}</p>
          <p className="season">Season: {currentSeason?.name}</p>
          <p className="holiday">Next Holiday: {upcomingHoliday?.name} ({upcomingHoliday?.date.toLocaleDateString()})</p>
        </div>
        <div className="calendar">
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days">{calendarDays}</div>
        </div>
      </div>
      <ChangeDate today={today} setToday={setToday} />
    </>
  );
};

export default CalendarUI;
