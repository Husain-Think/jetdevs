import { Container } from "./streamer.style";
import StreamerBar from "./components/StreamerBar";
import StreamController from "./stream.controller";


const Streamer = () => {
  const { streamers } = StreamController();

  return (
    <Container>
      {streamers?.map((streamer, index) => {
        return (
          <StreamerBar
            serialNo={index + 1}
            style={{
              top: `${45 * index}px`,
              zIndex: `${streamer.up ? 10 : 1}`,
            }}
            key={streamer.userID}
            userID={streamer.userID}
            displayName={streamer.displayName}
            picture={streamer.picture}
            score={streamer.score}
          />
        );
      })}
    </Container>
  );
}

export default Streamer;


