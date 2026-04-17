import AboutSection from '#/components/AboutSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <AboutSection id="about" />
}
