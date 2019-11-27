package com.example.demo.model;

public class UserDto {

    private int employeeId;
    private String firstName;
    private String userType;
    private String lastName;
    private String middleName;
    private String username;
    private String password;
    private String skills;
    private String designation;
    private Boolean availability;



    public int getemployeeId() {
        return employeeId;
    }

    public void setemployeeId(int id) {
        this.employeeId = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String midlleName) {
        this.middleName = middleName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String type) {
        this.userType = type;
    }
    public String getSkills() {
        return userType;
    }
    public void setSkills(String skills) {
        this.skills = skills;
    }
    
    public String getDesignation() {
        return designation;
    }
    public void setDesignation(String designation) {
        this.designation = designation;
    }
    
   
    public Boolean getAvailability() {
        return availability;
    }
    public void setAvailability(Boolean availability) {
        this.availability =availability;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

 
}