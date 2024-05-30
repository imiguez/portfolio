import React, { Suspense, useEffect, useState } from 'react';
import { lazy } from 'react';
import 'pages/Main/main.css';
const DesktopApp = lazy(() => import('../DesktopApp/DesktopApp'));


function Main() {
  const [screen, setScreen] = useState<'desktop' | 'mobile' | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      const device = window.matchMedia('(min-width: 700px)').matches ? 'desktop' : 'mobile';
      setScreen(device);
    };
  
    window.addEventListener('resize', handleResize);
  
    handleResize(); // Call initially to check on mount
  
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  return (
    <Suspense fallback={null}>
      {screen === 'desktop' && <DesktopApp/>}

      {screen === 'mobile' && <p>mobile</p>}
    </Suspense>
  );
}

export default Main;
