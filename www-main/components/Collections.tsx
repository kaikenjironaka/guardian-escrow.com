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

type WhatWeDoProp = {
  title: string;
  text?: string;
};
function WhatWeDo(props: WhatWeDoProp) {
  return (
    <div>
      <div class="flex flex-col text-lg md:flex-row md:justify-between">
        <h3 class="font-medium md:order-1">
          <Balancer>{props.title}</Balancer>
        </h3>
      </div>
      {props.text && (
        <p class="whitespace-pre-wrap text-gray-600 dark:text-gray-400">
          {props.text}
        </p>
      )}
    </div>
  );
}

type WhatItCostProp = {
  title: string;
  text?: string;
};
function WhatItCost(props: WhatItCostProp) {
  return (
    <div>
      <div class="flex flex-col text-lg md:flex-row md:justify-between">
        <h3 class="font-medium md:order-1">
          <Balancer>{props.title}</Balancer>
        </h3>
      </div>
      {props.text && (
        <p class="whitespace-pre-wrap text-gray-600 dark:text-gray-400">
          {props.text}
        </p>
      )}
    </div>
  );
}

export default function Collections() {
  const t = T.value!;
  return (
    <section id="collections" class="relative scroll-mt-16">
      <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
        <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.titles.collections}
        </h1>
        <div class="space-y-2">
        </div>
        <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.collections.intro.title}
        </h2>
        <ul class="space-y-2 list-disc">
          <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400"> {t.collections.whatwedo.title}</h2>
          {t.collections.whatwedo.services.map((p) => (
            <li class="text-justify">{p}</li>
          ))}
          <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
              {t.collections.whatitcosts.title}
          </h2>
          {t.collections.whatitcosts.cost.map((p) => (
            <li class="text-justify">{p}</li>
          ))}
        </ul>


      </div>
    </section>
  );
}
