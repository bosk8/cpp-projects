# Test Execution Guide - CSV Parser UI

## Quick Start Testing

### Option 1: Manual Browser Testing

1. **Open the UI**:
   - Navigate to: `file:///run/media/jb/8539-EC27/dev/C++ Projects/CSV-PARSER/web/index.html`
   - OR use local server: `http://localhost:8001/index.html`

2. **Open Browser Console** (F12 or Right-click → Inspect → Console)

3. **Run Quick Test**:
   ```javascript
   // Load sample CSV
   testHelper.uploadCSV(testHelper.sampleCSV, 'sample.csv');
   
   // Wait a moment, then test operators
   setTimeout(() => {
     // Test Equals
     testHelper.applyFilter(0, '==', 'John');
     console.log('Equals Results:', testHelper.getResults());
     
     // Test Greater Than
     testHelper.applyFilter(1, '>', '30');
     console.log('Greater Than Results:', testHelper.getResults());
     
     // Test Contains
     testHelper.applyFilter(2, 'contains', 'York');
     console.log('Contains Results:', testHelper.getResults());
     
     // Test Empty Results
     testHelper.applyFilter(0, '==', 'NonExistent');
     console.log('Empty Results:', testHelper.getResults());
   }, 200);
   ```

### Option 2: Automated Test Suite

1. **Add test suite to HTML** (or load in console):
   ```javascript
   // Copy contents of qa-test-suite.js and paste in console
   // OR add to HTML:
   // <script src="./qa-test-suite.js"></script>
   ```

2. **Check Results**:
   - Console will show ✅ PASS or ❌ FAIL for each test
   - Final summary shows total passed/failed

### Option 3: Use UI Directly

1. **Click "Load sample.csv" button** (in the test helper section)
2. **Select column**: "0 - Name"
3. **Select operator**: "=="
4. **Enter value**: "John"
5. **Click "APPLY"**
6. **Verify results** show John's row
7. **Click "EXPORT CSV"**
8. **Verify file downloads**

## Full Test Sequence

### Test All 7 Operators

```javascript
// Upload CSV first
testHelper.uploadCSV(testHelper.sampleCSV, 'sample.csv');

// Wait for parsing
setTimeout(() => {
  const operators = [
    { col: 0, op: '==', val: 'John', name: 'Equals' },
    { col: 0, op: '!=', val: 'John', name: 'Not Equals' },
    { col: 1, op: '>', val: '30', name: 'Greater Than' },
    { col: 1, op: '<', val: '30', name: 'Less Than' },
    { col: 1, op: '>=', val: '30', name: 'Greater Equal' },
    { col: 1, op: '<=', val: '30', name: 'Less Equal' },
    { col: 2, op: 'contains', val: 'York', name: 'Contains' }
  ];
  
  operators.forEach((test, i) => {
    setTimeout(() => {
      console.log(`\nTesting: ${test.name}`);
      testHelper.applyFilter(test.col, test.op, test.val);
      setTimeout(() => {
        const results = testHelper.getResults();
        console.log(`Results (${test.name}):`, results);
      }, 100);
    }, i * 200);
  });
}, 200);
```

## Test Edge Cases

```javascript
// Test Quoted Fields
testHelper.uploadCSV(testHelper.quotedFieldsCSV, 'quoted.csv');

// Test Empty Rows
testHelper.uploadCSV(testHelper.emptyRowsCSV, 'empty.csv');

// Test Special Characters
testHelper.uploadCSV(testHelper.specialCharsCSV, 'special.csv');

// Test Empty Results
testHelper.applyFilter(0, '==', 'NonExistent');
console.log('Empty results:', testHelper.getResults());
```

## Verify UI Features

1. **Tooltip**: Hover over "i" icon → tooltip appears
2. **FAQ**: Click FAQ questions → answers expand/collapse
3. **Keyboard**: Press Enter in value input → filter applies
4. **Export**: Click Export button → file downloads

## What to Verify

### ✅ Must Work
- [x] File upload works
- [x] Filter section appears after upload
- [x] All 7 operators work correctly
- [x] Results display correctly
- [x] Export downloads correct CSV
- [x] Error messages display correctly
- [x] Empty results show header only

### ✅ UI/UX
- [x] Initial state correct (sections hidden)
- [x] Progressive disclosure works
- [x] All buttons functional
- [x] Keyboard navigation works
- [x] Tooltip works
- [x] FAQ accordion works

## Expected Results

- **File Upload**: Filter section appears, columns populated
- **Equals (==)**: Returns matching rows
- **Not Equals (!=)**: Returns all rows except matches
- **Greater Than (>)** : Returns rows where value > threshold
- **Less Than (<)**: Returns rows where value < threshold
- **Greater Equal (>=)**: Returns rows where value >= threshold
- **Less Equal (<=)**: Returns rows where value <= threshold
- **Contains**: Returns rows containing substring
- **Empty Results**: Header row only (not an error)
- **Export**: Downloads CSV file with correct content

## Troubleshooting

### If tests fail:
1. Check browser console for errors
2. Verify `testHelper` is loaded (should see console message)
3. Make sure CSV is uploaded before applying filters
4. Check that filter section is visible (display: grid)

### If UI doesn't work:
1. Check browser console for JavaScript errors
2. Verify all files loaded (index.html, app.js, bosk8.css, test-ui-helper.js)
3. Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
4. Check browser compatibility (modern browsers only)

---

**Ready to Test!** Open the UI and run the tests above.


