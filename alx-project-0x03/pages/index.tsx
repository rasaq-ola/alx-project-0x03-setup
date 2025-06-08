import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import { PageRouteProps } from "@/interface"; //

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to Splash App</h1>
      <Button onClick={() => router.push("/about")}>Go to About Page</Button>
    </div>
  );
}

