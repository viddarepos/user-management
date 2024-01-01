package com.app.usermanagement.domain.user.service;

import com.app.usermanagement.domain.user.entity.User;
import com.app.usermanagement.domain.user.model.UserModel;
import com.app.usermanagement.domain.user.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserModel createUser(UserModel user) {
        User createdUser = new User();

        BeanUtils.copyProperties(user, createdUser);
        userRepository.save(createdUser);

        return user;
    }
}
