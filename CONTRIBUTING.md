# Contributing

There are three pieces to this project:

1. The backend image generator located in [/api/index.ts](https://github.com/watershed-climate/social-cards/blob/main/api/index.ts)
2. The html/css template used to generate the image is located in [/\_lib/template.ts](https://github.com/watershed-climate/social-cards/blob/main/api/_lib/template.ts)
3. The frontend inputs located in [/web/index.ts](https://github.com/watershed-climate/social-cards/blob/main/web/index.ts)

Vercel handles [routing](https://github.com/watershed-climate/social-cards/blob/main/vercel.json#L6) in an elegant way for us so deployment is easy.

To start hacking, do the following:

1. Clone this repo with `git clone https://github.com/watershed-climate/social-cards`
2. Change directory with `cd social-cards`
3. Run `yarn` to install dependencies
4. Run locally with `vercel dev` and visit [localhost:3000](http://localhost:3000) (if nothing happens, run `npm install -g vercel`)
5. If necessary, edit the `exePath` in [options.ts](https://github.com/watershed-climate/social-cards/blob/main/api/_lib/options.ts) to point to your local Chrome executable

Now you're ready to start local development!

You can set an environment variable to assist with debugging `export OG_HTML_DEBUG=1`. This will render the image as HTML so you can play around with your browser's dev tools before committing changes to the template.
