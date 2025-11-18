import React from 'react'
import ButtonSolid from './components/ButtonSolid'

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1>ButtonSolid (Emotion) — Demo</h1>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <ButtonSolid label="Primary" type="primary" size="md" />
        <ButtonSolid label="Secondary" type="secondary" size="md" />
        <ButtonSolid label="Disabled" type="primary" size="md" disabled />
      </div>
    </div>
  )
}
