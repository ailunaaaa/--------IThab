import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('main');

  const tabs = [
    { id: 'main', name: 'Главная' },
    { id: 'about', name: 'О нас' },
    { id: 'schedule', name: 'Расписание' },
    { id: 'classrooms', name: 'Аудитории' },
    { id: 'contacts', name: 'Контакты и адрес' },
    { id: 'broken', name: 'Бракованная техника' }
    
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <h1 className="logo">IT-HUB</h1>
          <nav className="nav">
            <ul className="nav-list">
              {tabs.map(tab => (
                <li key={tab.id}>
                  <button
                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {activeTab === 'main' && <MainPage />}
        {activeTab === 'schedule' && <SchedulePage />}
        {activeTab === 'classrooms' && <ClassroomsPage />}
        {activeTab === 'broken' && <BrokenTechPage />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'contacts' && <ContactsPage />}
      </main>
    </div>
  );
}

// Заглушки для компонентов страниц
function MainPage() { return <h2>Добро пожаловать в IT-HUB</h2>; }
function SchedulePage() { return <h2>Расписание занятий</h2>; }
function ClassroomsPage() { return <h2>Список аудиторий</h2>; }
function BrokenTechPage() { return <h2>Учет бракованной техники</h2>; }
function AboutPage() { return <h2>О нашем центре</h2>; }
function ContactsPage() { return <h2>Контакты и адрес</h2>; }

export default App;