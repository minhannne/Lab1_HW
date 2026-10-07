# AI Failure Audit — HW3

## Defect 1: Whitespace-only names accepted

### 1. Defect Description
The AI-generated form relied on the HTML `required` attribute
without checking the trimmed name. A name containing only spaces
was accepted, and the form displayed a success message.

### 2. Diagnostic Method
Code review identified the missing whitespace validation.
A browser test confirmed the defect:

1. Enter five spaces in the full-name field.
2. Enter a valid email: test@example.com.
3. Submit the form.

Before the fix, the form displayed a registration success message.

### 3. Refactored Solution
Apply `trim()` to the name and email.
If the trimmed name is empty, display an error, focus the name
field, and return before starting the submission.

### Verification
Repeated the same whitespace-only name test after the fix.
The form displayed a validation error and did not start submission.
## Defect 2: Edits during submission were erased

### 1. Defect Description
The AI-generated code disabled the submit button but left the
input fields editable during submission. Users could change their
details while waiting, but the success handler then called
`form.reset()`, erasing those new edits.

### 2. Diagnostic Method
Code review identified that only the submit button was disabled.
A browser test confirmed the defect:

1. Enter a valid name and email.
2. Submit the form.
3. Change the name while the form displays "Đang gửi...".
4. Wait for the success message.

The newly entered name was erased when the form reset.

### 3. Refactored Solution
Update `renderState()` to disable all input fields during
SUBMITTING and enable them again when submission finishes.

### Verification
Repeated the browser test after the fix.
The fields could not be edited during submission.
After success, both fields became editable again.