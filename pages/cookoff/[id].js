<<<<<<< HEAD
import { useRouter } from "next/router";
import MenuBar from "../../comps/MenuBar";
import StreamHeader from "../../comps/StreamHeader";

const fetchCookOff = (id) => {
  return (
    <>
      <iframe
        src="https://player.twitch.tv/?channel=niyo_ssb&parent=localhost"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        height="70%"
        width="100%"
      ></iframe>
    </>
  );
};

export default function newevent() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="main">
      <div className="content">
        <StreamHeader></StreamHeader>
        <div style={{ height: "100%" }}>{fetchCookOff({ id }.id)}</div>
      </div>
      <MenuBar />
    </main>
  );
}
=======
import { useRouter } from "next/router";
import MenuBar from "../../comps/MenuBar";
import StreamHeader from "../../comps/StreamHeader";

const fetchCookOff = (id) => {
  return (
    <>
      <div className="stream-cont">
        <iframe
          src="https://player.twitch.tv/?channel=niyo_ssb&parent=localhost"
          frameborder="0"
          allowFullScreen="true"
          scrolling="no"
          height="auto"
          width="100%"
          className="stream"
        ></iframe>
        <iframe
          id="chat_embed"
          src="https://www.twitch.tv/embed/niyo_ssb/chat?parent=localhost"
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
>>>>>>> main
