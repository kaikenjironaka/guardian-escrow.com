// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_500.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/login.tsx";
import * as $5 from "./routes/send.tsx";
import * as $$0 from "./islands/ColorMode.tsx";
import * as $$1 from "./islands/Language.tsx";
import * as $$2 from "./islands/MobileHeader.tsx";
import * as $$3 from "./islands/Project.tsx";

const manifest = {
  routes: {
    "./routes/_500.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
    "./routes/login.tsx": $4,
    "./routes/send.tsx": $5,
  },
  islands: {
    "./islands/ColorMode.tsx": $$0,
    "./islands/Language.tsx": $$1,
    "./islands/MobileHeader.tsx": $$2,
    "./islands/Project.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
