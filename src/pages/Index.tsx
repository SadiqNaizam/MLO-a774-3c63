import React, { useState, FormEvent } from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FormContainer from '../components/LoginPage/FormContainer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const IndexPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate API call / validation
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email.trim() === '' || password.trim() === '') {
      setError('Email and password are required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
    } else if (password === 'password123' && email === 'user@example.com') {
      // Simulate successful login
      console.log('Login successful:', { email });
      // In a real app, you'd redirect or set auth state here
      alert('Login successful (simulated)! Welcome!');
      // Optionally reset form fields
      // setEmail('');
      // setPassword('');
    } else {
      setError('Invalid email or password. Please try again.');
      console.log('Login failed for:', { email });
    }

    setIsLoading(false);
  };

  return (
    <MainAppLayout>
      <FormContainer title="References">
        <form onSubmit={handleSubmit} className="w-full space-y-6" noValidate>
          <div className="space-y-4"> {/* Layout Sizing: inputs: space-y-4 */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                autoComplete="email"
                aria-invalid={!!(error && (email.trim() === '' || (error.includes("email") && !error.includes("password"))))}
                aria-describedby={error ? "form-error-message" : undefined}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                autoComplete="current-password"
                aria-invalid={!!(error && password.trim() === '')}
                aria-describedby={error ? "form-error-message" : undefined}
              />
            </div>
          </div>

          {error && (
            <p id="form-error-message" className="text-sm text-destructive text-center" role="alert">
              {error}
            </p>
          )}

          <div className="space-y-2"> {/* Layout Sizing: buttons: space-y-2 */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
            <Button variant="outline" type="button" className="w-full text-muted-foreground" disabled={isLoading}>
              Forgot Password?
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <a href="#" className="font-medium text-primary hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </FormContainer>
    </MainAppLayout>
  );
};

export default IndexPage;
