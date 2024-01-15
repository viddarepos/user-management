package com.app.usermanagement.domain.user.service;

import com.app.usermanagement.domain.user.entity.User;
import com.app.usermanagement.domain.user.model.UserModel;
import com.app.usermanagement.domain.user.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

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

    @Override
    public List<UserModel> getAllUsers() {
        List<User> users = userRepository.findAll();

        return users
                .stream()
                .map(user -> new UserModel(user.getId(), user.getFirstName(), user.getLastName(), user.getEmailId())).toList();
    }
}
