const weekdayTimes = ['17:00','18:00','19:00','20:00','21:00','22:00'];
const weekendTimes = ['18:00', '19:00', '20:00','21:00','22:00','23:00'];

export function fetchAPI(dateString) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date = new Date(dateString);
            const dayOfWeek = date.getDay();

            const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
            
            const availableTimes = isWeekend ? weekendTimes : weekdayTimes;
            resolve(availableTimes);
        }, 500);
    });
}

export function submitAPI(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate form submission and validation
            if (formData && formData.date && formData.time && formData.guest) {
                console.log('Form data submitted:', formData);
                resolve(true); // Simulate successful submission
            } else {
                reject(new Error('Form data is incomplete.'));
            }
        }, 500);
    });
}