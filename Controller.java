package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Student;
import com.example.repository.StudentRepository;

@CrossOrigin
@RestController
public class Controller {

	@Autowired
	StudentRepository repo;

	// localhost:8080/student-list
	@GetMapping("/student-list")
	public List<Student> getAllStudents() {
		List<Student> stud_list = repo.findAll();
		return stud_list;
	}

	// localhost:8080/student/id
	@GetMapping("/student/{id}")
	public Student getById(@PathVariable int id) {
		Student student = repo.findById(id).get();
		return student;
	}

	// localhost:8080/student/add
	@PostMapping("/student/add")
	public void addStudent(@RequestBody Student student) {
		repo.save(student);
	}

//	localhost:8080/student/update/3
	@PutMapping("/student/update/{id}")
	public void updateStudent(@PathVariable int id, @RequestBody Student s) {
		Optional<Student> existing = repo.findById(id);
		if (existing != null) {
			Student std = existing.get();
			std.setName(s.getName());
			std.setBranch(s.getBranch());
			std.setScore(s.getScore());
			repo.save(std);
		} else {
			System.err.println("Student not present");
		}

	}

	// localhost:8080/student/delete/4
	@DeleteMapping("/student/delete/{id}")

	public void deleteStudent(@PathVariable int id) {
		repo.deleteById(id);
	}

}
