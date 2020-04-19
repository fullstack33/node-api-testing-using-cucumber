Feature: test the upadte api of user name and email 

Scenario: update user data
    Given the put api url is "http://localhost:3000/user/api/"
    And update user id is "5e9c74a621951d159a4a85df"
    And new data is
    """
        {
            "name": "Xyz",
            "email": "abc@gmail.com"
        }
    """
    When send "PUT" request to given url and given data to userId
    
    Then I will get update user name "Xyz" and email "abc@gmail.com"
    