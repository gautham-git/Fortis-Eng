import React from 'react';
import './ClientPage.css'; // Import the CSS for styling

const clients = [
  { id: 1, name: 'Client 1', details: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Client 2', details: 'Consectetur adipiscing elit.' },
  { id: 3, name: 'Client 3', details: 'Sed do eiusmod tempor incididunt.' },
  { id: 4, name: 'Client 4', details: 'Ut labore et dolore magna aliqua.' },
  { id: 1, name: 'Client 1', details: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Client 2', details: 'Consectetur adipiscing elit.' },
  { id: 3, name: 'Client 3', details: 'Sed do eiusmod tempor incididunt.' },
  { id: 4, name: 'Client 4', details: 'Ut labore et dolore magna aliqua.' },
  { id: 1, name: 'Client 1', details: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Client 2', details: 'Consectetur adipiscing elit.' },
  { id: 3, name: 'Client 3', details: 'Sed do eiusmod tempor incididunt.' },
  { id: 4, name: 'Client 4', details: 'Ut labore et dolore magna aliqua.' },
  { id: 1, name: 'Client 1', details: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Client 2', details: 'Consectetur adipiscing elit.' },
  { id: 3, name: 'Client 3', details: 'Sed do eiusmod tempor incididunt.' },
  { id: 4, name: 'Client 4', details: 'Ut labore et dolore magna aliqua.' },
  { id: 1, name: 'Client 1', details: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Client 2', details: 'Consectetur adipiscing elit.' },
  { id: 3, name: 'Client 3', details: 'Sed do eiusmod tempor incididunt.' },
  { id: 4, name: 'Client 4', details: 'Ut labore et dolore magna aliqua.' },
  { id: 1, name: 'Client 1', details: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Client 2', details: 'Consectetur adipiscing elit.' },
];

const ClientPage = () => {
  return (
    <div className="client-page">
      {/* Title */}
      <h1 className="page-title">Our Valued Clients</h1>

      {/* Client Grid */}
      <div className="client-grid">
        {clients.map((client) => (
          <div className="client-card" key={client.id}>
            <h3 className="client-name">{client.name}</h3>
            <p className="client-details">{client.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
