package com.example.InternProject.controller.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.InternProject.Entity.Student;


@Component
public class StudentDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Transactional
	public List<Student> getstudentinfo( int lage,int hage)
	{
		List<Student> student1=null;
		
		if(lage>=10 && hage<20)
		{
			Session session = sessionFactory.getCurrentSession();
			NativeQuery<Student> query = session.createNativeQuery("SELECT * FROM student where age between 10 and 20 group by city ORDER BY marks DESC LIMIT 5",Student.class);
			List<Student> student = query.list();
			return student;
		}
		else if(lage>=20 && hage<30)
		{
			Session session = sessionFactory.getCurrentSession();
			NativeQuery<Student> query = session.createNativeQuery("SELECT * FROM student where age between 20 and 30 group by city ORDER BY marks DESC LIMIT 5",Student.class);
			List<Student> student = query.list();
			return student;
		}
		else if(lage>=30 && hage<=60)
		{
			Session session = sessionFactory.getCurrentSession();
			NativeQuery<Student> query = session.createNativeQuery("SELECT * FROM student where age between 30 and 60 group by city ORDER BY marks DESC LIMIT 5",Student.class);
			List<Student> student = query.list();
			return student;
		}
		
		return student1;
		
	}
	
}
