import { useEffect, useRef, useState } from "react";
import { domToPng } from "modern-screenshot";
import empty from "../imports/image-3.png";
import full from "../imports/image-4.png";
import timer from "../imports/image-5.png";
import courtSettings from "../imports/image-6.png";

const W = 2880;
const H = 1800;

const shots = [
  {
    file: "01-Manage-Courts",
    src: full,
    headline: "Manage Every Court in One Place",
    support: "A clear view of your entire venue.",
    bg: "bg-[#F4F4F5]",
  },
  {
    file: "02-Court-Availability",
    src: empty,
    headline: "See Court Availability Instantly",
    support: "Know which courts are free or occupied.",
    bg: "bg-[#EEF2F6]",
  },
  {
    file: "03-Waiting-List",
    src: full,
    headline: "Organise Players and Waiting Lists",
    support: "Keep every session moving smoothly.",
    bg: "bg-[#F3F6F3]",
  },
  {
    file: "04-Player-Assignment",
    src: full,
    headline: "Assign Players to Courts Faster",
    support: "Move players with fewer steps.",
    bg: "bg-[#F7F5F2]",
  },
  {
    file: "05-Sports-Clubs",
    src: full,
    headline: "Built for Busy Sports Clubs",
    support: "Simple controls for staff and organisers.",
    bg: "bg-[#E8EEF5]",
  },
  {
    file: "06-Keep-Informed",
    src: courtSettings,
    headline: "Keep Everyone Informed",
    support: "Clear updates for players and staff.",
    bg: "bg-[#F5F0EB]",
  },
  {
    file: "07-Large-Displays",
    src: full,
    headline: "Designed for Large Displays",
    support: "Easy to read across the venue.",
    bg: "bg-[#1B2430]",
  },
  {
    file: "08-Easy-To-Use",
    src: empty,
    headline: "Simple, Clear and Easy to Use",
    support: "Everything staff need in one place.",
    bg: "bg-gradient-to-br from-[#F7F8FA] to-[#E8EEF2]",
  },
  {
    file: "09-Manage-Sessions",
    src: timer,
    headline: "Manage Sessions with Confidence",
    support: "Stay organised during busy hours.",
    bg: "bg-[#EDF2EF]",
  },
  {
    file: "10-Court-Manager-macOS",
    src: full,
    headline: "Court Manager for macOS",
    support: "A smarter way to run your clubs.",
    bg: "bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0]",
  },
] as const;

