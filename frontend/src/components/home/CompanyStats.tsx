import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import { homepageStats, homepageStatsDisclaimer } from '../../data/homepageStats'

function CompanyStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisibleRef = useRef(false)
  const [values, setValues] = useState(() => homepageStats.map(() => 0))

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let animationFrame: number | null = null

    function cancelAnimation() {
      if (animationFrame === null) return
      cancelAnimationFrame(animationFrame)
      animationFrame = null
    }

    function resetValues() {
      setValues((currentValues) =>
        currentValues.every((value) => value === 0)
          ? currentValues
          : homepageStats.map(() => 0),
      )
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return

      if (!entry.isIntersecting) {
        isVisibleRef.current = false
        cancelAnimation()
        resetValues()
        return
      }

      if (isVisibleRef.current) return
      isVisibleRef.current = true
      cancelAnimation()
      resetValues()

      const targets = homepageStats.map((stat) => stat.target)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const duration = prefersReducedMotion ? 0 : 1400
      const startedAt = performance.now()

      function animate(now: number) {
        if (!isVisibleRef.current) return

        const progress = duration === 0 ? 1 : Math.min((now - startedAt) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 4
        setValues(targets.map((target) => Math.round(target * easedProgress)))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          animationFrame = null
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }, { threshold: 0.35 })

    observer.observe(section)
    return () => {
      isVisibleRef.current = false
      observer.disconnect()
      cancelAnimation()
    }
  }, [])

  return (
    <section className="company-stats-section" aria-label="Company statistics" ref={sectionRef}>
      <Container>
        <div className="company-stats-grid">
          {homepageStats.map((stat, index) => (
            <article className="company-stat" key={stat.id}>
              <p aria-label={`${new Intl.NumberFormat('en-US', { useGrouping: stat.useGrouping ?? false }).format(stat.target)}${stat.suffix ?? ''} ${stat.label}`}>
                {new Intl.NumberFormat('en-US', { useGrouping: stat.useGrouping ?? false }).format(values[index])}{stat.suffix}
              </p>
              <h2>{stat.label}</h2>
            </article>
          ))}
        </div>
        <p className="company-stats-disclaimer">{homepageStatsDisclaimer}</p>
      </Container>
    </section>
  )
}

export default CompanyStats