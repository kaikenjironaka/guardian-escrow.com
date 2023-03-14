import Balancer from "react-wrap-balancer";
import FileDownload from "@tabler/icons/file-download.tsx";
import { ComponentChildren } from "preact";
import { T } from "../state.ts";
import Button from "./Button.tsx";
import {
  IconFresh,
  IconGolang,
  IconLinux,
  IconReact,
  IconSvelte,
  IconTypescript,
  IconVim,
  IconWindows,
} from "./Icons.tsx";



export default function CustomEscrow() {
    const t = T.value!;
return (
  <section id="customescrow" class="relative scroll-mt-16">
    <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
      <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
            {t.customescrow.title}
      </h1>
      <div class="space-y-2">
      </div>
      <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
            {t.customescrow.subtitle}
      </h2>
      <ul class="space-y-2 list-disc">
        {t.customescrow.customtypes.map((p) => (
        <li class="text-justify">{p}</li>))}
      </ul>
    </div>
  </section>
 );
}
  