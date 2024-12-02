package com.major.project.attendancemanagementbackend.entity;

import com.major.project.attendancemanagementbackend.constants.Gender;
import com.major.project.attendancemanagementbackend.constants.Role;
import jakarta.persistence.*;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "students")
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    Long id;
    @Column
    String name;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    Institute institute;
    @Column(unique = true)
    String firebaseId;//
    @Column
    Role authority;//
    @Column(unique = true)
    String email;
    @Column
    String mobile;
    @Column
    String address;
    @Column
    String city;
    @Column
    String postalCode;
    @Column
    OffsetDateTime dob;
    @Column
    Gender gender;
    @ManyToOne
    @JoinColumn
    Course course;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "student_subject",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id")
    )
    private Set<Subject> subjects = new HashSet<>();


    Long deviceId;

}
