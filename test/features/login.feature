Feature:Login

    This feature aims to validate the login functionality with valid credential.
    @demo
    Scenario Outline: <TestID>:Login Functionality
        Given User navigates the VFF application
        When User click on login button
        When User logs in using the credential from the data_provider <data_provider>
        Then User must be looged In the appliction successfull

        Examples:
            | TestID | data_provider |
            | TC001  | active        |