import { AboutSection } from "@/components/about-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      <main className="pt-8">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default function AboutPage() {
      return (
        <div>
          <h1>About Us</h1>
          <p>This is the about page content.</p>
        </div>
      );
    }
