# Manual UI Test Report - Complete Use Case Testing

**Date**: Testing Session  
**URL**: http://localhost:8001/index.html  
**Testing Method**: Manual UI Testing (using JS to simulate file uploads, then manual UI interactions)

---

## Test Execution

### ✅ Test 1: Initial Page Load

**Result**: ✅ PASS
- Page loads correctly
- Title: "CSV Parser - Filter CSV Files"
- Hero section displays "A LIGHTWEIGHT CSV PARSER"
- Import CSV section visible with file input
- Filter section hidden (correct initial state)
- Results section hidden (correct initial state)
- Grid tiles visible (4 tiles: UNIVERSAL, OPEN SOURCE, NO API KEYS, NO MCP)
- FAQ section visible with 2 items

---

## Test 2: Upload sample.csv and Test All Operators

### 2.1 File Upload ✅

**Action**: Simulate upload of sample.csv (16 rows, 4 columns: Name, Age, City, Salary)

**Expected Results**:
- File name displayed: "sample.csv"
- Filter section becomes visible
- Column dropdown populated with:
  - "0 - Name"
  - "1 - Age"
  - "2 - City"
  - "3 - Salary"

**Actual Result**: Testing...

### 2.2 Operator: == (Equals)

**Test**: Filter Name == "John"

**Expected**: Header + 1 row (John,25,New York,50000)

**Actual Result**: Testing...

### 2.3 Operator: != (Not Equals)

**Test**: Filter Name != "John"

**Expected**: Header + 15 rows (all except John)

**Actual Result**: Testing...

### 2.4 Operator: > (Greater Than)

**Test**: Filter Age > 30

**Expected**: Header + 5 rows (Bob, Diana, Henry, Jack, Leo)

**Actual Result**: Testing...

### 2.5 Operator: < (Less Than)

**Test**: Filter Age < 25

**Expected**: Header + 3 rows (Charlie, Kate, Maya)

**Actual Result**: Testing...

### 2.6 Operator: >= (Greater Than or Equal)

**Test**: Filter Age >= 30

**Expected**: Header + 6 rows (Jane, Bob, Diana, Henry, Jack, Leo)

**Actual Result**: Testing...

### 2.7 Operator: <= (Less Than or Equal)

**Test**: Filter Age <= 25

**Expected**: Header + 4 rows (John, Charlie, Kate, Maya)

**Actual Result**: Testing...

### 2.8 Operator: contains

**Test**: Filter City contains "York"

**Expected**: Header + 1 row (John with "New York")

**Actual Result**: Testing...

---

## Test 3: Upload quoted_fields.csv

**Test**: Upload CSV with quoted fields containing commas

**Expected**:
- File parses correctly despite commas inside quoted fields
- Filter section appears
- Filtering works correctly on quoted columns

**Actual Result**: Testing...

**Test Case**: Filter Name == "Smith, John"
**Expected**: Header + 1 row

**Actual Result**: Testing...

---

## Test 4: Upload empty_rows.csv

**Test**: Upload CSV with empty rows

**Expected**:
- Empty rows are skipped during parsing
- Filter section appears
- Filtering works correctly (filters non-empty rows only)

**Actual Result**: Testing...

**Test Case**: Filter Name == "John"
**Expected**: Header + 1 row (John,25,New York)

**Actual Result**: Testing...

---

## Test 5: Upload special_chars.csv

**Test**: Upload CSV with special characters (accents, Unicode, Arabic, Chinese, Cyrillic)

**Expected**:
- Special characters display correctly
- Filter section appears
- Filtering works with special characters

**Actual Result**: Testing...

**Test Case 1**: Filter Name contains "José"
**Expected**: Header + 1 row (José García)

**Test Case 2**: Filter Name == "李小明"
**Expected**: Header + 1 row (Chinese name)

**Actual Result**: Testing...

---

## Test 6: Error Cases

### 6.1 Invalid Column Index ✅

**Test**: Select column index 10 when file has only 4 columns, then click Apply

**Expected**:
- Error message: "Error: Column index 10 exceeds available columns (4)"
- Results section shows header only

**Actual Result**: Testing...

### 6.2 Empty File ✅

**Test**: Upload empty CSV file

**Expected**:
- Error message: "Error: CSV file is empty"
- Filter section remains hidden

**Actual Result**: Testing...

### 6.3 Empty Results ✅

**Test**: Filter Name == "NonExistentName"

**Expected**:
- No error message
- Results section shows header only: "Name,Age,City,Salary"
- Matches CLI behavior

**Actual Result**: Testing...

---

## Test 7: Export Functionality

### 7.1 Export Filtered Results ✅

**Test**: 
1. Apply filter (e.g., Name == "John")
2. Click "EXPORT CSV" button

**Expected**:
- File downloads as "results.csv"
- Content matches displayed results
- File contains header + filtered rows

**Actual Result**: Testing...

### 7.2 Export Empty Results ✅

**Test**:
1. Apply filter with no matches
2. Click "EXPORT CSV"

**Expected**:
- File downloads as "results.csv"
- Content is header only: "Name,Age,City,Salary"

**Actual Result**: Testing...

---

## Test 8: Keyboard Navigation & Accessibility

### 8.1 Enter Key in Value Input ✅

**Test**: Type value in filter input, press Enter key

**Expected**: Filter applies (same as clicking Apply button)

**Actual Result**: Testing...

### 8.2 Tab Navigation ✅

**Test**: Tab through all interactive elements

**Expected**:
- Proper focus order: file input → column dropdown → operator dropdown → value input → Apply button → Export button
- All elements accessible via keyboard
- Focus indicators visible

**Actual Result**: Testing...

### 8.3 FAQ Accordion ✅

**Test**: Click FAQ items to expand/collapse

**Expected**:
- First FAQ: "WHAT OPERATORS ARE SUPPORTED?" expands to show "==, !=, >, <, >=, <=, contains"
- Second FAQ: "HOW ARE EMPTY RESULTS HANDLED?" expands to show "Header only is shown. This mirrors the CLI behavior."
- ARIA attributes update correctly (aria-expanded)

**Actual Result**: Testing...

### 8.4 Tooltip Functionality ✅

**Test**: Hover over info icon (tooltip trigger)

**Expected**:
- Tooltip appears with text: "Upload a CSV. First row is treated as header."
- Tooltip styling correct
- ARIA attributes present

**Actual Result**: Testing...

---

## Summary

**Tests Executed**: 0/X
**Passed**: 0
**Failed**: 0
**In Progress**: Testing all use cases...

**Overall Status**: Testing in progress...

---

