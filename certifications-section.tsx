"use client"


import { Card } from "./components/ui/card"
import { Button } from "./components/ui/button"

const certifications = [
  {
    id: 1,
    title: "CU-AI NEXUS 2025",
    issuer: "Cairo University",
    date: "October 18-19, 2025",
    description: "Attended Cairo University's Premier AI Conference - Bridging Academia and Industry",
    image: "/images/cu-ai.jpg",
  },
  {
    id: 2,
    title: "Full-Stack Developer Internship",
    issuer: "CloudJet Innovations",
    date: "January 9, 2025",
    description:
      "Successfully completed 2-month internship as Full-Stack Developer, demonstrating technical skills and strong commitment to learning",
    image: "/images/photo-2025-09-08-19-20-04.jpg",
  },
  {
    id: 3,
    title: "Data Analysis Using Excel",
    issuer: "eYouth Business",
    date: "2025",
    description: "Successfully completed comprehensive data analysis course using Excel with professional instructors",
    image: "/images/excel.png",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
          Certifications & Achievements
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional certifications and training programs that demonstrate my commitment to continuous learning
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="bg-card border-border hover:border-accent transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-accent mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-primary mb-4">{cert.date}</p>
                <p className="text-foreground text-sm mb-4">{cert.description}</p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 w-full bg-transparent"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
