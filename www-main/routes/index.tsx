import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import Collections from "../components/Collections.tsx";
import Project from "../islands/Project.tsx";
import { Translation } from "../i18n/types.ts";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";

type Data = {
  lang: State["lang"];
  t: Translation;
};

export const handler: Handlers<Data, State> = {
  GET(_req, ctx) {
    return ctx.render({
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

function collections() {
  return (
    <section
      id="collections"
      class="lg:grid-cols-desktop grid scroll-mt-16 grid-cols-1 gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
        {T.value!.titles.collections}
      </h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

      </div>  
    </section>
  );
}

function ContstructionRemodeling() {
  return (
    <section
      id="constructionremodeling"
      class="lg:grid-cols-desktop grid scroll-mt-16 grid-cols-1 gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
        {T.value!.titles.contructionremodeling}
      </h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Project
          title="mortgage calculator"
          href="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanamount=250000&interestrate=4&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0"
          text="Mortgage calculator"
          github=""
        />
      </div>
    </section>
  );
}

function Recommendations() {
  return <section id="recommendations"></section>;
}

export default function Home(props: PageProps<Data>) {
  T.value = props.data.t;
  const LINKS = [
    { name: props.data.t.titles.aboutme, href: "#about-me" },
    { name: props.data.t.titles.collections, href: "#collections" },
    { name: props.data.t.titles.contructionremodeling, href: "#constructionremodeling" }, 
    { name: props.data.t.titles.custom, href: "#custom" },
    { name: props.data.t.titles.softwaresourcecode, href: "#softwaresourcecode" },
    { name: props.data.t.titles.contact, href: "#contact" },
  ];
  return (
    <>
      <Head>
        <title>Guardian Contract Services - Escrow</title>
        <meta
          name="description"
          content="Guardian Contract Services - Escrow"
        />
      </Head>
      <Header active="/" left={LINKS} lang={props.data.lang} />
      <Hero />
      <main class="mx-auto max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div class="space-y-10">
          <Me />
          <Collections />
          <ContstructionRemodeling />
          <Recommendations />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
