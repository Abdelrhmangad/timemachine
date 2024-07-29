// ======================================================= Start Reusable functions ================================= //

// Define the arrays for day names and months (assuming they are already defined)
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDateToBeReadable(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day}.${month}.${year}`;
}

function switchDayMonth(dateString) {
    // Split the string into parts for day, month, year, time
    const parts = dateString.split(/[- :]/);
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const time = parts.slice(3).join(":"); // Join remaining parts for time

    // Swap day and month
    return `${month}-${day}-${year} ${time}`;
}

function makeDateForChart(dateString) {
    // Split the string into its components
    const parts = dateString.split(" ");
    const datePart = parts[0].split("-");
    const timePart = parts[1].split(":");

    // Extract year, month (0-indexed), day, hour, minute, and second
    const year = parseInt(datePart[2], 10);
    const hour = parseInt(timePart[0], 10);
    const minute = parseInt(timePart[1], 10);
    const second = parseInt(timePart[2], 10) || 0; // Handle optional seconds
    // const month = parseInt(datePart[1], 10) - 1;
    // const day = parseInt(datePart[0], 10);
    const month = 8; // Static month number, as the chart doesn't support dynamic month numbers
    const day = 1;  // Static day number for the chart

    // Create a new Date object with the desired day (20) and extracted time
    return new Date(year, month, day, hour, minute, second);
}

function getTooltipContent(item) {
    const startDate = new Date(item.start);
    const endDate = new Date(item.end);
    const durationMs = endDate.getTime() - startDate.getTime();
    // Calculate seconds from milliseconds
    const seconds = Math.floor(durationMs / 1000);
    // Calculate remaining milliseconds for sub-second duration
    const remainingMs = durationMs % 1000;
    let durationString;

    // Format duration based on magnitude
    if (seconds >= 3600) { // Hours
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        durationString = `${hours}h ${minutes}m`;
    } else if (seconds >= 60) { // Minutes
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        durationString = `${minutes}m ${remainingSeconds}s`;
    } else { // Seconds
        durationString = `${seconds}s`;
    }

    return `
      <b>Details:</b> ${item.content}<br>
      <hr/>
      <b>Duration:</b> ${durationString}
    `;
}

function getHoursAndMinutes(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes}`
}

function hasGroupWithId(arr, id) {
    return arr.some(obj => obj.id === id);
}
// ======================================================= END Reusable functions ================================= //
