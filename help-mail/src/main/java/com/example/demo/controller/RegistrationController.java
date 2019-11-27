package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.LoginUser;
import com.example.demo.entity.User;

import com.example.demo.service.NotificationService;

import net.bytebuddy.utility.RandomString;



@RestController
@CrossOrigin(origins = "http://127.0.0.1:4200")
public class RegistrationController 
{
	private Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	@Autowired
	private NotificationService notificationService;
	
	@Autowired
private UserDao userRepository;

	
	@Autowired
	private UserDao userdao;
	
	@RequestMapping("/send-email")
	public boolean signupSuccess(@RequestBody LoginUser user)
	{
		logger.info(user.getUsername());
		User userobj = new User();
		userobj = userRepository.findByUsername(user.getUsername());
		System.out.println(userobj);
		
		if(userobj!=null) {
			User user1 = new User();
			user1.setUsername(user.getUsername());
		
			
			
			String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    + "0123456789"
                    + "abcdefghijklmnopqrstuvxyz"; 

// create StringBuffer size of AlphaNumericString 
			StringBuilder sb = new StringBuilder(10); 

			for (int i = 0; i < 10; i++) { 

// generate a random number between 
// 0 to AlphaNumericString variable length 
				int index = (int)(AlphaNumericString.length() * Math.random()); 

// add Character one by one in end of sb 
				sb.append(AlphaNumericString.charAt(index)); 
			} 

					


			
		
		
		String password =sb.toString(); 
	logger.info(password);
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);
		logger.info("========================================================");
		logger.info(hashedPassword);

		user1.setPassword(password);
		userobj.setPassword(hashedPassword);
		userRepository.save(userobj);
			
	try
			{
				notificationService.Sendnotification(user1);
				return true;
				
			}
			catch(MailException e)
			{
				logger.info("Error sending email" + e.getMessage());
				return false;
			}
			
			 
		}
		else {
			return false;
		}
	
	}
}