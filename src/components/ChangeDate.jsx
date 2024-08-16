import React from "react";

const ChangeDate = ({ today, setToday }) => {
  function previousDate() {
    today.setDate(today.getDate() - 1);
    setToday(new Date(today));
  }

  function nextDate() {
    today.setDate(today.getDate() + 1);
    setToday(new Date(today));
  }

  function previousWeek() {
    today.setDate(today.getDate() - 7);
    setToday(new Date(today));
  }

  function nextWeek() {
    today.setDate(today.getDate() + 7);
    setToday(new Date(today));
  }

  function previousMonth() {
    today.setMonth(today.getMonth() - 1);
    setToday(new Date(today));
  }

  function nextMonth() {
    today.setMonth(today.getMonth() + 1);
    setToday(new Date(today));
  }

  function resetDate() {
    setToday(new Date());
  }

  return (
    <div className="buttons">
      <button onClick={previousMonth} className="prev-month">
        Previous Month
      </button>
      
      <button onClick={previousWeek} className="prev-week">
        Previous Week
      </button>
      <button onClick={previousDate} className="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button onClick={resetDate} className="reset">
        TODAY
      </button>
      <button onClick={nextDate} className="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="32px"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <button onClick={nextWeek} className="next-week">
        Next Week
      </button>
      <button onClick={nextMonth} className="next-month">
        Next Month
      </button>
    </div>
  );
};

export default ChangeDate;
