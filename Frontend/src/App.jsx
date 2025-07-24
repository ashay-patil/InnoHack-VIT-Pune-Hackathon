import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js';

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState('');
  const responseRef = useRef();
  async function reviewCode() {
    try {
      setLoading(true);
      setReview('Loading...Please Wait..!!');
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching code review:', error);
      setReview('Failed to fetch review. Is your backend running?');
    }
  }

  const downloadPDF = () => {
    const element = responseRef.current;
    responseRef.current.classList.add('pdf-export');
    const options = {
      margin: 10,
      filename: 'ai-guidance.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };


    html2pdf().set(options).from(element).save();
    setTimeout(() => {
      responseRef.current.classList.remove('pdf-export');
    }, 1000)




  };

  return (
    <main>
      <div className="left">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={reviewCode} className="review-button">
          Review
        </button>
      </div>
      <div className="right">
        <div ref={responseRef}>
          <ReactMarkdown>{review}</ReactMarkdown>

        </div>
        {review && !loading && <button onClick={downloadPDF} className='download'>📄 Download Ai's Guidance </button>}
      </div>
    </main>
  );
}

export default App;