import { withPrefix } from "gatsby";
import { get } from "lodash";

// Les URLs générées par gatsby-plugin-sharp (`resize`) ne contiennent pas le
// `pathPrefix` (/gatsby-starter) : on l'ajoute ici. Renvoie `undefined` si le
// contenu n'a pas d'image, pour ne pas afficher d'<img> cassée.
export const coverImage = (node: object, path: string) => {
  const src: string | undefined = get(node, path);
  return src ? { src: withPrefix(src) } : undefined;
};
