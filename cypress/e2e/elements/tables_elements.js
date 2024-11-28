class TablesElements {
    navigateTablestArea = () => { return 'nav a[href="/tables"]' }
    githubLine = () => { return 'table tbody tr:contains("1004")' }
    facebookLine = () => { return 'table tbody tr:contains("1002")' }
    youtubeLine = () => { return 'table tbody tr:contains("1005")' }
    tableBody = () => { return 'table tbody' }
    removeItem = () => { return '.remove-item' }
    deleteButton = () => { return 'button', 'Excluir' } 
    cancelButton = () => { return 'button', 'Cancelar' } 
}

export default TablesElements;