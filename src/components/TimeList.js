import { DateTime } from "luxon";

export default function TimeList({ onSelectTime }) {
  const arrayOfTimes = [
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
  ];

  return (
    <div className="time-list">
      <div className="time-list-button">
        {arrayOfTimes.map((time) => {
          return (
            <button
              className="time"
              onClick={() => {
                onSelectTime(time);
              }}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
