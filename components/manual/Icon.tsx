import {
  Brain,
  Coffee,
  Earth,
  Headphones,
  Heart,
  Laptop,
  Laugh,
  Lightbulb,
  MessageCircle,
  Plane,
  Puzzle,
  Radio,
  Rocket,
  Search,
  Target,
  TriangleAlert,
  Wrench,
  type LucideProps,
} from 'lucide-react'
import type { IconName } from '@/content/manual'

const icons: Record<IconName, React.ComponentType<LucideProps>> = {
  brain: Brain,
  wrench: Wrench,
  headphones: Headphones,
  plane: Plane,
  lightbulb: Lightbulb,
  search: Search,
  rocket: Rocket,
  message: MessageCircle,
  laugh: Laugh,
  target: Target,
  laptop: Laptop,
  coffee: Coffee,
  heart: Heart,
  globe: Earth,
  puzzle: Puzzle,
  alert: TriangleAlert,
  radio: Radio,
}

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name]
  return <Component strokeWidth={1.5} aria-hidden="true" {...props} />
}
