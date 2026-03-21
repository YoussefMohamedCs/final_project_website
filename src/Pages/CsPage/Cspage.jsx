import React from 'react'
import './CSpage.scoped.css'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import BackArrow from '../../Components/BackArrow/BackArrow'

export default function Cspage() {
  const courses = [
    // Core Requirements (75 hrs)
    { name: "Database Systems", code: "database", available: true },
    { name: "Introduction to Computers", code: "CS 111", available: false },
    { name: "Introduction to Programming", code: "CS 112", available: false },
    { name: "Structured Programming", code: "CS 113", available: false },
    { name: "Theory of Computation", code: "CS 212", available: false },
    { name: "Object Oriented Programming", code: "CS 213", available: false },
    { name: "Logic Design", code: "CS 221", available: false },
    { name: "Algorithms and Data Structures", code: "CS 231", available: false },
    { name: "File Organization & Processing", code: "CS 232", available: false },
    { name: "Data Communication & Protocols", code: "CS 241", available: false },
    { name: "Software Engineering", code: "CS 331", available: false },
    { name: "Computer Networks", code: "CS 341", available: false },
    { name: "Operating Systems", code: "CS 351", available: false },
    { name: "Internet Technologies", code: "CS 362", available: false },
    { name: "Modeling and Simulation", code: "IS 241", available: false },
    
    // BS Courses
    { name: "Physics", code: "BS 141", available: false },
    { name: "Linear Algebra", code: "BS 151", available: false },
    { name: "Mathematical Analysis", code: "BS 153", available: false },
    { name: "Applied Electronics", code: "BS 161", available: false },
    { name: "Discrete Mathematics", code: "BS 251", available: false },
    { name: "Probabilities & Statistics", code: "BS 253", available: false },
    { name: "Numerical Analysis", code: "BS 351", available: false },
    // Department Core (54 hrs)
    { name: "Logic Programming", code: "CS 311", available: false },
    { name: "Computer Architecture", code: "CS 321", available: false },
    { name: "Communication Technology", code: "CS 363", available: false },
    { name: "Computer Security", code: "CS 412", available: false },
    { name: "Computer Graphics", code: "CS 413", available: false },
    { name: "Microsystems", code: "CS 421", available: false },
    { name: "Distributed Systems", code: "CS 422", available: false },
    { name: "Artificial Intelligence", code: "CS 431", available: false },
    { name: "Software Engineering II", code: "CS 432", available: false },
    { name: "Digital Signal Processing", code: "CS 461", available: false },
    { name: "Image Processing", code: "CS 462", available: false },
    // General Requirements
    { name: "English Language", code: "BS 211", available: false },
    { name: "Principles of Management", code: "BS 231", available: false },
    { name: "Technical Report Writing", code: "BS 232", available: false },
    { name: "Computer Skills", code: "BS 241", available: false },
    { name: "Professional Ethics & Legal Aspects", code: "BS 242", available: false },
  ]

  return (
    <>
      <BackArrow path={'/faculties'} />
      <div className='faculties__main__cs'>
        <div className="container-lg">
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-lg-4" key={index}>
                {course.available ? (
                  <Link className="facultie__card" to={course.code.replace(' ', '').toLowerCase()}>
                    <h2>{course.name}</h2>
                  </Link>
                ) : (
                  <div className="facultie__card still_unavailable">
                    <h2>{course.name}</h2>

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}