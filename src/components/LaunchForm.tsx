import { Button } from './Button'
import { TextField } from './Fields'

export function LaunchForm({ className }: { className?: string }) {
  return (
    <form className={className}>
      <label htmlFor="entry.1488880179" className="sr-only">
        Adresse e-mail
      </label>
      <TextField
        type="email"
        name="entry.1488880179"
        aria-label="Email address"
        placeholder="Entrez votre adresse e-mail"
        autoComplete="email"
        required
        className="w-full min-w-0 appearance-none"
      />
      <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <Button
          type="submit"
          color="primary"
          className="flex w-full items-center justify-center"
        >
          Être notifié du lancement
        </Button>
      </div>
    </form>
  )
}
