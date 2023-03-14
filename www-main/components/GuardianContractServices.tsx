import Balancer from "react-wrap-balancer";
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

type EduxProps = {
  title: string;
  date: string;
  text?: string;
};
function Edux(props: EduxProps) {
  return (
    <div>
      <div class="flex flex-col text-lg md:flex-row md:justify-between">
        <p class="text-gray-600 dark:text-gray-400 md:order-2 md:text-right">
          {props.date}
        </p>
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


export default function GuardianContractServices() {
  const t = T.value!;
  return (
    <section id="guardian-contract-services" class="relative scroll-mt-16">
      {/* TODO create CV and show button
      <Button class="absolute top-4 right-0">
        <a
          class="flex gap-1"
          href="/resume-guillaume-comte-en.pdf"
          target="_blank"
        >
          <FileDownload />Resume
        </a>
      </Button>
      */}
      <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
        <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.titles.aboutme}
        </h1>
        <div class="space-y-2">
          {t.me.intro.map((p) => (
            <p class="text-justify font-bold">{p}</p>
          ))}
        </div>
        <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.me.education.title}
        </h2>
        <ul class="space-y-2">
          {t.me.education.edux.map(({ title, date, text }) => (
            <li>
              <Edux {...{ title, date, text }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
