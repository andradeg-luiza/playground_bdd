/// <reference types="cypress" /> 

import datePickerElements from '../elements/datepicker_elements';
import DatePickerObjects from '../pages/datePicker_pages'
const datePickerObjects = new DatePickerObjects(); 


Given(/^I have successfully logged in with a valid user$/, () => {
	datePickerObjects.visitLoginPage();
});

When(/^I access the Date Picker menu$/, () => {
	datePickerObjects.visitDatePickerMenu();
});

Then(/^I select my birth date$/, () => {
	datePickerObjects.selectCalendar()
    datePickerObjects.selectYear()
    datePickerObjects.selectMonth()
    datePickerObjects.selectDay()
    
});
