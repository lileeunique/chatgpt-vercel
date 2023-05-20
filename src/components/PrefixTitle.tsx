import type { JSXElement } from "solid-js"
import { Title } from "solid-start"

export default function (props: { children?: JSXElement }) {
  return <Title>ChatSearch{props.children ? " | " + props.children : ""}</Title>
}
