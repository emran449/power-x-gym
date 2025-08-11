import React from 'react';

const MembershipConfirmation = ({data}) => {
    const { personal, payment } = data;
  return (
    <div>
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Step 3 of 3: Membership Created</h2>
      <div style={{ margin: '2rem 0' }}>
        <h3>🎉 Congratulations!</h3>
        <p>Your membership has been successfully created.</p>
        <p>We've sent a confirmation email with your membership details.</p>
      </div>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9'
      }}>
        <h4>Membership Summary</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>Name:</strong> John Doe</li>
          <li><strong>Email:</strong> john.doe@example.com</li>
          <li><strong>Membership ID:</strong> #123456789</li>
          <li><strong>Start Date:</strong> August 8, 2025</li>
          <li><strong>Payment Method:</strong> Credit Card</li>
        </ul>
      </div>

      <button
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => window.location.href = '/dashboard'}
      >
        Go to Dashboard
      </button>
    </div>

    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Step 3 of 3: Membership Created</h2>
      <h3>🎉 Congratulations, {personal.firstName}!</h3>
      <p>Your membership has been successfully created.</p>

      <div style={{ marginTop: '2rem' }}>
        <h4>Summary</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>Name:</strong> {personal.firstName} {personal.lastName}</li>
          <li><strong>Email:</strong> {personal.email}</li>
          <li><strong>Payment Method:</strong> {payment.method}</li>
        </ul>
      </div>
    </div>
</div>
  );
};

export default MembershipConfirmation;