import { describe, it, expect } from 'vitest'
import type { BlogPost, DocumentationPage, Person, Organization, MDXFrontmatter } from './index'

describe('MDX Types', () => {
  it('should validate a valid BlogPost', () => {
    const post: BlogPost = {
      $type: 'BlogPost',
      '@type': 'BlogPosting',
      title: 'Test Post',
      datePublished: '2024-03-20',
      author: {
        $type: 'Person',
        name: 'John Doe'
      }
    }
    expect(post.$type).toBe('BlogPost')
  })

  it('should validate a valid DocumentationPage', () => {
    const doc: DocumentationPage = {
      $type: 'DocumentationPage',
      '@type': 'TechArticle',
      title: 'Getting Started',
      section: 'Introduction',
      order: 1
    }
    expect(doc.$type).toBe('DocumentationPage')
  })

  it('should validate a Person with Organization', () => {
    const person: Person = {
      $type: 'Person',
      name: 'Jane Smith',
      email: 'jane@example.com',
      affiliation: {
        $type: 'Organization',
        name: 'Drivly'
      }
    }
    expect(person.$type).toBe('Person')
    expect(person.affiliation.$type).toBe('Organization')
  })

  it('should validate MDXFrontmatter union type', () => {
    const frontmatters: MDXFrontmatter[] = [
      {
        $type: 'BlogPost',
        title: 'Test Post',
        datePublished: '2024-03-20',
        author: { $type: 'Person', name: 'John Doe' }
      },
      {
        $type: 'DocumentationPage',
        title: 'API Reference',
        section: 'API'
      },
      {
        $type: 'Organization',
        name: 'Drivly',
        url: 'https://driv.ly'
      }
    ]
    
    frontmatters.forEach(fm => {
      expect(fm.$type).toBeDefined()
    })
  })
})
