// Test Helper for UI Testing
// This script simulates file uploads for testing purposes

window.testHelper = {
  // Load CSV content as a file
  uploadCSV: function(csvContent, fileName) {
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const file = new File([blob], fileName, { type: 'text/csv' });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.files = dataTransfer.files;
      fileInput.dispatchEvent(new Event('change', { bubbles: true }));
      console.log('✓ File uploaded:', fileName);
      return true;
    }
    console.error('✗ File input not found');
    return false;
  },

  // Sample CSV data
  sampleCSV: `Name,Age,City,Salary
John,25,New York,50000
Jane,30,Los Angeles,60000
Bob,35,Chicago,55000
Alice,28,San Francisco,70000
Charlie,22,Boston,45000
Diana,32,Seattle,65000
Eve,27,Austin,58000
Frank,40,Miami,75000
Grace,29,Denver,52000
Henry,33,Phoenix,62000
Ivy,26,Portland,48000
Jack,31,Las Vegas,59000
Kate,24,San Diego,47000
Leo,36,Dallas,68000
Maya,23,Atlanta,46000`,

  quotedFieldsCSV: `Name,Description,Price
"Smith, John","Software Engineer, Senior Level",75000
"Brown, Jane","Data Scientist, Machine Learning",85000
"Davis, Bob","Product Manager, Tech Lead",90000
"Wilson, Alice","UX Designer, Senior",65000
"Taylor, Charlie","DevOps Engineer, Cloud Specialist",80000`,

  emptyRowsCSV: `Name,Age,City

John,25,New York

Jane,30,Los Angeles

Bob,35,Chicago

Alice,28,San Francisco`,

  specialCharsCSV: `Name,Email,Phone,Notes
"José García","josé@example.com","+1-555-0123","Special characters: áéíóú"
"François Dupont","françois@example.com","+33-1-23-45-67-89","Accented characters"
"李小明","lixiaoming@example.com","+86-138-0013-8000","Chinese characters"
"Александр","alex@example.com","+7-495-123-45-67","Cyrillic script"
"محمد أحمد","mohammed@example.com","+966-50-123-4567","Arabic script"`,

  // Apply a filter
  applyFilter: function(columnIndex, operator, value) {
    const colSel = document.getElementById('col');
    const opSel = document.getElementById('op');
    const valInput = document.getElementById('val');
    const applyBtn = document.getElementById('apply');

    if (colSel && opSel && valInput && applyBtn) {
      colSel.value = String(columnIndex);
      opSel.value = operator;
      valInput.value = value;
      applyBtn.click();
      console.log(`✓ Filter applied: Column ${columnIndex} ${operator} "${value}"`);
      return true;
    }
    console.error('✗ Filter elements not found');
    return false;
  },

  // Get results
  getResults: function() {
    const resultsPre = document.getElementById('results');
    return resultsPre ? resultsPre.textContent : null;
  },

  // Get error message
  getError: function() {
    const errorMeta = document.getElementById('error');
    return errorMeta ? errorMeta.textContent : null;
  }
};

console.log('Test helper loaded. Use window.testHelper to access functions.');
console.log('Example: testHelper.uploadCSV(testHelper.sampleCSV, "sample.csv")');

