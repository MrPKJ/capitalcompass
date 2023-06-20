import { Header } from "@/types/header";

export default function Header(props: Header) {
  return (
    <header className="w-full h-32 flex flex-row justify-center items-center">
      <h1 className="font-bold text-6xl font-unbounded text-primary">
        {props.logo.name}
      </h1>
    </header>
  );
}
