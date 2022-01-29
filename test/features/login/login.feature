Feature:Login

    This feature aims to validate the login functionality with valid credential.
    @demo
    Scenario Outline: Login Functionality
        Given User navigates the VFF application
        When User click on login button
        When  User logs in using the <Velocity number> and <Password>
        Then Login must be successfull

        Examples:
            | Velocity number | Password       |
            | 1204090511      | Automation@123 |