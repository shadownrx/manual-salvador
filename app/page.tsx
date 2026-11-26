import { Footer } from '@/components/manual/Footer'
import { Header } from '@/components/manual/Header'
import { Hero } from '@/components/manual/Hero'
import { Index } from '@/components/manual/Index'
import { Rail } from '@/components/manual/Rail'
import { Section } from '@/components/manual/Section'
import { sections } from '@/content/manual'

export default function Page() {
  return (
    <div className="page">
      <Header />
      <div className="page-body">
        <Rail />
        <main className="sheet">
          <Hero />
          <Index />
          {sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
          <Footer />
        </main>
      </div>
    </div>
  )
}
