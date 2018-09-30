package cn.tycoding.service;

import cn.tycoding.entity.User;

/**
 * @auther TyCoding
 * @date 2018/9/28
 */
public interface UserService extends BaseService<User> {

    User findByName(String name);
}
