Feature: Verify Login Functionality
  Verify the login functionality with valid and invalid credentials

  Scenario: Verify login with valid credentials
    Given I navigate to "https://demowebshop.tricentis.com/"
    And I click on the Login link
    And I enter valid Email Address "akpattanayak36@gmail.com"
    And I enter valid Password "Amit@2648"
    And I click on the login button
    Then I should be redirected to the homepage
