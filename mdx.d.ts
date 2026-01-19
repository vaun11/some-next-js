declare module "*.mdx" {
    import type { ComponentType } from "react"
  
    const MDXComponent: ComponentType<any>
  
    export const metadata: {
      title: string
      description: string
      date: string
      tags: string[]
    }
  
    export default MDXComponent
  }