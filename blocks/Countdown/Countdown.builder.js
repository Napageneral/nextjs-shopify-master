import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'

const Countdown = dynamic(async () => {
  return (await import('./Countdown')).default
})

Builder.registerComponent(Countdown, {
    name: 'Countdown',
    inputs: [
      {
        name: 'time',
        type: 'number',
        defaultValue: 'Time in milliseconds.'
      },
      {
        name: 'title',
        type: 'string'
      }
    ]
  })