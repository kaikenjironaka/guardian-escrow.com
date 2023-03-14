import { MiddlewareHandlerContext } from "$fresh/server.ts";
import en from "../i18n/en.json" assert { type: "json" };
import { Translation } from "../i18n/types.ts";

export type State = {
  lang: "en";
  t: Translation;
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  let setLangCookie = true;
  if (
    req.headers.has("cookie") &&
    req.headers.get("cookie")!.includes("lang")
  ) {
    ctx.state.lang = "en";
  }
  ctx.state.t = en;
  const res = await ctx.next();
  setLangCookie && res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
  return res;
}
