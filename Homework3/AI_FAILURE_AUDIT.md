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