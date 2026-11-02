import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'
import CoursesSection from './components/Needs.jsx'
import ScheduleTable from './components/OpeningSchedule.jsx'
import TeacherSlider from './components/TeacherSlider.jsx'
import FAQ from './components/Faq-section.jsx'
import ConsultationForm from './components/ConsultationForm.jsx'
import Footer from './components/Footer.jsx'
import FloatingContact from './components/FloatingContact.jsx'

export default function App() {
  const [courseCategory, setCourseCategory] = useState("IELTS");
  const [scheduleCategory, setScheduleCategory] = useState("ALL");

  const handleNavigateToSchedule = (category = "IELTS") => {
    setScheduleCategory(category);
    const element = document.getElementById("lich-hoc");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigateToCourses = (category = "IELTS") => {
    setCourseCategory(category);
    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />

      <main id="main-content">
        <Hero
          onExploreCourses={handleNavigateToCourses}
          onOpenSchedule={handleNavigateToSchedule}
        />
        <Highlights />
        <CoursesSection
          activeCategory={courseCategory}
          onCategoryChange={setCourseCategory}
          onNavigateToSchedule={handleNavigateToSchedule}
        />
        <ScheduleTable
          activeCategory={scheduleCategory}
          onCategoryChange={setScheduleCategory}
        />

        <TeacherSlider />
        <FAQ />

        <ConsultationForm />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
