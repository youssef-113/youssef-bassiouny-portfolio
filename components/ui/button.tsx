import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'default', children, ...props }, ref) => {
        const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

        const variantStyles = {
            default: 'bg-primary text-white hover:bg-primary/90',
            outline: 'border border-current bg-transparent hover:bg-current/10',
            ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variantStyles[variant]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
