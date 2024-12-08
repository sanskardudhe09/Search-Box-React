import './App.css';
import Search from './Search';
function App() {
  const data = [
    { title: 'React Tutorial', category: 'Programming', content: 'Learn React in a few steps!' },
    { title: 'CSS Basics', category: 'Design', content: 'Understand the fundamentals of CSS.' },
    { title: 'JavaScript 101', category: 'Programming', content: 'A beginner’s guide to JavaScript.' },
    { title: 'Web Design Trends', category: 'Design', content: 'Explore modern web design trends.' },
    { title: 'Backend Development', category: 'Programming', content: 'The essentials of backend development.' },
    { title: 'Python for Data Science', category: 'Programming', content: 'Learn Python for data analysis and machine learning.' },
    { title: 'UI/UX Best Practices', category: 'Design', content: 'Explore the best practices in UI/UX design.' },
    { title: 'Introduction to Cloud Computing', category: 'Cloud Computing', content: 'Learn the fundamentals of cloud computing and its services.' },
    { title: 'Blockchain Basics', category: 'Blockchain', content: 'A beginner’s guide to understanding blockchain technology.' },
    { title: 'Digital Marketing Strategies', category: 'Marketing', content: 'Discover effective strategies for digital marketing.' },
    { title: 'SEO for Beginners', category: 'Marketing', content: 'Learn the basics of SEO to improve website rankings.' },
    { title: 'Artificial Intelligence in Healthcare', category: 'AI', content: 'Understand how AI is transforming healthcare and medical research.' },
    { title: 'Deep Learning Introduction', category: 'AI', content: 'Learn the basics of deep learning and neural networks.' },
    { title: 'Ethical Hacking 101', category: 'Cybersecurity', content: 'An introduction to ethical hacking and cybersecurity practices.' },
    { title: 'Network Security Fundamentals', category: 'Cybersecurity', content: 'Learn the basics of network security and defense mechanisms.' }
  ];

  return (
    <div className="app-container">
      <h1>Search Page</h1>
      <Search data={data} />
    </div>
  );
}

export default App;
