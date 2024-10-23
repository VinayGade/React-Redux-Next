import React from "react";
import { Header } from "./Header";
import { Body } from "./Body";

export default function Card(props) {
  return (
    <>
      <Header
        profileImg={props.commentObject.profileImg}
        username={props.commentObject.username}
      />
      <Body comment={props.commentObject.comment} />
    </>
  );
}