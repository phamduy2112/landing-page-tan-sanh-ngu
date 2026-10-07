import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import LearningPaths from './components/LearningPaths.jsx'
import Needs from './components/Needs.jsx'
import Highlights from './components/Highlights.jsx'
import Roadmap from './components/Roadmap.jsx'
import TeacherSlider from './components/TeacherSlider.jsx'
import VideoSection from './components/VideoSection.jsx'
import FeedbackSlider from './components/FeedbackSlider.jsx'
import ConsultationForm from './components/ConsultationForm.jsx'
import Footer from './components/Footer.jsx'
import FloatingContact from './components/FloatingContact.jsx'
import WhySection from './components/Why.jsx'
import CoursesSection from './components/Needs.jsx'
import FAQ from './components/Faq-section.jsx'
import OpeningSchedule from './components/OpeningSchedule.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhySection />
        <Highlights />
        <CoursesSection />
        <OpeningSchedule />
        {/* <Programs /> */}

        {/* <Roadmap /> */}
        <TeacherSlider />
        {/* <VideoSection /> */}
        {/* <FeedbackSlider /> */}
        <FAQ />

        <ConsultationForm />
      </main>
      <Footer />
      {/* <FloatingContact /> */}
    </>
  )
}
