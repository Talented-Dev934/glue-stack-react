package com.api.service;

import com.api.domain.entity.QTask;
import com.api.domain.entity.Task;
import com.api.domain.entity.User;
import com.querydsl.core.types.Predicate;
import org.hibernate.Hibernate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Created by cchristo on 11/04/2017.
 */
@Service
public class TaskService extends BaseService<Task> {

	@Override
	public Predicate getReadPermissionPredicate(User principalUser) {
		return QTask.task.organisation.id.eq(principalUser.getOrganisation().getId());
	}

	@Override
	public Page<Task> findAll(User principalUser, Predicate predicate, Pageable pageRequest) {
		Page<Task> tasks = super.findAll(principalUser, predicate, pageRequest);
		tasks.getContent().forEach(task -> Hibernate.initialize(task.getUser()));
		return tasks;
	}
}
