import Script from "next/script";

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <iframe
        plausible-embed=""
        src="https://plausible.prolab.sh/share/invoice-generator.prolab.sh?auth=UvvVC0m0OrpCHInaiFe_N&embed=true&theme=light&background=transparent"
        scrolling="no"
        frameBorder={0}
        loading="lazy"
        style={{ width: 1, minWidth: "100%", height: 1700 }}
      />
      <Script src="https://plausible.prolab.sh/videocompress.prolab.sh/js/embed.host.js" />
    </div>
  );
};

export default Page;
