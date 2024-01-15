package com.app.usermanagement.web;

import com.app.usermanagement.domain.user.model.UserModel;
import com.app.usermanagement.domain.user.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public UserModel createUser(@RequestBody UserModel user){
        return userService.createUser(user);
    }

    @GetMapping
    public List<UserModel> getAllUsers(){
        return userService.getAllUsers();
    }
}
