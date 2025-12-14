import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomeRoute } from './HomeRoute'

describe('HomeRoute', () => {
  it('should render the main heading', () => {
    render(<HomeRoute />)
    const heading = screen.getByRole('heading', { name: /^vibecode$/i })
    expect(heading).toBeDefined()
  })

  it('should render the subtitle', () => {
    render(<HomeRoute />)
    const subtitle = screen.getByText(/AI-safe Vite \+ Supabase template/i)
    expect(subtitle).toBeDefined()
  })

  it('should render the community CTA', () => {
    render(<HomeRoute />)
    const cta = screen.getByText(/join our community/i)
    expect(cta).toBeDefined()
  })

  it('should render Discord link with correct href', () => {
    render(<HomeRoute />)
    const discordLink = screen.getByLabelText(/join our discord/i)
    expect(discordLink).toBeDefined()
    expect(discordLink.getAttribute('href')).toBe('https://discord.gg/xQR6DNtY')
  })

  it('should render GitHub link with correct href', () => {
    render(<HomeRoute />)
    const githubLink = screen.getByLabelText(/visit our github/i)
    expect(githubLink).toBeDefined()
    expect(githubLink.getAttribute('href')).toBe('https://github.com/jigjoy-io')
  })

  it('should render website link with correct href', () => {
    render(<HomeRoute />)
    const websiteLink = screen.getByLabelText(/visit our website/i)
    expect(websiteLink).toBeDefined()
    expect(websiteLink.getAttribute('href')).toBe('https://jigjoy.io')
  })

  it('should have target="_blank" on all external links', () => {
    render(<HomeRoute />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })
})
