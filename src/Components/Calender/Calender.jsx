const Calender = ({ date }) => {
  const [day, month, year] = date?.split("/").map(Number);
  const jsMonth = month - 1;

  const monthName = new Date(year, jsMonth).toLocaleString("en-US", {
    month: "long",
  });

  //first day of the month
  const firstDay = new Date(year, jsMonth, 1).getDay();

  //Count of total days in the months
  const totalDays = new Date(year, jsMonth + 1, 0).getDate();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendar = [];

  //Null values pushed in the begening of first day of months
  for (let i = 0; i < firstDay; i++) {
    calendar.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    calendar.push(i);
  }

  //Null values pushed to show empty cells in the last row if days end.
  while (calendar.length % 7 !== 0) {
    calendar.push(null);
  }

  return (
    <table  data-testid="calendar-table"
      style={{
        width: "400px",
        borderCollapse: "collapse",
        tableLayout: "fixed",
        textAlign: "center",
      }}
    >
      <thead>
        <tr>
          <th colSpan={7} data-testid="calendar-heading" style={{ padding: "10px" }}>
            {monthName} {year}
          </th>
        </tr>

        <tr>
          {daysOfWeek.map((d, i) => (
            <th key={i} style={{ padding: "5px" }}>
              {d}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {Array.from({ length: calendar.length}).map(
          (_, rowIndex) => (
            <tr key={rowIndex}>
              {calendar
                .slice(rowIndex * 7, rowIndex * 7 + 7)
                .map((dateValue, colIndex) => (
                  <td
                    key={colIndex}
                    data-testid={
                        dateValue === day ? "selected-date" : undefined
                    }
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      background: dateValue === day ? "#1976d2" : "white",
                      color: dateValue === day ? "white" : "black",
                    }}
                  >
                    {dateValue}
                  </td>
                ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Calender;