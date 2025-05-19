import AboutSection from "@/Components/homepage/AboutSection";
import BlogSection from "@/Components/homepage/BlogSection";
import ClassesSection from "@/Components/homepage/ClassesSection";
import CoursesSection from "@/Components/homepage/CoursesSection";
import EventsSection from "@/Components/homepage/EventsSection";
import Hero from "@/Components/homepage/Hero";
import InstructorCTA from "@/Components/homepage/InstructorCTA";
import RegisterSection from "@/Components/homepage/RegisterSection";
import StatsSection from "@/Components/homepage/StatsSection";
import TestimonialsSection from "@/Components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="bg-red-500 text-white text-2xl text-center">Content is under development..</h1>
      <Hero />
      <h1 className="bg-red-500 text-white text-2xl text-center">Content is under development..</h1>
      <ClassesSection />
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <EventsSection />
      <RegisterSection />
      <TestimonialsSection />
      <InstructorCTA />
      <BlogSection />
    </div>
  )
}
