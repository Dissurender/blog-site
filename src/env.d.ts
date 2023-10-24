/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly REDIS_URI: string;
  readonly SITE_URI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
