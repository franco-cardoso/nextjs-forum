import { useRouter } from "next/router";

export default function Forum() {
  const router = useRouter();

  return <div>{router.query.forum}</div>;
}
