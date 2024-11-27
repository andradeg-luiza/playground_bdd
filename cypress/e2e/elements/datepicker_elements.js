class datePickerElements {
    navigatedatePicker = () => { return 'nav a[href="/date-picker"' }
    selectCalendar = () => { return 'input[placeholder="Escolha uma data"][readonly]' }
    selectMonth = () => { return 'select[aria-label="Month"' }
    selectYear = () => { return 'input[aria-label="Year"' }
    selectDay = () => { return 'span[aria-label="Abril 20, 1987"]' }
}

export default datePickerElements;