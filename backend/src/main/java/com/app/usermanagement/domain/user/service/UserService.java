package com.app.usermanagement.domain.user.service;

import com.app.usermanagement.domain.user.model.UserModel;

import java.util.List;

public interface UserService {
    UserModel createUser(UserModel user);

    List<UserModel> getAllUsers();
}
