# Marie & Arthur — site du mariage

Site statique Gatsby 5 (React 18, Semantic UI React 2), publié sur GitHub Pages
sous le préfixe `/gatsby-starter` (dossier `docs/`).

## Prérequis

- Node.js 18 ou plus récent (testé avec Node 22)

## Commandes

```bash
npm install            # installe les dépendances
npm start              # serveur de dev sur http://localhost:8000
npm run build          # build de production dans public/ (avec le préfixe)
npm run serve          # sert le build sur http://localhost:9000/gatsby-starter/
npm test               # vérifie l'intégrité des données (data/)
```

## Publication

Chaque push sur `master` (ou un lancement manuel depuis l’onglet Actions) déclenche `.github/workflows/deploy.yml`, qui installe
les dépendances, lance les tests, construit le site et le publie sur GitHub Pages
(<https://agautheron.github.io/gatsby-starter/>).

Prérequis (une seule fois) : dans **Settings → Pages**, choisir
**Source : GitHub Actions**.

Les images statiques (bandeaux des pages Cérémonie, Cocktail, Transport) sont
dans `static/icons/`.

## Files structure

     .
     ├── data                          // website data (included into graphQL)
     │   ├── author.json               // list of blog authors
     │   ├── avatars                   // authors avatars
     │   └── blog                      // all blog data (posts, images)
     ├── gatsby-config.js              // gatsby configuration
     ├── gatsby-node.js                // gatsby node hooks
     ├── generators                    // generators (`npm run generate`)
     │   ├── blog-post-generator.js    // `blog post` generator
     │   ├── component-generator.js    // `component` generator
     │   ├── page-generator.js         // `page` generator
     │   ├── plopfile.js               // generators entry
     │   ├── templates                 // all templates (handlebar notation)
     │   └── utils.js                  // utils scripts for generators
     ├── package.json
     ├── public                        // output folder (in .gitignore)
     ├── README.md                     // this file
     ├── src                           // sources
     │   ├── components                // all react components
     │   ├── css                       // styles
     │   ├── declarations.d.ts         // declarations for no typescript modules/files
     │   ├── graphql-types.d.ts        // graphql types (`npm run graphql-types`)
     │   ├── html.tsx                  // main html (required)
     │   ├── layouts                   // layouts
     │   │   └── default.tsx           // default layout (required)
     │   ├── pages                     // all pages
     │   └── templates                 // all templates (used for procedural page creation, see `gatsby-node.js`)
     ├── tools                         // miscs tools for dev
     │   └── update-post-date.js       // update post date hook
     ├── tsconfig.json                 // typescript configuration
     ├── tslint.json                   // tslint configuration
     └── package-lock.json             // npm lock file

## Plop generators - `npm run generate`

To avoid any boring copy/paste, this starter-kit have many generators to permit
simple bootstrap of current file pattern (eg. components/pages/blog posts). e.g. to add a new blog post first add the authors to data/authors.json and add authors' images to the data/avatars folder. Next execute 'npm run generate' and select 'Blog post'. Follow the prompts for a new post. Each blog post requires an image be added to the /data/blog/<your new post> folder prior to running 'gatsby develop'.

You can add/delete/modify any generators into `/generators` folder.

Be lazy and have fun!
