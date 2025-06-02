import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  // appName could be passed to Header if needed, or Header can have its own default/logic
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // The project name from Project Info is "Login Page Design"
  // This can be passed to Header component if dynamic app names are needed per layout instance
  // For this setup, Header component uses a default or a passed prop.

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-background text-foreground',
        className
      )}
    >
      <Header appName="Login Page Design" />
      <main
        className={cn(
          'flex-grow flex flex-col items-center justify-center',
          'p-4 sm:p-6' // Padding for the main content area, consistent with mainContent.layout.p-6
        )}
      >
        {/* Children will typically include the FormContainer which has max-w-md and internal padding/gaps */}
        {children}
      </main>
      {/* A Footer component could be added here if needed in the future */}
    </div>
  );
};

export default MainAppLayout;