function Pages({ pageClass }: { pageClass: string }) {
  return (
    <>
      {/* 1 — screenshot centred, text above */}
      <section
        data-page={shots[0].file}
        className={`${pageClass} ${shots[0].bg} flex flex-col items-center px-[6%] pt-[5%] pb-[4%]`}
      >
        <h1 className="text-[clamp(1.5rem,3.2vw,3.4rem)] font-bold tracking-tight text-neutral-900 text-center leading-tight">
          {shots[0].headline}
        </h1>
        <p className="mt-2 text-[clamp(0.9rem,1.4vw,1.5rem)] text-neutral-600 text-center">
          {shots[0].support}
        </p>
        <img
          src={shots[0].src}
          alt=""
          className="mt-6 w-[88%] max-h-[70%] object-contain object-top shadow-lg"
        />
      </section>

      {/* 2 — screenshot left, text right */}
      <section
        data-page={shots[1].file}
        className={`${pageClass} ${shots[1].bg} grid grid-cols-2 gap-[4%] items-center px-[5%]`}
      >
        <img
          src={shots[1].src}
          alt=""
          className="w-full h-[78%] object-cover object-right shadow-md"
        />
        <div className="pr-[4%]">
          <h1 className="text-[clamp(1.5rem,3vw,3.2rem)] font-bold tracking-tight text-neutral-900 leading-tight">
            {shots[1].headline}
          </h1>
          <p className="mt-4 text-[clamp(0.95rem,1.5vw,1.45rem)] text-neutral-600 leading-snug">
            {shots[1].support}
          </p>
        </div>
      </section>

      {/* 3 — text left, screenshot right */}
      <section
        data-page={shots[2].file}
        className={`${pageClass} ${shots[2].bg} grid grid-cols-2 gap-[4%] items-center px-[5%]`}
      >
        <div className="pl-[4%]">
          <h1 className="text-[clamp(1.5rem,3vw,3.2rem)] font-bold tracking-tight text-neutral-900 leading-tight">
            {shots[2].headline}
          </h1>
          <p className="mt-4 text-[clamp(0.95rem,1.5vw,1.45rem)] text-neutral-600 leading-snug">
            {shots[2].support}
          </p>
        </div>
        <img
          src={shots[2].src}
          alt=""
          className="w-full h-[78%] object-cover object-left shadow-md"
        />
      </section>

      {/* 4 — large screenshot, text top-left */}
      <section
        data-page={shots[3].file}
        className={`${pageClass} ${shots[3].bg} relative overflow-hidden`}
      >
        <img
          src={shots[3].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F2]/95 via-[#F7F5F2]/70 to-transparent h-[42%]" />
        <div className="relative z-10 px-[5%] pt-[5%] max-w-[55%]">
          <h1 className="text-[clamp(1.5rem,3vw,3.1rem)] font-bold tracking-tight text-neutral-900 leading-tight">
            {shots[3].headline}
          </h1>
          <p className="mt-3 text-[clamp(0.95rem,1.4vw,1.4rem)] text-neutral-700">
            {shots[3].support}
          </p>
        </div>
      </section>

      {/* 5 — text top, screenshot centred lower */}
      <section
        data-page={shots[4].file}
        className={`${pageClass} ${shots[4].bg} flex flex-col items-center px-[5%] pt-[4%] pb-[3%]`}
      >
        <h1 className="text-[clamp(1.5rem,3.1vw,3.3rem)] font-bold tracking-tight text-neutral-900 text-center leading-tight">
          {shots[4].headline}
        </h1>
        <p className="mt-2 text-[clamp(0.9rem,1.4vw,1.45rem)] text-neutral-600 text-center">
          {shots[4].support}
        </p>
        <div className="flex-1 flex items-end justify-center w-full mt-4 pb-2">
          <img
            src={shots[4].src}
            alt=""
            className="w-[90%] max-h-full object-contain object-bottom shadow-lg"
          />
        </div>
      </section>

      {/* 6 — cropped screenshot right, text left */}
      <section
        data-page={shots[5].file}
        className={`${pageClass} ${shots[5].bg} grid grid-cols-[0.9fr_1.1fr] gap-[3%] items-center px-[5%]`}
      >
        <div className="pl-[3%]">
          <h1 className="text-[clamp(1.5rem,3vw,3.2rem)] font-bold tracking-tight text-neutral-900 leading-tight">
            {shots[5].headline}
          </h1>
          <p className="mt-4 text-[clamp(0.95rem,1.5vw,1.45rem)] text-neutral-600 leading-snug">
            {shots[5].support}
          </p>
        </div>
        <img
          src={shots[5].src}
          alt=""
          className="w-full h-[82%] object-cover object-[60%_center] shadow-md"
        />
      </section>

      {/* 7 — cropped screenshot left, text right (dark) */}
      <section
        data-page={shots[6].file}
        className={`${pageClass} ${shots[6].bg} grid grid-cols-[1.1fr_0.9fr] gap-[3%] items-center px-[5%]`}
      >
        <img
          src={shots[6].src}
          alt=""
          className="w-full h-[82%] object-cover object-[40%_center] shadow-md"
        />
        <div className="pr-[3%]">
          <h1 className="text-[clamp(1.5rem,3vw,3.2rem)] font-bold tracking-tight text-white leading-tight">
            {shots[6].headline}
          </h1>
          <p className="mt-4 text-[clamp(0.95rem,1.5vw,1.45rem)] text-neutral-300 leading-snug">
            {shots[6].support}
          </p>
        </div>
      </section>

      {/* 8 — centred screenshot with background shape */}
      <section
        data-page={shots[7].file}
        className={`${pageClass} ${shots[7].bg} relative flex flex-col items-center justify-center px-[6%]`}
      >
        <div className="absolute w-[70%] h-[58%] rounded-[2rem] bg-[#D9E4EC]/70 top-[28%]" />
        <h1 className="relative z-10 text-[clamp(1.5rem,3.1vw,3.3rem)] font-bold tracking-tight text-neutral-900 text-center leading-tight">
          {shots[7].headline}
        </h1>
        <p className="relative z-10 mt-2 text-[clamp(0.9rem,1.4vw,1.45rem)] text-neutral-600 text-center">
          {shots[7].support}
        </p>
        <img
          src={shots[7].src}
          alt=""
          className="relative z-10 mt-6 w-[82%] max-h-[62%] object-contain shadow-lg"
        />
      </section>

      {/* 9 — almost full screenshot, minimal text */}
      <section
        data-page={shots[8].file}
        className={`${pageClass} ${shots[8].bg} flex flex-col px-[2%] pt-[2%] pb-[2%]`}
      >
        <h1 className="text-[clamp(1.3rem,2.4vw,2.4rem)] font-bold tracking-tight text-neutral-900 text-center leading-tight shrink-0">
          {shots[8].headline}
        </h1>
        <p className="mt-1 mb-2 text-[clamp(0.8rem,1.1vw,1.15rem)] text-neutral-600 text-center shrink-0">
          {shots[8].support}
        </p>
        <img
          src={shots[8].src}
          alt=""
          className="w-full flex-1 min-h-0 object-cover object-center"
        />
      </section>

      {/* 10 — centred screenshot, strong final title */}
      <section
        data-page={shots[9].file}
        className={`${pageClass} ${shots[9].bg} flex flex-col items-center justify-center px-[6%] py-[4%]`}
      >
        <h1 className="text-[clamp(1.8rem,3.8vw,4rem)] font-bold tracking-tight text-neutral-900 text-center leading-tight">
          {shots[9].headline}
        </h1>
        <p className="mt-3 text-[clamp(1rem,1.6vw,1.6rem)] text-neutral-600 text-center">
          {shots[9].support}
        </p>
        <img
          src={shots[9].src}
          alt=""
          className="mt-8 w-[86%] max-h-[62%] object-contain shadow-xl"
        />
      </section>
    </>
  );
}

async function downloadAllPages(root: HTMLElement) {
  const pages = root.querySelectorAll<HTMLElement>("[data-page]");
  for (const page of pages) {
    const name = page.dataset.page!;
    const dataUrl = await domToPng(page, {
      width: W,
      height: H,
      scale: 1,
      backgroundColor: "#ffffff",
    });
    const a = document.createElement("a");
    a.download = `${name}.png`;
    a.href = dataUrl;
    a.click();
    await new Promise((r) => setTimeout(r, 400));
  }
}

function DownloadPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Preparing…");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const run = async () => {
      const root = rootRef.current;
      if (!root) return;

      const images = Array.from(root.querySelectorAll("img"));
      await Promise.all(
        images.map(
          (img) =>
            img.complete ||
            new Promise<void>((resolve) => {
              img.onload = () => resolve();
              img.onerror = () => resolve();
            }),
        ),
      );

      await new Promise((r) => setTimeout(r, 300));
      setStatus("Downloading 10 PNGs…");
      try {
        await downloadAllPages(root);
        setStatus("Done — check your downloads folder.");
      } catch (err) {
        console.error(err);
        setStatus("Download failed. Click to retry.");
      }
    };

    run();
  }, []);

  return (
    <div className="min-h-dvh bg-neutral-900 text-neutral-100">
      <div className="sticky top-0 z-10 px-6 py-4 bg-neutral-900/90 border-b border-white/10 text-sm">
        {status}
        {status.startsWith("Download failed") || status.startsWith("Done") ? (
          <button
            type="button"
            className="ml-4 underline"
            onClick={async () => {
              if (!rootRef.current) return;
              setStatus("Downloading 10 PNGs…");
              try {
                await downloadAllPages(rootRef.current);
                setStatus("Done — check your downloads folder.");
              } catch {
                setStatus("Download failed. Click to retry.");
              }
            }}
          >
            Download again
          </button>
        ) : null}
      </div>

      {/* Fixed App Store size pages for capture */}
      <div
        ref={rootRef}
        className="overflow-hidden"
        style={{ width: W }}
      >
        <Pages pageClass="w-[2880px] h-[1800px] shrink-0" />
      </div>
    </div>
  );
}

export default function App() {
  const isDownload =
    typeof window !== "undefined" && window.location.pathname === "/download";

  if (isDownload) {
    return <DownloadPage />;
  }

  return (
    <div className="h-dvh w-full overflow-y-auto snap-y snap-mandatory overscroll-y-contain">
      <Pages pageClass="h-dvh w-full snap-start snap-always" />
    </div>
  );
}
