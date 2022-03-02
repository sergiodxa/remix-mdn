import { LoaderFunction, Outlet } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  return { locale: params.lang };
};

export default function Screen() {
  return <Outlet />;
}
