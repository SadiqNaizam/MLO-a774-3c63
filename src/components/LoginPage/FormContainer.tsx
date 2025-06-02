import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Paperclip, ChevronDown, Atom } from 'lucide-react';

interface FormContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ title, children, className }) => {
  return (
    <Card className={cn(
      "w-full max-w-md bg-card text-card-foreground shadow-lg rounded-lg", // Sizing from layout reqs, and appearance
      className
    )}>
      <CardHeader className="p-4"> {/* Header area with specific padding */}
        {/* The styled bar replicating the visual from the image */}
        <div className="flex items-center justify-between bg-background p-3 rounded-md">
          <div className="flex items-center space-x-2">
            <Paperclip className="h-5 w-5 text-foreground" strokeWidth={2} />
            <span className="text-lg font-medium text-foreground">{title}</span>
            <ChevronDown className="h-5 w-5 text-foreground/70" strokeWidth={2} />
          </div>
          <Atom className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        </div>
      </CardHeader>
      <CardContent className={cn(
        "p-6", // Padding as per mainContent layout requirements
        "flex flex-col items-center gap-6" // Flex, alignment, and gap as per mainContent layout requirements
      )}>
        {children}
      </CardContent>
    </Card>
  );
};

export default FormContainer;
