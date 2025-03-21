import { createHashRouter } from 'react-router-dom';
import App from './App';
import AnimationWrapper from './components/common/AnimationWrapper';

// Import page components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <AnimationWrapper>
        <App />
      </AnimationWrapper>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

export default router;