//dom
const currentMonthElement = document.querySelector('#currentMonth');
const currentDateElement = document.querySelector('#currentDate');
const prevArrow = document.querySelector('#prev');
const nextArrow = document.querySelector('#next');
const date = new Date();
//functions
const renderCalendar = () => {
    //global variables
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const monthDays = document.querySelector('.days');
    const month = date.getMonth();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const monthArr = [
        'january', 
        'february',
        'march', 
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];
    //set current month
    let currentMonth = monthArr[month];
    currentMonthElement.innerText = currentMonth;

    //set current date
    currentDateElement.innerText = date.toDateString();

    //render previous month dates
    let days = '';
    for(let x = firstDayIndex ; x > 0 ; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    };


    //render all current month dates
    for (let i = 1 ; i <= lastDay ; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`; 
        } else {
            days += `<div data-date>${i}</div>`;
        }
    };

    //render next month dates 
    for (let j = 1 ; j <= nextDays ; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    };
}


//previous month arrow functionality
prevArrow.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    console.log('Previous Month');
    renderCalendar();
});

//next month arrow functionality
nextArrow.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    console.log('Next Month');
    renderCalendar();
});

renderCalendar();

