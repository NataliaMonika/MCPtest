import React, { useState } from 'react'
import ButtonSolid from './components/ButtonSolid'
import IconPlus from './icons/IconPlus'
import IconSearch from './icons/IconSearch'
import IconChevron from './icons/IconChevron'
import tokens from './tokens/designTokens'

const TYPES = ['primary', 'secondary', 'error', 'success'] as const
const SIZES = ['sm', 'md', 'lg'] as const
const STATES = ['default', 'hover', 'active', 'selected', 'disabled'] as const

export default function App() {
  const [demoState, setDemoState] = useState<'default' | 'hover' | 'active' | 'selected'>('default')
  const [demoType, setDemoType] = useState<typeof TYPES[number]>('primary')
  const [demoSize, setDemoSize] = useState<typeof SIZES[number]>('md')
  const [leftIcon, setLeftIcon] = useState(false)
  const [rightIcon, setRightIcon] = useState(false)

  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif', color: '#0f172a' }}>
      <h1>ButtonSolid — Wariants Grid + Interactive Demo</h1>

      <section style={{ marginTop: 18 }}>
        <h2>Wersje i stany (siatka)</h2>
        <div style={{ display: 'grid', gap: 16 }}>
          {SIZES.map((size) => (
            <div key={size}>
              <h3 style={{ margin: '8px 0' }}>Size: {size}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
                <div style={{ fontWeight: 600 }}>Default</div>
                <div style={{ fontWeight: 600 }}>Hover</div>
                <div style={{ fontWeight: 600 }}>Active</div>
                <div style={{ fontWeight: 600 }}>Selected</div>
                <div style={{ fontWeight: 600 }}>Disabled</div>
                {TYPES.map((type) => (
                  <React.Fragment key={type}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <ButtonSolid label={type} type={type} size={size} />
                      <span style={{ fontSize: 12, color: '#334155' }}>{type}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <ButtonSolid label={type} type={type} size={size} forceState="hover" />
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <ButtonSolid label={type} type={type} size={size} forceState="active" />
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <ButtonSolid label={type} type={type} size={size} forceState="selected" selected />
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <ButtonSolid label={type} type={type} size={size} disabled />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Opis dla devów</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 8, alignItems: 'start' }}>
          <div style={{ fontWeight: 600 }}>Tokeny (przykładowe):</div>
          <div style={{ color: '#334155' }}>
            <div>primary: {tokens.colors.primary}</div>
            <div>primaryHover: {tokens.colors.primaryHover}</div>
            <div>button.sizes: sm {tokens.button.sizes.sm}px / md {tokens.button.sizes.md}px / lg {tokens.button.sizes.lg}px</div>
            <div>radii: {tokens.button.radii}px</div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Interactive demo</h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
          <label>
            Type:
            <select value={demoType} onChange={(e) => setDemoType(e.target.value as any)} style={{ marginLeft: 8 }}>
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label>
            Size:
            <select value={demoSize} onChange={(e) => setDemoSize(e.target.value as any)} style={{ marginLeft: 8 }}>
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label>
            State:
            <select value={demoState} onChange={(e) => setDemoState(e.target.value as any)} style={{ marginLeft: 8 }}>
              <option value="default">default</option>
              <option value="hover">hover</option>
              <option value="active">active</option>
              <option value="selected">selected</option>
            </select>
          </label>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <ButtonSolid
            label="Demo"
            type={demoType}
            size={demoSize}
            forceState={demoState === 'default' ? undefined : (demoState as any)}
            selected={demoState === 'selected'}
            leftIcon={leftIcon ? <IconSearch /> : undefined}
            rightIcon={rightIcon ? <IconChevron /> : undefined}
          />
          <div style={{ color: '#334155' }}>
            <div>Tip: set <code>forceState</code> to preview hover/active/selected visually.</div>
            <div>aria-pressed is set when selected.</div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={leftIcon} onChange={(e) => setLeftIcon(e.target.checked)} /> Left icon
          </label>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={rightIcon} onChange={(e) => setRightIcon(e.target.checked)} /> Right icon
          </label>
        </div>
      </section>
    </div>
  )
}
