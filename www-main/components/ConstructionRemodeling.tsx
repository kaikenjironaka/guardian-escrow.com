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


export default function ConstructionRemodeling() {
    const t = T.value!;
    return (
      <section id="constructionremodeling" class="relative scroll-mt-16">
         <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
          <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
            {t.titles.contructionremodeling}
          </h1>
        </div>

        <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6 space-y-6">
          <div class="space-y-2"></div>

          <ul class="space-y-2 list-disc">
            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
                {t.constructionremodeling.howitworks.title}
            </h2>
            <p>{t.constructionremodeling.howitworks.information}</p>
            <br />

            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-center ">
                {t.constructionremodeling.termspolicies.terms}
            </h2>

            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
                {t.constructionremodeling.deposits.title}
            </h2>
            {t.constructionremodeling.deposits.deposit_info.map((p) => (
              <li class="text-justify">{p}</li>
            ))}
            <br />

            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
                {t.constructionremodeling.drawrequests.title}
            </h2>
            {t.constructionremodeling.drawrequests.drinfo.map((p) => (
              <li class="text-justify">{p}</li>
            ))}
            <br />
            
            <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 ">
                {t.constructionremodeling.disbursements.title}
            </h2>
            <li class="text-justify">{t.constructionremodeling.disbursements.dinfo}</li>
          </ul>

        </div> 
      </section>
    );
  }