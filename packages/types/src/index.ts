import type {
  Blog as SchemaBlog,
  BlogPosting as SchemaBlogPost,
  WebPage as SchemaWebPage,
  Article as SchemaArticle,
  TechArticle as SchemaTechArticle,
  Person as SchemaPerson,
  Organization as SchemaOrganization,
  WithContext,
  PersonLeaf,
  OrganizationLeaf
} from 'schema-dts'

// Base type for all YAML-LD frontmatter
export interface BaseYamlLD {
  $type: string
  '@context'?: 'https://schema.org'
  '@type'?: string
  identifier?: string
  name?: string
  description?: string
  url?: string
  dateCreated?: string
  dateModified?: string
  datePublished?: string
  author?: Person | Organization
  image?: string
  keywords?: string[]
}

// Person type
export interface Person extends Omit<PersonLeaf, '@type'> {
  $type: 'Person'
  '@type': 'Person'
  name: string
  email?: string
  url?: string
  image?: string
  jobTitle?: string
  affiliation?: Organization
}

// Organization type
export interface Organization extends Omit<OrganizationLeaf, '@type'> {
  $type: 'Organization'
  '@type': 'Organization'
  name: string
  url?: string
  logo?: string
  description?: string
}

// Blog post type
export interface BlogPost extends Omit<WithContext<SchemaBlogPost>, '@type'> {
  $type: 'BlogPost'
  '@type'?: 'BlogPosting'
  title: string
  description?: string
  content?: string
  author: Person | Organization
  datePublished: string
  dateModified?: string
  image?: string
  tags?: string[]
  category?: string
  slug?: string
  draft?: boolean
}

// Documentation page type
export interface DocumentationPage extends Omit<WithContext<SchemaTechArticle>, '@type'> {
  $type: 'DocumentationPage'
  '@type'?: 'TechArticle'
  title: string
  description?: string
  content?: string
  section?: string
  order?: number
  slug?: string
  draft?: boolean
}

// Marketing page type
export interface MarketingPage extends Omit<WithContext<SchemaWebPage>, '@type'> {
  $type: 'MarketingPage'
  '@type'?: 'WebPage'
  title: string
  description?: string
  content?: string
  slug?: string
  template?: string
  draft?: boolean
}

// Blog type
export interface Blog extends Omit<WithContext<SchemaBlog>, '@type'> {
  $type: 'Blog'
  '@type'?: 'Blog'
  name: string
  description?: string
  posts?: BlogPost[]
  authors?: Person[]
  language?: string
}

// Article type
export interface Article extends Omit<WithContext<SchemaArticle>, '@type'> {
  $type: 'Article'
  '@type'?: 'Article'
  title: string
  description?: string
  content?: string
  author: Person | Organization
  datePublished: string
  dateModified?: string
  image?: string
  tags?: string[]
  category?: string
  slug?: string
  draft?: boolean
}

// MDX Frontmatter type union
export type MDXFrontmatter = 
  | BlogPost 
  | DocumentationPage 
  | MarketingPage 
  | Article 
  | Blog 
  | Person 
  | Organization
  | BaseYamlLD
