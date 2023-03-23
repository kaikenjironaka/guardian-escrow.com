import { asset } from "$fresh/runtime.ts";
import Balancer from "react-wrap-balancer";
import FileDownload from "@tabler/icons/file-download.tsx";
import { ComponentChildren } from "preact";
import { T } from "../state.ts";
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



export default function FormsDocuments() {
    const t = T.value!;
return (
  <section id="formsdocuments" class="relative scroll-mt-16">
    <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
      <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
            {t.titles.formsdocuments}
      </h1>
      <div class="space-y-2">
      </div>
      <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
            {t.formsdocument.title}
      </h2>
      <ul class="space-y-2 list-disc">
        <li class="text-justify"><a href={asset("/GuardianCollectionEscrowForm2023.pdf")} class="hover:(text-transparent dark:(from-teal-400 to-cyan-400)) bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text">{t.formsdocument.escrowcollectionpdf}</a></li>
        <li class="text-justify text-cyan-500"><a href={asset("/Automatic Deposit Form.pdf")} class="hover:(text-transparent dark:(from-teal-400 to-cyan-400)) bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text>{t.formsdocument.autodeposit}</a></li>
        <li class="text-justify text-cyan-500"><a href={asset("/Automatic Payment Form.pdf")} class="hover:(text-transparent dark:(from-teal-400 to-cyan-400)) bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text>{t.formsdocument.autopaymentform}</a></li>
        <li class="text-justify text-cyan-500"><a href={asset("/GUARDIANCustomEscrow.pdf")} class="hover:(text-transparent dark:(from-teal-400 to-cyan-400)) bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text>{t.formsdocument.customescrow}</a></li>
        <li class="text-justify text-cyan-500"><a href={asset("/CONSTESCROW1-2.pdf")} class="hover:(text-transparent dark:(from-teal-400 to-cyan-400)) bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text>{t.formsdocument.contructionescrow}</a></li>
        <li class="text-justify text-cyan-500"><a href={asset("/DRAWREQUEST.pdf")} class="hover:(text-transparent dark:(from-teal-400 to-cyan-400)) bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text>{t.formsdocument.drawreqeustspdf}</a></li>
        <li class="text-justify text-cyan-500"><a href={asset("/ESCROW DEPOSITORY INSTRUCTIONS.doc")} class="hover:(text-transparent dark:(from-teal-400 to-cyan-400)) bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text>{t.formsdocument.softwareescrow}</a></li>
      </ul>
    </div>
  </section>
 );
}
