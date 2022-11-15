import { useState, useEffect } from "react";
import { StreamerDataType } from "../types/streamer.type";
import streamerData from "../mock/streamer.data";

const StreamController = () => {
    const [streamers, setStreamers] = useState<null | StreamerDataType[]>(streamerData);

  const randomNumber = ({ high, low = 0 }: { high: number; low?: number }) => {
    return Math.floor(Math.random() * (high - low) + low);
  };

  const updateScore = ({
    data,
    idToUpdate,
  }: {
    data: StreamerDataType[];
    idToUpdate: number;
  }) => {
    return data.map((_streamer, index) => {
      if (index === idToUpdate) {
        const updateScoreBy = randomNumber({ high: 1000, low: 10000 });
        return {
          ..._streamer,
          score: _streamer.score + updateScoreBy,
          up: true,
        };
      }
      return { ..._streamer, up: false };
    });
  };

  const updateScoreRandomly = () => {
    const randomID = Math.floor(Math.random() * 10);
    setStreamers((state) => {
      if (state === null) return null;
      return updateScore({ data: state, idToUpdate: randomID }).sort(
        (streamerA, streamerB) => streamerB.score - streamerA.score
      );
    });
  };

  useEffect(() => {
    const scoreInterval = setInterval(updateScoreRandomly, 1000);
    return () => clearInterval(scoreInterval);
  }, []);

  return {
    streamers
  }

}

export default StreamController;