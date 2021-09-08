import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'

const Text = dynamic(async () => {
  return (await import('./Text')).default
})

Builder.registerComponent(Text, {
    name: 'Text Element',
    inputs: [
      {
        name: 'headline',
        type: 'string',
        defaultValue: 'This is a text element.'
      },
      {
        name: 'description',
        type: 'string'
      }
    ]
  })