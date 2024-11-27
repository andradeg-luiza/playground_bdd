/// <reference types="cypress" /> 

import DatePickerElements from '../elements/datepicker_elements'
const datePickerElements = new DatePickerElements();

class datePickerPages {
    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitDatePickerMenu() {
        cy.userLoggedIn();
        cy.get(datePickerElements.navigatedatePicker()).click();
        cy.contains('h2', 'Date Picker').should('be.visible')
    }

    selectCalendar() {
        cy.get(datePickerElements.selectCalendar()).click()
    }

    selectYear() {
        cy.get(datePickerElements.selectYear()).type('1987')
    }

    selectMonth() {
        cy.get(datePickerElements.selectMonth()).select('Abril')
    }

    selectDay() {
        cy.get(datePickerElements.selectDay()).click()
    }
}

export default datePickerPages;