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
        height="378"
        width="620"
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
