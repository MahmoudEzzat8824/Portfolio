/// <reference types="vite/client" />
/// <reference types="vite/client" />

declare module "*.jpg" {
  const jpgsrc: string;
  export default jpgsrc;
}
declare module "*.jpeg" {
  const jpegsrc: string;
  export default jpegsrc;
}
declare module "*.png" {
  const pngsrc: string;
  export default pngsrc;
}
declare module "*.webp" {
  const webpsrc: string;
  export default webpsrc;
}
