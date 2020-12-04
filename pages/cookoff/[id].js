import { useRouter } from "next/router";
import MenuBar from "../../comps/MenuBar";
import StreamHeader from "../../comps/StreamHeader";

const fetchCookOff = (id) => {
  return (
    <>
      <div className="stream-cont">
        <iframe
          src="https://player.twitch.tv/?channel=niyo_ssb&parent=cookoff.live"
          frameborder="0"
          allowFullScreen="true"
          scrolling="no"
          height="auto"
          width="100%"
          className="stream"
        ></iframe>
        <iframe
          id="chat_embed"
          src="https://www.twitch.tv/embed/niyo_ssb/chat?parent=cookoff.live"
          height="30%"
          width="100%"
          className="chat"
        ></iframe>
      </div>
    </>
  );
};

export default function newevent() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="main">
      <div className="noPadding content" >
        <StreamHeader name="TakuCooks" title="Best Chef NA" viewers="382" link="/event"></StreamHeader>
        {fetchCookOff({ id }.id)}
      </div>
    </main>
  );
}
