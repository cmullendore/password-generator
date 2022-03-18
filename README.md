# Password Generator Starter Code
This password generator may be found in working condition at
the following URL:
### https://cmullendore.github.io/password-generator/

## Note to Graders:
This implementation may not *exactly* match the discussed requirements. However, I feel the fundamental concepts requested are demonstrated, in addition to the following concepts which were not required:
- OOP principals by use of a "password" object with properties and methods
- WebAPI and DOM interactions (vs. window alerts) for requesting allowed characters
- Form default behavior override preventing the form from "submitting"
- More advanced interactions with form elements (note the textarea is not within the form because it provides no user interactivity, exactly)

---
Requirements matched:

        GIVEN I need a new, secure password
        WHEN I click the button to generate a password
        THEN I am presented with a series of prompts for password criteria
        WHEN prompted for password criteria
        THEN I select which criteria to include in the password
        WHEN prompted for the length of the password
        THEN I choose a length of at least 8 characters and no more than 128 characters
        WHEN asked for character types to include in the password
        THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

Satisfied not via prompts (which are user-flow disruptive) this is satisfied via text field inputs with provided defaults, which are less disruptive to the user experience and immediately usable.

    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected

Satisfied via message that insufficient number of character types provided in resulting password generation.

    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria

Satisfied via OOP object method and return value.

    WHEN the password is generated
    THEN the password is either displayed in an alert or written to the page

Demonstrated by update of the HTML content.

---
Hopefully this implementation can be judged to meet all specifications.