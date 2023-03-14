import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Guardian from "../components/Guardian.tsx";
import GuardianContractServices from "../components/GuardianContractServices.tsx";
import Collections from "../components/Collections.tsx";
import ConstructionRemodeling from "../components/ConstructionRemodeling.tsx";
import CustomEscrow from "../components/CustomEscrow.tsx";
import SoftwareSourceCode from "../components/SoftwareSourceCode.tsx";
// import Project from "../islands/Project.tsx";
import { Translation } from "../i18n/types.ts";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";
import FormsDocuments from "../components/FormsDocuments.tsx";

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

export default function Home(props: PageProps<Data>) {
  T.value = props.data.t;
  const LINKS = [
    { name: props.data.t.titles.aboutme, href: "#guardian-contract-services" },
    { name: props.data.t.titles.collections, href: "#collections" },
    { name: props.data.t.titles.contructionremodeling, href: "#constructionremodeling" }, 
    { name: props.data.t.titles.custom, href: "#customescrow" },
    { name: props.data.t.titles.softwaresourcecode, href: "#softwaresourcecode" },
    { name: props.data.t.titles.formsdocuments, href: "#formsdocuments" },
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
      <Guardian />
      <main class="mx-auto max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div class="space-y-10">
          <GuardianContractServices />
          <Collections />
          <ConstructionRemodeling />
          <CustomEscrow />
          <SoftwareSourceCode />
          <FormsDocuments />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
