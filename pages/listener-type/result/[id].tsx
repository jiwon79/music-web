import {useRouter} from "next/router";

export default function ResultPage() {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);

  return (
    <div>
      {router.query.id} result page
    </div>
  )
}