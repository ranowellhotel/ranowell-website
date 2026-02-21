import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-50">
                    <h1 className="text-4xl md:text-5xl font-marcellus text-[#5C2D84] mb-4">
                        Oops!
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                        Something went wrong.
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md">
                        We're sorry, but an unexpected error has occurred. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-[#5C2D84] text-white px-8 py-3 rounded-md tracking-wider text-sm hover:bg-[#4a1f6e] transition"
                    >
                        REFRESH PAGE
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
