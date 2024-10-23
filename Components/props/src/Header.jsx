import React from "react";

export default function Header(props) {
  return (
    <>
      <img src={props.profileImg} />
      <h1>{props.username}</h1>
    </>
  );
}