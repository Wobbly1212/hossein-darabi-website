"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-4xl text-white-1">
            Something went wrong
          </h1>
          <p className="mt-4 max-w-md text-sm text-light-gray/60">
            An unexpected error occurred. Please refresh the page or try again later.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-8 rounded-xl border border-accent/50 bg-accent/10 px-8 py-3 text-sm font-medium text-accent-light transition-all hover:bg-accent/20"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
