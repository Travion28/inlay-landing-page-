/**
 * Button Component with Premium Dark Theme States
 * 
 * This component demonstrates the various button states designed for the Inlay landing page.
 * States include: default, hover, active, focus, disabled
 */

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 rounded-full inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: `
      bg-white text-[#0a0e1a] 
      hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    `,
    secondary: `
      bg-white/10 border border-white/20 text-white backdrop-blur-sm
      hover:bg-white/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
      active:bg-white/20
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10
    `,
    ghost: `
      bg-transparent text-white/80 
      hover:text-white hover:bg-white/5
      active:bg-white/10
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * BUTTON STATE EXAMPLES
 * 
 * Primary Button States:
 * - Default: White background, dark text
 * - Hover: Scales up 105%, adds glow shadow
 * - Active: Scales down to 95%
 * - Disabled: 50% opacity, no hover effects
 * 
 * Secondary Button States:
 * - Default: Translucent white background, white text, white border
 * - Hover: Slightly more opaque, subtle glow
 * - Active: More opaque background
 * - Disabled: 50% opacity, no hover effects
 * 
 * Ghost Button States:
 * - Default: Transparent, muted white text
 * - Hover: Full white text, subtle background
 * - Active: Visible background
 * - Disabled: 50% opacity
 */
