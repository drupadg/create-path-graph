import { useState } from 'react'
import './App.css'

const roles = [
  { id: 'frontend', title: 'Frontend Engineer', level: '02', x: 170, y: 170, tone: 'coral', tag: 'You are here', skills: ['React', 'TypeScript', 'CSS'] },
  { id: 'backend', title: 'Backend Engineer', level: '02', x: 170, y: 345, tone: 'blue', skills: ['Node.js', 'APIs', 'SQL'] },
  { id: 'fullstack', title: 'Full-stack Engineer', level: '03', x: 440, y: 260, tone: 'gold', skills: ['Systems', 'Architecture', 'Cloud'] },
  { id: 'staff', title: 'Staff Engineer', level: '05', x: 710, y: 150, tone: 'green', skills: ['Strategy', 'Mentoring', 'Influence'] },
  { id: 'platform', title: 'Platform Engineer', level: '04', x: 710, y: 360, tone: 'violet', skills: ['DevOps', 'Kubernetes', 'Reliability'] },
]

function App() {
  const [selectedRole, setSelectedRole] = useState('frontend')
  const [activeFilter, setActiveFilter] = useState('All paths')
  const selected = roles.find((role) => role.id === selectedRole)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">/</span><span>pathfinder</span></div>
        <div className="profile"><div className="avatar">JD</div><div><strong>Jordan Davis</strong><span>Software track</span></div><button aria-label="Open profile">...</button></div>
        <nav>
          <p className="nav-label">Workspace</p>
          <a className="nav-item active" href="#map"><span className="nav-icon">+</span>My path</a>
          <a className="nav-item" href="#skills"><span className="nav-icon">*</span>Skill library</a>
          <a className="nav-item" href="#notes"><span className="nav-icon">=</span>Learning log</a>
        </nav>
        <div className="sidebar-bottom"><div className="streak"><span>7</span><div><strong>day streak</strong><small>Keep your momentum</small></div><span className="spark">~</span></div><a className="nav-item" href="#settings"><span className="nav-icon">@</span>Settings</a></div>
      </aside>

      <main className="main-content" id="map">
        <header className="topbar"><div className="breadcrumb"><span>My path</span><b>/</b><strong>Software engineering</strong></div><div className="top-actions"><button className="icon-button" aria-label="Search">?</button><button className="help-button">Need a hand?</button><div className="mini-avatar">JD</div></div></header>
        <section className="intro"><div><p className="eyebrow">CAREER MAP <span>UPDATED TODAY</span></p><h1>Build your<br /><em>next chapter.</em></h1><p className="intro-copy">A living map of the skills, roles, and decisions that shape your engineering career.</p></div><div className="progress-card"><div className="progress-top"><span>PATH PROGRESS</span><strong>34%</strong></div><div className="progress-track"><i /></div><p>2 of 6 milestones complete</p></div></section>
        <section className="toolbar"><div className="filters">{['All paths', 'Engineering', 'Leadership'].map((filter) => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><button className="view-button">Map view <span>⌄</span></button></section>
        <section className="map-panel"><div className="map-heading"><div><h2>Your engineering path</h2><p>Explore roles and see what unlocks next.</p></div><div className="map-legend"><span><i className="dot current" />Current</span><span><i className="dot next" />Next up</span><span><i className="dot future" />Further out</span></div></div>
          <div className="graph-wrap"><svg className="connections" viewBox="0 0 900 500" aria-hidden="true"><path d="M230 190 C300 190 320 260 405 280" /><path d="M230 365 C310 365 320 300 405 280" /><path d="M495 270 C590 220 600 180 675 175" /><path d="M495 295 C580 330 600 365 675 385" /></svg>{roles.map((role) => <button key={role.id} className={`role-node ${role.tone} ${selectedRole === role.id ? 'selected' : ''}`} style={{ left: `${role.x / 9}%`, top: `${role.y / 5}%` }} onClick={() => setSelectedRole(role.id)}><span className="node-level">LEVEL {role.level}</span><strong>{role.title}</strong>{role.id === 'frontend' && <small>Current role</small>}{role.id === 'fullstack' && <small>Recommended next</small>}<span className="node-arrow">-&gt;</span></button>)}</div>
        </section>
        <section className="bottom-grid"><div className="next-step"><div className="section-kicker">RECOMMENDED NEXT</div><div className="step-content"><div className="step-number">03</div><div><h3>{selected.id === 'frontend' ? 'Deepen your systems thinking' : `Explore ${selected.title}`}</h3><p>Connect your current strengths to the next level on your map.</p><div className="skill-pills">{selected.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><button className="circle-arrow" aria-label="Open recommendation">-&gt;</button></div></div><div className="quote-card"><span className="quote-mark">“</span><p>Careers are not ladders.<br /><strong>They are landscapes.</strong></p><small>— Pathfinder principle 01</small></div></section>
      </main>
    </div>
  )
}

export default App
