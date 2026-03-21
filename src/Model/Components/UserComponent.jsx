export default function UserComponent({ UserText }) {
  return (
    <div className='userComponent d-flex justify-content-end'>
      <div className='userMessage'>
        {UserText}
      </div>

      <style>{`
        .userComponent {
          display: flex;
          justify-content: flex-end;
          margin: 8px 0;
        }

        .userMessage {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 20px 20px 4px 20px;
          max-width: 60%;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
          line-height: 1.5;
          word-break: break-word;
        }
      `}</style>
    </div>
  )
}