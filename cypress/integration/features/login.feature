Feature: User login
  Scenario: Successful login
    Given Peny is on the login page
    When Peny enters 'hello' as their username
    When Peny enters '123' as their password
    When Peny clicks the login button
    Then Peny should see a loading wrapper
    Then Peny should see a 'Invalid username or password!' error message