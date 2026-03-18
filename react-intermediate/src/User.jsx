import React from "react";
import { useParams } from "react-router";

export default function User() {
  const { id } = useParams();
  return <div>I am a User and my ID is {id}</div>;
}
