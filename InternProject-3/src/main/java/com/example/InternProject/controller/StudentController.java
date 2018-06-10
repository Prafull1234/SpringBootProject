package com.example.InternProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.example.InternProject.Entity.Student;
import com.example.InternProject.controller.dao.StudentDao;



@Controller
@EnableWebMvc
public class StudentController {
	
	@Autowired
	StudentDao sdao;
	
	@RequestMapping("/getStudent")
	public ModelAndView helloworld(@RequestParam(name="lage") int lage,@RequestParam(name="hage") int hage)
	{
		
		List<Student> student=sdao.getstudentinfo(lage,hage);
		
		   return new ModelAndView("StudentPage", "studentMessage", student);
	}
}
