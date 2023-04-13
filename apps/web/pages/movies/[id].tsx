import { useRouter } from "next/router";
import { Movie } from "../../src/components/Movie";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Movie id={id} />
    </>
  );
}
