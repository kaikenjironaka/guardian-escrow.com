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


export default function SoftwareSourceCode() {
    const t = T.value!;
    return (
      <section id="softwaresourcecode" class="relative scroll-mt-16">
         <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
          <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
            {t.titles.softwaresourcecode}
          </h1>
        </div>

        <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6 space-y-6">
            <div class="space-y-2"></div>
            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-center font-italic ">
                {t.softwarecode.subtitle}
            </h2>
        </div>

        <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6 space-y-6">
          <div class="space-y-2"></div>

          <ul class="space-y-2 list-disc">
            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
                {t.softwarecode.services.sub}
            </h2>
            <p>{t.softwarecode.services.info}</p>

            <br/>
            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
                {t.softwarecode.benefits.sub}
            </h2>
            {t.softwarecode.benefits.info.map((p) => (
              <li class="text-justify">{p}</li>
            ))}
            <br/>

            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
                {t.softwarecode.cost.title}
            </h2>
            <li class="text-justify font-italic">{t.softwarecode.cost.info}</li>
            <br />

          </ul>

        </div> 
      </section>
    );
  }