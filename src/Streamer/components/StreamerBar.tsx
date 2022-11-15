import React from "react";
import { StreamerCoPropType } from "../../types/streamer.type";
import Image from "../../components/Image";
import {
  Details,
  DisplayName,
  Points,
  Root,
  Score,
  Serial,
  User,
} from "../streamer.style";

const StreamerBar: React.FC<StreamerCoPropType> = ({
  serialNo,
  userID,
  displayName,
  picture,
  score,
  style,
}) => {

  const getBackground = (serial: number) => {
    if(serial === 1)
    {
      return '#ff1302bf';
    }else if(serial === 2)
    {
      return '#ffa500'
    }else if(serial === 3)
    {
      return '#ffc400d4'
    }
    return '#8bb9f4'
  }

  return (
    <Root style={style}>
      <Details>
        <Serial background={getBackground(serialNo)} >{serialNo}</Serial>
        <User>
          <Image src={`images/${userID}.png`} alt={userID} />
        </User>
        <DisplayName>{displayName}</DisplayName>
      </Details>
      <Points>
        <Score>{score}pt</Score>
      </Points>
    </Root>
  );
};

export default StreamerBar;