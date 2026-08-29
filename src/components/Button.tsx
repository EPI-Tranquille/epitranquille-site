import clsx from 'clsx'
import Link from 'next/link'

const baseStyles = {
  solid:
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors',
  outline:
    'inline-flex items-center justify-center rounded-lg border transition-colors',
}

// Les tailles vivent à part (plutôt que dans baseStyles) pour ne jamais
// avoir deux classes non-responsives de même propriété en concurrence
// dans le DOM : l'ordre de génération du CSS Tailwind ne suit pas
// l'ordre des classes dans le HTML, donc une classe passée en `className`
// pour "override" une classe de base peut perdre la cascade au hasard.
const sizeStyles = {
  base: {
    solid: 'py-2 px-3 text-sm',
    outline: 'py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm',
  },
  lg: {
    solid: 'py-3 px-5 text-base sm:py-2 sm:px-3 sm:text-sm',
    outline:
      'py-[calc(--spacing(3)-1px)] px-[calc(--spacing(5)-1px)] text-base sm:py-[calc(--spacing(2)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:text-sm',
  },
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    primary:
      'relative overflow-hidden bg-primary text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-green-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-black hover:bg-white/90 active:bg-white/90 active:text-gray-700/80',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) & { size?: keyof typeof sizeStyles } & (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, size = 'base', ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    sizeStyles[size][props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
