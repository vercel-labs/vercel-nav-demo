# Vercel Navigation Demo

This is a light clone of the Vercel dashboard navigation. The first version was built with [v0](https://v0.dev/t/5tpUeamjMf6), and then hand-crafted by humans from there.

## How It Works

1. Navigating to `/` redirects to a default team `/leerob`
2. The navigation and page content are two separate [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
3. The navigation page fetches and streams the team data server-side

This enables reading the dynamic URL path on the server (e.g. `[team]` which gives me `leerob` for `/leerob`), and then fetching the user data based on that.
