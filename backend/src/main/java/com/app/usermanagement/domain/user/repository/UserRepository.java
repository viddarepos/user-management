package com.app.usermanagement.domain.user.repository;

import com.app.usermanagement.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
