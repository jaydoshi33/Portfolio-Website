'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Import components with dynamic imports for better performance
const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

const About = dynamic(() => import('@/components/About'), { 
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

const Work = dynamic(() => import('@/components/Work'), { 
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

const Contact = dynamic(() => import('@/components/Contact'), { 
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

// Error Boundary Component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re having trouble loading this section. Please try refreshing the page or come back later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const Home = () => {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Hero />
          <About />
          <Work />
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default Home;
