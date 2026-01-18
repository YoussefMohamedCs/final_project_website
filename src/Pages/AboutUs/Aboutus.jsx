import React from 'react'
import "./About.scoped.css"
export default function Aboutus() {
    
const doctors = [
  {
    id: 1,
    name: "Dr. youssef abelsalam",
    specialty: "Cardiologist",
    description:
      "Specialized in heart diseases with more than 10 years of experience in diagnosis and treatment.",
    image: "https://www.azdps.gov/sites/default/files/styles/portrait_style/public/2021-12/avatar_0_18_24_8.jpg?itok=5dSO6Dh9",
  },
  {
    id: 2,
    name: "Dr. Sara abdelrahman",
    specialty: "Dermatologist",
    description:
      "Expert in skin care, cosmetic dermatology, and modern laser treatments.",
    image: "https://www.azdps.gov/sites/default/files/styles/portrait_style/public/2021-12/avatar_0_18_24_8.jpg?itok=5dSO6Dh9",
  },
  {
    id: 3,
    name: "Dr. youssef salah",
    specialty: "Neurologist",
    description:
      "Focused on neurological disorders and advanced brain health solutions.",
    image: "https://www.azdps.gov/sites/default/files/styles/portrait_style/public/2021-12/avatar_0_18_24_8.jpg?itok=5dSO6Dh9",
  },
];

  return (
    <section className="about-doctors">
      <div className="container">
        <h2>Meet Our Doctors</h2>
        <p className="subtitle">
          Our experienced medical team is dedicated to your health and care.
        </p>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} />

              <h3>{doctor.name}</h3>
              <span>{doctor.specialty}</span>
              <p>{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
