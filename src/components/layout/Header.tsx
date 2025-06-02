import React from 'react';
import { cn } from '@/lib/utils';
import { Atom } from 'lucide-react'; // Using Atom as a generic app icon example

interface HeaderProps {
  appName?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ appName = "Login Page Design", className }) => {
  return (
    <header
      className={cn(
        'py-4 px-4 sm:px-6 w-full bg-background border-b border-border',
        'flex items-center justify-center',
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <Atom className="h-7 w-7 text-primary" strokeWidth={1.5} />
        <h1 className="text-xl font-semibold text-foreground">
          {appName}
        </h1>
      </div>
    </header>
  );
};

export default Header;
