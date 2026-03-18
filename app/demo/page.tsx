'use client'
import { useState } from 'react'
import DemoGate from '../components/DemoGate'
import DemoWalkthrough from '../components/DemoWalkthrough'

export default function DemoPage() {
  const [started, setStarted] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [propertyName, setPropertyName] = useState('')

  function handleStart(first: string, property: string) {
    setFirstName(first)
    setPropertyName(property)
    setStarted(true)
  }

  if (!started) {
    return <DemoGate onStart={handleStart} />
  }

  return <DemoWalkthrough firstName={firstName} propertyName={propertyName} />
}
