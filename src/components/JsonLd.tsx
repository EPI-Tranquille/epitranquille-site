import { type Thing, type WithContext } from 'schema-dts'

/** Données structurées schema.org, lues par Google et les moteurs IA. */
export function JsonLd({
  data,
}: {
  data: WithContext<Thing> | Array<WithContext<Thing>>
}) {
  return (
    <script
      type="application/ld+json"
      // `<` échappé pour qu'un texte contenant `</script>` ne ferme pas la balise.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
