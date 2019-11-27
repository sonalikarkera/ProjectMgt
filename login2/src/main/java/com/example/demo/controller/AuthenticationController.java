package com.example.demo.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.example.demo.config.JwtTokenUtil;
import com.example.demo.model.ApiResponse;
import com.example.demo.model.AuthToken;
import com.example.demo.model.LoginUser;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/token")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
Logger log=LoggerFactory.getLogger(AuthenticationController.class);
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ApiResponse<AuthToken> register(@RequestBody LoginUser loginUser) throws AuthenticationException {

    	try {
  authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));
    	 }catch(Exception e) {
    	    	
    	    	return new ApiResponse<>(402, "error",new AuthToken());
    	    	
    	    	}
        final User user = userService.findOne(loginUser.getUsername());
       
        final String token = jwtTokenUtil.generateToken(user);
        
        log.info("A1"+token);
        //System.out.println(token);
        final String usertype= user.getUserType().trim();
       log.info("A2: "+usertype);
       final int userId= user.getEmployeeId();
       log.info("A3: "+userId);
       // System.out.print(usertype);
       
       
        if(usertype.equals("admin"))
        return new ApiResponse<>(200, "success",new AuthToken(token, user.getUsername(),userId));
        else if(usertype.equals("employee"))
        	return new ApiResponse<>(201, "success",new AuthToken(token, user.getUsername(),userId));
        else 
        	return new ApiResponse<>(202, "success",new AuthToken(token, user.getUsername(),userId));
   
    }

}